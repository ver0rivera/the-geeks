from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from RestLibrary.urls import router as api_router

urlpatterns = [
    path("admin/", admin.site.urls),
    path("accounts/", include("django.contrib.auth.urls")),
    path("accounts/", include("accounts.urls")),
    path("", include("library.urls")),
    path("api/", include(api_router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
