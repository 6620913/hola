
from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import urls
from core import views as cv

  
urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('problems/', cv.ProblemsView.as_view(), name="problems"),
    # path('ide/', idev.IdeView.as_view(), name="ide"),
   
]
