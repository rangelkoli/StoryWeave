# myapp/models.py

from django.db import models
from django.contrib.auth.models import User

class Story(models.Model):
    story_id = models.BigAutoField(primary_key=True)
    title = models.TextField()
    summary = models.TextField()
    creation_date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

class Segment(models.Model):
    segment_id = models.BigAutoField(primary_key=True)
    content = models.TextField()
    submission_time = models.DateTimeField(auto_now_add=True)
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

class Vote(models.Model):
    vote_id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    segment = models.ForeignKey(Segment, on_delete=models.CASCADE)
    vote_time = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    comment_id = models.BigAutoField(primary_key=True)
    content = models.TextField()
    submission_time = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    segment = models.ForeignKey(Segment, on_delete=models.CASCADE)
    parent_comment = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)

class Profile(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.TextField()
    bio = models.TextField()
    profile_pic_url = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
