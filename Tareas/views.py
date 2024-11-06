from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import TareaSerializer, ListaSerializer
from .models import Tarea, Lista

# Create your views here.
class TareaView(viewsets.ModelViewSet):
    serializer_class = TareaSerializer
    queryset = Tarea.objects.all()

class ListaView(viewsets.ModelViewSet):
    serializer_class = ListaSerializer
    queryset = Lista.objects.all()

class TareasPorListaView(APIView):
    def get(self, request, lista_id):
        tareas = Tarea.objects.filter(ListaDeTareas_id=lista_id)
        serializer = TareaSerializer(tareas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
