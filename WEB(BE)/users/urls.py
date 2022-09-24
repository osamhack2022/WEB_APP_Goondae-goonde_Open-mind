from django.urls import path
from .views import LoginView, RegisterView, Profileview

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('profile/<int:pk>/', Profileview.as_view())
]