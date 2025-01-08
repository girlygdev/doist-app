import { useState } from 'react';
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
import uuid from 'react-native-uuid'

type NewProjectDialogProps = {
  open: boolean,
  onClose: () => void,
};

const NewProjectDialog = ({ open, onClose }: NewProjectDialogProps) => {
  const {addProject} = useProjectStore(state => state)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProject = () => {
    if (title) {
      addProject({
        id: uuid.v4(),
        title,
        description
      })
  
      handleCloseAddProject()
    }
  };

  const handleCloseAddProject = () => {
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <Modal visible={open} animationType='slide'>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>New Project</Text>

        <TouchableOpacity onPress={handleCloseAddProject}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Project Title'
            onChangeText={setTitle}
          />

          <TextInput
            style={styles.textInput}
            placeholder='Description'
            onChangeText={setDescription}
            multiline
            
          />
        </View>

        <View style={styles.actionContainer}>
          <ConfirmButton
            onPress={handleAddProject}
            style={{ width: '98%', marginBottom: 5 }}
          />
          <CancelButton
            onPress={handleCloseAddProject}
            style={{ width: '98%' }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default NewProjectDialog;

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
    borderColor: '#E3FDFD',
    backgroundColor: '#E3FDFD',
    borderRadius: 4,
    marginRight: 8,
    padding: 10,
    color: '#393E46',
  },
  headerTitle: {
    fontWeight: 700,
    fontSize: 24,
    color: '#393E46',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'column',
  },
  cancelText: {
    fontSize: 18,
    color: '#EE6983',
  },
  actionContainer: {
    marginTop: 8,
  },
});
