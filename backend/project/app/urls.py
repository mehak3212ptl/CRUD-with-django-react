
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', Employeeviewset, basename='user')
urlpatterns = router.urls