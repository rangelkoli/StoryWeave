from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from .managers import CustomUserManager
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Story(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
# Compare this snippet from backend/storyweave/serializers.py:
    
class User(models.Model):
    email = models.EmailField(_("email address"), unique=True)
    username = models.CharField(_("username"), max_length=150, blank=True)
    is_staff = models.BooleanField(_("staff status"), default=False)
    is_active = models.BooleanField(_("active"), default=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_staff

    def has_module_perms(self, app_label):
        return self.is_staff
    
    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")