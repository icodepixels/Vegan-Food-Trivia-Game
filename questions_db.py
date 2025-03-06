from models import Question, QuestionSet

# World Cuisines Questions
ASIAN_CUISINE_QUESTIONS = [
    Question(
        id=1,
        question_text="Which country did tempura cooking originate from?",
        choices=["China", "Korea", "Japan", "Thailand"],
        correct_answer_index=2,
        explanation="Although tempura is now a key part of Japanese cuisine, it was actually introduced by Portuguese missionaries in the 16th century. The word 'tempura' comes from the Latin word 'tempora', which refers to 'times' or 'seasons' when meat wasn't eaten.",
        category="World Cuisines",
        difficulty="Easy"
    ),
    Question(
        id=2,
        question_text="What is the main ingredient in traditional pad thai?",
        choices=["Egg Noodles", "Rice Noodles", "Udon Noodles", "Glass Noodles"],
        correct_answer_index=1,
        explanation="Pad Thai is made with rice noodles (sen lek), which are stir-fried with vegetables, tofu, and a savory-sweet sauce. The dish was actually promoted by the Thai government in the 1930s as part of a campaign to reduce rice consumption.",
        category="World Cuisines",
        difficulty="Medium"
    ),
    Question(
        id=3,
        question_text="Which Indian bread is known for its flaky, layered texture?",
        choices=["Naan", "Paratha", "Roti", "Puri"],
        correct_answer_index=1,
        explanation="Paratha is a layered flatbread made by folding and rolling the dough multiple times with ghee or oil between layers. This technique creates its distinctive flaky texture when cooked. The word 'paratha' comes from the Sanskrit words 'parat' (layers) and 'atta' (flour).",
        category="World Cuisines",
        difficulty="Medium"
    ),
]

EUROPEAN_CUISINE_QUESTIONS = [
    Question(
        id=4,
        question_text="Which country is the origin of pasta?",
        choices=["France", "Greece", "Italy", "Spain"],
        correct_answer_index=2,
        explanation="While pasta is iconic in Italian cuisine today, its origins can be traced back to ancient civilizations. Italy popularized pasta in the Mediterranean region and developed numerous varieties, techniques, and recipes that have become fundamental to global cuisine.",
        category="World Cuisines",
        difficulty="Easy"
    ),
    Question(
        id=5,
        question_text="What is the main ingredient in traditional French baguette?",
        choices=["Whole Wheat Flour", "Rye Flour", "White Flour", "Cornmeal"],
        correct_answer_index=2,
        explanation="Traditional French baguettes are made with white flour, water, yeast, and salt. The strict French law (the 'Décret Pain' of 1993) specifies that traditional baguettes must be made only with these four ingredients to be called a baguette.",
        category="World Cuisines",
        difficulty="Medium"
    ),
    Question(
        id=6,
        question_text="Which vegetable is essential in traditional Greek dolmades?",
        choices=["Grape Leaves", "Cabbage", "Spinach", "Lettuce"],
        correct_answer_index=0,
        explanation="Grape leaves are the traditional wrapper for dolmades, a dish that originated in the Mediterranean region. The leaves are typically blanched or brined before being stuffed with rice, herbs, and sometimes other ingredients.",
        category="World Cuisines",
        difficulty="Hard"
    ),
]

# Cooking Basics Questions
KITCHEN_TOOLS_QUESTIONS = [
    Question(
        id=7,
        question_text="What kitchen tool is used to remove the outer skin of vegetables?",
        choices=["Grater", "Peeler", "Zester", "Mandoline"],
        correct_answer_index=1,
        explanation="A peeler is specifically designed to remove thin layers of skin from vegetables and fruits. Modern peelers often have swivel blades that adjust to the contours of the produce, making them more efficient than a knife for this task.",
        category="Cooking Basics",
        difficulty="Easy"
    ),
    Question(
        id=8,
        question_text="Which knife is best for chopping herbs?",
        choices=["Bread Knife", "Chef's Knife", "Paring Knife", "Cleaver"],
        correct_answer_index=1,
        explanation="A chef's knife is ideal for chopping herbs due to its balanced weight, curved blade, and rocking motion capability. This design allows for precise, quick chopping while maintaining control and preventing bruising of delicate herbs.",
        category="Cooking Basics",
        difficulty="Medium"
    ),
    Question(
        id=9,
        question_text="What tool is used to measure the internal temperature of bread?",
        choices=["Timer", "Scale", "Thermometer", "Hydrometer"],
        correct_answer_index=2,
        explanation="A thermometer is essential for checking bread's internal temperature to ensure it's fully baked. Properly baked bread typically reaches an internal temperature of 190-210°F (88-99°C), depending on the type of bread.",
        category="Cooking Basics",
        difficulty="Easy"
    ),
]

COOKING_METHODS_QUESTIONS = [
    Question(
        id=10,
        question_text="What cooking method involves cooking food in hot oil?",
        choices=["Boiling", "Steaming", "Frying", "Baking"],
        correct_answer_index=2,
        explanation="Frying involves cooking food in hot oil at temperatures typically between 350-375°F (175-190°C). The high heat creates a crispy exterior while keeping the interior moist through rapid heat transfer.",
        category="Cooking Basics",
        difficulty="Easy"
    ),
    Question(
        id=11,
        question_text="What is the term for cooking food briefly in boiling water?",
        choices=["Blanching", "Braising", "Poaching", "Simmering"],
        correct_answer_index=0,
        explanation="Blanching is a cooking technique where food is briefly plunged into boiling water and then immediately transferred to ice water to stop the cooking process. This helps preserve color, texture, and nutrients while partially cooking the food.",
        category="Cooking Basics",
        difficulty="Medium"
    ),
    Question(
        id=12,
        question_text="Which cooking method is best for making vegetable stock?",
        choices=["Frying", "Simmering", "Grilling", "Roasting"],
        correct_answer_index=1,
        explanation="Simmering is ideal for making vegetable stock as it gently extracts flavors and nutrients without agitating or breaking down the vegetables too quickly. The gentle heat (180-200°F) allows for clear stock without cloudiness.",
        category="Cooking Basics",
        difficulty="Medium"
    ),
]

# Food Science Questions
INGREDIENTS_SCIENCE_QUESTIONS = [
    Question(
        id=13,
        question_text="What makes bread rise?",
        choices=["Salt", "Sugar", "Yeast", "Baking Powder"],
        correct_answer_index=2,
        explanation="Yeast is a living organism that feeds on the sugars in dough, producing carbon dioxide gas as a byproduct. This gas creates bubbles in the dough, causing it to rise. The process is called fermentation and also contributes to bread's flavor.",
        category="Food Science",
        difficulty="Easy"
    ),
    Question(
        id=14,
        question_text="Which protein is responsible for gluten formation in bread?",
        choices=["Albumin", "Globulin", "Gliadin", "Casein"],
        correct_answer_index=2,
        explanation="Gliadin, along with glutenin, forms gluten when mixed with water and kneaded. Gliadin provides the extensibility (stretchiness) to dough, while glutenin provides elasticity (bounce-back). Together, they create the structure that traps gas bubbles in bread.",
        category="Food Science",
        difficulty="Hard"
    ),
    Question(
        id=15,
        question_text="What causes fruits like apples to brown when cut?",
        choices=["Bacteria", "Oxidation", "Dehydration", "Temperature"],
        correct_answer_index=1,
        explanation="When fruits are cut, enzymes called polyphenol oxidases react with oxygen in the air and compounds in the fruit, causing enzymatic browning. This process, called oxidation, creates melanin pigments that give the brown color. This can be prevented with acidic solutions like lemon juice.",
        category="Food Science",
        difficulty="Medium"
    ),
]

FOOD_PRESERVATION_QUESTIONS = [
    Question(
        id=16,
        question_text="What is the main purpose of pickling vegetables?",
        choices=["Add Flavor", "Preserve Food", "Add Color", "Add Texture"],
        correct_answer_index=1,
        explanation="Pickling preserves food by creating an acidic environment that inhibits the growth of harmful bacteria. The process, which can use either vinegar or fermentation, has been used for thousands of years to extend food shelf life without refrigeration.",
        category="Food Science",
        difficulty="Easy"
    ),
    Question(
        id=17,
        question_text="Which ingredient is essential for food preservation in jam making?",
        choices=["Water", "Sugar", "Lemon", "Salt"],
        correct_answer_index=1,
        explanation="Sugar acts as a preservative in jam making by binding with water molecules, making them unavailable for microbial growth. It also helps achieve the proper gel consistency and enhances flavor preservation.",
        category="Food Science",
        difficulty="Medium"
    ),
    Question(
        id=18,
        question_text="What temperature is considered the 'danger zone' for food storage?",
        choices=["0-20°F", "20-40°F", "40-140°F", "140-180°F"],
        correct_answer_index=2,
        explanation="The 'danger zone' (40-140°F/4-60°C) is the temperature range where bacteria multiply rapidly. Food should not be kept in this range for more than 2 hours to prevent foodborne illness.",
        category="Food Science",
        difficulty="Medium"
    ),
]

# Culinary History Questions
FOOD_ORIGINS_QUESTIONS = [
    Question(
        id=19,
        question_text="Which civilization first cultivated chocolate?",
        choices=["Aztec", "Maya", "Inca", "Olmec"],
        correct_answer_index=1,
        explanation="The Maya were the first to cultivate cacao trees and develop chocolate as a drink around 2000 years ago. They considered it the 'food of the gods' and used cacao beans as currency.",
        category="Food History",
        difficulty="Medium"
    ),
    Question(
        id=20,
        question_text="Where did coffee originate?",
        choices=["Brazil", "Colombia", "Ethiopia", "Yemen"],
        correct_answer_index=2,
        explanation="Coffee was first discovered in Ethiopia's Kaffa region, where coffee trees grew wild. According to legend, a goat herder noticed his goats becoming energetic after eating coffee berries.",
        category="Food History",
        difficulty="Medium"
    ),
    Question(
        id=21,
        question_text="Which explorer introduced tomatoes to Europe?",
        choices=["Christopher Columbus", "Francisco Pizarro", "Vasco da Gama", "Marco Polo"],
        correct_answer_index=0,
        explanation="Christopher Columbus brought tomatoes to Europe from the Americas in the 15th century. Initially, Europeans were suspicious of tomatoes, believing them to be poisonous due to their relation to nightshade plants.",
        category="Food History",
        difficulty="Hard"
    ),
]

FOOD_TRADITIONS_QUESTIONS = [
    Question(
        id=22,
        question_text="Which holiday is associated with eating moon cakes?",
        choices=["Chinese New Year", "Mid-Autumn Festival", "Dragon Boat Festival", "Lantern Festival"],
        correct_answer_index=1,
        explanation="Moon cakes are traditionally eaten during the Mid-Autumn Festival, which celebrates the harvest and lunar cycle. These round pastries symbolize the full moon and family unity.",
        category="Food History",
        difficulty="Medium"
    ),
    Question(
        id=23,
        question_text="What plant-based food is traditionally eaten during Lent?",
        choices=["Pretzels", "Hot Cross Buns", "Fruit Cake", "Bread"],
        correct_answer_index=0,
        explanation="Pretzels were traditionally eaten during Lent because they're made without eggs or dairy. Their shape is said to represent arms crossed in prayer, and the three holes represent the Holy Trinity.",
        category="Food History",
        difficulty="Medium"
    ),
    Question(
        id=24,
        question_text="Which food is traditionally eaten on Shrove Tuesday?",
        choices=["Pancakes", "Pretzels", "Fruit", "Bread"],
        correct_answer_index=0,
        explanation="Pancakes are eaten on Shrove Tuesday (also called Pancake Day) to use up rich ingredients like eggs and milk before Lent begins. This tradition dates back to medieval times.",
        category="Food History",
        difficulty="Easy"
    ),
]

# Additional World Cuisines Questions
LATIN_AMERICAN_QUESTIONS = [
    Question(
        id=25,
        question_text="Which country is the birthplace of corn tortillas?",
        choices=["Spain", "Mexico", "Peru", "Argentina"],
        correct_answer_index=1,
        explanation="Corn tortillas originated in Mexico, where corn (maize) was first domesticated around 10,000 years ago. The process of making tortillas using nixtamalization was developed by ancient Mesoamerican civilizations.",
        category="World Cuisines",
        difficulty="Easy"
    ),
    Question(
        id=26,
        question_text="What is the main ingredient in traditional Brazilian açaí bowls?",
        choices=["Banana", "Mango", "Açaí Berries", "Papaya"],
        correct_answer_index=2,
        explanation="Açaí berries, native to the Amazon rainforest, are the key ingredient in açaí bowls. These antioxidant-rich berries are traditionally pulped and frozen, then blended into a thick smoothie-like base that's topped with fruits and granola.",
        category="World Cuisines",
        difficulty="Medium"
    ),
    Question(
        id=27,
        question_text="Which Peruvian dish consists of quinoa and vegetables?",
        choices=["Quinoa Chaufa", "Empanada", "Arepa", "Pupusa"],
        correct_answer_index=0,
        explanation="Quinoa Chaufa is a Peruvian-Chinese fusion dish that combines quinoa with vegetables in a stir-fry style. It's an adaptation of Chinese fried rice using quinoa, a grain native to the Andes that was sacred to the Incas.",
        category="World Cuisines",
        difficulty="Medium"
    ),
]

MEDITERRANEAN_QUESTIONS = [
    Question(
        id=28,
        question_text="Which country is famous for inventing hummus?",
        choices=["Greece", "Turkey", "Lebanon", "Egypt"],
        correct_answer_index=2,
        explanation="Hummus originated in Lebanon, with the earliest known recipe dating back to 13th century Egypt. The word 'hummus' means 'chickpea' in Arabic, and the complete dish is called 'hummus bi tahini' (chickpeas with tahini).",
        category="World Cuisines",
        difficulty="Medium"
    ),
    Question(
        id=29,
        question_text="What is the main ingredient in traditional tabbouleh?",
        choices=["Couscous", "Bulgur", "Rice", "Quinoa"],
        correct_answer_index=1,
        explanation="Bulgur wheat is the main grain in traditional tabbouleh, a Levantine salad. The parsley-heavy dish uses pre-cooked cracked wheat (bulgur) which is soaked rather than cooked, making it perfect for hot climates.",
        category="World Cuisines",
        difficulty="Easy"
    ),
    Question(
        id=30,
        question_text="Which spice is essential in Moroccan ras el hanout?",
        choices=["Cumin", "Coriander", "Turmeric", "Cinnamon"],
        correct_answer_index=0,
        explanation="Cumin is a key component of ras el hanout, which means 'head of the shop' in Arabic, implying it's the shop's best spice blend. Traditional ras el hanout can contain up to 30 different spices, but cumin provides its distinctive earthy base note.",
        category="World Cuisines",
        difficulty="Hard"
    ),
]

# Additional Cooking Basics Questions
BAKING_BASICS_QUESTIONS = [
    Question(
        id=31,
        question_text="What is the ideal temperature for proofing yeast?",
        choices=["70-80°F", "95-105°F", "120-130°F", "140-150°F"],
        correct_answer_index=1,
        explanation="95-105°F (35-40°C) is the optimal temperature range for yeast fermentation. At this temperature, yeast is most active but not stressed, producing the best flavor and gas production for proper dough rising.",
        category="Cooking Basics",
        difficulty="Medium"
    ),
    Question(
        id=32,
        question_text="What does 'cream together' mean in vegan baking?",
        choices=["Add Plant Cream", "Mix Fat and Sugar", "Whip Aquafaba", "Add Plant Milk"],
        correct_answer_index=1,
        explanation="'Creaming' refers to the process of beating fat and sugar together until light and fluffy. In vegan baking, this is typically done with plant-based butter or solid coconut oil, creating air pockets that help with leavening.",
        category="Cooking Basics",
        difficulty="Easy"
    ),
    Question(
        id=33,
        question_text="What causes tough muffins in vegan baking?",
        choices=["Too Little Mixing", "Over Mixing", "Too Much Liquid", "Too Much Sugar"],
        correct_answer_index=1,
        explanation="Over-mixing develops too much gluten in the batter, resulting in tough, chewy muffins instead of tender ones. This is especially important in vegan baking where there are no eggs to tenderize the product.",
        category="Cooking Basics",
        difficulty="Medium"
    ),
]

KNIFE_SKILLS_QUESTIONS = [
    Question(
        id=34,
        question_text="What is julienne cut?",
        choices=["Thin Strips", "Small Cubes", "Diamond Shape", "Half-moon"],
        correct_answer_index=0,
        explanation="Julienne is a French cutting technique that produces thin, matchstick-sized strips (approximately 1/8 inch × 1/8 inch × 2-3 inches). This cut is often used for vegetables in stir-fries and salads for even cooking and elegant presentation.",
        category="Cooking Basics",
        difficulty="Medium"
    ),
    Question(
        id=35,
        question_text="Which knife grip provides the most control?",
        choices=["Hammer Grip", "Pinch Grip", "Handle Grip", "Blade Grip"],
        correct_answer_index=1,
        explanation="The pinch grip, where the thumb and index finger pinch the blade near the handle while other fingers wrap around the handle, provides the most control and precision. This grip is used by professional chefs as it offers better balance and reduces hand fatigue.",
        category="Cooking Basics",
        difficulty="Easy"
    ),
    Question(
        id=36,
        question_text="What is brunoise cut size?",
        choices=["1/8 inch cube", "1/4 inch cube", "1/2 inch cube", "1 inch cube"],
        correct_answer_index=0,
        explanation="Brunoise is a precise French cutting technique that produces 1/8 inch (3mm) cubes. It starts with julienne cuts that are then diced into tiny, uniform cubes, often used for garnishes or in fine dining presentations.",
        category="Cooking Basics",
        difficulty="Hard"
    ),
]

# Additional Food Science Questions
MOLECULAR_GASTRONOMY_QUESTIONS = [
    Question(
        id=37,
        question_text="What chemical is used to create culinary spherification?",
        choices=["Citric Acid", "Sodium Alginate", "Baking Soda", "Cream of Tartar"],
        correct_answer_index=1,
        explanation="Sodium alginate, when combined with calcium, creates a gel membrane around liquids through a process called spherification. This technique, popularized by modern gastronomy, allows chefs to create liquid-filled spheres that burst in your mouth.",
        category="Food Science",
        difficulty="Hard"
    ),
    Question(
        id=38,
        question_text="What gas is commonly used to create culinary foams?",
        choices=["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correct_answer_index=2,
        explanation="Nitrogen is used to create light, airy foams in molecular gastronomy. When combined with liquid ingredients in a whipping siphon, it creates stable, long-lasting foams due to its inert nature and ability to form small, consistent bubbles.",
        category="Food Science",
        difficulty="Medium"
    ),
    Question(
        id=39,
        question_text="What is the process of turning liquid into powder called?",
        choices=["Gelation", "Spherification", "Maltodextrinization", "Emulsification"],
        correct_answer_index=2,
        explanation="Maltodextrinization uses tapioca maltodextrin to turn high-fat liquids into powders. This process, popular in molecular gastronomy, creates powders that melt back into liquid when they touch moisture, offering unique textural experiences.",
        category="Food Science",
        difficulty="Hard"
    ),
]

FERMENTATION_QUESTIONS = [
    Question(
        id=40,
        question_text="Which bacteria is responsible for sauerkraut production?",
        choices=["E. coli", "Lactobacillus", "Salmonella", "Bacillus"],
        correct_answer_index=1,
        explanation="Lactobacillus bacteria naturally present on cabbage leaves ferment the sugars into lactic acid, creating sauerkraut's characteristic sour flavor and preserving the cabbage. This process is called lacto-fermentation.",
        category="Food Science",
        difficulty="Medium"
    ),
    Question(
        id=41,
        question_text="What is the main product of vegetable fermentation?",
        choices=["Alcohol", "Lactic Acid", "Vinegar", "Carbon Dioxide"],
        correct_answer_index=1,
        explanation="Lactic acid is the primary product of vegetable fermentation, produced when beneficial bacteria convert sugars in vegetables. This acid gives fermented vegetables their tangy flavor and acts as a natural preservative.",
        category="Food Science",
        difficulty="Medium"
    ),
    Question(
        id=42,
        question_text="Which food is not traditionally fermented?",
        choices=["Kimchi", "Kombucha", "Fresh Salad", "Tempeh"],
        correct_answer_index=2,
        explanation="Fresh salad is the only non-fermented option. While kimchi (fermented vegetables), kombucha (fermented tea), and tempeh (fermented soybeans) all undergo controlled fermentation processes, fresh salad is served raw without fermentation.",
        category="Food Science",
        difficulty="Easy"
    ),
]

# Additional Food History Questions
ANCIENT_FOODS_QUESTIONS = [
    Question(
        id=43,
        question_text="What was the first cultivated grain?",
        choices=["Wheat", "Rice", "Barley", "Corn"],
        correct_answer_index=0,
        explanation="Wheat was first cultivated around 10,000 BCE in the Fertile Crescent. This agricultural breakthrough marked the transition from hunter-gatherer societies to settled farming communities and the beginning of civilization.",
        category="Food History",
        difficulty="Hard"
    ),
    Question(
        id=44,
        question_text="Which ancient civilization invented tofu?",
        choices=["Japanese", "Chinese", "Korean", "Vietnamese"],
        correct_answer_index=1,
        explanation="Tofu was invented in China during the Han dynasty (around 164 BCE). Legend attributes its discovery to Prince Liu An, though it likely evolved from the process of making soy milk. The technique later spread throughout East Asia.",
        category="Food History",
        difficulty="Medium"
    ),
    Question(
        id=45,
        question_text="What was the main sweetener before sugar cane?",
        choices=["Maple Syrup", "Honey", "Date Syrup", "Agave"],
        correct_answer_index=1,
        explanation="Honey was the primary sweetener in most ancient civilizations before sugar cane cultivation. It was so valued that it was often called 'nectar of the gods' and used in religious ceremonies, medicine, and preservation.",
        category="Food History",
        difficulty="Medium"
    ),
]

SPICE_TRADE_QUESTIONS = [
    Question(
        id=46,
        question_text="Which spice was once worth its weight in gold?",
        choices=["Pepper", "Cinnamon", "Saffron", "Nutmeg"],
        correct_answer_index=2,
        explanation="Saffron, derived from crocus flower stigmas, was worth its weight in gold due to the labor-intensive harvesting process (150 flowers for 1 gram) and its versatility in medicine, dyes, and cuisine.",
        category="Food History",
        difficulty="Medium"
    ),
    Question(
        id=47,
        question_text="Which country was the main source of cloves in ancient times?",
        choices=["India", "Indonesia", "China", "Madagascar"],
        correct_answer_index=1,
        explanation="The Maluku Islands of Indonesia, particularly the 'Spice Islands,' were the world's only source of cloves until the 18th century. This monopoly made the islands crucial to the spice trade and colonial expansion.",
        category="Food History",
        difficulty="Hard"
    ),
    Question(
        id=48,
        question_text="What spice route connected Europe to Asia?",
        choices=["Silk Road", "Amber Road", "Tea Route", "Salt Route"],
        correct_answer_index=0,
        explanation="The Silk Road was a network of trade routes connecting East Asia and Europe, named for Chinese silk but crucial for spice trade. It operated from around 130 BCE to 1453 CE, facilitating cultural exchange and commerce.",
        category="Food History",
        difficulty="Medium"
    ),
]

# Additional World Cuisines Questions
AFRICAN_CUISINE_QUESTIONS = [
    Question(
        id=55,
        question_text="Which grain is the main ingredient in Ethiopian injera?",
        choices=["Wheat", "Teff", "Sorghum", "Millet"],
        correct_answer_index=1,
        explanation="Teff, a tiny grain native to Ethiopia, is the traditional ingredient in injera. This nutritious, gluten-free grain ferments to create injera's distinctive sourdough flavor and spongy texture.",
        category="World Cuisines",
        difficulty="Medium"
    ),
    Question(
        id=56,
        question_text="What is the main ingredient in Moroccan tagine?",
        choices=["Couscous", "Vegetables", "Chickpeas", "Rice"],
        correct_answer_index=1,
        explanation="Vegetables are the foundation of Moroccan tagine, a dish named after the cone-shaped clay pot it's cooked in. The pot's design creates a self-basting cycle that keeps ingredients moist and infuses them with spices.",
        category="World Cuisines",
        difficulty="Easy"
    ),
    Question(
        id=57,
        question_text="Which spice blend is essential in North African cuisine?",
        choices=["Garam Masala", "Ras el Hanout", "Chinese Five Spice", "Za'atar"],
        correct_answer_index=1,
        explanation="Ras el hanout is a complex North African spice blend that can contain up to 30 different spices. The name means 'head of the shop' in Arabic, indicating that it represents the best spices a merchant has to offer.",
        category="World Cuisines",
        difficulty="Medium"
    ),
    Question(
        id=79,
        question_text="What is the staple green vegetable in West African cuisine?",
        choices=["Spinach", "Collard Greens", "Cassava Leaves", "Sweet Potato Leaves"],
        correct_answer_index=2,
        explanation="Cassava leaves are a crucial ingredient in West African cuisine, particularly in countries like Sierra Leone and Liberia. The leaves are carefully prepared to remove toxins and are rich in protein, vitamins, and minerals.",
        category="World Cuisines",
        difficulty="Medium"
    ),
    Question(
        id=80,
        question_text="Which Ethiopian dish consists of various vegetable and legume stews?",
        choices=["Wat", "Fufu", "Jollof", "Matoke"],
        correct_answer_index=0,
        explanation="Wat refers to Ethiopian stews that can be made with various vegetables and legumes. These spiced dishes are traditionally served on injera bread and are central to Ethiopian cuisine's communal dining culture.",
        category="World Cuisines",
        difficulty="Medium"
    ),
]

MIDDLE_EASTERN_QUESTIONS = [
    Question(
        id=81,
        question_text="What is the main ingredient in muhammara?",
        choices=["Red Peppers", "Eggplant", "Chickpeas", "Tomatoes"],
        correct_answer_index=0,
        explanation="Muhammara is a Middle Eastern dip made primarily from roasted red peppers and ground walnuts. Originating in Aleppo, Syria, it's seasoned with pomegranate molasses, olive oil, and Aleppo pepper for a unique sweet-spicy flavor.",
        category="World Cuisines",
        difficulty="Hard"
    ),
    Question(
        id=82,
        question_text="Which spice gives Persian rice its golden color?",
        choices=["Turmeric", "Saffron", "Curry", "Paprika"],
        correct_answer_index=1,
        explanation="Saffron is the key spice in Persian rice dishes, particularly in tahdig. These precious red threads not only provide a golden color but also impart a distinct aroma and flavor that's central to Persian cuisine.",
        category="World Cuisines",
        difficulty="Medium"
    ),
]

# Additional Cooking Basics Questions
PLANT_BASED_SUBSTITUTES = [
    Question(
        id=83,
        question_text="What can replace eggs in binding veggie burgers?",
        choices=["Chia Seeds", "Breadcrumbs", "Mashed Potatoes", "All of these"],
        correct_answer_index=3,
        explanation="All these ingredients can effectively bind veggie burgers. Chia seeds form a gel when mixed with water, breadcrumbs absorb moisture, and mashed potatoes provide starch. Each option offers different nutritional benefits and textures.",
        category="Cooking Basics",
        difficulty="Medium"
    ),
    Question(
        id=84,
        question_text="Which ingredient best replaces butter in pie crusts?",
        choices=["Coconut Oil", "Vegetable Oil", "Applesauce", "Mashed Banana"],
        correct_answer_index=0,
        explanation="Coconut oil works best as a butter substitute in pie crusts because it remains solid at room temperature and can create flaky layers when cold. Its high fat content mimics butter's role in creating a tender, crisp crust.",
        category="Cooking Basics",
        difficulty="Medium"
    ),
]

ADVANCED_COOKING_TECHNIQUES = [
    Question(
        id=85,
        question_text="What is the ideal temperature for fermenting vegetables?",
        choices=["35-45°F", "45-55°F", "65-75°F", "85-95°F"],
        correct_answer_index=2,
        explanation="65-75°F (18-24°C) is the optimal temperature range for vegetable fermentation. This range allows beneficial bacteria to thrive while preventing the growth of harmful microorganisms. Too cold slows fermentation, while too hot can lead to spoilage.",
        category="Cooking Basics",
        difficulty="Hard"
    ),
    Question(
        id=86,
        question_text="Which method is best for creating crispy tofu?",
        choices=["Boiling", "Deep Frying", "Press and Bake", "Steam and Fry"],
        correct_answer_index=2,
        explanation="Pressing tofu removes excess moisture, while baking creates a crispy exterior through dehydration. This method is healthier than deep frying and produces more consistent results. The key is pressing for at least 30 minutes before baking.",
        category="Cooking Basics",
        difficulty="Medium"
    ),
]

# Additional Food Science Questions
NUTRITION_SCIENCE = [
    Question(
        id=87,
        question_text="Which mineral is best absorbed from leafy greens?",
        choices=["Iron", "Calcium", "Magnesium", "Potassium"],
        correct_answer_index=1,
        explanation="Calcium from leafy greens like kale and collards has a higher absorption rate than dairy calcium. This is due to the presence of other nutrients that aid absorption and the absence of oxalates that can inhibit calcium uptake.",
        category="Food Science",
        difficulty="Hard"
    ),
    Question(
        id=88,
        question_text="What makes legumes a complete protein when paired with grains?",
        choices=["Essential Fatty Acids", "Complementary Amino Acids", "Fiber Content", "Vitamin Content"],
        correct_answer_index=1,
        explanation="Legumes and grains contain different amino acids that complement each other. When eaten together, they provide all nine essential amino acids needed for protein synthesis, creating a complete protein similar to animal sources.",
        category="Food Science",
        difficulty="Medium"
    ),
]

FOOD_CHEMISTRY = [
    Question(
        id=89,
        question_text="What chemical reaction creates umami flavor in fermented foods?",
        choices=["Oxidation", "Proteolysis", "Maillard Reaction", "Caramelization"],
        correct_answer_index=1,
        explanation="Proteolysis breaks down proteins into amino acids, including glutamate, which creates umami flavor. This process occurs during fermentation of foods like soy sauce, miso, and aged cheese, enhancing their savory taste.",
        category="Food Science",
        difficulty="Hard"
    ),
    Question(
        id=90,
        question_text="Which compound gives fresh herbs their aroma?",
        choices=["Terpenes", "Phenols", "Alkaloids", "Tannins"],
        correct_answer_index=0,
        explanation="Terpenes are volatile organic compounds responsible for the distinctive aromas in herbs. These molecules evolved to attract pollinators and deter pests, and they contribute to both the smell and therapeutic properties of herbs.",
        category="Food Science",
        difficulty="Hard"
    ),
]

# Additional Food History Questions
ANCIENT_GRAINS_HISTORY = [
    Question(
        id=91,
        question_text="Which civilization first cultivated amaranth?",
        choices=["Aztecs", "Mayans", "Incas", "Olmecs"],
        correct_answer_index=0,
        explanation="The Aztecs first cultivated amaranth around 6,000 BCE. They considered it sacred and used it in religious ceremonies. The grain was so important that it was used as tribute and currency in their empire.",
        category="Food History",
        difficulty="Hard"
    ),
    Question(
        id=92,
        question_text="What was the sacred grain of ancient Egypt?",
        choices=["Wheat", "Barley", "Kamut", "Spelt"],
        correct_answer_index=2,
        explanation="Kamut, also known as Khorasan wheat, was considered sacred in ancient Egypt. This ancient grain was discovered in Egyptian tombs and is known for its rich, buttery flavor and high protein content.",
        category="Food History",
        difficulty="Medium"
    ),
]

VEGETARIAN_HISTORY = [
    Question(
        id=93,
        question_text="Who wrote the first vegetarian cookbook in America?",
        choices=["Benjamin Franklin", "Sylvester Graham", "Russell Trall", "John Harvey Kellogg"],
        correct_answer_index=2,
        explanation="Russell Trall published 'The New Hydropathic Cook-Book' in 1853, the first American cookbook devoted to vegetarian recipes. As a physician, he promoted vegetarianism for health reasons and was influential in the early American health food movement.",
        category="Food History",
        difficulty="Hard"
    ),
    Question(
        id=94,
        question_text="Which ancient Indian text first promoted ahimsa (non-violence) towards animals?",
        choices=["Vedas", "Upanishads", "Bhagavad Gita", "Yoga Sutras"],
        correct_answer_index=1,
        explanation="The Upanishads, composed between 800-500 BCE, were the first major texts to promote ahimsa (non-violence) towards all living beings. This principle became fundamental to Indian philosophical thought and influenced the development of vegetarianism in Indian culture.",
        category="Food History",
        difficulty="Hard"
    ),
]

# Define Question Sets
QUESTION_SETS = [
    QuestionSet(
        id=1,
        name="Asian Cuisine Explorer",
        description="Discover the diverse flavors and dishes of Asian cuisine!",
        questions=ASIAN_CUISINE_QUESTIONS,
        category="World Cuisines",
        difficulty="Easy-Medium"
    ),
    QuestionSet(
        id=2,
        name="European Food Journey",
        description="Explore traditional European dishes and cooking styles!",
        questions=EUROPEAN_CUISINE_QUESTIONS,
        category="World Cuisines",
        difficulty="Medium-Hard"
    ),
    QuestionSet(
        id=3,
        name="Kitchen Tools & Equipment",
        description="Learn about essential kitchen tools and their uses!",
        questions=KITCHEN_TOOLS_QUESTIONS,
        category="Cooking Basics",
        difficulty="Easy-Medium"
    ),
    QuestionSet(
        id=4,
        name="Cooking Methods",
        description="Master different cooking techniques and methods!",
        questions=COOKING_METHODS_QUESTIONS,
        category="Cooking Basics",
        difficulty="Easy-Medium"
    ),
    QuestionSet(
        id=5,
        name="Food Science Basics",
        description="Understand the science behind cooking and baking!",
        questions=INGREDIENTS_SCIENCE_QUESTIONS,
        category="Food Science",
        difficulty="Medium-Hard"
    ),
    QuestionSet(
        id=6,
        name="Food Preservation",
        description="Learn about different methods of food preservation!",
        questions=FOOD_PRESERVATION_QUESTIONS,
        category="Food Science",
        difficulty="Medium"
    ),
    QuestionSet(
        id=7,
        name="Food Origins",
        description="Discover the fascinating history of various foods!",
        questions=FOOD_ORIGINS_QUESTIONS,
        category="Food History",
        difficulty="Medium-Hard"
    ),
    QuestionSet(
        id=8,
        name="Food Traditions",
        description="Explore cultural food traditions around the world!",
        questions=FOOD_TRADITIONS_QUESTIONS,
        category="Food History",
        difficulty="Medium"
    ),
    QuestionSet(
        id=9,
        name="Latin American Flavors",
        description="Explore the vibrant cuisine of Latin America!",
        questions=LATIN_AMERICAN_QUESTIONS,
        category="World Cuisines",
        difficulty="Easy-Medium"
    ),
    QuestionSet(
        id=10,
        name="Mediterranean Delights",
        description="Discover the healthy and delicious Mediterranean cuisine!",
        questions=MEDITERRANEAN_QUESTIONS,
        category="World Cuisines",
        difficulty="Medium-Hard"
    ),
    QuestionSet(
        id=11,
        name="Baking Fundamentals",
        description="Learn the essential principles of baking!",
        questions=BAKING_BASICS_QUESTIONS,
        category="Cooking Basics",
        difficulty="Medium"
    ),
    QuestionSet(
        id=12,
        name="Professional Knife Skills",
        description="Master the art of knife techniques!",
        questions=KNIFE_SKILLS_QUESTIONS,
        category="Cooking Basics",
        difficulty="Medium-Hard"
    ),
    QuestionSet(
        id=13,
        name="Molecular Gastronomy",
        description="Explore the science of modern cuisine!",
        questions=MOLECULAR_GASTRONOMY_QUESTIONS,
        category="Food Science",
        difficulty="Hard"
    ),
    QuestionSet(
        id=14,
        name="Fermentation & Probiotics",
        description="Learn about fermented foods and their benefits!",
        questions=FERMENTATION_QUESTIONS,
        category="Food Science",
        difficulty="Medium"
    ),
    QuestionSet(
        id=15,
        name="Ancient Food History",
        description="Discover what our ancestors ate!",
        questions=ANCIENT_FOODS_QUESTIONS,
        category="Food History",
        difficulty="Medium-Hard"
    ),
    QuestionSet(
        id=16,
        name="Spice Trade History",
        description="Learn about the historic spice trade routes!",
        questions=SPICE_TRADE_QUESTIONS,
        category="Food History",
        difficulty="Medium-Hard"
    ),
    QuestionSet(
        id=17,
        name="Seasonal Cooking",
        description="Learn to cook with seasonal ingredients!",
        questions=[
            Question(
                id=49,
                question_text="Which vegetable is typically harvested in autumn?",
                choices=["Asparagus", "Pumpkin", "Peas", "Corn"],
                correct_answer_index=1,
                explanation="Pumpkins are harvested in autumn after a long growing season. They need warm soil to germinate and 75-100 days to mature, making fall the perfect time for harvest. This timing aligns with traditional harvest festivals and Halloween celebrations.",
                category="Cooking Basics",
                difficulty="Easy"
            ),
            Question(
                id=50,
                question_text="What is the peak season for strawberries?",
                choices=["Spring", "Summer", "Fall", "Winter"],
                correct_answer_index=1,
                explanation="Strawberries peak in summer, typically June, when warm days and cool nights create ideal growing conditions. While greenhouse cultivation allows year-round availability, summer strawberries develop the best flavor and sweetness due to optimal sunlight exposure.",
                category="Cooking Basics",
                difficulty="Easy"
            ),
            Question(
                id=51,
                question_text="Which seafood is best during winter months?",
                choices=["Tuna", "Salmon", "Oysters", "Shrimp"],
                correct_answer_index=2,
                explanation="Oysters are at their best in winter months, following the traditional rule of eating them in months containing the letter 'r' (September through April). Cold waters make oysters sweeter and firmer, and they're safer to eat due to reduced risk of harmful bacteria.",
                category="Cooking Basics",
                difficulty="Medium"
            ),
        ],
        category="Cooking Basics",
        difficulty="Easy-Medium"
    ),
    QuestionSet(
        id=18,
        name="Food Safety",
        description="Essential knowledge for safe food handling!",
        questions=[
            Question(
                id=52,
                question_text="What is the minimum safe cooking temperature for chicken?",
                choices=["145°F", "155°F", "165°F", "175°F"],
                correct_answer_index=2,
                explanation="Chicken must reach an internal temperature of 165°F (74°C) to be safe for consumption. This temperature ensures the destruction of harmful bacteria like Salmonella and Campylobacter. Always measure at the thickest part of the meat.",
                category="Cooking Basics",
                difficulty="Medium"
            ),
            Question(
                id=53,
                question_text="How long can cooked food be left at room temperature?",
                choices=["2 hours", "4 hours", "6 hours", "8 hours"],
                correct_answer_index=0,
                explanation="Cooked food should not be left at room temperature for more than 2 hours (1 hour if the temperature is above 90°F/32°C). Beyond this time, bacteria can multiply to dangerous levels in the 'danger zone' temperature range.",
                category="Cooking Basics",
                difficulty="Easy"
            ),
            Question(
                id=54,
                question_text="What is the proper order for storing food in a refrigerator?",
                choices=["Vegetables bottom, meat top", "Ready-to-eat top, raw meat bottom", "Dairy top, vegetables bottom", "Meat top, dairy bottom"],
                correct_answer_index=1,
                explanation="Ready-to-eat foods should be stored at the top and raw meat at the bottom of the refrigerator to prevent cross-contamination. This arrangement ensures that any drips from raw meat won't contaminate other foods.",
                category="Cooking Basics",
                difficulty="Medium"
            ),
        ],
        category="Cooking Basics",
        difficulty="Medium"
    ),
]

def get_question_sets() -> list[QuestionSet]:
    """Return all available question sets."""
    return QUESTION_SETS

def get_question_set(set_id: int) -> QuestionSet:
    """Return a specific question set by ID."""
    for question_set in QUESTION_SETS:
        if question_set.id == set_id:
            return question_set
    raise ValueError(f"Question set with ID {set_id} not found")

def get_sets_by_category(category: str) -> list[QuestionSet]:
    """Return all question sets in a specific category."""
    return [qs for qs in QUESTION_SETS if qs.category == category]