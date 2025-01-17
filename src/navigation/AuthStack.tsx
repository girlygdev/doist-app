import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/auth/LoginScreen';
import RegisterScreen from '@screens/auth/RegisterScreen';

export type AuthStackParamList = {
  Login: undefined,
  Register: undefined
};

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{}}
      />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
