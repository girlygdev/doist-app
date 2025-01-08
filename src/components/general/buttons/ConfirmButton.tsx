import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ConfirmButtonProps = {
  onPress: () => void,
  style?: Object
};

const ConfirmButton = ({ onPress, style }: ConfirmButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress.bind(this)}
      style={[styles.button, style]}
    >
      <Text style={styles.text}>Confirm</Text>
    </TouchableOpacity>
  );
};

export default ConfirmButton;

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: '#00ADB5',
    borderRadius: 4,
    padding: 8,
    width: '100%'
  },
  text: {
    textAlign: 'center',
    color: '#fff'
  },
});
