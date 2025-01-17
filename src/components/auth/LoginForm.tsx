import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../general/buttons/CustomButton';
import TextField from '../general/form/TextField';
import { useState } from 'react';
import { Formik } from 'formik';
import LoginSchema from '../../schema/auth/LoginSchema';

export type LoginFieldType = {
  email: string,
  password: string,
};

type LoginFormProps = {
  onSubmit: (credentials: LoginFieldType) => void,
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [authValues, setAuthValues] = useState<LoginFieldType>({
    email: '',
    password: '',
  });

  return (
    <View style={styles.form}>
      <Formik
        initialValues={authValues}
        onSubmit={onSubmit}
        validationSchema={LoginSchema}
      >
        {({ handleChange, touched, errors, values, handleSubmit }) => (
          <>
            <View style={styles.inputContainer}>
              <TextField
                label={'Email address'}
                error={touched.email && errors.email ? errors.email : ''}
                textInputProps={{
                  maxLength: 50,
                  placeholder: 'Email',
                  value: values.email,
                  onChangeText: handleChange('email'),
                  textContentType: 'emailAddress',
                  autoComplete: 'email',
                  autoCapitalize: 'none',
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextField
                label={'Password'}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
                textInputProps={{
                  maxLength: 50,
                  placeholder: 'Password',
                  value: values.password,
                  onChangeText: handleChange('password'),
                  textContentType: 'password',
                  autoComplete: 'password',
                  autoCapitalize: 'none',
                  secureTextEntry: true,
                }}
              />
            </View>

            <CustomButton
              text='Login'
              style={{ marginTop: 8 }}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  form: {},
  inputContainer: {
    marginVertical: 8,
  },
});
