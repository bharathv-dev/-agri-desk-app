import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import Card from '../components/Card';
import { theme } from '../constants/theme';

export default function HomeScreen() {
    const router = useRouter();

    const navigationCards = [
        {
            id: '1',
            title: 'Soil Types in Tamil Nadu',
            emoji: '🌍',
            route: '/soil-types',
        },
        {
            id: '2',
            title: 'Agro Climatic Zones',
            emoji: '🌦️',
            route: '/climate-zones',
        },
        {
            id: '3',
            title: 'Classification of Crops',
            emoji: '🌾',
            route: '/crop-classification',
        },
        {
            id: '4',
            title: 'Crop Seasons & Duration',
            emoji: '📅',
            route: '/crop-seasons',
        },
        {
            id: '5',
            title: 'Crop Requirements',
            emoji: '💧',
            route: '/crop-requirements',
        },
        {
            id: '6',
            title: 'Major Crop Pests',
            emoji: '🐛',
            route: '/crop-pests',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>AGRI DESK</Text>
                <Text style={styles.headerSubtitle}>
                    Tamil Nadu Agriculture Information Guide
                </Text>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>Explore Agriculture Topics</Text>

                {navigationCards.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        emoji={card.emoji}
                        onPress={() => router.push(card.route as any)}
                    />
                ))}

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        🌾 Complete Agriculture Guide for Tamil Nadu
                    </Text>
                    <Text style={styles.footerSubtext}>
                        Tap any card to learn more
                    </Text>
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
    header: {
        backgroundColor: theme.colors.primary,
        paddingVertical: theme.spacing.xxl,
        paddingHorizontal: theme.spacing.lg,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: theme.typography.sizes.xxxl,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.textLight,
        marginBottom: theme.spacing.xs,
    },
    headerSubtitle: {
        fontSize: theme.typography.sizes.md,
        color: theme.colors.textLight,
        textAlign: 'center',
        opacity: 0.95,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        paddingVertical: theme.spacing.lg,
    },
    sectionTitle: {
        fontSize: theme.typography.sizes.xl,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.primary,
        marginHorizontal: theme.spacing.lg,
        marginBottom: theme.spacing.md,
    },
    footer: {
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xxl,
        paddingHorizontal: theme.spacing.lg,
        alignItems: 'center',
    },
    footerText: {
        fontSize: theme.typography.sizes.md,
        fontWeight: theme.typography.weights.medium,
        color: theme.colors.primary,
        textAlign: 'center',
        marginBottom: theme.spacing.xs,
    },
    footerSubtext: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        textAlign: 'center',
    },
});
