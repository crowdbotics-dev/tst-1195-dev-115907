from django.contrib import admin
from .models import Pet,PetBreed,PetType
admin.site.register(PetBreed)
admin.site.register(Pet)
admin.site.register(PetType)

# Register your models here.
