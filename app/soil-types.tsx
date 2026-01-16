import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../constants/theme';
import soilTypesData from '../constants/soilData';
import DetailCard from '../components/DetailCard';

export default function SoilTypesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Explore different soil types across Tamil Nadu districts and their
                        agricultural significance
                    </Text>
                </View>

                {soilTypesData.map((soil) => (
                    <DetailCard key={soil.id} title={soil.soilTypeEnglish}>
                        <View style={styles.cardContent}>
                            <Text style={styles.tamilLabel}>Tamil Name:</Text>
                            <Text style={styles.tamilName}>{soil.soilTypeTamil}</Text>

                            <Text style={styles.label}>Districts:</Text>
                            <Text style={styles.value}>{soil.districts.join(', ')}</Text>

                            <Text style={styles.label}>Characteristics:</Text>
                            {soil.characteristics?.map((char, index) => (
                                <Text key={index} style={styles.bulletPoint}>
                                    • {char}
                                </Text>
                            ))}

                            <Text style={styles.label}>Suitable Crops:</Text>
                            <Text style={styles.value}>{soil.suitableCrops?.join(', ')}</Text>

                            <Text style={styles.label}>Notes:</Text>
                            <Text style={styles.notes}>{soil.notes}</Text>
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
    tamilLabel: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.secondary,
        marginTop: theme.spacing.xs,
    },
    tamilName: {
        fontSize: theme.typography.sizes.lg,
        fontWeight: theme.typography.weights.medium,
        color: theme.colors.textTamil,
    },
    value: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        lineHeight: theme.typography.lineHeights.normal * theme.typography.sizes.sm,
    },
    bulletPoint: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        paddingLeft: theme.spacing.md,
    },
    notes: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        fontStyle: 'italic',
        lineHeight: theme.typography.lineHeights.normal * theme.typography.sizes.sm,
    },
});
