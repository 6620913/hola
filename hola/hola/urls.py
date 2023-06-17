
from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import urls
from core import views as cv
from compiler import views as compv

  
urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('problems/', cv.ProblemsView.as_view(), name="problems"),
     path('compiler/', compv.CompilerView.as_view(), name="compiler"),
    # path('ide/', idev.IdeView.as_view(), name="ide"),
   
]
