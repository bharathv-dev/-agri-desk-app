import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../constants/theme';
import cropRequirementsData from '../constants/cropRequirements';
import CategoryButton from '../components/CategoryButton';

export default function CropRequirementsScreen() {
    const seasons = ['Kuruvai', 'Samba', 'Thaladi', 'Navarai', 'Kharif', 'Rabi', 'Year-round'];
    const [selectedSeason, setSelectedSeason] = useState('Kuruvai');

    const filteredCrops = cropRequirementsData.filter(
        (crop) => crop.season === selectedSeason
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Select season to know suitable crops, soil, climate and water requirement
                    </Text>
                </View>

                {/* Season Selection */}
                <View style={styles.seasonsContainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.seasonsScroll}
                    >
                        {seasons.map((season) => (
                            <CategoryButton
                                key={season}
                                label={season}
                                isActive={selectedSeason === season}
                                onPress={() => setSelectedSeason(season)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Crop Requirements Display */}
                <View style={styles.requirementsContainer}>
                    {filteredCrops.length === 0 ? (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyText}>
                                No crop data available for {selectedSeason} season
                            </Text>
                        </View>
                    ) : (
                        filteredCrops.map((crop) => (
                            <View key={crop.id} style={styles.cropCard}>
                                <Text style={styles.cropName}>{crop.cropName}</Text>
                                <Text style={styles.cropNameTamil}>{crop.cropNameTamil}</Text>

                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>📍 Districts:</Text>
                                    <Text style={styles.detailValue}>
                                        {crop.majorDistricts.join(', ')}
                                    </Text>
                                </View>

                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>🌍 Suitable Soil:</Text>
                                    <Text style={styles.detailValue}>
                                        {crop.suitableSoil.join(', ')}
                                    </Text>
                                </View>

                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>🌦️ Weather:</Text>
                                    <Text style={styles.detailValue}>{crop.weatherCondition}</Text>
                                </View>

                                {crop.temperature && (
                                    <View style={styles.detailRow}>
                                        <Text style={styles.detailLabel}>🌡️ Temperature:</Text>
                                        <Text style={styles.detailValue}>{crop.temperature}</Text>
                                    </View>
                                )}

                                <View style={styles.waterRequirement}>
                                    <Text style={styles.waterLabel}>💧 Water Requirement:</Text>
                                    <View
                                        style={[
                                            styles.waterBadge,
                                            crop.waterRequirement.level === 'High' && styles.waterHigh,
                                            crop.waterRequirement.level === 'Medium' && styles.waterMedium,
                                            crop.waterRequirement.level === 'Low' && styles.waterLow,
                                        ]}
                                    >
                                        <Text style={styles.waterLevel}>
                                            {crop.waterRequirement.level}
                                        </Text>
                                    </View>
                                    <Text style={styles.waterAmount}>
                                        {crop.waterRequirement.amount}
                                    </Text>
                                </View>
                            </View>
                        ))
                    )}
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
    seasonsContainer: {
        marginBottom: theme.spacing.lg,
    },
    seasonsScroll: {
        paddingHorizontal: theme.spacing.sm,
    },
    requirementsContainer: {
        paddingHorizontal: theme.spacing.md,
        paddingBottom: theme.spacing.xxl,
    },
    emptyState: {
        padding: theme.spacing.xxl,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: theme.typography.sizes.md,
        color: theme.colors.textSecondary,
        textAlign: 'center',
    },
    cropCard: {
        backgroundColor: theme.colors.card,
        padding: theme.spacing.lg,
        marginBottom: theme.spacing.md,
        borderRadius: theme.borderRadius.lg,
        ...theme.shadows.md,
    },
    cropName: {
        fontSize: theme.typography.sizes.lg,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.primary,
        marginBottom: theme.spacing.xs,
    },
    cropNameTamil: {
        fontSize: theme.typography.sizes.md,
        color: theme.colors.textTamil,
        marginBottom: theme.spacing.md,
        fontWeight: theme.typography.weights.medium,
    },
    detailRow: {
        marginBottom: theme.spacing.md,
    },
    detailLabel: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.xs,
    },
    detailValue: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        lineHeight: theme.typography.lineHeights.normal * theme.typography.sizes.sm,
    },
    waterRequirement: {
        marginTop: theme.spacing.sm,
        paddingTop: theme.spacing.md,
        borderTopWidth: 1,
        borderTopColor: theme.colors.borderLight,
    },
    waterLabel: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.sm,
    },
    waterBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xs,
        borderRadius: theme.borderRadius.md,
        marginBottom: theme.spacing.xs,
    },
    waterHigh: {
        backgroundColor: '#FF6B6B',
    },
    waterMedium: {
        backgroundColor: '#FFB800',
    },
    waterLow: {
        backgroundColor: '#4CAF50',
    },
    waterLevel: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.textLight,
    },
    waterAmount: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
    },
});
