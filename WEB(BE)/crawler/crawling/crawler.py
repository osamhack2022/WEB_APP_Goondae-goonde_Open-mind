#크롤러
import requests
from bs4 import BeautifulSoup
import lxml


class HTMLrequest:
    def __init__(self, req_url):
        self.req_url = req_url
    
    def get_html(self):
        res = requests.get(self.req_url, verify=False)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, 'lxml')
        
        return soup
    
class crawling(HTMLrequest):
    crawled_data = []
    refund =  '나라사랑카드를 사용할 경우 결제금액의 약 30% 상당의 금액을 지역상품권으로 환급(1회 한도 5만원)'
    def __init__(self):
        pass
    
    def deogyanggun(self):
        result=[]
        for i in range(1,17):
            url = HTMLrequest('http://www.goyang.go.kr/dygu/sldrPrfrBsns/BD_selectSldrPrfrBsnsList.do?q_searchKeyTy=&q_searchVal=&q_rowPerPage=4&q_currPage={}&q_sortName=&q_sortOrder=&'.format(i))
            raw_data = url.get_html()
            data = raw_data.find_all("td")
            n=0

            while True:
                if n==len(data):
                    break
                into = {
                    'name' : data[n].get_text(strip=True),
                    'category' : data[n+1].get_text(strip=True),
                    'address' : data[n+2].get_text(strip=True),
                    'number' : data[n+3].get_text(strip=True),
                    'benefit' : data[n+4].get_text(strip=True),
                    }

                result.append(into)
                crawling.crawled_data.append(into)
                n += 5
        return result
    
    def goseonggun(self):
        result = []
        url = HTMLrequest('https://www.gwgs.go.kr/kor/sub06_110201.do')
        raw_data = url.get_html()
        data = raw_data.find_all("td")
        
        n = 0
        while True:
            if n==len(data):
                break
            into = {
                'name' : data[n+1].get_text(strip=True),
            	'category' : data[n].get_text(strip=True),
            	'address' : data[n+2].get_text(strip=True),
            	'number' : data[n+3].get_text(strip=True),
            	'benefit' : data[n+5].get_text(strip=True),
            }
            
            result.append(into)
            crawling.crawled_data.append(into)
            n += 6

        url = HTMLrequest('https://www.gwgs.go.kr/kor/sub06_110202.do')
        raw_data = url.get_html()
        data = raw_data.find_all("td")
        slicing = raw_data.find_all("td", "text-left")
        for sli in slicing:
            data.remove(sli)

        n = 0
        while True:
            if n==len(data):
                break
            into = {
                'name' : data[n].get_text(strip=True),
                'category' : "음식점",
                'address' : data[n+1].get_text(strip=True),
                'number' : data[n+2].get_text(strip=True),
                'benefit' : data[n+4].get_text(strip=True),
            }
            
            result.append(into)
            crawling.crawled_data.append(into)
            n += 5

        return result



    def hwacheongun(self):
        result=[]
        url = HTMLrequest('https://www.ihc.go.kr/www/contents.do?key=2405')
        raw_data = url.get_html()
        data = raw_data.find_all("td")

        n = 0
        while True:
            if n==len(data):
                break
            into = {
                'name' : data[n+2].get_text(strip=True),
            	'category' : data[n+1].get_text(strip=True),
            	'address' : data[n+3].get_text(strip=True),
            	'number' : data[n+4].get_text(strip=True),
            	'benefit' : crawling.refund
            }
            
            result.append(into)
            crawling.crawled_data.append(into)
            n += 5
        return result

    def yanggugun(self):
        result=[]
        url = HTMLrequest('https://www.yanggu.go.kr/user_sub.php?gid=www&mu_idx=627')

        raw_data = url.get_html()
        data = raw_data.find_all("td","tc")
        data_address = raw_data.find_all("td","tj")

        n = 0
        k = 0
        while True:
            if n==len(data):
                break
            into = {
                'name' : data[n+1].get_text(),
            	'category' : data[n].get_text(),
            	'address' : data_address[k].get_text(),
            	'number' : data[n+2].get_text(),
            	'benefit' : crawling.refund,
            }
            
            result.append(into)
            crawling.crawled_data.append(into)
            n += 3
            k += 1
        return result

    def cheolwongun(self):
        result=[]
        url = HTMLrequest('https://www.cwg.go.kr/www/contents.do?key=354')
        raw_data = url.get_html()
        data = raw_data.find_all("td")

        n = 0
        while True:
            if n==len(data):
                break
            into = {
                'name' : data[n].get_text(strip=True),
            	'category' : '음식점',
            	'address' : '{0} {1}'.format(data[n+2].get_text(strip=True), data[n+3].get_text(strip=True)),
            	'number' : data[n+1].get_text(strip=True),
            	'benefit' : crawling.refund,
            }
            
            result.append(into)
            crawling.crawled_data.append(into)
            n += 8

        url = HTMLrequest('https://www.cwg.go.kr/www/contents.do?key=355')
        raw_data = url.get_html()
        data = raw_data.find_all("td")

        n = 0
        while True:
            if n==len(data):
                break
            into = {
                'name' : data[n].get_text(strip=True),
            	'category' : '숙박업',
                'address' : '{0} {1}'.format(data[n+2].get_text(strip=True), data[n+3].get_text(strip=True)),
            	'number' : data[n+1].get_text(strip=True),
            	'benefit' : crawling.refund,
            }
            
            result.append(into)
            crawling.crawled_data.append(into)
            n += 5

        url = HTMLrequest('https://www.cwg.go.kr/www/contents.do?key=1500')
        raw_data = url.get_html()
        data = raw_data.find_all("td")

        n = 0
        while True:
            if n==len(data):
                break
            into = {
                'name' : data[n].get_text(strip=True),
            	'category' : data[n+7].get_text(strip=True),
            	'address' : '{0} {1}'.format(data[n+2].get_text(strip=True), data[n+3].get_text(strip=True)),
            	'number' : data[n+1].get_text(strip=True),
            	'benefit' : crawling.refund,
            }
            
            result.append(into)
            crawling.crawled_data.append(into)
            n += 8

        return result

    def uijeongbusi(self):
        result = []
        urls = ['https://www.ui4u.go.kr/depart/contents.do?mId=0409010100','https://www.ui4u.go.kr/depart/contents.do?mId=0409010200','https://www.ui4u.go.kr/depart/contents.do?mId=0409010300','https://www.ui4u.go.kr/depart/contents.do?mId=0409010400']
        for url in urls:
            url = HTMLrequest(url)
            raw_data=url.get_html()
            data = raw_data.find_all("td")

            n = 0
            while True:
                if n==len(data):
                    break
                into = {
                    'name' : data[n+2].get_text(strip=True),
                    'category' : data[n+1].get_text(strip=True),
                    'address' : data[n+3].get_text(strip=True),
                    'number' : data[n+4].get_text(strip=True),
                    'benefit' : data[n+5].get_text(strip=True),
                }
                
                result.append(into)
                crawling.crawled_data.append(into)
                n += 6
        return result

    def donghaesi(self):
        result = []
        urls = ['https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954013','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954034']
        for url in urls:
            url = HTMLrequest(url)
            raw_data = url.get_html()
            data = raw_data.find_all("td")

            n = 0
            while True:
                if n==len(data):
                    break
                into = {
                    'name' : data[n].get_text(strip=True),
                	'category' : raw_data.find('a', 'on').get_text(strip=True),
                	'address' : data[n+1].get_text(strip=True),
                	'number' : data[n+2].get_text(strip=True),
                	'benefit' : data[n+3].get_text(strip=True),
                }
                
                result.append(into)
                crawling.crawled_data.append(into)
                n += 5

        urls = ['https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954039','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954067','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954073','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954077','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1474954096','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1478163042','https://www.dh.go.kr/pages/sub.htm?nav_code=dh1556084336']
        for url in urls:
            url = HTMLrequest(url)
            raw_data = url.get_html()
            data = raw_data.find_all("td")

            n = 0
            while True:
                if n==len(data):
                    break
                into = {
                    'name' : data[n].get_text(strip=True),
                	'category' : raw_data.find('a', 'on').get_text(strip=True),
                	'address' : data[n+1].get_text(strip=True),
                	'number' : data[n+2].get_text(strip=True),
                	'benefit' : data[n+3].get_text(strip=True),
                }
                
                result.append(into)
                crawling.crawled_data.append(into)
                n += 4

        return result
    
    def pocheonsi(self):
        result = []
        headers = {
            'accept': 'application/json',
            'Authorization': '*',
        }
        params = {
            'page': '1',
            'perPage': '100',
            'serviceKey': '*',
        }

        response = requests.get('https://api.odcloud.kr/api/15106202/v1/uddi:*', params=params, headers=headers)

        raw_data = response.json()["data"]

        for data in  raw_data:
            into = {
                'name' : data['상호명'],
                'category' : data['업종'],
                'address' : data['사업장 주소'],
                'number' : data['전화번호'],
                'benefit' : data['할인내용'],
            }

            result.append(into)
            crawling.crawled_data.append(into)
        return result
    
    def MOUdata(self):
        result = []
        response = requests.get('https://openapi.mnd.go.kr/*/json/DS_MND_ENLSTMN_DCNT_BEF_INF/1/100')

        json = response.json()
        raw_data = json['DS_MND_ENLSTMN_DCNT_BEF_INF']['row']

        for data in  raw_data:
            into = {
                'name' : data['instltnnm'],
                'region' : data['rgn'],
                'number' : data['cntadr'],
                'benefit' : data['dtlexpln'],
            }

            result.append(into)
            
        return result
        
