
from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import urls
from core import views as cv
from compiler import views as compv

# import for medias
from django.conf import settings
from django.conf.urls.static import static
  
urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('problems/', cv.ProblemList.as_view(), name="problems"),
    path('problems/<int:pk>/', cv.ProblemDetail.as_view()),
    path('projects/', cv.ProjectList.as_view(), name="projects"),
    path('projects/<int:pk>/', cv.ProjectDetail.as_view()),
    path('skills/', cv.SkillList.as_view(), name="skills"),
    path('skills/<int:pk>/', cv.SkillDetail.as_view()),

    path('compiler/', compv.CompilerView.as_view(), name="compiler"),
    # path('ide/', idev.IdeView.as_view(), name="ide"),
   
]
urlpatterns+=urlpatterns+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)