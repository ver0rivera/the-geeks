from django.views.generic import TemplateView

from library.utils import session_visit_register


@session_visit_register
class ContactTemplateView(TemplateView):
    template_name = 'library/contact.html'
