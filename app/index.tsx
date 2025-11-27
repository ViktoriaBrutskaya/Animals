import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import TabHeader from './components/ui/TabHeader';
import AuthForm from './components/auth/AuthForm';
import Button from './components/ui/Button';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Ошибка', 'Заполните все поля');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Успешно', 'Авторизация прошла успешно');
      
    }, 1000);
  };

  return (
  <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View style={styles.greenSection}>
      <TabHeader
        tabs={[
          {
            label: 'Авторизация',
            isActive: true,
            onPress: () => {}
          },
          {
            label: 'Регистрация',
            isActive: false,
            onPress: () => router.push('/registration')
          }
        ]}
      />
    </View>

       <ScrollView contentContainerStyle={styles.scrollContainer}>
      <AuthForm
        username={username}
        password={password}
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        onSubmit={handleLogin}
        loading={loading}
      />

      <TouchableOpacity style={styles.linkContainer}>
        <Text style={styles.linkText}>Забыли пароль?</Text>
      </TouchableOpacity>

      <Button
        title="Создать новый аккаунт"
        onPress={() => router.push('/registration')}
        variant="outline"
      />
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
    paddingTop:40,
    backgroundColor: '#ECE1D1', // бежевый
  },
  linkContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: '#434B39',
    fontSize: 16,
  },
});