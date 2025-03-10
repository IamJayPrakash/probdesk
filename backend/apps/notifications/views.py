from rest_framework import generics
from .models import Notification
from .serializers import NotificationSerializer

class NotificationView(generics.ListCreateAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
