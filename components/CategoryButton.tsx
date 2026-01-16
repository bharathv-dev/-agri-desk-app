import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../constants/theme';

interface CategoryButtonProps {
    label: string;
    isActive: boolean;
    onPress: () => void;
    style?: ViewStyle;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
    label,
    isActive,
    onPress,
    style,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                isActive && styles.buttonActive,
                style,
            ]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={[
                styles.buttonText,
                isActive && styles.buttonTextActive,
            ]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.md,
        marginHorizontal: theme.spacing.xs,
        marginVertical: theme.spacing.xs,
        borderRadius: theme.borderRadius.md,
        backgroundColor: theme.colors.backgroundLight,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    buttonActive: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    },
    buttonText: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.medium,
        color: theme.colors.textSecondary,
        textAlign: 'center',
    },
    buttonTextActive: {
        color: theme.colors.textLight,
        fontWeight: theme.typography.weights.semibold,
    },
});

export default CategoryButton;
