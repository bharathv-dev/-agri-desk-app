import { Crop, CropCategory } from '../types';

// Comprehensive crop classification data for Tamil Nadu
export const cropCategories: CropCategory[] = [
    'Food Crops',
    'Cash Crops',
    'Oilseed Crops',
    'Horticultural Crops',
    'Plantation Crops',
    'Fodder Crops',
    'Fiber Crops'
];

export const cropsData: Crop[] = [
    // FOOD CROPS - Cereals
    { id: 'crop-1', nameEnglish: 'Paddy', nameTamil: 'நெல்', category: 'Food Crops', subcategory: 'Cereals', image: require('../assets/crops/paddy_rice_crop_1768585953199.png') },
    { id: 'crop-2', nameEnglish: 'Maize', nameTamil: 'மக்காச்சோளம்', category: 'Food Crops', subcategory: 'Cereals', image: require('../assets/crops/maize_corn_crop_1768585969923.png') },
    { id: 'crop-3', nameEnglish: 'Sorghum (Jowar)', nameTamil: 'சோளம்', category: 'Food Crops', subcategory: 'Cereals', image: require('../assets/crops/sorghum_cereal_crop_1768586737614.png') },
    { id: 'crop-4', nameEnglish: 'Pearl Millet (Bajra)', nameTamil: 'கம்பு', category: 'Food Crops', subcategory: 'Cereals', image: require('../assets/crops/pearl_millet_crop_1768586753627.png') },
    { id: 'crop-5', nameEnglish: 'Finger Millet (Ragi)', nameTamil: 'கேழ்வரகு', category: 'Food Crops', subcategory: 'Cereals', image: require('../assets/crops/finger_millet_ragi_1768586770737.png') },
    { id: 'crop-6', nameEnglish: 'Wheat', nameTamil: 'கோதுமை', category: 'Food Crops', subcategory: 'Cereals', image: require('../assets/crops/wheat_cereal_crop_1768586788148.png') },

    // FOOD CROPS - Pulses
    { id: 'crop-7', nameEnglish: 'Black Gram (Urad)', nameTamil: 'உளுந்து', category: 'Food Crops', subcategory: 'Pulses', image: require('../assets/crops/black_gram_pulse_1768586804306.png') },
    { id: 'crop-8', nameEnglish: 'Green Gram (Moong)', nameTamil: 'பயறு', category: 'Food Crops', subcategory: 'Pulses' },
    { id: 'crop-9', nameEnglish: 'Red Gram (Tur)', nameTamil: 'துவரை', category: 'Food Crops', subcategory: 'Pulses' },
    { id: 'crop-10', nameEnglish: 'Bengal Gram (Chana)', nameTamil: 'கடலைப்பருப்பு', category: 'Food Crops', subcategory: 'Pulses' },
    { id: 'crop-11', nameEnglish: 'Horse Gram', nameTamil: 'கொள்ளு', category: 'Food Crops', subcategory: 'Pulses' },
    { id: 'crop-12', nameEnglish: 'Cowpea', nameTamil: 'கவுணிப்பயறு', category: 'Food Crops', subcategory: 'Pulses' },

    // FOOD CROPS - Tubers
    { id: 'crop-13', nameEnglish: 'Tapioca', nameTamil: 'மரவள்ளிக்கிழங்கு', category: 'Food Crops', subcategory: 'Tubers' },
    { id: 'crop-14', nameEnglish: 'Sweet Potato', nameTamil: 'சர்க்கரைவள்ளிக்கிழங்கு', category: 'Food Crops', subcategory: 'Tubers' },

    // CASH CROPS
    { id: 'crop-15', nameEnglish: 'Sugarcane', nameTamil: 'கரும்பு', category: 'Cash Crops', image: require('../assets/crops/sugarcane_crop_1768585986258.png') },
    { id: 'crop-16', nameEnglish: 'Cotton', nameTamil: 'பருத்தி', category: 'Cash Crops', image: require('../assets/crops/cotton_crop_1768586002500.png') },
    { id: 'crop-17', nameEnglish: 'Tobacco', nameTamil: 'புகையிலை', category: 'Cash Crops' },
    { id: 'crop-18', nameEnglish: 'Jute', nameTamil: 'சணல்', category: 'Cash Crops' },

    // OILSEED CROPS
    { id: 'crop-19', nameEnglish: 'Groundnut', nameTamil: 'நிலக்கடலை', category: 'Oilseed Crops', image: require('../assets/crops/groundnut_peanut_crop_1768586047017.png') },
    { id: 'crop-20', nameEnglish: 'Sesame (Gingelly)', nameTamil: 'எள்', category: 'Oilseed Crops' },
    { id: 'crop-21', nameEnglish: 'Sunflower', nameTamil: 'சூரியகாந்தி', category: 'Oilseed Crops', image: require('../assets/crops/sunflower_oilseed_crop_1768586487048.png') },
    { id: 'crop-22', nameEnglish: 'Castor', nameTamil: 'ஆமணக்கு', category: 'Oilseed Crops' },
    { id: 'crop-23', nameEnglish: 'Coconut', nameTamil: 'தேங்காய்', category: 'Oilseed Crops', image: require('../assets/crops/coconut_palm_crop_1768586063702.png') },
    { id: 'crop-24', nameEnglish: 'Safflower', nameTamil: 'குசும்பா', category: 'Oilseed Crops' },

    // HORTICULTURAL CROPS - Vegetables
    { id: 'crop-25', nameEnglish: 'Tomato', nameTamil: 'தக்காளி', category: 'Horticultural Crops', subcategory: 'Vegetables', image: require('../assets/crops/tomato_vegetable_crop_1768586368406.png') },
    { id: 'crop-26', nameEnglish: 'Onion', nameTamil: 'வெங்காயம்', category: 'Horticultural Crops', subcategory: 'Vegetables', image: require('../assets/crops/onion_vegetable_crop_1768586385389.png') },
    { id: 'crop-27', nameEnglish: 'Brinjal (Eggplant)', nameTamil: 'கத்தரிக்காய்', category: 'Horticultural Crops', subcategory: 'Vegetables' },
    { id: 'crop-28', nameEnglish: 'Okra (Ladiesfinger)', nameTamil: 'வெண்டைக்காய்', category: 'Horticultural Crops', subcategory: 'Vegetables' },
    { id: 'crop-29', nameEnglish: 'Cabbage', nameTamil: 'முட்டைக்கோஸ்', category: 'Horticultural Crops', subcategory: 'Vegetables' },
    { id: 'crop-30', nameEnglish: 'Cauliflower', nameTamil: 'காலிஃப்ளவர்', category: 'Horticultural Crops', subcategory: 'Vegetables' },
    { id: 'crop-31', nameEnglish: 'Beans', nameTamil: 'பீன்ஸ்', category: 'Horticultural Crops', subcategory: 'Vegetables' },
    { id: 'crop-32', nameEnglish: 'Carrot', nameTamil: 'கேரட்', category: 'Horticultural Crops', subcategory: 'Vegetables' },
    { id: 'crop-33', nameEnglish: 'Beetroot', nameTamil: 'பீட்ரூட்', category: 'Horticultural Crops', subcategory: 'Vegetables' },

    // HORTICULTURAL CROPS - Fruits
    { id: 'crop-34', nameEnglish: 'Banana', nameTamil: 'வாழை', category: 'Horticultural Crops', subcategory: 'Fruits', image: require('../assets/crops/banana_crop_1768586030824.png') },
    { id: 'crop-35', nameEnglish: 'Mango', nameTamil: 'மாம்பழம்', category: 'Horticultural Crops', subcategory: 'Fruits', image: require('../assets/crops/mango_fruit_crop_1768586418327.png') },
    { id: 'crop-36', nameEnglish: 'Guava', nameTamil: 'கொய்யா', category: 'Horticultural Crops', subcategory: 'Fruits' },
    { id: 'crop-37', nameEnglish: 'Papaya', nameTamil: 'பப்பாளி', category: 'Horticultural Crops', subcategory: 'Fruits' },
    { id: 'crop-38', nameEnglish: 'Sapota (Chikoo)', nameTamil: 'சப்போட்டா', category: 'Horticultural Crops', subcategory: 'Fruits' },
    { id: 'crop-39', nameEnglish: 'Pomegranate', nameTamil: 'மாதுளை', category: 'Horticultural Crops', subcategory: 'Fruits' },
    { id: 'crop-40', nameEnglish: 'Orange', nameTamil: 'ஆரஞ்சு', category: 'Horticultural Crops', subcategory: 'Fruits' },
    { id: 'crop-41', nameEnglish: 'Grapes', nameTamil: 'திராட்சை', category: 'Horticultural Crops', subcategory: 'Fruits' },

    // HORTICULTURAL CROPS - Flowers
    { id: 'crop-42', nameEnglish: 'Jasmine', nameTamil: 'மல்லிகை', category: 'Horticultural Crops', subcategory: 'Flowers', image: require('../assets/crops/jasmine_flower_crop_1768586502948.png') },
    { id: 'crop-43', nameEnglish: 'Rose', nameTamil: 'ரோஜா', category: 'Horticultural Crops', subcategory: 'Flowers' },
    { id: 'crop-44', nameEnglish: 'Marigold', nameTamil: 'செம்பருத்தி', category: 'Horticultural Crops', subcategory: 'Flowers' },
    { id: 'crop-45', nameEnglish: 'Chrysanthemum', nameTamil: 'சாமந்தி', category: 'Horticultural Crops', subcategory: 'Flowers' },
    { id: 'crop-46', nameEnglish: 'Tuberose', nameTamil: 'செண்பகம்', category: 'Horticultural Crops', subcategory: 'Flowers' },

    // HORTICULTURAL CROPS - Spices
    { id: 'crop-47', nameEnglish: 'Turmeric', nameTamil: 'மஞ்சள்', category: 'Horticultural Crops', subcategory: 'Spices', image: require('../assets/crops/turmeric_crop_1768586078698.png') },
    { id: 'crop-48', nameEnglish: 'Chilli', nameTamil: 'மிளகாய்', category: 'Horticultural Crops', subcategory: 'Spices', image: require('../assets/crops/chilli_pepper_crop_1768586402482.png') },
    { id: 'crop-49', nameEnglish: 'Coriander', nameTamil: 'கொத்தமல்லி', category: 'Horticultural Crops', subcategory: 'Spices' },
    { id: 'crop-50', nameEnglish: 'Ginger', nameTamil: 'இஞ்சி', category: 'Horticultural Crops', subcategory: 'Spices' },
    { id: 'crop-51', nameEnglish: 'Garlic', nameTamil: 'பூண்டு', category: 'Horticultural Crops', subcategory: 'Spices' },
    { id: 'crop-52', nameEnglish: 'Cardamom', nameTamil: 'ஏலக்காய்', category: 'Horticultural Crops', subcategory: 'Spices' },
    { id: 'crop-53', nameEnglish: 'Pepper', nameTamil: 'மிளகு', category: 'Horticultural Crops', subcategory: 'Spices' },

    // PLANTATION CROPS
    { id: 'crop-54', nameEnglish: 'Tea', nameTamil: 'தேயிலை', category: 'Plantation Crops', image: require('../assets/crops/tea_plantation_crop_1768586453120.png') },
    { id: 'crop-55', nameEnglish: 'Coffee', nameTamil: 'காபி', category: 'Plantation Crops', image: require('../assets/crops/coffee_plantation_crop_1768586470994.png') },
    { id: 'crop-56', nameEnglish: 'Rubber', nameTamil: 'ரப்பர்', category: 'Plantation Crops' },
    { id: 'crop-57', nameEnglish: 'Cashew', nameTamil: 'முந்திரி', category: 'Plantation Crops' },
    { id: 'crop-58', nameEnglish: 'Arecanut', nameTamil: 'பாக்கு', category: 'Plantation Crops' },

    // FODDER CROPS
    { id: 'crop-59', nameEnglish: 'Napier Grass', nameTamil: 'கொ4 புல்', category: 'Fodder Crops' },
    { id: 'crop-60', nameEnglish: 'Guinea Grass', nameTamil: 'கினி புல்', category: 'Fodder Crops' },
    { id: 'crop-61', nameEnglish: 'Lucerne (Alfalfa)', nameTamil: 'அல்ஃபால்ஃபா', category: 'Fodder Crops' },
    { id: 'crop-62', nameEnglish: 'Sorghum Fodder', nameTamil: 'தீவன சோளம்', category: 'Fodder Crops' },

    // FIBER CROPS
    { id: 'crop-63', nameEnglish: 'Cotton', nameTamil: 'பருத்தி', category: 'Fiber Crops' },
    { id: 'crop-64', nameEnglish: 'Jute', nameTamil: 'சணல்', category: 'Fiber Crops' },
    { id: 'crop-65', nameEnglish: 'Coir (Coconut Fiber)', nameTamil: 'தேங்காய் நார்', category: 'Fiber Crops' },
];

// Helper function to get crops by category
export const getCropsByCategory = (category: CropCategory) => {
    return cropsData.filter(crop => crop.category === category);
};

// Helper function to group crops by subcategory
export const groupCropsBySubcategory = (category: CropCategory) => {
    const crops = getCropsByCategory(category);
    const grouped: { [key: string]: Crop[] } = {};

    crops.forEach(crop => {
        const sub = crop.subcategory || 'General';
        if (!grouped[sub]) {
            grouped[sub] = [];
        }
        grouped[sub].push(crop);
    });

    return grouped;
};

export default cropsData;
