#DB 저장
'''
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', "*.settings")
import django

django.setup()
from *.models import *

def add_data(datas):
    for data in datas:
        parser_data(name=data['name'],
                   category=data['category'],
                   address=data['address'],
                   number=data['number'],
                   benefit=data['benefit'],).save()'''