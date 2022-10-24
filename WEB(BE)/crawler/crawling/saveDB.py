#DB 저장
import sqlite3
import os


class saveDB:
    def __init__(self):
        self.dbname = '../db.sqlite3'
        self.connect = sqlite3.connect(self.dbname)
        self.curser = self.connect.cursor()
        
    def creat_db(self):
        self.curser.execute("""CREATE TABLE locations_location(
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name TEXT, 
                            category TEXT, 
                            address TEXT,
                            region1 TEXT,
                            region2 TEXT,
                            region3 TEXT,
                            x REAL,
                            y REAL,
                            number TEXT, 
                            benefit TEXT)""")
        
    def into_db(self, crawled_data):
        self.curser.executemany("INSERT INTO locations_location (name, category, address, region1, region2, region3, x, y, number, benefit) VALUES (:name, :category, :address, :region1, :region2, :region3, :x, :y, :number, :benefit)", crawled_data)
        self.connect.commit()
                            
    def close_db(self):
        self.connect.close()
                            
    def crawled_amount(self):
        self.curser.execute("SELECT * FROM locations_location")
        save_data = self.curser.fetchall()
        amount = 0
        for data in save_data:
            amount += 1
        return amount
    
    def MOU_create_db(self):
        self.curser.execute("""CREATE TABLE MOU_data(
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name TEXT, 
                            region TEXT,
                            number TEXT, 
                            benefit TEXT)""")
        
    def MOU_into_db(self, crawled_mou_data):
        self.curser.executemany("INSERT INTO MOU_data (name, region, number, benefit) VALUES (:name, :region, :number, :benefit)", crawled_mou_data)
        self.connect.commit()

    def MOU_crawled_amount(self):
        self.curser.execute("SELECT * FROM MOU_data")
        save_data = self.curser.fetchall()
        amount = 0
        for data in save_data:
            amount +=1
        return amount

    def TMO_create_db(self):
        self.curser.execute("""CREATE TABLE TMO_data(
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name TEXT, 
                            number TEXT,
                            pstnexpln TEXT, 
                            wkday_strtm TEXT,
                            wkday_endtm TEXT,
                            wkend_strtm TEXT,
                            wkend_endtm TEXT,
                            etc TEXT)""")
        
    def TMO_into_db(self, crawled_mou_data):
        self.curser.executemany("INSERT INTO TMO_data (name, number, pstnexpln, wkday_strtm, wkday_endtm, wkend_strtm, wkend_endtm, etc) VALUES (:name, :number, :pstnexpln, :wkday_strtm, :wkday_endtm, :wkend_strtm, :wkend_endtm, :etc)", crawled_tmo_data)
        self.connect.commit()

    def TMO_crawled_amount(self):
        self.curser.execute("SELECT * FROM TMO_data")
        save_data = self.curser.fetchall()
        amount = 0
        for data in save_data:
            amount +=1
        return amount    