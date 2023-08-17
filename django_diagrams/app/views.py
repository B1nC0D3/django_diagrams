from django.shortcuts import render
from app.models import City


def get_cities(request):
    cities = City.objects.all()
    data = []
    for city in cities:
        planned_income = []
        fact_income = []
        city_plans = city.city_plan.all()
        city_facts = city.city_fact.all()
        print(city_plans)
        for i in range(city_plans.count()):
            print(city_plans[i].income)
            planned_income.append({'year': city_plans[i].year.year, 'income': city_plans[i].income})
            fact_income.append({'year': city_facts[i].year.year, 'income': city_facts[i].income})
        json_city = {
            'name': city.name,
            'planned_income': planned_income,
            'fact_income': fact_income}
        data.append(json_city)
    print(data)
    return render(request,
                  'graph_chartjs.html',
                  context={'data': data})
