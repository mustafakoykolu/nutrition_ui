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
added_foods_categories = []

# FoundationFoods listesindeki her bir gıdayı işleme
for food in data.get("FoundationFoods", []):
    for inputFood in food["foodNutrients"]:
        print(inputFood)
        if inputFood["nutrient"]["id"] in added_foods_categories: continue
        food_query = """
            INSERT INTO "Nutrients" 
            ("Id", "DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "Number", "Name","NameTr", "Rank", "UnitName") 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s) 
            RETURNING "Id";
            """
        translated_description = translate_keys(inputFood["nutrient"]["name"])
        cursor.execute(food_query, (inputFood["nutrient"]["id"],date_object,"system", None, None ,inputFood["nutrient"]["number"],inputFood["nutrient"]["name"],translated_description,inputFood["nutrient"]["rank"],inputFood["nutrient"]["unitName"]))        
        added_foods_categories.append(inputFood["nutrient"]["id"])
    print(food["description"])
    # Gıda bilgilerini ekleme
 

    # Veritabanına işlemleri kaydet
    conn.commit()
cursor.close()
conn.close()
