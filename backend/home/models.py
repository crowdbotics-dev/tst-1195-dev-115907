from django.conf import settings
from django.db import models
class PetBreed(models.Model):
    'Generated Model'
    name = models.CharField(max_length=50,)
    rel_pettype_1_n = models.ForeignKey("home.PetType",on_delete=models.CASCADE,related_name="petbreed_rel_pettype_1_n",)
class Pet(models.Model):
    'Generated Model'
    name = models.CharField(max_length=50,)
    age = models.PositiveIntegerField()
    owner = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="pet_owner",)
    rel_petbreed_1_n_1 = models.ForeignKey("home.PetBreed",on_delete=models.CASCADE,related_name="pet_rel_petbreed_1_n_1",)
class PetType(models.Model):
    'Generated Model'
    name = models.CharField(max_length=50,)
