# Generated by Django 5.1.2 on 2024-11-01 15:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Tareas', '0002_rename_tareas_tarea'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tarea',
            old_name='project',
            new_name='ListaDeTareas',
        ),
    ]
