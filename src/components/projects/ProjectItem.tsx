import { View, Text, StyleSheet } from 'react-native';
import { Project } from '../../stores/useProjectStore';

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{project.title}</Text>
    </View>
  );
};

export default ProjectItem;

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#393E46',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 5
    }
})
