import sqlite3
import urllib
import json

dbname = 'db.sqlite3'
connect = sqlite3.connect(dbname)
cursor = connect.cursor()
cursor.execute("SELECT * FROM crawled_data")

gddata = cursor.fetchall()

f = open("데이터.txt",'w')
f.write("""[
""")
for data in gddata:
    client_id = '*'
    client_secret = '*'
    encText = urllib.parse.quote(data[3])
    url = 'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query='+encText
    request = urllib.request.Request(url)
    request.add_header('X-NCP-APIGW-API-KEY-ID',client_id)
    request.add_header('X-NCP-APIGW-API-KEY',client_secret)
    response = urllib.request.urlopen(request)
    rescode = response.getcode()
    if(rescode==200):
        response_body = response.read()
        temp_map = response_body.decode("utf8")
        temp_map = json.loads(temp_map)
        try:
            temp_map = temp_map['addresses'][0]
            x= float(temp_map['x']) 
            y= float(temp_map['y'])
            f.write(f"""    GDstore(
      uid: "{data[0]}",
      name: "{data[1]}",
      address: "{data[3]}",
      number: "{data[9]}",
      benefit: "{data[10]}",
      location: LocationClass(latitude: {y}, longitude: {x}),
    ),
""")        
        except IndexError:
            pass
f.write("  ]")