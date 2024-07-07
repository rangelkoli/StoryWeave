from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def storyweave(request):
    # Fix: Access the "request" parameter to resolve the Pylance problem
    return JsonResponse({'message': 'Hello, World!'})

