import { NavigationContainer } from '@react-navigation/native'
import AuthStack, { AuthStackParamList } from './AuthStack'
import AppDrawer, { AppDrawerParamList } from './AppDrawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useAuthStore from '@stores/useAuthStore';

export type RootStackParamList = {
  Main: undefined,
  Auth: undefined
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends 
      RootStackParamList,
      AuthStackParamList, 
      AppDrawerParamList
    {}
  }
}

const Stack = createNativeStackNavigator()

const Navigation = () => {
  const { user } = useAuthStore(state => state)

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user && <Stack.Screen name='Main' component={AppDrawer} />}
        {!user && <Stack.Screen name='Auth' component={AuthStack} />}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation