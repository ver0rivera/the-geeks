from django.db import models


class visit_statistics(models.Model):
    number_of_visits = models.IntegerField(default=0)
    date = models.DateField(auto_now_add=True)
    page = models.CharField(max_length=255)

    def __str__(self):
        return "Page: " + self.page + " - Date: " + str(self.date)