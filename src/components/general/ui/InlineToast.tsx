import GlobalStyle from '@constants/style';
import { StyleSheet, Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native';

type ToastColor = 'error' | 'warning' | 'success' | 'info';

interface InlineToastProps {
  color?: ToastColor; 
  message: string;
}

const InlineToast: React.FC<InlineToastProps> = ({ color = 'info', message }) => {
  // Get styles dynamically based on the color
  const dynamicStyles = getStylesForColor(color);

  return (
    <View style={[styles.root, dynamicStyles.container]} accessible accessibilityRole="alert">
      <Text style={[styles.message, dynamicStyles.text]}>{message}</Text>
    </View>
  );
};

// Helper function to get styles dynamically
const getStylesForColor = (color: ToastColor): { container: StyleProp<ViewStyle>; text: StyleProp<TextStyle> } => {
  const backgroundColor = GlobalStyle.colors[color]?.light || GlobalStyle.colors.info.light;
  const borderColor = GlobalStyle.colors[color]?.main || GlobalStyle.colors.info.main;
  const textColor = GlobalStyle.colors[color]?.dark || GlobalStyle.colors.info.dark;

  return {
    container: {
      backgroundColor,
      borderColor,
      borderWidth: 1
    },
    text: {
      color: textColor,
    },
  };
};

export default InlineToast;

const styles = StyleSheet.create({
  root: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 16
  },
  message: {
    fontFamily: 'poppins-bold',
    fontSize: 12,
    textAlign: 'center'
  },
});
