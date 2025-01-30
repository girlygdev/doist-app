import { StyleSheet, View } from 'react-native';
import GlobalStyle from '@constants/style';
import RegisterForm, { RegisterFieldType } from '@components/auth/RegisterForm';
import Title from '@components/general/texts/Title';
import CustomText from '@components/general/texts/Text';
import CustomButton from '@components/general/buttons/CustomButton';
import { AuthStackParamList } from '@navigation/AuthStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import LoadingOverlay from '@components/general/ui/LoadingOverlay';
import useFirebaseAuthError from '@hooks/auth/useFirebaseAuthError';
import InlineToast from '@components/general/ui/InlineToast';
import { registerUser } from '@util/auth';
import useAuthStore from '@stores/useAuthStore';

interface RegisterScreenProps {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Register'>;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const {authenticate} = useAuthStore(state => state)

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const {errorMessage, handleAuthError} = useFirebaseAuthError()

  const submitHandler =  async (values: RegisterFieldType) => {
    setIsAuthenticating(true);

    try {
      const user = await registerUser(values.email, values.password)
      authenticate(user)
    } catch (error: any) {
      handleAuthError(error);
      setIsAuthenticating(false);
    }
  };

  const navigateToLogin = () => navigation.replace('Login');

  return (
    <View style={styles.root}>
      {isAuthenticating && <LoadingOverlay message='Signing you up...' />}

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Title>Sign Up</Title>
          <CustomText>Create an account to get started...</CustomText>
        </View>

        <RegisterForm onSubmit={submitHandler} />

        {errorMessage && (
          <InlineToast
            color='error'
            message={errorMessage}
          />
        )}

        <View style={styles.footerContainer}>
          <CustomText style={styles.footerText}>
            Already have an account?
          </CustomText>
          <CustomButton
            text='Login'
            flat
            onPress={navigateToLogin}
          />
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
});
