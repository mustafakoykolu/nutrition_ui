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
added_foods_categories = [16, 11, 7, 12, 1, 9, 18, 2, 4, 5, 6, 15, 25, 13, 19, 10, 20, 14]
for food in data.get("FoundationFoods", []):
    print(food["description"])
    for inputFood in food["inputFoods"]:
        if inputFood["inputFood"]["foodCategory"]["id"] in added_foods_categories: continue
        food_query = """
        INSERT INTO "FoodCategories" 
        ("Id", "DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "Code","Description","DescriptionTr") 
        VALUES (%s, %s, %s, %s, %s, %s,%s, %s) 
        RETURNING "Id";
        """
        translated_description = translate_keys(inputFood["inputFood"]["foodCategory"]["description"])
        cursor.execute(food_query, (inputFood["inputFood"]["foodCategory"]["id"] ,date_object,created_by, None, None , inputFood["inputFood"]["foodCategory"]["code"], inputFood["inputFood"]["foodCategory"]["description"],translated_description))
        added_foods_categories.append(inputFood["inputFood"]["foodCategory"]["id"])   
    print(added_foods_categories)
    conn.commit()
cursor.close()
conn.close()

   


