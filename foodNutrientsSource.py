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
added_foods_categories = [1,2]
for food in data.get("FoundationFoods", []):
    print(food["description"])
    for inputFood in food["foodNutrients"]:
        print(inputFood["foodNutrientDerivation"])
        if (not inputFood["foodNutrientDerivation"]["foodNutrientSource"] or 
        inputFood["foodNutrientDerivation"]["foodNutrientSource"]["id"] in added_foods_categories):
            continue
        food_query = """
        INSERT INTO "FoodNutrientSources" 
        ("Id", "DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "Code","Description","DescriptionTr") 
        VALUES (%s, %s, %s, %s, %s, %s,%s, %s) 
        RETURNING "Id";
        """
        translated_description = translate_keys(inputFood["foodNutrientDerivation"]["foodNutrientSource"]["description"])
        cursor.execute(food_query, (inputFood["foodNutrientDerivation"]["foodNutrientSource"]["id"] ,date_object,created_by, None, None ,inputFood["foodNutrientDerivation"]["foodNutrientSource"]["code"], inputFood["foodNutrientDerivation"]["foodNutrientSource"]["description"],translated_description))
        added_foods_categories.append(inputFood["foodNutrientDerivation"]["foodNutrientSource"]["id"])   
    print(added_foods_categories)
    conn.commit()
cursor.close()
conn.close()

   


