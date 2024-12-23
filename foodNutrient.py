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
    print(food["description"])
    for inputFood in food["foodNutrients"]:
        food_query = """
        INSERT INTO "FoodNutrients" 
        ("Id", "DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "Type", "NutrientId","DataPoints", "DerivationId", "Median","Amount","FoodId") 
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,%s) 
        RETURNING "Id";
        """
        idd=inputFood["foodNutrientDerivation"]["foodNutrientSource"].get("id") 
        if idd is None:
            continue
        data_points = inputFood.get("dataPoints") 
        median = inputFood.get("median") 
        if data_points is None:
            data_points = 0
        if median is None:
            median = 0
        cursor.execute(food_query, (inputFood["id"],date_object,"system", None, None ,inputFood["type"],inputFood["nutrient"]["id"],data_points,inputFood["foodNutrientDerivation"]["foodNutrientSource"]["id"],median,inputFood["amount"],food["ndbNumber"]))              
    # Gıda bilgilerini ekleme
    conn.commit()


    # Veritabanına işlemleri kaydet

cursor.close()
conn.close()
