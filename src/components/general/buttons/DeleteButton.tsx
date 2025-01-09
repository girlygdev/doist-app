import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type DeleteButtonProps = {
  onPress: () => void,
  style?: Object
};

const DeleteButton = ({ onPress, style }: DeleteButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress.bind(this)}
      style={[styles.button, style]}
    >
      <Text style={styles.text}>Delete</Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: '#FFD1D1',
    borderRadius: 4,
    padding: 8,
    width: '100%'
  },
  text: {
    textAlign: 'center',
    color: '#393E46'
  },
});
