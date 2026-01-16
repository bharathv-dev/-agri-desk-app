import { CropRequirement } from '../types';

// District-wise crop requirements by season
export const cropRequirementsData: CropRequirement[] = [
    // KURUVAI SEASON
    {
        id: 'req-1',
        cropName: 'Paddy (Short Duration)',
        cropNameTamil: 'நெல் (குறுகிய காலம்)',
        season: 'Kuruvai',
        majorDistricts: ['Thanjavur', 'Tiruvarur', 'Nagapattinam', 'Cuddalore'],
        suitableSoil: ['Alluvial soil', 'Clay loam'],
        weatherCondition: 'Warm and humid with good rainfall',
        temperature: '25-30°C',
        waterRequirement: {
            level: 'High',
            amount: '1200-1500 mm'
        }
    },
    {
        id: 'req-2',
        cropName: 'Groundnut',
        cropNameTamil: 'நிலக்கடலை',
        season: 'Kuruvai',
        majorDistricts: ['Villupuram', 'Cuddalore', 'Vellore', 'Tiruvannamalai'],
        suitableSoil: ['Red sandy loam', 'Well-drained soil'],
        weatherCondition: 'Warm weather with moderate rainfall',
        temperature: '22-30°C',
        waterRequirement: {
            level: 'Medium',
            amount: '500-600 mm'
        }
    },

    // SAMBA SEASON
    {
        id: 'req-3',
        cropName: 'Paddy (Long Duration)',
        cropNameTamil: 'நெல் (நீண்ட காலம்)',
        season: 'Samba',
        majorDistricts: ['Thanjavur', 'Tiruvarur', 'Nagapattinam', 'Karur'],
        suitableSoil: ['Alluvial soil', 'Clay soil'],
        weatherCondition: 'Moderate temperature with good water availability',
        temperature: '20-28°C',
        waterRequirement: {
            level: 'High',
            amount: '1500-1800 mm'
        }
    },
    {
        id: 'req-4',
        cropName: 'Sugarcane',
        cropNameTamil: 'கரும்பு',
        season: 'Samba',
        majorDistricts: ['Erode', 'Coimbatore', 'Tirupur', 'Salem', 'Thanjavur'],
        suitableSoil: ['Black cotton soil', 'Alluvial soil', 'Red loam'],
        weatherCondition: 'Warm humid climate with ample sunlight',
        temperature: '21-27°C',
        waterRequirement: {
            level: 'High',
            amount: '1500-2500 mm'
        }
    },
    {
        id: 'req-5',
        cropName: 'Cotton',
        cropNameTamil: 'பருத்தி',
        season: 'Samba',
        majorDistricts: ['Coimbatore', 'Tiruppur', 'Erode', 'Madurai', 'Virudhunagar'],
        suitableSoil: ['Black cotton soil', 'Red loam'],
        weatherCondition: 'Dry weather during boll development',
        temperature: '21-30°C',
        waterRequirement: {
            level: 'Medium',
            amount: '700-1000 mm'
        }
    },

    // THALADI SEASON
    {
        id: 'req-6',
        cropName: 'Paddy (Medium Duration)',
        cropNameTamil: 'நெல் (நடு காலம்)',
        season: 'Thaladi',
        majorDistricts: ['Thanjavur', 'Tiruvarur', 'Cuddalore'],
        suitableSoil: ['Alluvial soil', 'Clay loam'],
        weatherCondition: 'Moderate temperature with residual moisture',
        temperature: '22-28°C',
        waterRequirement: {
            level: 'Medium',
            amount: '1000-1200 mm'
        }
    },
    {
        id: 'req-7',
        cropName: 'Black Gram',
        cropNameTamil: 'உளுந்து',
        season: 'Thaladi',
        majorDistricts: ['Tiruvannamalai', 'Villupuram', 'Cuddalore', 'Salem'],
        suitableSoil: ['Red sandy loam', 'Black soil'],
        weatherCondition: 'Cool dry weather during maturity',
        temperature: '25-30°C',
        waterRequirement: {
            level: 'Low',
            amount: '300-400 mm'
        }
    },

    // NAVARAI SEASON
    {
        id: 'req-8',
        cropName: 'Paddy (Short Duration)',
        cropNameTamil: 'நெல் (குறுகிய காலம்)',
        season: 'Navarai',
        majorDistricts: ['Thanjavur', 'Tiruvarur', 'Nagapattinam'],
        suitableSoil: ['Alluvial soil', 'Clay soil'],
        weatherCondition: 'Hot summer with assured irrigation',
        temperature: '28-35°C',
        waterRequirement: {
            level: 'High',
            amount: '1200-1400 mm'
        }
    },
    {
        id: 'req-9',
        cropName: 'Green Gram',
        cropNameTamil: 'பயறு',
        season: 'Navarai',
        majorDistricts: ['Dharmapuri', 'Salem', 'Villupuram', 'Tiruvannamalai'],
        suitableSoil: ['Red sandy loam', 'Well-drained soil'],
        weatherCondition: 'Warm weather with irrigation',
        temperature: '25-35°C',
        waterRequirement: {
            level: 'Low',
            amount: '300-400 mm'
        }
    },
    {
        id: 'req-10',
        cropName: 'Watermelon',
        cropNameTamil: 'தர்பூசணி',
        season: 'Navarai',
        majorDistricts: ['Salem', 'Dharmapuri', 'Erode', 'Karur'],
        suitableSoil: ['Sandy loam', 'Well-drained soil'],
        weatherCondition: 'Hot sunny weather',
        temperature: '25-35°C',
        waterRequirement: {
            level: 'Medium',
            amount: '400-600 mm'
        }
    },

    // Additional crops
    {
        id: 'req-11',
        cropName: 'Maize',
        cropNameTamil: 'மக்காச்சோளம்',
        season: 'Kharif',
        majorDistricts: ['Dharmapuri', 'Salem', 'Namakkal', 'Erode', 'Coimbatore'],
        suitableSoil: ['Red loam', 'Black soil', 'Alluvial soil'],
        weatherCondition: 'Warm weather with moderate rainfall',
        temperature: '21-27°C',
        waterRequirement: {
            level: 'Medium',
            amount: '500-750 mm'
        }
    },
    {
        id: 'req-12',
        cropName: 'Turmeric',
        cropNameTamil: 'மஞ்சள்',
        season: 'Samba',
        majorDistricts: ['Erode', 'Salem', 'Namakkal', 'Coimbatore'],
        suitableSoil: ['Red loam', 'Clay loam with good drainage'],
        weatherCondition: 'Humid climate with moderate rainfall',
        temperature: '20-30°C',
        waterRequirement: {
            level: 'Medium',
            amount: '1500-2250 mm'
        }
    },
    {
        id: 'req-13',
        cropName: 'Banana',
        cropNameTamil: 'வாழை',
        season: 'Year-round',
        majorDistricts: ['Trichy', 'Thanjavur', 'Erode', 'Theni', 'Kanyakumari'],
        suitableSoil: ['Alluvial soil', 'Clay loam', 'Well-drained soil'],
        weatherCondition: 'Warm humid climate',
        temperature: '15-35°C',
        waterRequirement: {
            level: 'High',
            amount: '1800-2700 mm'
        }
    },
    {
        id: 'req-14',
        cropName: 'Coconut',
        cropNameTamil: 'தேங்காய்',
        season: 'Year-round',
        majorDistricts: ['Coimbatore', 'Pollachi', 'Thanjavur', 'Kanyakumari', 'Tirunelveli'],
        suitableSoil: ['Sandy loam', 'Laterite soil', 'Coastal soil'],
        weatherCondition: 'Warm humid coastal climate',
        temperature: '20-32°C',
        waterRequirement: {
            level: 'High',
            amount: '1500-2500 mm'
        }
    },
    {
        id: 'req-15',
        cropName: 'Onion',
        cropNameTamil: 'வெங்காயம்',
        season: 'Rabi',
        majorDistricts: ['Dindigul', 'Perambalur', 'Coimbatore', 'Salem'],
        suitableSoil: ['Red loam', 'Sandy loam with good drainage'],
        weatherCondition: 'Cool dry weather during bulb formation',
        temperature: '13-24°C',
        waterRequirement: {
            level: 'Medium',
            amount: '350-550 mm'
        }
    }
];

// Helper function to get requirements by season
export const getRequirementsBySeason = (season: string) => {
    return cropRequirementsData.filter(req => req.season === season);
};

export default cropRequirementsData;
