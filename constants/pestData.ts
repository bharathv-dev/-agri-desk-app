import { Pest } from '../types';

// Major pests of crops in Tamil Nadu
export const pestCategories = [
    'Paddy',
    'Maize',
    'Pulses',
    'Oilseeds',
    'Cotton',
    'Vegetables',
    'Plantation Crops'
];

export const pestsData: Pest[] = [
    // PADDY PESTS
    {
        id: 'pest-1',
        nameEnglish: 'Yellow Stem Borer',
        nameTamil: 'மஞ்சள் தண்டு துளைப்பான்',
        cropCategory: 'Paddy',
        damageCaused: 'Dead heart in vegetative stage, white ear in reproductive stage',
        symptoms: ['Central shoot dries up', 'Panicles turn white']
    },
    {
        id: 'pest-2',
        nameEnglish: 'Brown Plant Hopper',
        nameTamil: 'பழுப்பு தாவர குதிப்பான்',
        cropCategory: 'Paddy',
        damageCaused: 'Sucks plant sap causing hopper burn, plants dry and die',
        symptoms: ['Yellowing of leaves', 'Stunted growth', 'Hopper burn patches']
    },
    {
        id: 'pest-3',
        nameEnglish: 'Leaf Folder',
        nameTamil: 'இலை மடக்கும் புழு',
        cropCategory: 'Paddy',
        damageCaused: 'Folds leaves and feeds inside, reduces photosynthesis',
        symptoms: ['Longitudinally folded leaves', 'White streaks on leaves']
    },
    {
        id: 'pest-4',
        nameEnglish: 'Rice Gall Midge',
        nameTamil: 'நெல் கால் மிட்ஜ்',
        cropCategory: 'Paddy',
        damageCaused: 'Silver shoot/onion leaf formation, prevents panicle emergence',
        symptoms: ['Tubular galls', 'Stunted plants', 'No panicle formation']
    },

    // MAIZE PESTS
    {
        id: 'pest-5',
        nameEnglish: 'Fall Armyworm',
        nameTamil: 'இலையுதிர் படைப்புழு',
        cropCategory: 'Maize',
        damageCaused: 'Feeds on leaves and cobs, causing severe defoliation',
        symptoms: ['Holes in leaves', 'Frass in whorl', 'Damaged cobs']
    },
    {
        id: 'pest-6',
        nameEnglish: 'Stem Borer',
        nameTamil: 'தண்டு துளைப்பான்',
        cropCategory: 'Maize',
        damageCaused: 'Bores into stem causing dead heart and lodging',
        symptoms: ['Entry holes with frass', 'Dead heart', 'Plant lodging']
    },
    {
        id: 'pest-7',
        nameEnglish: 'Shoot Fly',
        nameTamil: 'தளிர் ஈ',
        cropCategory: 'Maize',
        damageCaused: 'Damages growing point in seedling stage',
        symptoms: ['Dead heart', 'Yellowing of central leaf']
    },

    // PULSES PESTS
    {
        id: 'pest-8',
        nameEnglish: 'Pod Borer',
        nameTamil: 'காய் துளைப்பான்',
        cropCategory: 'Pulses',
        damageCaused: 'Bores into pods and feeds on developing seeds',
        symptoms: ['Holes in pods', 'Damaged seeds', 'Frass near holes']
    },
    {
        id: 'pest-9',
        nameEnglish: 'Aphids',
        nameTamil: 'அசுவினி',
        cropCategory: 'Pulses',
        damageCaused: 'Suck sap, transmit viral diseases, secrete honeydew',
        symptoms: ['Yellowing leaves', 'Curled leaves', 'Sticky honeydew']
    },
    {
        id: 'pest-10',
        nameEnglish: 'Leaf Webber',
        nameTamil: 'இலை வலை பூச்சி',
        cropCategory: 'Pulses',
        damageCaused: 'Webs leaves together and feeds inside',
        symptoms: ['Webbed leaves', 'Defoliation', 'Reduced photosynthesis']
    },

    // OILSEEDS PESTS
    {
        id: 'pest-11',
        nameEnglish: 'Leaf Miner',
        nameTamil: 'இலை சுரங்கப்புழு',
        cropCategory: 'Oilseeds',
        damageCaused: 'Mines between leaf surfaces, creates tunnels',
        symptoms: ['Serpentine mines on leaves', 'Leaf drying', 'Reduced yield']
    },
    {
        id: 'pest-12',
        nameEnglish: 'Hairy Caterpillar',
        nameTamil: 'ரோமம் நிறைந்த புழு',
        cropCategory: 'Oilseeds',
        damageCaused: 'Defoliates plants severely in groups',
        symptoms: ['Mass defoliation', 'Skeletonized leaves']
    },
    {
        id: 'pest-13',
        nameEnglish: 'Tobacco Caterpillar',
        nameTamil: 'புகையிலை புழு',
        cropCategory: 'Oilseeds',
        damageCaused: 'Feeds on leaves and developing pods',
        symptoms: ['Defoliation', 'Damaged pods', 'Green droppings']
    },

    // COTTON PESTS
    {
        id: 'pest-14',
        nameEnglish: 'Pink Bollworm',
        nameTamil: 'இளஞ்சிவப்பு பருத்தி காய்ப்புழு',
        cropCategory: 'Cotton',
        damageCaused: 'Bores into bolls, damages lint and seeds',
        symptoms: ['Rosette flowers', 'Entry holes in bolls', 'Poor lint quality']
    },
    {
        id: 'pest-15',
        nameEnglish: 'American Bollworm',
        nameTamil: 'அமெரிக்க காய்ப்புழு',
        cropCategory: 'Cotton',
        damageCaused: 'Feeds on squares, flowers, and bolls',
        symptoms: ['Damaged bolls', 'Shed squares', 'Entry holes']
    },
    {
        id: 'pest-16',
        nameEnglish: 'Whitefly',
        nameTamil: 'வெண் ஈ',
        cropCategory: 'Cotton',
        damageCaused: 'Transmits leaf curl virus, sucks sap',
        symptoms: ['Leaf curling', 'Yellowing', 'Honeydew secretion']
    },
    {
        id: 'pest-17',
        nameEnglish: 'Aphids',
        nameTamil: 'அசுவினி',
        cropCategory: 'Cotton',
        damageCaused: 'Sucks sap from tender parts, honeydew attracts ants',
        symptoms: ['Sticky leaves', 'Sooty mold', 'Stunted growth']
    },

    // VEGETABLES PESTS
    {
        id: 'pest-18',
        nameEnglish: 'Fruit Borer',
        nameTamil: 'காய் துளைப்பான்',
        cropCategory: 'Vegetables',
        damageCaused: 'Bores into fruits making them unmarketable',
        symptoms: ['Entry holes in fruits', 'Rotten fruits', 'Frass']
    },
    {
        id: 'pest-19',
        nameEnglish: 'Aphids',
        nameTamil: 'அசுவினி',
        cropCategory: 'Vegetables',
        damageCaused: 'Sucks sap, transmits viruses',
        symptoms: ['Curled leaves', 'Yellow patches', 'Honeydew']
    },
    {
        id: 'pest-20',
        nameEnglish: 'Diamondback Moth',
        nameTamil: 'வைர முதுகு அந்துப்பூச்சி',
        cropCategory: 'Vegetables',
        damageCaused: 'Feeds on cabbage family crops',
        symptoms: ['Shot holes in leaves', 'Defoliation', 'Damaged heads']
    },
    {
        id: 'pest-21',
        nameEnglish: 'Leaf Webber',
        nameTamil: 'இலை வலை செய்யும் புழு',
        cropCategory: 'Vegetables',
        damageCaused: 'Webs leaves and feeds inside',
        symptoms: ['Webbed leaves', 'Skeletonization']
    },

    // PLANTATION CROPS PESTS
    {
        id: 'pest-22',
        nameEnglish: 'Tea Mosquito Bug',
        nameTamil: 'தேயிலை கொசு பூச்சி',
        cropCategory: 'Plantation Crops',
        damageCaused: 'Sucks sap from tea and cashew, causes necrosis',
        symptoms: ['Necrotic patches', 'Shoot tip damage', 'Fruit drop']
    },
    {
        id: 'pest-23',
        nameEnglish: 'Red Spider Mite',
        nameTamil: 'சிவப்பு சிலந்தி பேன்',
        cropCategory: 'Plantation Crops',
        damageCaused: 'Sucks cell sap from tea leaves',
        symptoms: ['Bronzing of leaves', 'Webbing', 'Reduced quality']
    },
    {
        id: 'pest-24',
        nameEnglish: 'Rhinoceros Beetle',
        nameTamil: 'காண்டாமிருக வண்டு',
        cropCategory: 'Plantation Crops',
        damageCaused: 'Damages coconut crown and growing point',
        symptoms: ['V-shaped cuts on fronds', 'Damaged spadix', 'Reduced yield']
    },
    {
        id: 'pest-25',
        nameEnglish: 'Coconut Mite',
        nameTamil: 'தேங்காய் பேன்',
        cropCategory: 'Plantation Crops',
        damageCaused: 'Feeds on tender nuts causing button shedding',
        symptoms: ['Scarring on nuts', 'Button shedding', 'Malformed nuts']
    }
];

// Helper function to get pests by crop category
export const getPestsByCategory = (category: string) => {
    return pestsData.filter(pest => pest.cropCategory === category);
};

export default pestsData;
