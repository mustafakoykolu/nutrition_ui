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
# FoundationFoods listesindeki her bir gıdayı işleme
for food in data.get("FoundationFoods", []):
    print(food["description"])
    # Açıklama çevirisi
    translated_description = translate_keys(food["description"])
    # Gıda bilgilerini ekleme
    food_query = """
    INSERT INTO "Foods" 
    ("Id", "DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "FoodClass", "Description", "DescriptionTr", "PublicationDate", "IsHistoricalReference", "NdbNumber", "DataType", "FdcId") 
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) 
    RETURNING "Id";
    """
    date_object = "2024-12-22 14:30:00"  
    cursor.execute(food_query, (food["ndbNumber"],date_object,"system", None, None , food["foodClass"], food["description"], translated_description, food["publicationDate"], food["isHistoricalReference"], food["ndbNumber"], food["dataType"], food["fdcId"]))

    # Veritabanına işlemleri kaydet
    conn.commit()
cursor.close()
conn.close()
