from django.shortcuts import render

from .career_structure_views import *
from .comment import *
from .contact import *
from .material_views import *


def index_view(request):
    return render(request, 'library/index.html')