from rest_framework import routers

from .views import SemesterViewSet

router = routers.DefaultRouter()
router.register(r'semesters', SemesterViewSet, basename='semester')