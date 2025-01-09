import { Text, StyleSheet, Pressable } from 'react-native';
import useProjectStore, { Project } from '../../stores/useProjectStore';

type ProjectItemProps = {
  project: Project,
  onEditProject: () => void,
};

const ProjectItem = ({ project, onEditProject }: ProjectItemProps) => {
  const { setCurrentProjectId } = useProjectStore((state) => state);

  const handleSelectProject = () => {
    setCurrentProjectId(project.id);
    onEditProject();
  };

  return (
    <Pressable
      style={styles.itemContainer}
      onPress={handleSelectProject}
    >
      <Text>{project.title}</Text>
    </Pressable>
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
    marginRight: 5,
  },
});
