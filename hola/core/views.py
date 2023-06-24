# from django.shortcuts import render
# from rest_framework.views import APIView
# from . models import *
# from rest_framework.response import Response
# from . serializer import *
# Create your views here.
  
from .models import *
from . serializer import *
from rest_framework import generics


class ProblemList(generics.ListCreateAPIView):
    queryset = Problems.objects.all()
    serializer_class = ProblemsSerializer


class ProblemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Problems.objects.all()
    serializer_class = ProblemsSerializer

class ProjectList(generics.ListCreateAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

class SkillList(generics.ListCreateAPIView):
    queryset = Skills.objects.all()
    serializer_class = ProjectsSerializer


class SkillDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Skills.objects.all()
    serializer_class = ProjectsSerializer


# class ProblemsView(APIView):
    
#     serializer_class = ProblemsSerializer
#     def get_object(self, id):
#         try:
#             return Problems.objects.get(id=id)
#         except Problems.DoesNotExist:
#             pass

#     def get(self, request, id, format=None):
#         snippet = self.get_object(id)
#         serializer = ProblemsSerializer(snippet)
#         return Response(serializer.data)

#     def put(self, request, id, format=None):
#         snippet = self.get_object(id)
#         serializer = ProblemsSerializer(snippet, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
        

#     def delete(self, request, id, format=None):
#         snippet = self.get_object(id)
#         snippet.delete()
        
#     def get(self, request):
#         detail = [ {"id":detail.id,"Book": detail.book,"Chapter": detail.chapter,"Problem":detail.problem} 
#         for detail in Problems.objects.all()]
#         return Response(detail)
  


#     def post(self, request):
  
#         serializer = ProblemsSerializer(data=request.data)
       
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             print(serializer.data['book'])
#             return  Response(serializer.data)