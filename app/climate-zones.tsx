import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../constants/theme';
import climateZonesData from '../constants/climateZones';
import DetailCard from '../components/DetailCard';

export default function ClimateZonesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Discover the 7 agro-climatic zones of Tamil Nadu with unique
                        characteristics and suitable crops
                    </Text>
                </View>

                {climateZonesData.map((zone) => (
                    <DetailCard
                        key={zone.id}
                        title={zone.name}
                        expandable
                        defaultExpanded={false}
                    >
                        <View style={styles.cardContent}>
                            <Text style={styles.label}>Districts:</Text>
                            <Text style={styles.value}>{zone.districts.join(', ')}</Text>

                            <Text style={styles.label}>Altitude:</Text>
                            <Text style={styles.value}>{zone.altitude}</Text>

                            <Text style={styles.label}>Annual Rainfall:</Text>
                            <Text style={styles.value}>{zone.annualRainfall}</Text>

                            {zone.temperature && (
                                <>
                                    <Text style={styles.label}>Temperature:</Text>
                                    <Text style={styles.value}>{zone.temperature}</Text>
                                </>
                            )}

                            {zone.humidity && (
                                <>
                                    <Text style={styles.label}>Humidity:</Text>
                                    <Text style={styles.value}>{zone.humidity}</Text>
                                </>
                            )}

                            <Text style={styles.label}>Major Crops:</Text>
                            {zone.majorCrops.map((crop, index) => (
                                <Text key={index} style={styles.bulletPoint}>
                                    🌾 {crop}
                                </Text>
                            ))}
                        </View>
                    </DetailCard>
                ))}
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
    cardContent: {
        gap: theme.spacing.sm,
    },
    label: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.textPrimary,
        marginTop: theme.spacing.sm,
    },
    value: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        lineHeight: theme.typography.lineHeights.normal * theme.typography.sizes.sm,
    },
    bulletPoint: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.primary,
        paddingLeft: theme.spacing.md,
    },
});
