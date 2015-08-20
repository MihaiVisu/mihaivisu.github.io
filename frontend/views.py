from django.shortcuts import render
from django.http import HttpResponse


def get_index_view(request):
    return render(request, 'index.html')
