import json
import psycopg2
from googletrans import Translator
# PostgreSQL bağlantısı
conn = psycopg2.connect(
    host="nutrition.ct6q6guscsom.eu-central-1.rds.amazonaws.com",
    database="nutrition",
    user="postgres",
    password="koykolu123!",
    port=5432  # Port numarası ayrı verilmelidir
)

translator = Translator()

# JSON'u Türkçeye çevirme fonksiyonu
def translate_keys(data):
    # Çeviri işlemini gerçekleştirir
    return translator.translate(text=str(data), src='en', dest='tr').text

# JSON dosyasını okuma
with open("data.json", "r") as file:
    data = json.load(file)

cursor = conn.cursor()
date_object = "2024-12-22 14:30:00"
created_by="system"
modified_by=None
modified_date=None  
# FoundationFoods listesindeki her bir gıdayı işleme
added_foods_categories = []
for food in data.get("FoundationFoods", []):
    print(food["description"])
    for inputFood in food["foodPortions"]:
        if inputFood["measureUnit"]["id"] in added_foods_categories: continue
        food_query = """
        INSERT INTO "MeasureUnits" 
        ("Id", "DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "Name","NameTr","Abbreviation") 
        VALUES (%s, %s, %s, %s, %s, %s,%s, %s) 
        RETURNING "Id";
        """
        translated_description = translate_keys(inputFood["measureUnit"]["name"])
        cursor.execute(food_query, (inputFood["measureUnit"]["id"] ,date_object,created_by, None, None ,inputFood["measureUnit"]["name"], translated_description,inputFood["measureUnit"]["abbreviation"]))
        added_foods_categories.append(inputFood["measureUnit"]["id"])   
    print(added_foods_categories)
    conn.commit()
cursor.close()
conn.close()

   


