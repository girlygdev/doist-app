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
import uuid from 'react-native-uuid';
import OverlineLabel from '../../components/general/OverlineLabel';

type NewProjectDialogProps = {
  open: boolean,
  onClose: () => void,
};

const NewProjectDialog = ({ open, onClose }: NewProjectDialogProps) => {
  const { addProject } = useProjectStore((state) => state);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProject = () => {
    if (title) {
      addProject({
        id: uuid.v4(),
        title,
        description,
      });

      handleCloseAddProject();
    }
  };

  const handleCloseAddProject = () => {
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
        <Text style={styles.headerTitle}>New Project</Text>

        <TouchableOpacity onPress={handleCloseAddProject}>
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
          />

          <OverlineLabel text='Description' />
          <TextInput
            style={styles.textDescription}
            placeholder='Description'

            onChangeText={setDescription}
            multiline
            numberOfLines={5}
          />
        </View>

        <View>
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
  },
  headerTitle: {
    fontWeight: 700,
    fontSize: 24,
    color: '#393E46',
    flex: 1,
  }
});
