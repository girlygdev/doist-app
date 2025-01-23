import GlobalStyle from '@constants/style';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

type LoadingOverlayProps = {
  message?: string,
};

const LoadingOverlay = ({ message }: LoadingOverlayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator
        size={'large'}
        color={GlobalStyle.colors.primary.main}
      />
      </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyle.colors.overlay,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    opacity: .9
  },
  message: {
    marginBottom: 24,
    fontFamily: 'poppins',
    fontSize: 12,
    color: GlobalStyle.colors.dark.main,
  },
});
