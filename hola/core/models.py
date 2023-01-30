from django.db import models
  
# Create your models here.
  
  
class Problems(models.Model):
    book = models.CharField(max_length=300)
    chapter= models.CharField(max_length=500)
    problem = models.TextField()