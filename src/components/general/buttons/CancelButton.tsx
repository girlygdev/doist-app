import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type CancelButtonProps = {
  onPress: () => void,
  style?: Object
};

const CancelButton = ({ onPress, style }: CancelButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress.bind(this)}
      style={[styles.button, style]}
    >
      <Text style={styles.text}>Cancel</Text>
    </TouchableOpacity>
  );
};

export default CancelButton;

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    borderRadius: 4,
    padding: 8,
  },
  text: {
    textAlign: 'center',
  },
});
