# Generated by Django 5.1 on 2024-08-21 09:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_customer_order_orderitem'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='OrderItem',
            new_name='OrderItems',
        ),
    ]
