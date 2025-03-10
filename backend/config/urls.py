from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('apps.authentication.urls')),
    path('tickets/', include('apps.tickets.urls')),
    path('users/', include('apps.users.urls')),
    path('notifications/', include('apps.notifications.urls')),
]
