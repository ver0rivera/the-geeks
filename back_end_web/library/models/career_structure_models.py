from django.db import models
from django.urls import reverse


class Career(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name


class Semester(models.Model):
    career = models.ForeignKey(Career, on_delete=models.PROTECT)
    semester_number = models.DecimalField(primary_key=True,
                                          max_digits=14,
                                          decimal_places=0)

    def __str__(self):
        return 'semester ' + str(self.semester_number)


class Course(models.Model):
    name = models.CharField(max_length=120)
    semester = models.ForeignKey(Semester, on_delete=models.PROTECT)
    description = models.TextField(default="Enjoy the course")
    slug = models.SlugField(null=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("course_detail",
                       kwargs={
                           "semester_num": self.semester.pk,
                           "slug": self.slug
                       })


class Unit(models.Model):
    name = models.CharField(max_length=120)
    course = models.ForeignKey(Course,
                                         on_delete=models.CASCADE,
                                         )
    description = models.TextField(default="Enjoy the unit")
    unit_num = models.DecimalField(max_digits=14, decimal_places=0)

    def __str__(self):
        return "unit " + str(self.unit_num) + " - " + self.course.name




