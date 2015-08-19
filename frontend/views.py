from django.shortcuts import render
from django.http import HttpResponse


def get_index_view(request):
    data = 'dada'
    return HttpResponse(data)
