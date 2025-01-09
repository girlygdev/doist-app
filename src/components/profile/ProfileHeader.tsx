import { Image, StyleSheet, Text, View } from 'react-native';
import useProjectStore from '../../stores/useProjectStore';

const ProfileHeader = () => {
  const { projects } = useProjectStore((state) => state);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text>Hello User,</Text>
        <Text style={styles.projectTitle}>
          Your Projects ({projects.length})
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/avatar.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  projectTitle: {
    fontWeight: 700,
    fontSize: 32,
  },
  headerTextContainer: {
    flex: 1,
  },
  imageContainer: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#00ADB5',
    backgroundColor: '#00ADB5',
    width: 65,
    height: 65,
    overflow: 'hidden',
  },
  image: {
    width: 65,
    height: 65,
  },
});
