# Generated by Django 4.1.7 on 2023-06-20 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_problems_book_alter_problems_chapter'),
    ]

    operations = [
        migrations.AlterField(
            model_name='problems',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]