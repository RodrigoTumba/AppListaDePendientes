from rest_framework import serializers
from .models import Tarea
from .models import Lista


class ListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lista
        fields = '__all__'  # Serializa todos los campos de Lista


class TareaSerializer(serializers.ModelSerializer):
    # Incluimos el serializador de Lista para mostrar datos de Lista en Tarea
    ListaDeTareas = ListaSerializer

    class Meta:
        model = Tarea
        fields = '__all__'  # Serializa todos los campos de Tarea

