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
    for inputFood in food["nutrientConversionFactors"]:
        print(inputFood)
        food_query = """
        INSERT INTO "NutrientConversionFactors" 
        ("DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "Type", "ProteinValue","FatValue", "CarbohydrateValue", "FoodId","Value") 
        VALUES ( %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) 
        RETURNING "Id";
        """
        typee = inputFood.get("type")
        if typee is None:
            typee = None
        protein = inputFood.get("proteinValue")
        if protein is None:
            protein = None
            protein = inputFood.get("proteinValue")
        fatValue = inputFood.get("fatValue")
        if fatValue is None:
            fatValue = None
        carbohydrateValue = inputFood.get("carbohydrateValue")
        if carbohydrateValue is None:
            carbohydrateValue = None
        value= inputFood.get("value")
        if(value is None):
            value = None
        cursor.execute(food_query, (date_object,"system", None, None ,typee,protein,fatValue,carbohydrateValue,food["ndbNumber"],value))              
    # Gıda bilgilerini ekleme
 

    # Veritabanına işlemleri kaydet
    conn.commit()
cursor.close()
conn.close()
