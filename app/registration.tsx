import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import RegistrationForm from './components/auth/RegistrationForm';
import TabHeader from './components/ui/TabHeader';

export default function RegistrationScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegistration = async () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert('Ошибка', 'Заполните все поля');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Ошибка', 'Пароли не совпадают');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Успешно', 'Регистрация прошла успешно');
      router.push('/clinic');
    }, 1000);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.greenSection}>
        <TabHeader
          tabs={[
            {
              label: 'Авторизация',
              isActive: false,
              onPress: () => router.push('/')
            },
            {
              label: 'Регистрация',
              isActive: true,
              onPress: () => {}
            }
          ]}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <RegistrationForm
          username={username}
          password={password}
          confirmPassword={confirmPassword}
          onUsernameChange={setUsername}
          onPasswordChange={setPassword}
          onConfirmPasswordChange={setConfirmPassword}
          onSubmit={handleRegistration}
          loading={loading}
        />

        <TouchableOpacity 
          style={styles.loginContainer}
          onPress={() => router.push('/')}
        >
          <Text style={styles.loginText}>Уже есть аккаунт? Войти</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE1D1', 
  },
  greenSection: {
    backgroundColor: '#A4B88C', 
    paddingTop: 60, 
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 40,
    backgroundColor: '#ECE1D1',
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#5D684F',
    fontSize: 16,
  },
});