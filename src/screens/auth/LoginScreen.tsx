import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '@constants/style';
import LoginForm, { LoginFieldType } from '../../components/auth/LoginForm';
import Title from '@components/general/texts/Title';
import CustomText from '@components/general/texts/Text';
import CustomButton from '@components/general/buttons/CustomButton';

const LoginScreen = () => {
  const navigation = useNavigation();

  const submitHandler = (values: LoginFieldType) => {
    console.log(values);
  };

  const signupHandler = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Title>Sign in</Title>
        <CustomText>Log back in to your account...</CustomText>
      </View>

      <LoginForm onSubmit={submitHandler} />

      <View style={styles.footerContainer}>
        <CustomText style={styles.footerText}>
          Don't have an account?
        </CustomText>
        <CustomButton
          text='Sign Up'
          flat
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.secondary.light,
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
