from django import template

register = template.Library()

@register.filter()
def get_type(value):
    raw_type = str(type(value))
    type_name = raw_type.split(".")[-1]
    type_name = type_name[:-2] # remove the trailing "'>"
    return type_name