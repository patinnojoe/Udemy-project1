import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native';

function GoalInput(props) {
  const [userText, setUserText] = useState('');

  function goalInputHandler(userText) {
    setUserText(userText);
  }

  function addGoalHandler() {
    props.onAddGoal(userText);
    setUserText('');
  }
  console.log('goooal iii');
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.imageStyle} />

        {/* <Image source={require('../assets/images/images')} style={styles.imageStyle} /> */}
        <TextInput
          placeholder="Your course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={userText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5eC0cc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancelModal} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
    backgroundColor: '#311b6b',
    flexDirection: 'column',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    color: '#120438',
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
