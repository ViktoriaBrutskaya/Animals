// api/service.ts
import { Alert } from 'react-native';

const API_URL = 'http://localhost:8080/api'; // для эмулятора Android использовать 10.0.2.2

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface UserResponse {
  id: number;
  name: string;
  email: string;
}

class ApiService {
  // Регистрация
  async register(data: RegisterData): Promise<UserResponse | null> {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        return result;
      } else {
        Alert.alert('Ошибка регистрации', result.error || 'Неизвестная ошибка');
        return null;
      }
    } catch (error) {
      console.error('Register error:', error);
      Alert.alert('Ошибка', 'Не удалось подключиться к серверу');
      return null;
    }
  }

  // Авторизация
  async login(data: LoginData): Promise<UserResponse | null> {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        return result;
      } else {
        Alert.alert('Ошибка авторизации', result.error || 'Неверные данные');
        return null;
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Ошибка', 'Не удалось подключиться к серверу');
      return null;
    }
  }

  // Получение списка пользователей
  async getUsers(): Promise<UserResponse[]> {
    try {
      const response = await fetch(`${API_URL}/users`);
      
      if (response.ok) {
        return await response.json();
      } else {
        return [];
      }
    } catch (error) {
      console.error('Get users error:', error);
      return [];
    }
  }
}

export const apiService = new ApiService();