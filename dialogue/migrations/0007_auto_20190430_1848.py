# Generated by Django 2.1.7 on 2019-04-30 10:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dialogue', '0006_dialogue_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dialogue',
            name='user_id',
            field=models.TextField(max_length=15, null=True),
        ),
    ]
