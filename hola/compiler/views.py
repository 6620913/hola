from io import StringIO
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *


import sys


  
class CompilerView(APIView):
    
    serializer_class = CompilerSerializer
  
    def get(self, request):
        detail = [ {"userLang": detail.userLang,"userInput": detail.userInput,"userCode":detail.userCode} 
        for detail in Compiler.objects.all()]
        return Response(detail)
  
    def post(self, request):
  
        serializer = CompilerSerializer(data=request.data)
        output_value="No  output "
        if serializer.is_valid(raise_exception=True):
            # Create a stream to capture the output
           
            # Execute the code
            try:
                # capture standard output
                output = sys.stdout
                sys.stdout = captured_output = StringIO()

                #set input to be read from userInput
                sysin = sys.stdin
                sys.stdin=StringIO(serializer.data["userInput"])

                # execute code
                exec(serializer.data["userCode"])

               
                
                output_value = captured_output.getvalue()

                 # reset standard input and output
                sys.stdin=sysin
                sys.stdout=output
                print("input and output replaced")

            except Exception as error:
                output_value = str(error)
                
            # Get the output from the captured stream
            
            # Restore the original standard output
            
            # serializer.save()
            # serializer.data["output":output_value]
            print("code executed in ",serializer.data['userLang'])
            return  Response(output_value)