# Generated by Django 3.1.5 on 2022-03-21 19:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20220321_1859'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='schedule',
            name='box',
        ),
        migrations.AddField(
            model_name='schedule',
            name='box',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='box_qst', to='app.databoxes'),
        ),
    ]
