// config.js - Configuration complète pour la boutique

// Configuration du produit
const PRODUCT_CONFIG = {
    name: "Élégance Noire",
    description: "✦ Acier inoxydable • Verre saphir • Étanche 5 ATM ✦\nDesign intemporel, mouvement suisse. Livraison rapide dans toute l'Algérie.",
    unitPrice: 1200, // Prix en DZD
    images: ["w5.png", "w1.png", "w2.png", "w3.png", "w4.png"], // Ordre des images
    currency: "DZD"
};

// URL Google Sheets pour les commandes
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw4NPx8hJae07a8bxO084oPPmVXHdWIgmN95e-4-OMB-6ufCkQ-cfNgfBr4qjlZcTlWsg/exec'; // À remplacer par votre vrai URL

// Configuration des wilayas avec frais de livraison
const DELIVERY_FEES = {
    "01 - Adrar": { stopdesk: 900, domicile: 1400 },
    "02 - Chlef": { stopdesk: 450, domicile: 750 },
    "03 - Laghouat": { stopdesk: 600, domicile: 950 },
    "04 - Oum El Bouaghi": { stopdesk: 450, domicile: 800 },
    "05 - Batna": { stopdesk: 450, domicile: 800 },
    "06 - Béjaïa": { stopdesk: 450, domicile: 800 },
    "07 - Biskra": { stopdesk: 600, domicile: 950 },
    "08 - Béchar": { stopdesk: 650, domicile: 1100 },
    "09 - Blida": { stopdesk: 300, domicile: 400 },
    "10 - Bouira": { stopdesk: 450, domicile: 750 },
    "11 - Tamanrasset": { stopdesk: 1050, domicile: 1600 },
    "12 - Tébessa": { stopdesk: 450, domicile: 850 },
    "13 - Tlemcen": { stopdesk: 500, domicile: 850 },
    "14 - Tiaret": { stopdesk: 450, domicile: 800 },
    "15 - Tizi Ouzou": { stopdesk: 450, domicile: 750 },
    "16 - Alger": { stopdesk: 350, domicile: 500 },
    "17 - Djelfa": { stopdesk: 600, domicile: 950 },
    "18 - Jijel": { stopdesk: 450, domicile: 800 },
    "19 - Sétif": { stopdesk: 450, domicile: 750 },
    "20 - Saïda": { stopdesk: 450, domicile: 800 },
    "21 - Skikda": { stopdesk: 450, domicile: 800 },
    "22 - Sidi Bel Abbès": { stopdesk: 450, domicile: 800 },
    "23 - Annaba": { stopdesk: 450, domicile: 800 },
    "24 - Guelma": { stopdesk: 450, domicile: 800 },
    "25 - Constantine": { stopdesk: 450, domicile: 800 },
    "26 - Médéa": { stopdesk: 450, domicile: 750 },
    "27 - Mostaganem": { stopdesk: 450, domicile: 800 },
    "28 - M'Sila": { stopdesk: 500, domicile: 850 },
    "29 - Mascara": { stopdesk: 450, domicile: 800 },
    "30 - Ouargla": { stopdesk: 600, domicile: 950 },
    "31 - Oran": { stopdesk: 450, domicile: 800 },
    "32 - El Bayadh": { stopdesk: 650, domicile: 1100 },
    "33 - Illizi": { stopdesk: 1050, domicile: 1600 },
    "34 - Bordj Bou Arreridj": { stopdesk: 450, domicile: 750 },
    "35 - Boumerdès": { stopdesk: 450, domicile: 750 },
    "36 - El Tarf": { stopdesk: 450, domicile: 800 },
    "37 - Tindouf": { stopdesk: 1050, domicile: 1600 },
    "38 - Tissemsilt": { stopdesk: 450, domicile: 800 },
    "39 - El Oued": { stopdesk: 600, domicile: 950 },
    "40 - Khenchela": { stopdesk: 450, domicile: 800 },
    "41 - Souk Ahras": { stopdesk: 450, domicile: 800 },
    "42 - Tipaza": { stopdesk: 450, domicile: 750 },
    "43 - Mila": { stopdesk: 450, domicile: 800 },
    "44 - Aïn Defla": { stopdesk: 450, domicile: 750 },
    "45 - Naâma": { stopdesk: 650, domicile: 1100 },
    "46 - Aïn Témouchent": { stopdesk: 450, domicile: 800 },
    "47 - Ghardaïa": { stopdesk: 600, domicile: 950 },
    "48 - Relizane": { stopdesk: 450, domicile: 800 },
    "49 - El M'Ghair": { stopdesk: 600, domicile: 950 },
    "50 - El Menia": { stopdesk: 600, domicile: 1000 },
    "51 - Ouled Djellal": { stopdesk: 550, domicile: 950 },
    "52 - Bordj Baji Mokhtar": { stopdesk: 1050, domicile: 1600 },
    "53 - Béni Abbès": { stopdesk: 650, domicile: 1000 },
    "54 - Timimoun": { stopdesk: 650, domicile: 1400 },
    "55 - Touggourt": { stopdesk: 600, domicile: 950 },
    "56 - Djanet": { stopdesk: 1050, domicile: 1600 },
    "57 - In Salah": { stopdesk: 900, domicile: 1600 },
    "58 - In Guezzam": { stopdesk: 1050, domicile: 1600 }
};

// Exporter les configurations pour les rendre disponibles globalement
window.CONFIG = {
    PRODUCT: PRODUCT_CONFIG,
    DELIVERY_FEES: DELIVERY_FEES,
    GOOGLE_SCRIPT_URL: GOOGLE_SCRIPT_URL
};
