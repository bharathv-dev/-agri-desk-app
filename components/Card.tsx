import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../constants/theme';

interface CardProps {
    title: string;
    subtitle?: string;
    emoji?: string;
    onPress?: () => void;
    style?: ViewStyle;
    children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    emoji,
    onPress,
    style,
    children,
}) => {
    const CardComponent = onPress ? TouchableOpacity : View;

    return (
        <CardComponent
            style={[styles.card, style]}
            onPress={onPress}
            activeOpacity={onPress ? 0.7 : 1}
        >
            {emoji && <Text style={styles.emoji}>{emoji}</Text>}
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                {children}
            </View>
        </CardComponent>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.card,
        borderRadius: theme.borderRadius.lg,
        padding: theme.spacing.lg,
        marginVertical: theme.spacing.sm,
        marginHorizontal: theme.spacing.md,
        ...theme.shadows.md,
        flexDirection: 'row',
        alignItems: 'center',
    },
    emoji: {
        fontSize: 32,
        marginRight: theme.spacing.md,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: theme.typography.sizes.lg,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.xs,
    },
    subtitle: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        lineHeight: theme.typography.lineHeights.normal * theme.typography.sizes.sm,
    },
});

export default Card;
