from django.views.generic.edit import FormView

from library.forms import CommentForm
from library.utils import session_visit_register


@session_visit_register
class CommentFormView(FormView):
    template_name = 'library/comment_form.html'
    form_class = CommentForm
    success_url = '/comments'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)