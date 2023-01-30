
from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import urls
from core.views import *
  
urlpatterns = [
    path('admin/', admin.site.urls),
    path('problems/', ProblemsView.as_view(), name="problems"),
]
