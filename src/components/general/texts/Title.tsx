import { ReactNode } from 'react'
import { Text, StyleSheet, StyleProp, TextStyle} from 'react-native'
import GlobalStyle from '../../../constants/style'

type TitleProps = {
    children: ReactNode,
    style?: StyleProp<TextStyle>
}

const Title = ({ children, style } : TitleProps) => {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    text: {
        fontFamily: 'poppins-bold',
        fontSize: 24,
        color: GlobalStyle.colors.dark.main
    }
})