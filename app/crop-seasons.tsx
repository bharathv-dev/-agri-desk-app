import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../constants/theme';
import seasonsData from '../constants/seasonData';
import Card from '../components/Card';

export default function CropSeasonsScreen() {
    const [selectedSeason, setSelectedSeason] = useState<string | null>(null);

    const handleSeasonPress = (seasonId: string) => {
        setSelectedSeason(selectedSeason === seasonId ? null : seasonId);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Learn about crop cultivation seasons in Tamil Nadu
                    </Text>
                </View>

                {seasonsData.map((season) => {
                    const isExpanded = selectedSeason === season.id;

                    return (
                        <View key={season.id} style={styles.seasonContainer}>
                            <Card
                                title={season.name}
                                subtitle={`${season.months} • ${season.nameTamil}`}
                                emoji="📅"
                                onPress={() => handleSeasonPress(season.id)}
                            />

                            {isExpanded && (
                                <View style={styles.detailsContainer}>
                                    <Text style={styles.description}>{season.description}</Text>

                                    <Text style={styles.cropsTitle}>Crops & Duration</Text>

                                    {season.crops.map((crop, index) => (
                                        <View key={index} style={styles.cropRow}>
                                            <View style={styles.cropInfo}>
                                                <Text style={styles.cropName}>
                                                    🌾 {crop.nameEnglish}
                                                </Text>
                                                <Text style={styles.cropNameTamil}>
                                                    {crop.nameTamil}
                                                </Text>
                                            </View>
                                            <View style={styles.durationBadge}>
                                                <Text style={styles.durationText}>
                                                    {crop.duration} days
                                                </Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    );
                })}
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
    seasonContainer: {
        marginBottom: theme.spacing.sm,
    },
    detailsContainer: {
        backgroundColor: theme.colors.card,
        marginHorizontal: theme.spacing.md,
        marginTop: -theme.spacing.sm,
        paddingTop: theme.spacing.lg,
        paddingHorizontal: theme.spacing.lg,
        paddingBottom: theme.spacing.md,
        borderBottomLeftRadius: theme.borderRadius.lg,
        borderBottomRightRadius: theme.borderRadius.lg,
        ...theme.shadows.md,
    },
    description: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        fontStyle: 'italic',
        marginBottom: theme.spacing.lg,
        lineHeight: theme.typography.lineHeights.normal * theme.typography.sizes.sm,
    },
    cropsTitle: {
        fontSize: theme.typography.sizes.md,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.primary,
        marginBottom: theme.spacing.md,
    },
    cropRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: theme.spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.borderLight,
    },
    cropInfo: {
        flex: 1,
    },
    cropName: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.medium,
        color: theme.colors.textPrimary,
    },
    cropNameTamil: {
        fontSize: theme.typography.sizes.xs,
        color: theme.colors.textTamil,
        marginTop: theme.spacing.xs / 2,
    },
    durationBadge: {
        backgroundColor: theme.colors.accent,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xs,
        borderRadius: theme.borderRadius.round,
    },
    durationText: {
        fontSize: theme.typography.sizes.xs,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.textPrimary,
    },
});
