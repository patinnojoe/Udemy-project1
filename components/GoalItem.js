import { StyleSheet, Text, Pressable } from 'react-native';
function GoalItem(props) {
  return (
    <Pressable android_ripple={{ color: '#dddddd' }} onPress={props.deleteGoal.bind(this, props.id)}>
      <Text style={styles.listItems}>{props.text}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listItems: {
    margin: 6,
    borderRadius: 6,
    fontSize: 14,
    backgroundColor: '#5e0acc',
    padding: 6,
    color: '#ffff',
  },
});
