#크롤러 실행 및 DB 저장

import requests
from bs4 import BeautifulSoup
import lxml
from html_table_parser import parser_functions
import sqlite3
import os

#calss 호출
from crawling import crawler, data_processing
from crawling import saveDB

''' collections.Callable 참조가 파이썬 3.10부터 collections.abc.Callable로 이동하여, 제거된 Attribute라서 발생하는 오류인
[AttributeError: module 'collections' has no attribute 'Callable'] 에러 처리 '''
import collections
if not hasattr(collections, 'Callable'):
    collections.Callable = collections.abc.Callable

requests.packages.urllib3.disable_warnings(requests.packages.urllib3.exceptions.InsecureRequestWarning)

crawling = crawler.crawling()
db = saveDB.saveDB()
processing = data_processing.processing()

def result(crawled_data, temp):
	return print("크롤링 완료(크롤링 한 데이터 %d개, 총 데이터 %d개)" %(len(temp), len(crawled_data)))

while True:
    print('''###지역###\n0. ALL\n1. deogyanggu\n2. goseonggun\n3. hwacheongun\n4. yanggugun\n5. cheolwongun\n\
6. uijeongbusi\n7. donghaesi\n8. sokchosi\n9. injegun\n10. pajusi\n11. hongcheongun\n12. pocheonsi\n\
13. changwonsi\n14. nonsansi\n15. yeongcheonsi\n\n###MOU###\n88. MOUdata\n\n###TMO###\n99. TMOdata''')
    select = input("크롤링 할 웹페이지 선택(숫자), DB기능수행(db), 나가기(exit) : ")
    if select.isdigit():
        if select == "0":
            temp = crawling.deogyanggu()
            result(crawling.crawled_location_data, temp)
            temp = crawling.goseonggun()
            result(crawling.crawled_location_data, temp)
            temp = crawling.hwacheongun()
            result(crawling.crawled_location_data, temp)
            temp = crawling.yanggugun()
            temp = crawling.cheolwongun()
            result(crawling.crawled_location_data, temp)
            temp = crawling.uijeongbusi()
            result(crawling.crawled_location_data, temp)
            temp = crawling.donghaesi()
            result(crawling.crawled_location_data, temp)
            temp = crawling.sokchosi()
            result(crawling.crawled_location_data, temp)
            temp = crawling.injegun()
            result(crawling.crawled_location_data, temp)
            temp = crawling.pajusi()
            result(crawling.crawled_location_data, temp)
            temp = crawling.hongcheongun()
            result(crawling.crawled_location_data, temp)
            temp = crawling.pocheonsi()
            result(crawling.crawled_location_data, temp)
            temp = crawling.changwonsi()
            result(crawling.crawled_location_data, temp)
            temp = crawling.nonsansi()
            result(crawling.crawled_location_data, temp)
            temp = crawling.yeongcheonsi()
            result(crawling.crawled_location_data, temp)
                
        elif select == "1":
            temp = crawling.deogyanggu()
            result(crawling.crawled_location_data, temp)
        elif select == "2":
            temp = crawling.goseonggun()
            result(crawling.crawled_location_data, temp)
        elif select == "3":
            temp = crawling.hwacheongun()
            result(crawling.crawled_location_data, temp)
        elif select == "4":
            temp = crawling.yanggugun()
            result(crawling.crawled_location_data, temp)
        elif select == "5":
            temp = crawling.cheolwongun()
            result(crawling.crawled_location_data, temp)
        elif select == "6":
            temp = crawling.uijeongbusi()
            result(crawling.crawled_location_data, temp)
        elif select == "7":
            temp = crawling.donghaesi()
            result(crawling.crawled_location_data, temp)
        elif select == "8":
            temp = crawling.sokchosi()
            result(crawling.crawled_location_data, temp)
        elif select == "9":
            temp = crawling.injegun()
            result(crawling.crawled_location_data, temp)
        elif select == "10":
            temp = crawling.pajusi()
            result(crawling.crawled_location_data, temp)
        elif select == "11":
            temp = crawling.hongcheongun()
            result(crawling.crawled_location_data, temp)
        elif select == "12":
            temp = crawling.pocheonsi()
            result(crawling.crawled_location_data, temp)
        elif select == "13":
            temp = crawling.changwonsi()
            result(crawling.crawled_location_data, temp)
        elif select == "14":
            temp = crawling.nonsansi()
            result(crawling.crawled_location_data, temp)
        elif select == "15":
            temp = crawling.yeongcheonsi()
            result(crawling.crawled_location_data, temp)
        elif select == "88":
            temp = crawling.MOUdata()
            result(crawling.crawled_mou_data, temp)
        elif select == "99":
            temp = crawling.TMOdata()
            result(crawling.crawled_tmo_data, temp)
    if select == 'exit':
        break
        
    if select == 'db':
        while True:
            print("###지역db###\n1. db.creat_db()\n2. db.into_db()\n3. db.close_db()\n4. db.crawled_amount\n5. data_proccesing(카카오 REST API KEY 필수)\n\n###MOUdb###\n6. MOU_create_db()\n7. MOU_into_db()\n8. MOU_crawled_amount()\n\n###TMOdb###\n9. TMO_create_db()\n10. TMO_into_db\n11. TMO_crawled_amount")
            select = input("기능수행(숫자), 뒤로가기(back) : ")
            if select.isdigit():
                if select == "1":
                    db.creat_db()
                elif select == "2":
                    db.into_db(crawling.crawled_location_data)
                elif select == "3":
                    db.close_db()
                elif select == "4":
                    amount = db.crawled_amount()
                    print('저장된 데이터는 %d개 입니다' %amount)
                elif select == "5":
                    crawling.crawled_location_data = processing.return_address(crawling.crawled_location_data)
                    crawling.crawled_location_data = processing.return_category(crawling.crawled_location_data)
                elif select == "6":
                    db.MOU_create_db()
                elif select == "7":
                    db.MOU_into_db(crawling.crawled_mou_data)
                elif select == "8":
                    amount = db.MOU_crawled_amount()
                    print('저장된 데이터는 %d개 입니다' %amount)
                elif select == "9":
                    db.TMO_create_db()
                elif select == "10":
                    db.MOU_into_db(crawling.crawled_mou_data)
                elif select == "11":
                    amount = db.TMO_crawled_amount()
                    print('저장된 데이터는 %d개 입니다' %amount)
            if select == 'back':
                break