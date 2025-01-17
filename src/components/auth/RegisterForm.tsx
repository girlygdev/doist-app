import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../general/buttons/CustomButton';
import TextField from '../general/form/TextField';
import { useState } from 'react';
import { Formik } from 'formik';
import RegisterSchema from '../../schema/auth/RegisterSchema';

export type RegisterFieldType = {
  email: string,
  confirmEmail: string,
  password: string,
  confirmPassword: string
};

type RegisterFormProps = {
  onSubmit: (credentials: RegisterFieldType) => void,
};

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [authValues, setAuthValues] = useState<RegisterFieldType>({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <View style={styles.form}>
      <Formik
        initialValues={authValues}
        onSubmit={onSubmit}
        validationSchema={RegisterSchema}
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
                label={'Confirm email'}
                error={touched.confirmEmail && errors.confirmEmail ? errors.confirmEmail : ''}
                textInputProps={{
                  maxLength: 50,
                  placeholder: 'Confirm email',
                  value: values.confirmEmail,
                  onChangeText: handleChange('confirmEmail'),
                  textContentType: 'emailAddress',
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

            <View style={styles.inputContainer}>
              <TextField
                label={'Confirm Password'}
                error={
                  touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ''
                }
                textInputProps={{
                  maxLength: 50,
                  placeholder: 'Confirm Password',
                  value: values.confirmPassword,
                  onChangeText: handleChange('confirmPassword'),
                  textContentType: 'password',
                  autoCapitalize: 'none',
                  secureTextEntry: true,
                }}
              />
            </View>

            <CustomButton
              text='Sign Up'
              style={{ marginTop: 8 }}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  form: {},
  inputContainer: {
    marginVertical: 8,
  },
});
