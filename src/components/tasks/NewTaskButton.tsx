import { StyleSheet, Text, TouchableOpacity } from "react-native"

const NewTaskButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>New Task</Text>
    </TouchableOpacity>
  )
}

export default NewTaskButton

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#71C9CE',
        borderRadius: 25
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff'
    }
})