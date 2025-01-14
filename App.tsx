import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import UserScreen from './src/screens/UserScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#FFB6B9' },
            drawerActiveBackgroundColor: '#FFB6B9',
            drawerActiveTintColor: '#FFF',
            drawerInactiveTintColor: '#252A34',
            drawerStyle: {
              backgroundColor: '#FDF6F0',
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
                    color={focused ? '#FFF' : '#252A34'}
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
                    color={focused ? '#FFF' : '#252A34'}
                  />
                );
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
