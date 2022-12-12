from rest_framework import viewsets

from .serializers import SemesterSerializer

# Create your views here.

class SemesterViewSet(viewsets.ModelViewSet):
    serializer_class = SemesterSerializer

    def dictfetchall(self, cursor):
        "Return all rows from a cursor as a dict"
        columns = []
        for col in cursor.description:
            columns.append(col[0])

        return [
            dict(zip(columns, row))
            for row in cursor.fetchall()
        ]

    def get_queryset(self):
        from django.db import connection

        with connection.cursor() as cursor:
            data = cursor.callproc('getSemesters')
            data = self.dictfetchall(cursor)
            return data
