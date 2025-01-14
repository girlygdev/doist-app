import { Button, StyleSheet, View } from 'react-native';
import ProfileHeader from '../components/profile/ProfileHeader';

type UserScreenType = {
  navigation: any,
};

const UserScreen = ({ navigation }: UserScreenType) => {
  const openMenuHandler = () => {
    // navigation.toggleDrawer()
  };

  return (
    <View style={styles.appContainer}>
      <ProfileHeader />
      <Button
        title='Menu'
        onPress={openMenuHandler}
      />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
});
