from rest_framework.decorators import api_view

from rest_framework.response import Response

from users.models import User
from .models import Film, Genre, Comment, FavoriteFilm
from .serializers import FilmSerializer, GenreSerializer, CommentSerializer, CommentSerializer2, FavoriteFilmSerializer


# Create your views here.


@api_view(['GET', 'POST'])
def filmsList(request):
    if request.method == 'GET':
        films = Film.objects.all()
        serializer = FilmSerializer(films, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FilmSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'POST', 'DELETE'])
def filmDetail(request, filmId):
    try:
        film = Film.objects.get(id=filmId)
    except Film.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = FilmSerializer(film)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = FilmSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        film.delete()
        return Response({'message': 'deleted'}, status=404)


@api_view(['GET', 'POST'])
def getComments(request, filmId):
    try:
        film = Film.objects.get(id=filmId)
    except Film.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CommentSerializer(film.comments.all(), many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CommentSerializer2(data=request.data)
        print(serializer.initial_data)
        print(serializer.is_valid())
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['DELETE'])
def deleteComment(request, commentId):
    if request.method == "GET":
        try:
            comment = Comment.objects.get(id=commentId)
        except Comment.DoesNotExist as e:
            return Response({'message': str(e)}, status=400)

    elif request.method == 'DELETE':
        comment = Comment.objects.get(id=commentId)
        comment.delete()
        return Response({'Message: deleted'}, status=204)


@api_view(['GET', 'POST'])
def favoritefilms(request, userId):
    if request.method == 'GET':
        user = User.objects.get(id=userId)
        films = user.favorites.all()
        serializer = FavoriteFilmSerializer(films, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FavoriteFilmSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=User.objects.get(id=userId))
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def favoritefilm(request, userId, filmId):
    try:
        user = User.objects.get(id=userId)
        films = user.favorites.all()
        film = films.get(id=filmId)
    except FavoriteFilm.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = FavoriteFilmSerializer(film)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = FavoriteFilmSerializer(instance=film, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        film.delete()
        return Response({'message': 'deleted'}, status=404)
