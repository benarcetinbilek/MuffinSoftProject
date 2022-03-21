
from rest_framework import serializers
from .models import Schedule, dataBoxes

class boxesSerializer(serializers.ModelSerializer):
    class Meta:
        model = dataBoxes
        fields = ["id", "title", "description"]


class SchedulerSerializer(serializers.ModelSerializer):
    hours = boxesSerializer(many=True)
    class Meta: 
        model = Schedule
        fields = ["id", "hour", "hours",]