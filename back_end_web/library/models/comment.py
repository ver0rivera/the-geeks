from django.db import models


class Comment(models.Model):
    email = models.EmailField()
    comment = models.TextField()

    def __str__(self):
        if len(self.comment.rsplit(r'\W+')) > 10:
            return self.comment[:10] + "..."
        return self.comment