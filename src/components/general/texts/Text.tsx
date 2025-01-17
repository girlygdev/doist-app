import { ReactNode } from 'react'
import { Text, StyleSheet, StyleProp, TextStyle} from 'react-native'
import GlobalStyle from '../../../constants/style'

type CustomTextProps = {
    children: ReactNode,
    style?: StyleProp<TextStyle>
}

const CustomText = ({ children, style } : CustomTextProps) => {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}

export default CustomText

const styles = StyleSheet.create({
    text: {
        fontFamily: 'poppins',
        fontSize: 16,
        color: GlobalStyle.colors.dark.main
    }
})