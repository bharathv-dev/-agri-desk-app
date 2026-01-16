import { colors } from './colors';

// Theme configuration for AGRI DESK app
export const theme = {
    colors,

    // Spacing scale (multiples of 4)
    spacing: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 24,
        xxl: 32,
        xxxl: 48,
    },

    // Border radius
    borderRadius: {
        sm: 4,
        md: 8,
        lg: 12,
        xl: 16,
        round: 50,
    },

    // Typography
    typography: {
        sizes: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 20,
            xxl: 24,
            xxxl: 32,
            title: 28,
        },
        weights: {
            regular: '400' as const,
            medium: '500' as const,
            semibold: '600' as const,
            bold: '700' as const,
        },
        lineHeights: {
            tight: 1.2,
            normal: 1.5,
            relaxed: 1.8,
        },
    },

    // Shadows
    shadows: {
        sm: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
        },
        md: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.12,
            shadowRadius: 4,
            elevation: 3,
        },
        lg: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 5,
        },
    },

    // Screen dimensions
    screen: {
        width: 375,
        height: 812,
    },
};

export type Theme = typeof theme;
export default theme;
