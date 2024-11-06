from django.urls import path,include
from rest_framework import routers
#from rest_framework.documentation import include_docs_urls
from .views import TareaView,ListaView,TareasPorListaView

router = routers.DefaultRouter()
router.register(r'Tareas',TareaView)
router.register(r'ListaTareas',ListaView)

# versionado de api
urlpatterns = [
    path("v1/", include(router.urls)),
    path("v1/ListaTareas/<int:lista_id>/Tareas/", TareasPorListaView.as_view(), name="tareas-por-lista"),
]