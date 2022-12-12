from django.views.generic import DetailView, ListView

from library.models.career_structure_models import Course, Semester, Unit
from library.utils import session_visit_register


class SemesterListView(ListView):
    model = Semester
    template_name = "semester_list.html"

    def setup(self, request, *args, **kwargs):
        print(request.COOKIES)
        return super().setup(request, *args, **kwargs)


    def get_queryset(self):
        return Semester.objects.all()


@session_visit_register
class CourseListView(ListView):
    model = Course
    template_name = "course_list.html"

    def get_queryset(self):
        return Course.objects.filter(semester=self.kwargs['semester_num'])
    
    def post(self, request, *args, **kwargs):
        # in each post request, the queryset is updated
        # when using the django parameter in the query djago will escape the string
        
        searched_course = '%' + request.POST['search-course'] + '%'
        self.get_queryset = lambda: Course.objects.raw(
            "SELECT * FROM library_course WHERE name LIKE %s", [searched_course]
            )
        return super().get(request, *args, **kwargs)


class CourseDetailView(DetailView):
    model = Course
    template_name = "library/course_detail.html"

    def get_object(self):
        course = Course.objects.get(slug=self.kwargs['slug'])
        return course

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['units'] = Unit.objects.filter(course=self.get_object().id)
        context['links'] = [("Materiales", "materials"),
                            ("Ejercicios", "exercises"),
                            ("Recursos", "resources")]
        return context

