import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../constants/theme';

interface DetailCardProps {
    title: string;
    children: React.ReactNode;
    expandable?: boolean;
    defaultExpanded?: boolean;
    style?: ViewStyle;
}

export const DetailCard: React.FC<DetailCardProps> = ({
    title,
    children,
    expandable = false,
    defaultExpanded = false,
    style,
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const CardComponent = expandable ? TouchableOpacity : View;

    return (
        <CardComponent
            style={[styles.card, style]}
            onPress={expandable ? () => setIsExpanded(!isExpanded) : undefined}
            activeOpacity={expandable ? 0.7 : 1}
        >
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {expandable && (
                    <Text style={styles.expandIcon}>{isExpanded ? '▼' : '▶'}</Text>
                )}
            </View>
            {(!expandable || isExpanded) && (
                <View style={styles.content}>
                    {children}
                </View>
            )}
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
        ...theme.shadows.sm,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: theme.typography.sizes.lg,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.primary,
        flex: 1,
    },
    expandIcon: {
        fontSize: theme.typography.sizes.md,
        color: theme.colors.primary,
        marginLeft: theme.spacing.sm,
    },
    content: {
        marginTop: theme.spacing.md,
    },
});

export default DetailCard;
