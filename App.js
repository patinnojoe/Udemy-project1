import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalisVisible, setModalVisiblity] = useState(false);

  function toggleModalVisibility() {
    setModalVisiblity(true);
  }
  function cancelModal() {
    setModalVisiblity(false);
  }
  function addGoalHandler(userText) {
    setCourseGoals((currentCouseGoals) => [...currentCouseGoals, { text: userText, id: Math.random().toString() }]);

    cancelModal();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCouseGoals) => {
      return currentCouseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* button to trigger modal */}
        <Button title="Add new Goal" color="#5eC0cc" onPress={toggleModalVisibility} />
        {/* for adding goals */}
        <GoalInput visible={modalisVisible} onAddGoal={addGoalHandler} cancelModal={cancelModal} />

        {/* for list of all Goals */}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} deleteGoal={deleteGoalHandler} id={itemData.item.id} />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
