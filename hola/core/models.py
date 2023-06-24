from django.db import models
  
# Create your models here.
  
  
class Problems(models.Model):
    id = models.IntegerField( primary_key=True)
    book = models.TextField(max_length=300,default="")
    chapter= models.TextField(max_length=500,default="")
    problem = models.TextField()
    code = models.TextField(default="#Enter your code here")
class Projects(models.Model):
    id = models.IntegerField( primary_key=True)
    img = models.ImageField(upload_to='projectPics',default="")
    title= models.TextField(default="")
    disc = models.TextField(default="")
    codeUrl = models.TextField(default="")
    demoUrl = models.TextField(default="")

class Skills(models.Model):
    id = models.IntegerField( primary_key=True)
    img = models.ImageField(upload_to='skills',default="")
   