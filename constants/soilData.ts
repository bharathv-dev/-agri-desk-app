import { SoilType } from '../types';

// Soil Types data for Tamil Nadu by region
export const soilTypesData: SoilType[] = [
    {
        id: 'soil-1',
        districts: ['Thanjavur', 'Tiruvarur', 'Nagapattinam'],
        soilTypeEnglish: 'Alluvial Soil',
        soilTypeTamil: 'தடிமனில்லா மண் / நதி பாழ் மண்',
        notes: 'Very fertile; ideal for paddy, sugarcane, banana',
        characteristics: ['High fertility', 'Good water retention', 'Rich in nutrients'],
        suitableCrops: ['Paddy', 'Sugarcane', 'Banana', 'Cotton', 'Groundnut']
    },
    {
        id: 'soil-2',
        districts: ['Villupuram', 'Cuddalore'],
        soilTypeEnglish: 'Coastal Alluvial Soil',
        soilTypeTamil: 'கடற்கரை வண்டல் மண்',
        notes: 'High salt content; suitable for rice and coconut',
        characteristics: ['Saline nature', 'Moderate fertility', 'Near coastal regions'],
        suitableCrops: ['Rice', 'Coconut', 'Cashew', 'Casuarina']
    },
    {
        id: 'soil-3',
        districts: ['Kancheepuram', 'Tiruvallur', 'Vellore'],
        soilTypeEnglish: 'Red Sandy Loam',
        soilTypeTamil: 'சிவப்பு மணல் வண்டல் மண்',
        notes: 'Moderate fertility; needs irrigation for crops like groundnut and millets',
        characteristics: ['Porous texture', 'Low water retention', 'Iron oxide content'],
        suitableCrops: ['Groundnut', 'Millets', 'Pulses', 'Castor', 'Vegetables']
    },
    {
        id: 'soil-4',
        districts: ['Dharmapuri', 'Salem', 'Namakkal'],
        soilTypeEnglish: 'Red Loam Soil',
        soilTypeTamil: 'சிவப்பு களிமண்',
        notes: 'Well-drained; suitable for millets, oilseeds, and cotton',
        characteristics: ['Good drainage', 'Moderate fertility', 'Responds well to manure'],
        suitableCrops: ['Cotton', 'Millets', 'Oilseeds', 'Turmeric', 'Maize']
    },
    {
        id: 'soil-5',
        districts: ['Coimbatore', 'Erode', 'Tiruppur'],
        soilTypeEnglish: 'Black Cotton Soil',
        soilTypeTamil: 'கருப்பு பருத்தி மண்',
        notes: 'High clay content; excellent for cotton, sugarcane, and pulses',
        characteristics: ['High clay content', 'Water retention capacity', 'Rich in lime and iron'],
        suitableCrops: ['Cotton', 'Sugarcane', 'Pulses', 'Jowar', 'Wheat']
    },
    {
        id: 'soil-6',
        districts: ['Madurai', 'Virudhunagar', 'Ramanathapuram'],
        soilTypeEnglish: 'Red Sandy Soil',
        soilTypeTamil: 'சிவப்பு மணல் மண்',
        notes: 'Low fertility; suitable for drought-resistant crops',
        characteristics: ['Sandy texture', 'Poor water retention', 'Low nutrients'],
        suitableCrops: ['Millets', 'Groundnut', 'Sesame', 'Cotton', 'Pulses']
    },
    {
        id: 'soil-7',
        districts: ['Kanyakumari', 'Tirunelveli'],
        soilTypeEnglish: 'Coastal Sandy Soil',
        soilTypeTamil: 'கடற்கரை மணல் மண்',
        notes: 'Sandy with salt deposits; ideal for coconut and tapioca',
        characteristics: ['High sand content', 'Saline', 'Good aeration'],
        suitableCrops: ['Coconut', 'Tapioca', 'Cashew', 'Rice']
    },
    {
        id: 'soil-8',
        districts: ['Nilgiris', 'Parts of Coimbatore'],
        soilTypeEnglish: 'Laterite Soil',
        soilTypeTamil: 'லேட்டரைட் மண்',
        notes: 'Rich in iron and aluminum; suitable for tea, coffee, and cashew',
        characteristics: ['Acidic nature', 'High iron content', 'Porous'],
        suitableCrops: ['Tea', 'Coffee', 'Cashew', 'Rubber', 'Spices']
    },
    {
        id: 'soil-9',
        districts: ['Sivagangai', 'Pudukkottai'],
        soilTypeEnglish: 'Mixed Red and Black Soil',
        soilTypeTamil: 'கலப்பு சிவப்பு மற்றும் கருப்பு மண்',
        notes: 'Combination of red and black soil properties; versatile for various crops',
        characteristics: ['Mixed properties', 'Moderate fertility', 'Variable water retention'],
        suitableCrops: ['Cotton', 'Millets', 'Pulses', 'Oilseeds']
    },
    {
        id: 'soil-10',
        districts: ['Karur', 'Perambalur'],
        soilTypeEnglish: 'Red Clay Soil',
        soilTypeTamil: 'சிவப்பு களிமண்',
        notes: 'Good for sugarcane and paddy with proper irrigation',
        characteristics: ['Clay content', 'Water retention', 'Needs fertilizers'],
        suitableCrops: ['Sugarcane', 'Paddy', 'Banana', 'Turmeric']
    }
];

export default soilTypesData;
