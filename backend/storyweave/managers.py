from django.contrib.auth.base_user import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email

from django.db import models
import os
from supabase import create_client, Client
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def __init__(self):
        url: str = "https://aoppemcfoxurgconlzxu.supabase.co"
        key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvcHBlbWNmb3h1cmdjb25senh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyODQ3NTYsImV4cCI6MjAzNTg2MDc1Nn0.VCY3ItzxtgGq6IJ5WUlYGVqmb5u4N5paASXwVcRP93o"
        self.supabase: Client = create_client(url, key)


    def email_validator(self, email):
        try:
            validate_email(email)
        except ValidationError as e:
            raise ValidationError(_("Invalid email format")) from e
        

    def create_user(self, email, password, **extra_fields):
        """
        Create and return a regular user with an email and password.
        """

        if not email:
            raise ValueError(_("The Email field must be set"))
        if not password:
            raise ValueError(_("The Password field must be set"))

        email = self.normalize_email(email)
        self.email_validator(email)
        user = self.supabase.auth.sign_up(email, password)
        

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and return a superuser with an email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))

        return self.create_user(email, password, **extra_fields)
    
