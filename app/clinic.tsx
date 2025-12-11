// app/clinic.tsx

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Button from './components/ui/Button';

interface ClinicProps{
    onSubmit: () => void;
    loading?: boolean;
}

export default function clinic({onSubmit,
  loading = false}:ClinicProps){
    const router = useRouter();

    return (
    <SafeAreaView style={styles.safeArea}>
      {/* Основной контейнер - имитация Grid */}
      <View style={styles.container}>
        
        {/* Стрелка назад - строка 1 */}
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Аватар и информация - строка 2 */}
        <View style={styles.row2}>
          {/* Аватар (левая колонка) */}
          <View style={styles.avatarContainer}>
            {/* Иконка аватара */}
            <View style={styles.iconContainer}>
              <View style={styles.iconPlaceholder} />
            </View>
            {/* Звезды/рейтинг */}
            <View style={styles.starsContainer}>
              <View style={styles.starsPlaceholder} />
            </View>
          </View>


        {/* Информация пользователя (правая колонка) */}
          <View style={styles.usernameContainer}>
            {/* Имя пользователя */}
            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>_username._</Text>
            </View>

            {/* Роль/специализация */}
            <View style={styles.roleContainer}>
              <Text style={styles.role}>Ветклиника</Text>
            </View>

{/* Публикации и подписчики */}
            <View style={styles.statsContainer}>
              <View style={styles.publicationContainer}>
                <Text style={styles.statNumber}>0</Text>
                <Text style={styles.statLabel}>публикаций</Text>
              </View>
              <View style={styles.subscribersContainer}>
                <Text style={styles.statNumber}>0</Text>
                <Text style={styles.statLabel}>подписчиков</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Кнопки и описание - строка 3 */}
        <View style={styles.row3}>
          {/* Кнопки (левая колонка) */}
          <View style={styles.buttonsContainer}>
            <Button
            title="Записаться"
            onPress={onSubmit}
            loading={loading}/>
          </View>

          {/* Описание (правая колонка) */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Наша клиника с самым лучшим оборудованием и передовыми технологиями.
              Гордимся нашим персоналом :)
            </Text>
          </View>
        </View>

        {/* Кнопки контактов - строка 4 */}
        <View style={styles.row4}>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Сообщение</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Электронн...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Телефон</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ECE1D1',
  },
  
  // Основной контейнер - имитация CSS Grid
  container: {
    flex: 0.5,
    paddingHorizontal: 16,
  },
  
  // Строка 1: Стрелка
  arrowContainer: {
    height: '7.5%', // 0.3fr от общей высоты
    justifyContent: 'center',
   
  },

  // Строка 2: Аватар + Информация
  row2: {
    height: '42.5%', // 1.7fr от общей высоты
    flexDirection: 'row',
    paddingVertical: 20,
    
  },
  
  // Левая колонка: Аватар (1 часть)
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  iconContainer: {
    flex: 2, // 2/3 высоты
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  iconPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#A4B88C',
  },
  
  starsContainer: {
    flex: 1, // 1/3 высоты
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  starsPlaceholder: {
    width: 60,
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  
  // Правая колонка: Информация (2 части)
  usernameContainer: {
    flex: 2,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  
  userNameContainer: {
    flex: 1,
    justifyContent: 'center',
  },

   userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  
  roleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  
  role: {
    fontSize: 16,
    color: '#666',
  },
  
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    },
  
  publicationContainer: {
    flex: 1,
    alignItems: 'center',
  },
  
  subscribersContainer: {
    flex: 1,
    alignItems: 'center',
  },
  
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  
  statLabel: {
    fontSize: 12,
    color: '#666',
     marginTop: 2,
  },
  
  // Строка 3: Кнопки + Описание
  row3: {
    height: '40%', // 1.6fr от общей высоты
    flexDirection: 'row',
    paddingVertical: 20,
    
  },
  
  // Левая колонка: Кнопки (1 часть)
  buttonsContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },

  actionButton: {
    backgroundColor: '#A4B88C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  
  actionButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  
  // Правая колонка: Описание (2 части)
  descriptionContainer: {
    flex: 2,
    marginLeft: 20,
    justifyContent: 'center',
  },

  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  
  // Строка 4: Кнопки контактов
  row4: {
    height: '10%', // 0.4fr от общей высоты
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  
  contactButton: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 20,
    alignItems: 'center',
    },
  
  contactButtonText: {
    fontSize: 12,
    color: '#333',
  },
});