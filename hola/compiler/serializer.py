from rest_framework import serializers
from . models import Compiler
  
class CompilerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compiler
        fields = ['userLang', 'userInput','userCode']