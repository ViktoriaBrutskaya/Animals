// components/ContactInfo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ContactInfoProps {
  type: 'message' | 'email' | 'phone';
  value: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ type, value }) => {
  const getIcon = (): string => {
    switch (type) {
      case 'message':
        return '💬';
      case 'email':
        return '📧';
      case 'phone':
        return '📞';
      default:
        return '●';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{getIcon()}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  icon: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});

export default ContactInfo;