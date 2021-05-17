from django.conf import settings
from django.db import models
from users.models import User


# Create your models here.

class Genre(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.name}'


class Film(models.Model):
    name = models.CharField(max_length=300)
    img = models.CharField(max_length=1000)
    secondName = models.CharField(max_length=300)
    description = models.TextField()
    kinorium = models.FloatField()
    imbd = models.FloatField()
    critics = models.FloatField()
    country = models.CharField(max_length=200)
    time = models.CharField(max_length=200)
    worldPremiere = models.CharField(max_length=200)
    usaPremiere = models.CharField(max_length=200)
    ruPremiere = models.CharField(max_length=200)
    otherName = models.CharField(max_length=400)
    genres = models.ManyToManyField(Genre)

    def __str__(self):
        return f'{self.id} : {self.name}'


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    film = models.ForeignKey(Film, related_name='comments', on_delete=models.CASCADE)
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s - %s - %s' % (self.id, self.film.name, self.user.name)


class FavoriteFilm(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favorites')
    name = models.CharField(max_length=300)
