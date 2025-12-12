// screens/ClinicScreen.tsx
import React, { useState } from 'react';
import {
    Alert,
    GestureResponderEvent,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Button from './components/ui//Button';
import IconButton from './components/ui//IconButton';
import StatItem from './components/ui//StatItem';
import Avatar from './components/ui/Avatar';

const ClinicScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleBookAppointment = (_event: GestureResponderEvent): void => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Успешно', 'Запись на прием отправлена!');
    }, 1500);
  };

  const handleMessage = (_event: GestureResponderEvent): void => {
    Alert.alert('Сообщение', 'Открыть чат с клиникой');
  };

  const handleEmail = (_event: GestureResponderEvent): void => {
    Alert.alert('Email', 'Открыть почтовое приложение');
  };

  const handlePhone = (_event: GestureResponderEvent): void => {
    Alert.alert('Телефон', 'Позвонить в клинику');
  };

  const handleViewServices = (_event: GestureResponderEvent): void => {
    Alert.alert('Услуги', 'Список услуг клиники');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Header with avatar and username */}
        <View style={styles.header}>
          <Avatar
            source={require('./components/images/avatar.png')}
            size={80}
          />
          <Text style={styles.username}>_username._</Text>
          <Text style={styles.clinicName}>Ветклиника</Text>
        </View>

        {/* Stats section */}
        <View style={styles.statsContainer}>
          <StatItem value="0" label="Публикаций" />
          <StatItem value="0" label="Подписчиков" />
        </View>

        {/* Clinic description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Наша клиника с самым лучшим оборудованием и передовыми технологиями.
            Гордимся нашим персоналом :)
          </Text>
        </View>

        {/* Основная кнопка - Записаться на прием */}
        <Button
          title="Записаться на прием"
          onPress={handleBookAppointment}
          variant="primary"
          loading={isLoading}
        />

        {/* Альтернативный вариант - вторичная кнопка */}
        <Button
          title="Посмотреть услуги"
          onPress={handleViewServices}
          variant="outline"
          style={styles.secondaryButton}
        />

        {/* Divider */}
        <View style={styles.divider} />

        {/* Contact buttons */}
        <View style={styles.buttonsContainer}>
          <IconButton icon="message" title="Сообщение" onPress={handleMessage} />
          <IconButton icon="email" title="Электронн..." onPress={handleEmail} />
          <IconButton icon="phone" title="Телефон" onPress={handlePhone} />
        </View>

       
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#333',
  },
  clinicName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  descriptionContainer: {
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 24,
  },
  buttonsContainer: {
    marginBottom: 24,
  },
  contactsContainer: {
    marginTop: 8,
  },
  secondaryButton: {
    marginTop: -10,
  },
});

export default ClinicScreen;