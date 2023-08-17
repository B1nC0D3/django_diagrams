from django.contrib import admin
from app.models import City, CityPlan, CityFact


class CityPlanInline(admin.TabularInline):
    model = CityPlan


class CityFactInline(admin.TabularInline):
    model = CityFact


class CityAdmin(admin.ModelAdmin):
    inlines = (CityPlanInline, CityFactInline)
    list_display = ('name',)


admin.site.register(City, CityAdmin)

