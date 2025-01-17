import { NavigationContainer } from '@react-navigation/native'
import AuthStack, { AuthStackParamList } from './AuthStack'
import AppDrawer, { AppDrawerParamList } from './AppDrawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

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
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Auth' component={AuthStack} />
        <Stack.Screen name='Main' component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation