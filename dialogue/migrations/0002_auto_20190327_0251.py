# Generated by Django 2.1.7 on 2019-03-27 02:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dialogue', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dialogue',
            name='last_modify_date',
        ),
        migrations.RemoveField(
            model_name='dialogue',
            name='user_id',
        ),
    ]
