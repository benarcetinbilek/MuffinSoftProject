# Generated by Django 3.1.5 on 2022-03-21 19:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20220321_1903'),
    ]

    operations = [
        migrations.AddField(
            model_name='schedule',
            name='box1',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='box_qst1', to='app.databoxes'),
        ),
        migrations.AddField(
            model_name='schedule',
            name='box2',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='box_qst2', to='app.databoxes'),
        ),
        migrations.AddField(
            model_name='schedule',
            name='box3',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='box_qst3', to='app.databoxes'),
        ),
        migrations.AddField(
            model_name='schedule',
            name='box4',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='box_qst4', to='app.databoxes'),
        ),
        migrations.AddField(
            model_name='schedule',
            name='box5',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='box_qst5', to='app.databoxes'),
        ),
        migrations.AddField(
            model_name='schedule',
            name='box6',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='box_qst6', to='app.databoxes'),
        ),
    ]
