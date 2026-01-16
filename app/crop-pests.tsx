import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../constants/theme';
import { pestCategories, getPestsByCategory } from '../constants/pestData';
import CategoryButton from '../components/CategoryButton';

export default function CropPestsScreen() {
    const [selectedCategory, setSelectedCategory] = useState('Paddy');

    const pests = getPestsByCategory(selectedCategory);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Learn about major pests affecting different crops
                    </Text>
                </View>

                {/* Crop Category Tabs */}
                <View style={styles.categoriesContainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.categoriesScroll}
                    >
                        {pestCategories.map((category) => (
                            <CategoryButton
                                key={category}
                                label={category}
                                isActive={selectedCategory === category}
                                onPress={() => setSelectedCategory(category)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Pests Display */}
                <View style={styles.pestsContainer}>
                    <Text style={styles.categoryTitle}>
                        {selectedCategory} Pests ({pests.length})
                    </Text>

                    {pests.map((pest) => (
                        <View key={pest.id} style={styles.pestCard}>
                            <View style={styles.pestHeader}>
                                <View style={styles.pestIcon}>
                                    <Text style={styles.pestEmoji}>🐛</Text>
                                </View>
                                <View style={styles.pestTitles}>
                                    <Text style={styles.pestNameEnglish}>{pest.nameEnglish}</Text>
                                    <Text style={styles.pestNameTamil}>{pest.nameTamil}</Text>
                                </View>
                            </View>

                            <View style={styles.damageSection}>
                                <Text style={styles.damageLabel}>⚠️ Damage Caused:</Text>
                                <Text style={styles.damageText}>{pest.damageCaused}</Text>
                            </View>

                            {pest.symptoms && pest.symptoms.length > 0 && (
                                <View style={styles.symptomsSection}>
                                    <Text style={styles.symptomsLabel}>🔍 Symptoms:</Text>
                                    {pest.symptoms.map((symptom, index) => (
                                        <Text key={index} style={styles.symptomItem}>
                                            • {symptom}
                                        </Text>
                                    ))}
                                </View>
                            )}
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
    pestsContainer: {
        paddingHorizontal: theme.spacing.md,
        paddingBottom: theme.spacing.xxl,
    },
    categoryTitle: {
        fontSize: theme.typography.sizes.xl,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.primary,
        marginBottom: theme.spacing.lg,
    },
    pestCard: {
        backgroundColor: theme.colors.card,
        padding: theme.spacing.lg,
        marginBottom: theme.spacing.md,
        borderRadius: theme.borderRadius.lg,
        borderLeftWidth: 4,
        borderLeftColor: theme.colors.error,
        ...theme.shadows.md,
    },
    pestHeader: {
        flexDirection: 'row',
        marginBottom: theme.spacing.md,
    },
    pestIcon: {
        width: 48,
        height: 48,
        borderRadius: theme.borderRadius.md,
        backgroundColor: theme.colors.backgroundDark,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing.md,
    },
    pestEmoji: {
        fontSize: 28,
    },
    pestTitles: {
        flex: 1,
        justifyContent: 'center',
    },
    pestNameEnglish: {
        fontSize: theme.typography.sizes.md,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.xs / 2,
    },
    pestNameTamil: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textTamil,
        fontWeight: theme.typography.weights.medium,
    },
    damageSection: {
        marginBottom: theme.spacing.md,
        paddingTop: theme.spacing.md,
        borderTopWidth: 1,
        borderTopColor: theme.colors.borderLight,
    },
    damageLabel: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.error,
        marginBottom: theme.spacing.xs,
    },
    damageText: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        lineHeight: theme.typography.lineHeights.normal * theme.typography.sizes.sm,
    },
    symptomsSection: {
        marginTop: theme.spacing.sm,
    },
    symptomsLabel: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.xs,
    },
    symptomItem: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        paddingLeft: theme.spacing.md,
        marginBottom: theme.spacing.xs / 2,
    },
});
