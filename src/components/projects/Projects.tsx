import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProjectItem from './ProjectItem';
import useProjectStore from '../../stores/useProjectStore';
import { useState } from 'react';
import NewProjectDialog from '../../dialogs/projects/NewProjectDialog';

const Projects = () => {
  const { projects } = useProjectStore((state) => state);
  const [openAddProjectDialog, setOpenAddProjectDialog] = useState(false);

  return (
    <View style={styles.projectContainer}>
      {projects.length ? (
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.projectLabel}>Projects</Text>

            <TouchableOpacity
              onPress={() => setOpenAddProjectDialog(true)}
              style={styles.addButton}
            >
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={projects}
            keyExtractor={(project) => project.id}
            renderItem={(projectData) => (
              <ProjectItem project={projectData.item} />
            )}
            style={styles.projectListContainer}
            horizontal
          />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => setOpenAddProjectDialog(true)}
          style={styles.addButtonEmpty}
        >
          <Text style={styles.addButtonEmptyText}>Add Project</Text>
        </TouchableOpacity>
      )}

      <NewProjectDialog
        open={openAddProjectDialog}
        onClose={() => setOpenAddProjectDialog(false)}
      />
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  projectContainer: {
    marginVertical: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  projectListContainer: {
    flexDirection: 'row',
  },
  addButton: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#00ADB5',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    width: 70,
  },
  addButtonText: {
    textAlign: 'center',
  },
  addButtonEmpty: {
    borderWidth: 1,
    borderColor: '#393E46',
    borderStyle: 'dashed',
    padding: 30,
    borderRadius: 16,
  },
  addButtonEmptyText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    color: '#393E46',
  },
  projectLabel: {
    color: '#393E46',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: 12,
    flex: 1,
  },
});
