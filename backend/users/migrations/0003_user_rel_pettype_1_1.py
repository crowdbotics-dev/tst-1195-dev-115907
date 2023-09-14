# Generated by Django 3.2.20 on 2023-09-14 15:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_pet_petbreed_pettype'),
        ('users', '0002_auto_20230912_1728'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='rel_pettype_1_1',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_rel_pettype_1_1', to='home.pettype'),
        ),
    ]