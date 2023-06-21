from typing import Any
from django.db import models
  
# Create your models here.
  
  
class Compiler(models.Model):
    id = models.IntegerField(primary_key=True)
    userLang= models.TextField(max_length=200,default="")
    userInput = models.TextField( default="",)
    userInputType=models.TextField(default="")
    userCode = models.TextField(default="")
    def __str__(self) -> str:
        return super().__str__()