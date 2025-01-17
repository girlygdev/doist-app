import GlobalStyle from '@constants/style';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '@screens/HomeScreen';
import UserScreen from '@screens/UserScreen';

export type AppDrawerParamList = {
  Home: undefined,
  User: undefined,
};

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
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

export default AppDrawer;
