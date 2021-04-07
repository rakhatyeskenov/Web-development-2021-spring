from django.urls import path
from .views import product_list, product_detail, category_list, category_detail

urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:id>/', category_detail),
    path('products/', product_list),
    path('products/<int:id>/', product_detail)
]