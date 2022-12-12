from django.db import models

from .career_structure_models import Unit


class Material(models.Model):
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)
    date_publisehd = models.DateTimeField('date published', auto_now_add=True, blank=True)
    title = models.CharField(max_length=120)
    description = models.TextField()

    def __str__(self):
        return self.title


class Resource(Material):
    types = [
        ('Generic', 'Generic'),
        ('Exercise', 'Exercise'),
    ]

    upload = models.FileField(default=None)
    type = models.CharField(max_length=10, choices=types, default='Generic')

    def __str__(self):
        return super().title
