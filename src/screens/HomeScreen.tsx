import { StyleSheet, View } from 'react-native';
import ProfileHeader from '../components/profile/ProfileHeader';
import Projects from '../components/projects/Projects';
import Tasks from '../components/tasks/Tasks';
import CustomButton from '@components/general/buttons/CustomButton';
import useAuthStore from '@stores/useAuthStore';

const HomeScreen = () => {
  const {logout} = useAuthStore(state => state)

  return (
    <View style={styles.appContainer}>
      <ProfileHeader />
      <Projects />
      <Tasks />
      <CustomButton text='Logout' onPress={logout} />
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
