import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '@constants/style';
import RegisterForm, { RegisterFieldType } from '@components/auth/RegisterForm';
import Title from '@components/general/texts/Title';
import CustomText from '@components/general/texts/Text';
import CustomButton from '@components/general/buttons/CustomButton';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const submitHandler = (values: RegisterFieldType) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Title>Sign Up</Title>
        <CustomText>Create an account to get started...</CustomText>
      </View>

      <RegisterForm onSubmit={submitHandler} />

      <View style={styles.footerContainer}>
        <CustomText style={styles.footerText}>
          Already have an account?
        </CustomText>
        <CustomButton
          text='Login'
          flat
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;

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
