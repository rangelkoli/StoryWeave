from rest_framework import serializers
from .models import Story, User

class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
# Compare this snippet from backend/storyweave/views.py:
# # myapp/views.py