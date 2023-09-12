# Generated by Django 3.2.20 on 2023-09-12 17:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='PetType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='PetBreed',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('rel_pettype_1_n', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='petbreed_rel_pettype_1_n', to='home.pettype')),
            ],
        ),
        migrations.CreateModel(
            name='Pet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('age', models.PositiveIntegerField()),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pet_owner', to=settings.AUTH_USER_MODEL)),
                ('rel_petbreed_1_n_1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pet_rel_petbreed_1_n_1', to='home.petbreed')),
            ],
        ),
    ]