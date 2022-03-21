
from rest_framework import viewsets
from .serializer import SchedulerSerializer, boxesSerializer
from .models import Schedule, dataBoxes


class boxViewSet(viewsets.ModelViewSet):
    serializer_class = boxesSerializer
    queryset = dataBoxes.objects.all()

class SchedulerViewSet(viewsets.ModelViewSet):
    serializer_class = SchedulerSerializer
    queryset = Schedule.objects.all()