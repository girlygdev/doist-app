import { StyleSheet, Text } from 'react-native';

const OverlineLabel = ({ text }: { text: string }) => {
  return <Text style={styles.label}>{text}</Text>;
};

export default OverlineLabel;

const styles = StyleSheet.create({
  label: {
    color: '393E46',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: 10,
    marginBottom: 8,
    letterSpacing: 1.5,
  },
});
