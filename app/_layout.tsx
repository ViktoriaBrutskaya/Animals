// app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false,
          title: 'Авторизация'
        }} 
      />
      <Stack.Screen 
        name="registration" 
        options={{ 
          headerShown: false,
          title: 'Регистрация'
        }} 
      />
       <Stack.Screen 
        name="clinic" 
        options={{ 
          headerShown: false,
          title: 'Клиника'
        }} 
      />
    </Stack>
  );
}