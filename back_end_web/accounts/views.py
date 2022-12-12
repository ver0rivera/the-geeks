from django.contrib import messages
from django.contrib.auth import login
from django.shortcuts import redirect, render

from .forms import CustomUserCreationForm


def register_request(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)

        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Registration successful.")
            return redirect("home")

        messages.error(request,
                       "Unsuccessful registration. Invalid information.")
    form = CustomUserCreationForm()
    return render(request=request,
                  template_name="registration/register.html",
                  context={"register_form": form})
