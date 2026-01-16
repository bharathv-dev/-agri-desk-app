import { ClimateZone } from '../types';

// Agro-Climatic Zones of Tamil Nadu
export const climateZonesData: ClimateZone[] = [
    {
        id: 'zone-1',
        name: 'North Eastern Zone',
        districts: ['Kancheepuram', 'Tiruvallur', 'Cuddalore', 'Villupuram'],
        altitude: '0-100 meters above MSL',
        annualRainfall: '900-1200 mm',
        temperature: '25-35°C',
        humidity: 'Moderate to High',
        majorCrops: [
            'Paddy',
            'Groundnut',
            'Sugarcane',
            'Cotton',
            'Pulses (Black gram, Green gram)',
            'Banana',
            'Tapioca'
        ]
    },
    {
        id: 'zone-2',
        name: 'North Western Zone',
        districts: ['Dharmapuri', 'Salem', 'Namakkal', 'Erode (parts)'],
        altitude: '200-500 meters above MSL',
        annualRainfall: '700-900 mm',
        temperature: '20-32°C',
        humidity: 'Low to Moderate',
        majorCrops: [
            'Millets (Ragi, Jowar, Bajra)',
            'Cotton',
            'Groundnut',
            'Maize',
            'Turmeric',
            'Pulses',
            'Tamarind',
            'Vegetables'
        ]
    },
    {
        id: 'zone-3',
        name: 'Western Zone',
        districts: ['Coimbatore', 'Erode (parts)', 'Tiruppur'],
        altitude: '200-400 meters above MSL',
        annualRainfall: '600-800 mm',
        temperature: '22-33°C',
        humidity: 'Moderate',
        majorCrops: [
            'Cotton',
            'Sugarcane',
            'Turmeric',
            'Banana',
            'Coconut',
            'Maize',
            'Vegetables',
            'Flowers'
        ]
    },
    {
        id: 'zone-4',
        name: 'Cauvery Delta Zone',
        districts: ['Thanjavur', 'Tiruvarur', 'Nagapattinam', 'Karur (parts)', 'Pudukkottai (parts)'],
        altitude: '0-50 meters above MSL',
        annualRainfall: '950-1150 mm',
        temperature: '24-36°C',
        humidity: 'High',
        majorCrops: [
            'Paddy (Main crop)',
            'Sugarcane',
            'Banana',
            'Pulses',
            'Groundnut',
            'Cotton',
            'Gingelly (Sesame)',
            'Coconut'
        ]
    },
    {
        id: 'zone-5',
        name: 'Southern Zone',
        districts: ['Madurai', 'Virudhunagar', 'Ramanathapuram', 'Sivagangai', 'Dindigul (parts)'],
        altitude: '100-300 meters above MSL',
        annualRainfall: '800-950 mm',
        temperature: '25-37°C',
        humidity: 'Low to Moderate',
        majorCrops: [
            'Cotton',
            'Groundnut',
            'Millets (Cumbu, Cholam)',
            'Pulses',
            'Chillies',
            'Onion',
            'Coconut',
            'Banana'
        ]
    },
    {
        id: 'zone-6',
        name: 'High Rainfall Zone',
        districts: ['Kanyakumari', 'Tirunelveli (parts)'],
        altitude: '0-200 meters above MSL',
        annualRainfall: '1200-1800 mm',
        temperature: '24-32°C',
        humidity: 'Very High',
        majorCrops: [
            'Paddy',
            'Coconut',
            'Banana',
            'Tapioca',
            'Rubber',
            'Cashew',
            'Pepper',
            'Cloves',
            'Nutmeg'
        ]
    },
    {
        id: 'zone-7',
        name: 'Hilly and High Altitude Zone',
        districts: ['Nilgiris', 'Kodaikanal (Dindigul)', 'Yercaud (Salem)', 'Kolli Hills (Namakkal)'],
        altitude: '800-2600 meters above MSL',
        annualRainfall: '1000-2500 mm',
        temperature: '10-25°C',
        humidity: 'High',
        majorCrops: [
            'Tea',
            'Coffee',
            'Cardamom',
            'Pepper',
            'Potato',
            'Carrot',
            'Cabbage',
            'Eucalyptus',
            'Wattle (Black wattle)'
        ]
    }
];

export default climateZonesData;
