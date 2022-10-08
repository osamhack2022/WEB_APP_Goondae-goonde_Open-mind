#kakao local api를 이용한 주소데이터 전처리
from PyKakao import KakaoLocal



class processing:
    def __init__(self):
        self.rest_key = '*'
        self.local = KakaoLocal(self.rest_key)
        
        
    def return_address(self, crawled_data):
        result = []
        for data in crawled_data:
            raw_address = data['address']
            
            try:    
                search = self.local.search_address(raw_address)
                address = search['documents'][0]['road_address']['address_name']
                data.update({'address': address})
                result.append(data)
            except:
                result.append(data)
                
        return result
