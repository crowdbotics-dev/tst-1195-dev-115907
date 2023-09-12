from rest_framework import viewsets
from home.models import PetBreed,Pet,PetType,Pet,PetBreed,PetType,Pet,PetBreed,PetType
from .serializers import PetBreedSerializer,PetSerializer,PetTypeSerializer,PetSerializer,PetBreedSerializer,PetTypeSerializer,PetSerializer,PetBreedSerializer,PetTypeSerializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class PetBreedViewSet(viewsets.ModelViewSet):
    serializer_class = PetBreedSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = PetBreed.objects.all()

class PetViewSet(viewsets.ModelViewSet):
    serializer_class = PetSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Pet.objects.all()

class PetTypeViewSet(viewsets.ModelViewSet):
    serializer_class = PetTypeSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = PetType.objects.all()
