from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
# Create your views here.
  
class IdeView(APIView):
    
    serializer_class = IdeSerializer
  
    def get(self, request):
        detail = [ {"Submission":Submission} 
        for detail in Ide.objects.all()]
        return Response(detail)
  
    def post(self, request):
  
        serializer = IdeSerializer(data=request.data)
       
        if serializer.is_valid(raise_exception=True):
            # serializer.save()
            print(serializer.data)
            return  Response(serializer.data)