import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProfileHeader from './src/components/profile/ProfileHeader';
import Projects from './src/components/projects/Projects';

export default function App() {
  return (
    <>
      <StatusBar />

      <View style={styles.appContainer}>
        <ProfileHeader />
        <Projects />
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 50,
    paddingHorizontal: 16,
  },
});
