// TypeScript type definitions for AGRI DESK app

export interface NavigationCard {
    id: string;
    title: string;
    emoji: string;
    route: string;
    color: string;
}

export interface SoilType {
    id: string;
    districts: string[];
    soilTypeEnglish: string;
    soilTypeTamil: string;
    notes: string;
    characteristics?: string[];
    suitableCrops?: string[];
}

export interface ClimateZone {
    id: string;
    name: string;
    districts: string[];
    altitude: string;
    annualRainfall: string;
    majorCrops: string[];
    temperature?: string;
    humidity?: string;
}

export interface Crop {
    id: string;
    nameEnglish: string;
    nameTamil: string;
    category: CropCategory;
    subcategory?: string;
    duration?: string;
    season?: string[];
    image?: any; // Image source for the crop
}

export type CropCategory =
    | 'Food Crops'
    | 'Cash Crops'
    | 'Oilseed Crops'
    | 'Horticultural Crops'
    | 'Plantation Crops'
    | 'Fodder Crops'
    | 'Fiber Crops';

export interface Season {
    id: string;
    name: string;
    nameTamil: string;
    months: string;
    description: string;
    crops: SeasonCrop[];
}

export interface SeasonCrop {
    nameEnglish: string;
    nameTamil: string;
    duration: string; // in days
    description?: string;
}

export interface CropRequirement {
    id: string;
    cropName: string;
    cropNameTamil: string;
    season: string;
    majorDistricts: string[];
    suitableSoil: string[];
    weatherCondition: string;
    waterRequirement: {
        level: 'Low' | 'Medium' | 'High';
        amount: string; // in mm
    };
    temperature?: string;
}

export interface Pest {
    id: string;
    nameEnglish: string;
    nameTamil: string;
    cropCategory: string;
    damageCaused: string;
    symptoms?: string[];
    controlMeasures?: string[];
}

export interface ExpandableCardData {
    id: string;
    title: string;
    content: any;
    isExpanded?: boolean;
}
