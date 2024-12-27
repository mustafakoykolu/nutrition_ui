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
with open("foundationDownload.json", "r") as file:
    data = json.load(file)


date_created = "2024-12-27 22:30:00"
created_by="system"
date_modified= "2024-12-27 22:30:00"
modified_by= "system"

cursor = conn.cursor()
# FoundationFoods listesindeki her bir gıdayı işleme
for food in data.get("FoundationFoods", []):
        # Food Ekle

    name= food["description"]
    name_tr = translate_keys(food["description"])
    portion=100.0
    portion_unit="g"
    print(name_tr)
    for nutrient in food["foodNutrients"]:
        if(nutrient["nutrient"]["name"]=="Energy"):
            kcal = nutrient["amount"]
        if(nutrient["nutrient"]["name"]=="Protein"):
            protein = nutrient["amount"] *1000
        if(nutrient["nutrient"]["name"]=="Water"):
            water = nutrient["amount"]*1000
        if(nutrient["nutrient"]["name"]=="Nitrogen"):
            nitrogen = nutrient["amount"]*1000
    food_query = """
    INSERT INTO "Foods" 
    ("DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "Name", "NameTr", "KCal", "Protein", "Water", "Nitrogen", "Portion", "PortionUnit") 
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) 
    RETURNING "Id";
    """
    cursor.execute(food_query, (date_created, created_by, date_modified, modified_by, name, name_tr, kcal, protein, water, nitrogen, portion, portion_unit))
    idd = cursor.fetchone()[0]
    print(idd)
    VitaminB1 = None
    VitaminB2 = None
    VitaminB3 = None
    VitaminB5 = None
    VitaminB6 = None
    VitaminB7 = None
    VitaminB9 = None
    VitaminB12 = None
    VitaminC = None
    VitaminD = None
    VitaminE = None
    VitaminK = None
    VitaminA = None
    VitaminD3 = None
    # Vitamin Ekle
    for nutrient in food["foodNutrients"]:
        if(nutrient["nutrient"]["name"]=="Thiamin"):
            VitaminB1 = nutrient.get("amount") 
        if(nutrient["nutrient"]["name"]=="Riboflavin"):
            VitaminB2 = nutrient.get("amount") 
        if(nutrient["nutrient"]["name"]=="Niacin"):
            VitaminB3 = nutrient.get("amount") 
        if(nutrient["nutrient"]["name"]=="Pantothenic acid"):
            VitaminB5 = nutrient.get("amount") 
        if(nutrient["nutrient"]["name"]=="Vitamin B-6"):
            VitaminB6 = nutrient.get("amount") 
        if(nutrient["nutrient"]["name"]=="Biotin"):
            VitaminB7 = nutrient.get("amount")  /1000
        if(nutrient["nutrient"]["name"]=="Folate, total"):
            VitaminB9 = nutrient.get("amount")  / 1000
        if(nutrient["nutrient"]["name"]=="Vitamin B-12"):
            VitaminB12 = nutrient.get("amount")  / 1000
        if(nutrient["nutrient"]["name"]=="Vitamin C, total ascorbic acid"):
            VitaminC = nutrient.get("amount")  
        if(nutrient["nutrient"]["name"]=="Vitamin D (D2 + D3)"):
            VitaminD = nutrient.get("amount")  /1000
        if(nutrient["nutrient"]["name"]=="Vitamin E (alpha-tocopherol)"):
            VitaminE = nutrient.get("amount") 
        if(nutrient["nutrient"]["name"]=="Vitamin K (Dihydrophylloquinone)"):
            VitaminK = nutrient.get("amount")  / 1000
        if(nutrient["nutrient"]["name"]=="Vitamin A, RAE"):
            VitaminA = nutrient.get("amount")  / 1000
        if(nutrient["nutrient"]["name"]=="Vitamin D3 (cholecalciferol)"):
            VitaminD3 = nutrient.get("amount")  /1000
    food_query = """
    INSERT INTO "Vitamins" 
    ("DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "FoodId", "VitaminB1", "VitaminB2", "VitaminB3", "VitaminB5", "VitaminB6", "VitaminB7", "VitaminB9", "VitaminB12", "VitaminC", "VitaminD", "VitaminE", "VitaminK", "VitaminA", "VitaminD3") 
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
    """
    cursor.execute(food_query, (date_created, created_by, date_modified, modified_by, idd, VitaminB1, VitaminB2, VitaminB3, VitaminB5, VitaminB6, VitaminB7, VitaminB9, VitaminB12, VitaminC, VitaminD, VitaminE, VitaminK, VitaminA, VitaminD3))  
    # Mineral Ekle
    Calcium = None
    Iron = None
    Magnesium = None
    Phosphorus = None
    Potassium = None
    Sodium = None
    Zinc = None
    Copper = None
    Manganese = None
    Selenium = None

    
    for nutrient in food["foodNutrients"]:
        if(nutrient["nutrient"]["name"]=="Calcium, Ca"):
            Calcium = nutrient.get("amount")
        if(nutrient["nutrient"]["name"]=="Iron, Fe"):
            Iron = nutrient.get("amount")
        if(nutrient["nutrient"]["name"]=="Magnesium, Mg"):
            Magnesium = nutrient.get("amount")
        if(nutrient["nutrient"]["name"]=="Phosphorus, P"):
            Phosphorus = nutrient.get("amount")
        if(nutrient["nutrient"]["name"]=="Potassium, K"):
            Potassium = nutrient.get("amount")
        if(nutrient["nutrient"]["name"]=="Sodium, Na"):
            Sodium = nutrient.get("amount")
        if(nutrient["nutrient"]["name"]=="Zinc, Zn"):
            Zinc = nutrient.get("amount")
        if(nutrient["nutrient"]["name"]=="Copper, Cu"):
            Copper = nutrient.get("amount")
        if(nutrient["nutrient"]["name"]=="Manganese, Mn"):
            Manganese = nutrient.get("amount")
        if(nutrient["nutrient"]["name"]=="Selenium, Se"):
            Selenium = nutrient.get("amount") /1000

    food_query = """
    INSERT INTO "Minerals" 
    ("DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "FoodId", "Calcium", "Iron", "Magnesium", "Phosphorus", "Potassium", "Sodium", "Zinc", "Copper", "Manganese", "Selenium") 
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
    """
    cursor.execute(food_query, (date_created, created_by, date_modified, modified_by, idd, Calcium, Iron, Magnesium, Phosphorus, Potassium, Sodium, Zinc, Copper, Manganese, Selenium))
    # Fat Ekle
    SaturatedFat = None
    UnSaturatedFat = 0
    TransFat = None
    Cholesterol = None

    for nutrient in food["foodNutrients"]:
        if(nutrient["nutrient"]["name"]=="Fatty acids, total saturated"):
            SaturatedFat = nutrient.get("amount") * 1000
        if(nutrient["nutrient"]["name"]=="Fatty acids, total monounsaturated"):
            MonounsaturatedFat = nutrient.get("amount") * 1000
            UnSaturatedFat += MonounsaturatedFat
        if(nutrient["nutrient"]["name"]=="Fatty acids, total polyunsaturated"):
            PolyunsaturatedFat = nutrient.get("amount") * 1000
            UnSaturatedFat += PolyunsaturatedFat
        if(nutrient["nutrient"]["name"]=="Cholesterol"):
            Cholesterol = nutrient.get("amount")
        if(nutrient["nutrient"]["name"]=="Fatty acids, total trans"):
            TransFat = nutrient.get("amount") *1000
        
    food_query = """
    INSERT INTO "Lipid" 
    ("DateCreated", "CreatedBy", "DateModified", "ModifiedBy", "FoodId", "SaturatedFat", "UnSaturatedFat", "TransFat", "Cholesterol") 
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s );
    """
    cursor.execute(food_query, (date_created, created_by, date_modified, modified_by, idd, SaturatedFat, UnSaturatedFat, TransFat, Cholesterol))
    
    #Carbohydrate ekle

    



    # Veritabanına işlemleri kaydet
    conn.commit()
cursor.close()
conn.close()
