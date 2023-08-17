from django.shortcuts import render

# Create your views here.


def some_view(request):
    return render(request, 'graph_chartjs.html', context={'data': {'cities': ['A', 'B', 'C']}})
