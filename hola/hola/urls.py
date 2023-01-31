
from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import urls
from core.views import *
from ideapi.views import *
  
urlpatterns = [
    path('admin/', admin.site.urls),
    path('problems/', ProblemsView.as_view(), name="problems"),
    path('ide/',IdeView.as_view(),name="ide")
]
