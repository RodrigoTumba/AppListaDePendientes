from django.db import models

# Create your models here.

class Lista(models.Model):
    titulo = models.CharField(max_length=200)

    def __str__(self):
        return self.titulo


class Tarea(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    flag = models.BooleanField(default=False)
    ListaDeTareas = models.ForeignKey(Lista, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo