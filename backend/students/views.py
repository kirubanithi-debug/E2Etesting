from django.shortcuts import render
from rest_framework import generics
from .models import Student
from .serializer import StudentSerializer

class StudentCreateView(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class= StudentSerializer

# Create your views here.
