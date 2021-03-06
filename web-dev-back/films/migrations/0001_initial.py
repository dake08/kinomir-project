# Generated by Django 3.1.7 on 2021-05-08 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField()),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='FavoriteFilm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Film',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
                ('img', models.CharField(max_length=1000)),
                ('secondName', models.CharField(max_length=300)),
                ('description', models.TextField()),
                ('kinorium', models.FloatField()),
                ('imbd', models.FloatField()),
                ('critics', models.FloatField()),
                ('country', models.CharField(max_length=200)),
                ('time', models.CharField(max_length=200)),
                ('worldPremiere', models.CharField(max_length=200)),
                ('usaPremiere', models.CharField(max_length=200)),
                ('ruPremiere', models.CharField(max_length=200)),
                ('otherName', models.CharField(max_length=400)),
                ('genres', models.ManyToManyField(to='films.Genre')),
            ],
        ),
    ]
