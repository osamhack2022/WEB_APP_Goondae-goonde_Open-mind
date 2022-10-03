from django.db import models

# Location model, pk = name 
class Location(models.Model):
    name = models.TextField(blank=True, primary_key=True)
    category = models.TextField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    number = models.TextField(blank=True, null=True)
    benefit = models.TextField(blank=True, null=True)

    class Meta:
        # Only read crawled_data table
        managed = False
        db_table = 'crawled_data'
