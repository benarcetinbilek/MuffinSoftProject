from pyexpat import model
from django.db import models

"""
class Plans(models.Model):    
    day = models.CharField(max_length=10)
    time = models.CharField(max_length=20)
    title = models.CharField(max_length=30)
    description = models.TextField(max_length=300, blank=True)
    background_color = models.CharField(max_length=5)
"""

class Schedule(models.Model):
    
    #start_day = models.DateField(auto_now=True)
    #hour = models.TimeField(auto_now=True)
    hour = models.CharField(max_length=40, default="08:00 - 09:00")
    

class dataBoxes(models.Model):
    title = models.CharField(max_length=30, null=True, blank=True, default="")
    description = models.TextField(max_length=300, null=True, blank=True, default="")
    hour = models.ForeignKey(Schedule, related_name="hours", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return '%d: %s' % (self.order, self.title)

    

    


#user
#   modal
#       hours
#           box