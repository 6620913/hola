from rest_framework import serializers
from . models import Compiler
  
class CompilerSerializer(serializers.ModelSerializer):
    # userInput=serializers.CharField(required=False)
    class Meta:
        
        model = Compiler
        fields = ['id','userLang', 'userInput','userInputType','userCode']
        