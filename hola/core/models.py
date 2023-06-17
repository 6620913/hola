from django.db import models
  
# Create your models here.
  
  
class Problems(models.Model):
    book = models.TextField(max_length=300)
    chapter= models.TextField(max_length=500)
    problem = models.TextField()