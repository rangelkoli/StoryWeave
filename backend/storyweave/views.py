# myapp/views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from supabase import create_client, Client
import json
from django.views.decorators.csrf import csrf_exempt


def storyweave(request):
    return JsonResponse({'message': 'Welcome to StoryWeave!'})


@csrf_exempt
def register(request):
    if request.method == 'POST':
        print(request.body)
        data = json.loads(request.body)
        email = data['email']
        password = data['password']
        username = data['username']
        print(email, password)
        User = get_user_model()
        User.objects.create_user(email=email, password=password, username=username)
        return JsonResponse({'message': 'User created successfully!'})
    return JsonResponse({'message': 'User not created!'})

@csrf_exempt
def login(request):
    if request.method == 'POST':
        print(request.body)
        data = json.loads(request.body)
        email = data['email']
        password = data['password']
        print(email, password)
        User = get_user_model()
        user = User.objects.get(email=email)
        print(user)
        if user.check_password(password):
            return JsonResponse({'message': 'Login successful!', "data": {"email": email, "username": user.username}}) 
        else:
            return JsonResponse({'message': 'Login failed!'})
    return JsonResponse({'message': 'Login failed!'})