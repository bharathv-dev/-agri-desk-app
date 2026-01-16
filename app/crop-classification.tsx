import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native';
import { theme } from '../constants/theme';
import { cropCategories, groupCropsBySubcategory } from '../constants/cropData';
import { CropCategory } from '../types';
import CategoryButton from '../components/CategoryButton';

export default function CropClassificationScreen() {
    const [selectedCategory, setSelectedCategory] = useState<CropCategory>('Food Crops');

    const cropsGrouped = groupCropsBySubcategory(selectedCategory);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Explore crop categories grown in Tamil Nadu
                    </Text>
                </View>

                {/* Category Selection */}
                <View style={styles.categoriesContainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.categoriesScroll}
                    >
                        {cropCategories.map((category) => (
                            <CategoryButton
                                key={category}
                                label={category}
                                isActive={selectedCategory === category}
                                onPress={() => setSelectedCategory(category)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Crops Display */}
                <View style={styles.cropsContainer}>
                    {Object.entries(cropsGrouped).map(([subcategory, crops]) => (
                        <View key={subcategory} style={styles.subcategorySection}>
                            <Text style={styles.subcategoryTitle}>{subcategory}</Text>

                            {crops.map((crop) => (
                                <View key={crop.id} style={styles.cropCard}>
                                    {crop.image && (
                                        <Image source={crop.image} style={styles.cropImage} />
                                    )}
                                    {!crop.image && (
                                        <Text style={styles.cropEmoji}>🌾</Text>
                                    )}
                                    <View style={styles.cropDetails}>
                                        <Text style={styles.cropNameEnglish}>{crop.nameEnglish}</Text>
                                        <Text style={styles.cropNameTamil}>{crop.nameTamil}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        backgroundColor: theme.colors.primaryLight,
        padding: theme.spacing.lg,
        marginBottom: theme.spacing.md,
    },
    headerText: {
        fontSize: theme.typography.sizes.md,
        color: theme.colors.textLight,
        textAlign: 'center',
        lineHeight: theme.typography.lineHeights.relaxed * theme.typography.sizes.md,
    },
    categoriesContainer: {
        marginBottom: theme.spacing.lg,
    },
    categoriesScroll: {
        paddingHorizontal: theme.spacing.sm,
    },
    cropsContainer: {
        paddingHorizontal: theme.spacing.md,
        paddingBottom: theme.spacing.xxl,
    },
    subcategorySection: {
        marginBottom: theme.spacing.xl,
    },
    subcategoryTitle: {
        fontSize: theme.typography.sizes.lg,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.secondary,
        marginBottom: theme.spacing.md,
        paddingBottom: theme.spacing.xs,
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.secondary,
    },
    cropCard: {
        backgroundColor: theme.colors.card,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.sm,
        borderRadius: theme.borderRadius.md,
        borderLeftWidth: 3,
        borderLeftColor: theme.colors.primary,
        ...theme.shadows.sm,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cropImage: {
        width: 60,
        height: 60,
        borderRadius: theme.borderRadius.md,
        marginRight: theme.spacing.md,
    },
    cropEmoji: {
        fontSize: 40,
        marginRight: theme.spacing.md,
    },
    cropDetails: {
        flex: 1,
    },
    cropNameEnglish: {
        fontSize: theme.typography.sizes.md,
        fontWeight: theme.typography.weights.medium,
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.xs,
    },
    cropNameTamil: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textTamil,
        fontWeight: theme.typography.weights.medium,
    },
});
