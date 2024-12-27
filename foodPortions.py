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
date_object = "2024-12-27 22:30:00"
created_by="system"
modified_by=None
modified_date=None 
# FoundationFoods listesindeki her bir gıdayı işleme
added_foods_categories = []
for food in data.get("FoundationFoods", []):
    name= food["description"]
    name_tr = translate_keys(name)
    kcal = None
    protein = None
    water = None
    nitrogen = None
    portion = 100.0
    portion_unit = "g"

    for nutrient in food["foodNutrients"]:
        if(nutrient["nutrient"]["name"]=="Energy (Atwater General Factors)"):
            kcal = nutrient["value"]
        if(nutrient["nutrient"]["name"]=="Protein"):
            protein = nutrient["value"]
        if(nutrient["nutrient"]["name"]=="Water"):
            water = nutrient["value"]
        if(nutrient["nutrient"]["name"]=="Nitrogen"):
            nitrogen = nutrient["value"]   
    food_query = """
        INSERT INTO "Foods" 
        ("DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "Name", "NameTr", "Kcal", "Protein", "Water", "Nitrogen", "Portion", "PortionUnit") 
        VALUES (%s, %s, %s, %s, %s,%s, %s, %s, %s, %s, %s, %s) ;
        """
    cursor.execute(food_query, (idd, date_object, created_by, modified_date, modified_by, name, name_tr, kcal, protein, water, nitrogen, portion, portion_unit))   
    conn.commit()

cursor.close()
conn.close()

   


