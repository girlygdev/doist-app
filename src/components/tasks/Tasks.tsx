import { StyleSheet, View } from 'react-native';
import NewTaskButton from './NewTaskButton';
import { useState } from 'react';
import GlobalStyle from '../../constants/style';

const Tasks = () => {
  const [openAddTaskDialog, setOpenAddTaskDialog] = useState(false);

  return (
    <>
      <View style={styles.taskContainer}>
        <NewTaskButton />
      </View>
    </>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  taskContainer: {
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: GlobalStyle.colors.light.light,
  },
});
