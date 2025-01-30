import { StyleSheet, View } from 'react-native';
import GlobalStyle from '@constants/style';
import LoginForm, { LoginFieldType } from '../../components/auth/LoginForm';
import Title from '@components/general/texts/Title';
import CustomText from '@components/general/texts/Text';
import CustomButton from '@components/general/buttons/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@navigation/AuthStack';
import { useState } from 'react';
import LoadingOverlay from '@components/general/ui/LoadingOverlay';
import InlineToast from '@components/general/ui/InlineToast';
import useFirebaseAuthError from '@hooks/auth/useFirebaseAuthError';
import useAuthStore from '@stores/useAuthStore';
import { loginUser } from '@util/auth';

interface LoginScreenProps {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Login'>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const {authenticate} = useAuthStore(state => state)

  const { errorMessage, handleAuthError } = useFirebaseAuthError();

  const submitHandler =  async (values: LoginFieldType) => {
    setIsAuthenticating(true);

    try {
      const user = await loginUser(values.email, values.password)
      authenticate(user)
    } catch (error: any) {
      handleAuthError(error);
      setIsAuthenticating(false);
    }
  };

  const navigateToRegister = () => navigation.replace('Register');

  return (
    <View style={styles.root}>
      {isAuthenticating && <LoadingOverlay message='Logging you in...' />}

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Title>Sign in</Title>
          <CustomText>Log back in to your account...</CustomText>
        </View>

        <LoginForm onSubmit={submitHandler} />

        {errorMessage && (
          <InlineToast
            color='error'
            message={errorMessage}
          />
        )}

        <View style={styles.footerContainer}>
          <CustomText style={styles.footerText}>
            Don't have an account?
          </CustomText>
          <CustomButton
            text='Sign Up'
            flat
            onPress={navigateToRegister}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.background,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  headerContainer: {
    marginBottom: 8,
  },
  footerContainer: {
    justifyContent: 'center',
    marginTop: 16,
  },
  footerText: {
    borderTopWidth: 1,
    borderTopColor: GlobalStyle.colors.secondary.main,
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 16,
  },
  error: {
    color: GlobalStyle.colors.error.main,
  },
});
