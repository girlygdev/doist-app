import { useEffect, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ConfirmButton from '../../components/general/buttons/ConfirmButton';
import CancelButton from '../../components/general/buttons/CancelButton';
import useProjectStore from '../../stores/useProjectStore';
import OverlineLabel from '../../components/general/OverlineLabel';
import DeleteButton from '../../components/general/buttons/DeleteButton';

type UpdateProjectDialogProps = {
  open: boolean,
  onClose: () => void,
};

const UpdateProjectDialog = ({ open, onClose }: UpdateProjectDialogProps) => {
  const { currentProjectId, getCurrentProject, deleteProject, updateProject } = useProjectStore((state) => state);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const currProject = getCurrentProject()
    
    if (currProject) {
        setTitle(currProject.title || '')
        setDescription(currProject.description || '')
    }
  }, [open, currentProjectId])

  const handleUpdateProject = () => {
    if (currentProjectId && title) {
      updateProject(currentProjectId, {
        id: currentProjectId,
        title,
        description
      });

      handleCloseUpdateProject();
    }
  };

  const handleDeleteProject = () => {
    deleteProject(currentProjectId!);
    handleCloseUpdateProject();
  }

  const handleCloseUpdateProject = () => {
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <Modal
      visible={open}
      animationType='slide'
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Update Project</Text>

        <TouchableOpacity onPress={handleCloseUpdateProject}>
          <OverlineLabel text='Cancel' />
        </TouchableOpacity>
      </View>

      <View style={styles.bodyContainer}>
        <View>
          <OverlineLabel text='Title' />

          <TextInput
            style={styles.textInput}
            placeholder='Project Title'
            onChangeText={setTitle}
            value={title}
          />

          <OverlineLabel text='Description' />
          <TextInput
            style={styles.textDescription}
            placeholder='Description'
            onChangeText={setDescription}
            multiline
            numberOfLines={5}
            value={description}
          />
        </View>

        <View>
          <ConfirmButton
            onPress={handleUpdateProject}
            style={{ width: '98%', marginBottom: 5 }}
          />
          <DeleteButton
            onPress={handleDeleteProject}
            style={{ width: '98%', marginBottom: 5 }}
          />
          <CancelButton
            onPress={handleCloseUpdateProject}
            style={{ width: '98%' }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default UpdateProjectDialog;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  bodyContainer: {
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#F9F7F7',
    backgroundColor: '#F9F7F7',
    borderRadius: 4,
    marginRight: 8,
    padding: 10,
    color: '#393E46',
    marginBottom: 16,
  },
  textDescription: {
    borderWidth: 1,
    borderColor: '#F9F7F7',
    backgroundColor: '#F9F7F7',
    borderRadius: 4,
    marginRight: 8,
    padding: 10,
    color: '#393E46',
    marginBottom: 8,
    height: 100,
    textAlignVertical: 'top',
  },
  headerTitle: {
    fontWeight: 700,
    fontSize: 24,
    color: '#393E46',
    flex: 1,
  },
});
