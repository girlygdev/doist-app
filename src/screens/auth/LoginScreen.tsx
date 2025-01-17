import { StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../constants/style';
import Title from '../../components/general/texts/Title';
import CustomText from '../../components/general/texts/Text';
import TextField from '../../components/general/form/TextField';
import { useState } from 'react';
import CustomButton from '../../components/general/buttons/CustomButton';
import { isEmpty } from 'lodash';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState()
  const [passwordError, setPasswordError] = useState()

  const loginHandler = () => {
    const isValid = validateFields();

    if (isValid) {
      console.log(username, password)
    }
  }

  const validateFields = () : boolean => {
    const errors: any = {}

    if (!username?.trim().length) {
      errors.username = 'Username or email is required.'
    }

    if (!password?.trim().length) {
      errors.password = 'Password is required.'
    }

    setUsernameError(errors.username ?? undefined)
    setPasswordError(errors.password ?? undefined)

    if (isEmpty(errors)) {
      return true
    } else {
      return false
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Title>Sign in</Title>
        <CustomText>Log back in to your account...</CustomText>
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
  inputContainer: {
    marginVertical: 8,
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
