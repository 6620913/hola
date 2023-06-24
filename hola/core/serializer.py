from rest_framework import serializers
from . models import Problems, Projects,Skills
  
class ProblemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problems
        fields = ['id','book', 'chapter','problem','code']

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['id','img', 'title','disc','codeUrl','demoUrl']
class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ['id','img']