from django.urls import path
from . import views

urlpatterns = [
    path('vendors/', views.VendorList.as_view()),
    # path('vendors/<int:pk>', views.vendor_detail),
    # path('categories/', views.category_list),
    # path('categories/<int:pk>', views.category_detail),
    # path('products/', views.product_list),
    # path('products/<int:pk>', views.product_detail),
]