import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import UserScreen from './src/screens/UserScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/auth/LoginScreen';
import GlobalStyle from './src/constants/style';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AuthtenticatedScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyle.colors.secondary.main },
        drawerActiveBackgroundColor: GlobalStyle.colors.secondary.main,
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: GlobalStyle.colors.dark.main,
        drawerStyle: {
          backgroundColor: GlobalStyle.colors.secondary.light,
        },
      }}
    >
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({ color, focused, size }) => {
            return (
              <Ionicons
                name='home'
                size={size}
                color={focused ? '#FFF' : GlobalStyle.colors.dark.main}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name='User'
        component={UserScreen}
        options={{
          title: 'Profile',
          drawerIcon: ({ color, focused, size }) => {
            return (
              <Ionicons
                name='person-circle-outline'
                size={size}
                color={focused ? '#FFF' : GlobalStyle.colors.dark.main}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [fontsLoaded] = useFonts({
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
