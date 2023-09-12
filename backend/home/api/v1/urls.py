from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PetBreedViewSet,PetViewSet,PetTypeViewSet,PetViewSet,PetBreedViewSet,PetTypeViewSet,PetViewSet,PetBreedViewSet,PetTypeViewSet,PetViewSet,PetBreedViewSet,PetTypeViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('petbreed', PetBreedViewSet )
router.register('pet', PetViewSet )
router.register('pettype', PetTypeViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
