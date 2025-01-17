import { StyleSheet, Text, View } from 'react-native';
import { isEmpty } from 'lodash';
import CustomButton from '../general/buttons/CustomButton';
import CustomText from '../general/texts/Text';
import TextField from '../general/form/TextField';
import GlobalStyle from '../../constants/style';
import { useState } from 'react';

type AuthFormProps = {};
const AuthForm = ({}: AuthFormProps) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    email: undefined,
    confirmEmail: undefined,
    password: undefined,
    confirmPassword: undefined
  })

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
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <TextField
          label={'Username'}
          error={usernameError}
          textInputProps={{
            maxLength: 50,
            placeholder: 'Username or email',
            value: enteredEmail,
            onChangeText: setEnteredEmail,
            textContentType: 'username',
            onBlur: validateFields,
            onChange: validateFields,
            autoComplete: 'username',
            autoCapitalize: 'none',
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextField
          label={'Password'}
          error={passwordError}
          textInputProps={{
            maxLength: 50,
            placeholder: 'Password',
            value: password,
            onChangeText: setPassword,
            textContentType: 'password',
            secureTextEntry: true,
            onBlur: validateFields,
            onChange: validateFields,
            autoComplete: 'password',
            autoCapitalize: 'none',
          }}
        />
      </View>

      <CustomButton
        text='Login'
        style={{ marginTop: 8 }}
        onPress={loginHandler}
      />

      <View style={styles.footerContainer}>
        <CustomText style={styles.footerText}>
          Don't have an account?
        </CustomText>
        <CustomButton
          text='Sign Up'
          flat
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  form: {},
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
