#크롤러
import requests
from bs4 import BeautifulSoup
import lxml


def deogyanggun():
    result=[]
    for i in range(1,17):
        url = 'http://www.goyang.go.kr/dygu/sldrPrfrBsns/BD_selectSldrPrfrBsnsList.do?q_searchKeyTy=&q_searchVal=&q_rowPerPage=4&q_currPage={}&q_sortName=&q_sortOrder=&'.format(i)
        res = requests.get(url)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, 'lxml')
        data = soup.find_all("td")
        n=0

        while True:
            if n==len(data):
                break
            name = data[n].get_text(strip=True)
            category = data[n+1].get_text(strip=True)
            address = data[n+2].get_text(strip=True)
            number = data[n+3].get_text(strip=True)
            benefit = data[n+4].get_text(strip=True)
            into = {
                'name' : name,
                'category' : category,
                'address' : address,
                'number' : number,
                'benefit' : benefit,
            }
            result.append(into)
            n += 5
    return result

def goseonggun():
    result = []
    url = 'https://www.gwgs.go.kr/kor/sub06_110201.do'
    res = requests.get(url)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, 'lxml')
    data=soup.find_all("td")

    n = 0
    while True:
        if n==len(data):
            break
        name = data[n+1].get_text(strip=True)
        category = data[n].get_text(strip=True)
        address = data[n+2].get_text(strip=True)
        number = data[n+3].get_text(strip=True)
        benefit = data[n+5].get_text(strip=True)
        into = {
            'name' : name,
            'category' : category,
            'address' : address,
            'number' : number,
            'benefit' : benefit,
        }
        result.append(into)
        n += 6

    url = 'https://www.gwgs.go.kr/kor/sub06_110202.do'
    res = requests.get(url)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, 'lxml')

    data = soup.find_all("td")
    slicing = soup.find_all("td", "text-left")
    for i in slicing:
        data.remove(i)

    n = 0
    while True:
        if n==len(data):
            break
        name = data[n].get_text(strip=True)
        category = "음식점"
        address = data[n+1].get_text(strip=True)
        number = data[n+2].get_text(strip=True)
        benefit = data[n+4].get_text(strip=True)
        into = {
            'name' : name,
            'category' : category,
            'address' : address,
            'number' : number,
            'benefit' : benefit,
        }
        result.append(into)
        n += 5

    return result

def hwacheongun():
    result=[]
    url = 'https://www.ihc.go.kr/www/contents.do?key=2405'
    res = requests.get(url)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, 'lxml')
    data=soup.find_all("td")

    n = 0
    while True:
        if n==len(data):
            break
        name = data[n+2].get_text(strip=True)
        category = data[n+1].get_text(strip=True)
        address = data[n+3].get_text(strip=True)
        number = data[n+4].get_text(strip=True)
        benefit = '나라사랑카드를 사용할 경우 결제금액의 약 30% 상당의 금액을 지역상품권으로 환급(1회 한도 5만원)'
        into = {
            'name' : name,
            'category' : category,
            'address' : address,
            'number' : number,
            'benefit' : benefit,
        }
        result.append(into)
        n += 5
    return result

def yanggugun():
    result=[]
    url = 'https://www.yanggu.go.kr/user_sub.php?gid=www&mu_idx=627'
    res = requests.get(url,verify=False)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, 'lxml')

    data = soup.find_all("td","tc")
    data_address = soup.find_all("td","tj")

    n = 0
    k = 0
    while True:
        if n==len(data):
            break
        name = data[n+1].get_text()
        category = data[n].get_text()
        address = data_address[k].get_text()
        number = data[n+2].get_text()
        benefit = '나라사랑카드를 사용할 경우 결제금액의 약 30% 상당의 금액을 지역상품권으로 환급(1회 한도 5만원)'
        into = {
            'name' : name,
            'category' : category,
            'address' : address,
            'number' : number,
            'benefit' : benefit,
        }
        result.append(into)
        n += 3
        k += 1
    return result

def cheolwongun():
    result=[]
    url = 'https://www.cwg.go.kr/www/contents.do?key=354'
    res = requests.get(url)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, 'lxml')
    data = soup.find_all("td")

    n = 0
    while True:
        if n==len(data):
            break
        name = data[n].get_text(strip=True)
        category = '음식점'
        address = '{0} {1}'.format(data[n+2].get_text(strip=True), data[n+3].get_text(strip=True))
        number = data[n+1].get_text(strip=True)
        benefit = '나라사랑카드를 사용할 경우 결제금액의 약 30% 상당의 금액을 지역상품권으로 환급(1회 한도 5만원)'
        into = {
            'name' : name,
            'category' : category,
            'address' : address,
            'number' : number,
            'benefit' : benefit,
        }
        result.append(into)
        n += 8

    url = 'https://www.cwg.go.kr/www/contents.do?key=355'
    res = requests.get(url)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, 'lxml')
    data = soup.find_all("td")

    n = 0
    while True:
        if n==len(data):
            break
        name = data[n].get_text(strip=True)
        category = '숙박업'
        address = '{0} {1}'.format(data[n+2].get_text(strip=True), data[n+3].get_text(strip=True))
        number = data[n+1].get_text(strip=True)
        benefit = '나라사랑카드를 사용할 경우 결제금액의 약 30% 상당의 금액을 지역상품권으로 환급(1회 한도 5만원)'
        into = {
            'name' : name,
            'category' : category,
            'address' : address,
            'number' : number,
            'benefit' : benefit,
        }
        result.append(into)
        n += 5

    url = 'https://www.cwg.go.kr/www/contents.do?key=1500'
    res = requests.get(url)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, 'lxml')
    data = soup.find_all("td")

    n = 0
    while True:
        if n==len(data):
            break
        name = data[n].get_text(strip=True)
        category = data[n+7].get_text(strip=True)
        address = '{0} {1}'.format(data[n+2].get_text(strip=True), data[n+3].get_text(strip=True))
        number = data[n+1].get_text(strip=True)
        benefit = '나라사랑카드를 사용할 경우 결제금액의 약 30% 상당의 금액을 지역상품권으로 환급(1회 한도 5만원)'
        into = {
            'name' : name,
            'category' : category,
            'address' : address,
            'number' : number,
            'benefit' : benefit,
        }
        result.append(into)
        n += 8

    return result

def uijeongbusi():
    result = []
    url = ['https://www.ui4u.go.kr/depart/contents.do?mId=0409010100','https://www.ui4u.go.kr/depart/contents.do?mId=0409010200','https://www.ui4u.go.kr/depart/contents.do?mId=0409010300','https://www.ui4u.go.kr/depart/contents.do?mId=0409010400']
    for i in url:
        res = requests.get(i, verify=False)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, 'lxml')
        data=soup.find_all("td")

        n = 0
        while True:
            if n==len(data):
                break
            name = data[n+2].get_text(strip=True)
            category = data[n+1].get_text(strip=True)
            address = data[n+3].get_text(strip=True)
            number = data[n+4].get_text(strip=True)
            benefit = data[n+5].get_text(strip=True)
            into = {
                'name' : name,
                'category' : category,
                'address' : address,
                'number' : number,
                'benefit' : benefit,
            }
            result.append(into)
            n += 6
    return result

def donghaesi():
    result = []
    urls = ['https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954013','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954034']
    for url in urls:
        res = requests.get(url, verify=False)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, 'lxml')
        data=soup.find_all("td")
        n = 0
        while True:
            if n==len(data):
                break
            name = data[n].get_text(strip=True)
            category = soup.find('a', 'on').get_text(strip=True)
            address = data[n+1].get_text(strip=True)
            number = data[n+2].get_text(strip=True)
            benefit = data[n+3].get_text(strip=True)
            into = {
                'name' : name,
                'category' : category,
                'address' : address,
                'number' : number,
                'benefit' : benefit,
            }
            n += 5
            result.append(into)

    urls = ['https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954039','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954067','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954073','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954077','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954096','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1478163042','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1556084336']
    for url in urls:
        res = requests.get(url, verify=False)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, 'lxml')
        data=soup.find_all("td")
        n = 0
        while True:
            if n==len(data):
                break
            name = data[n].get_text(strip=True)
            category = soup.find('a', 'on').get_text(strip=True)
            address = data[n+1].get_text(strip=True)
            number = data[n+2].get_text(strip=True)
            benefit = data[n+3].get_text(strip=True)
            into = {
                'name' : name,
                'category' : category,
                'address' : address,
                'number' : number,
                'benefit' : benefit,
            }
            result.append(into)
            n += 4

    return result

def pocheonsi():
    result = []
    headers = {
        'accept': 'application/json',
        'Authorization': '7/0fZ5VyA+KiWkYOXPVM08s7FJNIaXAwm9O32hbrzTtTCP+o9ykDZjXPqq+5ecKAZCDesgM/NulmU0LEZ+63Bg==',
    }
    params = {
        'page': '1',
        'perPage': '100',
        'serviceKey': '7/0fZ5VyA+KiWkYOXPVM08s7FJNIaXAwm9O32hbrzTtTCP+o9ykDZjXPqq+5ecKAZCDesgM/NulmU0LEZ+63Bg==',
    }

    response = requests.get('https://api.odcloud.kr/api/15106202/v1/uddi:d6cc329d-8ac0-4471-b958-e9912dfade8f', params=params, headers=headers)
    raw_data = response.json()["data"]

    for data in  raw_data:
        name = data['상호명']
        category = data['업종']
        address = data['사업장 주소']
        number = data['전화번호']
        benefit = data['할인내용']

        into = {
            'name' : name,
            'category' : category,
            'address' : address,
            'number' : number,
            'benefit' : benefit,
        }
        result.append(into)
    return result
