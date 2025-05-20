type PetToxinInfo = {
    ingredient: string;
    dangerousTo: string[];
    info: string;
};

const PET_TOXINS: Record<string, { pets: string[]; info: string }> = {
    "xylitol": {
      pets: ["dogs"],
      info: "Xylitol can cause rapid insulin release in dogs, leading to hypoglycemia, seizures, and liver failure."
    },
    "chocolate": {
      pets: ["dogs", "cats"],
      info: "Chocolate contains theobromine and caffeine, which are toxic to both dogs and cats and may cause vomiting, tremors, or seizures."
    },
    "cocoa": {
      pets: ["dogs", "cats"],
      info: "Cocoa is a source of theobromine and caffeine, both harmful to pets, especially dogs and cats."
    },
    "onion": {
      pets: ["dogs", "cats"],
      info: "Onions can damage red blood cells in dogs and cats, potentially leading to anemia."
    },
    "garlic": {
      pets: ["dogs", "cats"],
      info: "Garlic, like onions, can cause gastrointestinal upset and red blood cell damage."
    },
    "grapes": {
      pets: ["dogs"],
      info: "Grapes can lead to sudden kidney failure in dogs, even in small amounts."
    },
    "raisins": {
      pets: ["dogs"],
      info: "Raisins are concentrated grapes and equally dangerous, often causing acute kidney failure."
    },
    "alcohol": {
      pets: ["dogs", "cats"],
      info: "Even small amounts of alcohol can cause vomiting, diarrhea, difficulty breathing, and coma."
    },
    "caffeine": {
      pets: ["dogs", "cats"],
      info: "Caffeine can cause restlessness, rapid breathing, heart palpitations, and muscle tremors."
    },
    "macadamia": {
      pets: ["dogs"],
      info: "Macadamia nuts can cause weakness, vomiting, and tremors in dogs."
    },
    "avocado": {
      pets: ["birds", "rabbits"],
      info: "Avocado contains persin, which can be toxic to birds and rabbits."
    },
    "tea tree oil": {
      pets: ["cats", "dogs"],
      info: "Even small amounts of tea tree oil can cause severe poisoning in pets if ingested or absorbed through the skin."
    },
    "yeast dough": {
      pets: ["dogs", "cats"],
      info: "Yeast dough can expand in pets' stomachs and produce alcohol, causing bloating and ethanol toxicity."
    }
};

export function scanForPetToxins(ingredients: string): PetToxinInfo[] {
    const foundToxins: PetToxinInfo[] = [];
    const lowerIngredients = ingredients.toLowerCase();
  
    for (const toxin in PET_TOXINS) {
      const regex = new RegExp(`\\b${toxin}\\b`, "i");
      if (regex.test(lowerIngredients)) {
        foundToxins.push({
          ingredient: toxin,
          dangerousTo: PET_TOXINS[toxin].pets,
          info: PET_TOXINS[toxin].info
        });
      }
    }
  
    return foundToxins;
  }
  