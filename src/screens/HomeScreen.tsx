import { StyleSheet, View } from 'react-native';
import ProfileHeader from '../components/profile/ProfileHeader';
import Projects from '../components/projects/Projects';
import Tasks from '../components/tasks/Tasks';

const HomeScreen = () => {
  return (
    <View style={styles.appContainer}>
      <ProfileHeader />
      <Projects />
      <Tasks />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 50,
    paddingHorizontal: 16,
  },
});
