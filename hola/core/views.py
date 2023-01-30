from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
# Create your views here.
  
class ProblemsView(APIView):
    
    serializer_class = ProblemsSerializer
  
    def get(self, request):
        detail = [ {"Book": detail.book,"Chapter": detail.chapter,"Problem":detail.problem} 
        for detail in Problems.objects.all()]
        return Response(detail)
  
    def post(self, request):
  
        serializer = ProblemsSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)