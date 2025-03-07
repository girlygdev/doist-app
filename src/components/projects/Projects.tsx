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
import OverlineLabel from '../general/OverlineLabel';
import UpdateProjectDialog from '../../dialogs/projects/UpdateProjectDialog';
import GlobalStyle from '../../constants/style';

const Projects = () => {
  const { projects } = useProjectStore((state) => state);
  const [openAddProjectDialog, setOpenAddProjectDialog] = useState(false);
  const [openUpdateProjectDialog, setOpenUpdateProjectDialog] = useState(false);

  return (
    <View style={styles.projectContainer}>
      {projects.length ? (
        <View>
          <View style={styles.titleContainer}>
            <OverlineLabel text='Projects' />

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
              <ProjectItem
                project={projectData.item}
                onEditProject={() => setOpenUpdateProjectDialog(true)}
              />
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

      <UpdateProjectDialog
        open={openUpdateProjectDialog}
        onClose={() => setOpenUpdateProjectDialog(false)}
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
    borderColor: GlobalStyle.colors.primary.main,
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
    borderColor: GlobalStyle.colors.dark.main,
    borderStyle: 'dashed',
    padding: 30,
    borderRadius: 16,
  },
  addButtonEmptyText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    color: GlobalStyle.colors.dark.main,
  },
});
