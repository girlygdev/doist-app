import { StyleSheet, StyleProp, TextStyle, TextInput, TextInputProps, View, Text} from 'react-native'
import GlobalStyle from '../../../constants/style'

type TextFieldProps = {
    style?: StyleProp<TextStyle>
    textInputProps: TextInputProps
    label?: string
    error?: string
}

const TextField = ({ label, style, textInputProps, error } : TextFieldProps) => {
  return (
    <View>
        <Text style={[styles.label, error && styles.labelError]}>{label}</Text>
        <TextInput style={[styles.input, style, error && styles.inputError]} {...textInputProps} />
        { error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default TextField

const styles = StyleSheet.create({
    input: {
        fontFamily: 'poppins',
        fontSize: 16,
        color: GlobalStyle.colors.dark.main,
        margin: 0,
        backgroundColor: GlobalStyle.colors.light.light,
        borderRadius: 8,
        paddingHorizontal: 8
    },
    label: {
        fontSize: 12,
        fontFamily: 'poppins-light',
        color: GlobalStyle.colors.dark.main,
        textTransform: 'capitalize'
    },
    error: {
        fontSize: 10,
        fontFamily: 'poppins',
        color: GlobalStyle.colors.error.main,
    },
    labelError: {
        color: GlobalStyle.colors.error.main,
    },
    inputError: {
        borderColor: GlobalStyle.colors.error.main,
        borderWidth: 1
    }
})