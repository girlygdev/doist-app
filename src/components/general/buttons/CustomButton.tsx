import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../../constants/style';

type CustomButtonProps = {
  onPress: () => void,
  style?: Object,
  text: string
  flat?: boolean
};

const CustomButton = ({ text, onPress, style, flat }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress.bind(this)}
      style={[styles.button, style, flat && styles.flat]}
    >
      <Text style={[styles.text, flat && styles.flatText]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: GlobalStyle.colors.primary.main,
    borderRadius: 4,
    padding: 8,
    width: '100%'
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'poppins'
  },
  flat: {
    backgroundColor: 'transparent'
  },
  flatText: {
    color: GlobalStyle.colors.primary.main,
    fontSize: 14
  }
});
