
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .models import Schedule, dataBoxes
from .views import SchedulerViewSet, boxViewSet

router = routers.DefaultRouter()
router.register("schedule", SchedulerViewSet, basename="boxApi")
router.register("box", boxViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
 