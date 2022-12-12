from rest_framework import serializers

from library.models import Semester


class SemesterSerializer(serializers.Serializer):
    semester_number = serializers.IntegerField()
    career_id = serializers.IntegerField()
