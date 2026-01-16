import { Season } from '../types';

// Crop seasons data for Tamil Nadu
export const seasonsData: Season[] = [
    {
        id: 'season-1',
        name: 'Kuruvai Season',
        nameTamil: 'குறுவை பருவம்',
        months: 'June - September',
        description: 'Short-term paddy cultivation during southwest monsoon',
        crops: [
            { nameEnglish: 'Paddy (Short duration)', nameTamil: 'நெல்', duration: '90-110' },
            { nameEnglish: 'Black Gram', nameTamil: 'உளுந்து', duration: '65-75' },
            { nameEnglish: 'Green Gram', nameTamil: 'பயறு', duration: '60-70' },
            { nameEnglish: 'Maize', nameTamil: 'மக்காச்சோளம்', duration: '90-110' },
            { nameEnglish: 'Groundnut', nameTamil: 'நிலக்கடலை', duration: '100-120' }
        ]
    },
    {
        id: 'season-2',
        name: 'Samba Season',
        nameTamil: 'சம்பா பருவம்',
        months: 'August - January',
        description: 'Main paddy cultivation season using northeast monsoon',
        crops: [
            { nameEnglish: 'Paddy (Long duration)', nameTamil: 'நெல்', duration: '135-160' },
            { nameEnglish: 'Sugarcane', nameTamil: 'கரும்பு', duration: '300-365' },
            { nameEnglish: 'Cotton', nameTamil: 'பருத்தி', duration: '150-180' },
            { nameEnglish: 'Banana', nameTamil: 'வாழை', duration: '270-300' },
            { nameEnglish: 'Turmeric', nameTamil: 'மஞ்சள்', duration: '240-270' }
        ]
    },
    {
        id: 'season-3',
        name: 'Thaladi Season',
        nameTamil: 'தாளடி பருவம்',
        months: 'October - March',
        description: 'Late/third crop season utilizing residual moisture and tail-end water',
        crops: [
            { nameEnglish: 'Paddy (Medium duration)', nameTamil: 'நெல்', duration: '120-135' },
            { nameEnglish: 'Pulses', nameTamil: 'பருப்பு வகைகள்', duration: '90-110' },
            { nameEnglish: 'Sesame', nameTamil: 'எள்', duration: '85-95' },
            { nameEnglish: 'Groundnut', nameTamil: 'நிலக்கடலை', duration: '100-115' }
        ]
    },
    {
        id: 'season-4',
        name: 'Navarai (Summer)',
        nameTamil: 'நவராய் பருவம்',
        months: 'February - June',
        description: 'Summer crop season relying on irrigation',
        crops: [
            { nameEnglish: 'Paddy (Short duration)', nameTamil: 'நெல்', duration: '95-110' },
            { nameEnglish: 'Black Gram', nameTamil: 'உளுந்து', duration: '65-75' },
            { nameEnglish: 'Green Gram', nameTamil: 'பயறு', duration: '60-70' },
            { nameEnglish: 'Sesame', nameTamil: 'எள்', duration: '80-90' },
            { nameEnglish: 'Watermelon', nameTamil: 'தர்பூசணி', duration: '80-95' },
            { nameEnglish: 'Vegetables', nameTamil: 'காய்கறிகள்', duration: '60-90' }
        ]
    },
    {
        id: 'season-5',
        name: 'Kharif',
        nameTamil: 'கரீஃப் பருவம்',
        months: 'June - October',
        description: 'Monsoon season crops (Southwest monsoon)',
        crops: [
            { nameEnglish: 'Paddy', nameTamil: 'நெல்', duration: '120-150' },
            { nameEnglish: 'Cotton', nameTamil: 'பருத்தி', duration: '150-180' },
            { nameEnglish: 'Millets', nameTamil: 'சிறுதானியங்கள்', duration: '90-120' },
            { nameEnglish: 'Maize', nameTamil: 'மக்காச்சோளம்', duration: '90-110' },
            { nameEnglish: 'Groundnut', nameTamil: 'நிலக்கடலை', duration: '110-130' }
        ]
    },
    {
        id: 'season-6',
        name: 'Rabi',
        nameTamil: 'ரபி பருவம்',
        months: 'October - March',
        description: 'Winter season crops (Northeast monsoon)',
        crops: [
            { nameEnglish: 'Paddy', nameTamil: 'நெல்', duration: '130-150' },
            { nameEnglish: 'Wheat', nameTamil: 'கோதுமை', duration: '110-130' },
            { nameEnglish: 'Pulses', nameTamil: 'பருப்பு வகைகள்', duration: '90-120' },
            { nameEnglish: 'Sunflower', nameTamil: 'சூரியகாந்தி', duration: '90-110' },
            { nameEnglish: 'Vegetables', nameTamil: 'காய்கறிகள்', duration: '70-100' }
        ]
    },
    {
        id: 'season-7',
        name: 'Summer',
        nameTamil: 'கோடை பருவம்',
        months: 'March - May',
        description: 'Hot summer season requiring irrigation',
        crops: [
            { nameEnglish: 'Black Gram', nameTamil: 'உளுந்து', duration: '60-70' },
            { nameEnglish: 'Green Gram', nameTamil: 'பயறு', duration: '60-70' },
            { nameEnglish: 'Sesame', nameTamil: 'எள்', duration: '75-85' },
            { nameEnglish: 'Cucurbits', nameTamil: 'பூசணிக்காய் வகைகள்', duration: '70-90' },
            { nameEnglish: 'Vegetables', nameTamil: 'காய்கறிகள்', duration: '60-80' }
        ]
    }
];

export default seasonsData;
