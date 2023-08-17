from django.db import models


class City(models.Model):
    name = models.CharField(max_length=256, verbose_name='Название города')


class CityPlan(models.Model):
    city = models.ForeignKey(City,
                             on_delete=models.CASCADE,
                             related_name='city_plan')
    year = models.DateField(verbose_name='Год')
    income = models.DecimalField(max_digits=16,
                                 decimal_places=2,
                                 null=True,
                                 blank=True,
                                 verbose_name='Ожидаемый доход')


class CityFact(models.Model):
    city = models.ForeignKey(City,
                             on_delete=models.CASCADE,
                             related_name='city_fact')
    year = models.DateField(verbose_name='Год')
    income = models.DecimalField(max_digits=16,
                                 decimal_places=2,
                                 null=True,
                                 blank=True,
                                 verbose_name='Фактический доход')
