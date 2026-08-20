import { View, StyleSheet } from 'react-native';
import { Text } from './Text';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <View style={[styles.base, styles[variant]]}>
      <Text size="sm">{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {},
  default: {},
  success: {},
  warning: {},
  error: {},
});
