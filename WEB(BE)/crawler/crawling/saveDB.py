#DB 저장
import sqlite3
import os


class saveDB:
    def __init__(self):
        self.dbname = 'data.db'
        self.connect = sqlite3.connect(self.dbname)
        self.curser = self.connect.cursor()
        
    def creat_db(self):
        self.curser.execute("""CREATE TABLE crawled_data(
                            name TEXT, 
                            category TEXT, 
                            address TEXT, 
                            number TEXT, 
                            benefit TEXT)""")
        
    def into_db(self, crawled_data):
        self.curser.executemany("INSERT INTO crawled_data VALUES(:name, :category, :address, :number, :benefit)", crawled_data)
        self.connect.commit()
                            
    def close_db(self):
        self.connect.close()
                            
    def crawled_amount(self):
        self.curser.execute("SELECT * FROM crawled_data")
        save_data = self.curser.fetchall()
        
        amount = 0
        for data in save_data:
        	amount += 1
        return amount

    