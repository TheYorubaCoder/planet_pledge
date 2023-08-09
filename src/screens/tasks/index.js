import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const TaskPage = () => {
  // Define a list of sustainable actions with points
  const sustainableActions = [
    { id: 1, action: 'Use reusable shopping bags', points: 5 },
    { id: 3, action: 'Carpool or use public transportation', points: 15 },
    { id: 4, action: 'Composting organic waste', points: 5 },
    { id: 5, action: 'Installing energy efficient lightbulbs', points: 5 },
    { id: 6, action: 'Planting a tree', points: 20 },
    { id: 7, action: 'Supporting sustainable businesses', points: 10 },
    { id: 8, action: 'Reducing meat consumption', points: 15 },
    { id: 9, action: 'Using a reusable water bottle', points: 5 },
    { id: 10, action: 'Switching to renewable energy sources', points: 20 },
    { id: 11, action: 'Upcycling or repurposing items', points: 10 },
    { id: 12, action: 'Implementing a paperless office/home', points: 10 },
    { id: 13, action: 'Participating in community clean-up events', points: 15 },
    { id: 14, action: 'Supporting local and seasonal produce', points: 5 },
    { id: 15, action: 'Using eco-friendly cleaning products', points: 5 },
    { id: 17, action: 'Opting for electronic receipts', points: 5 },
    { id: 18, action: 'Reducing single-use plastics (straws, cutlery, etc.)', points: 15 },
    { id: 19, action: 'Supporting clothing swaps or second-hand shopping', points: 10 },
    { id: 20, action: 'Conserving energy by turning off appliances when not in use', points: 5 },
    { id: 21, action: 'Using public bike-sharing programs', points: 10 },
    { id: 22, action: 'Creating a composting system at home', points: 15 }
  
  ];

  // State to keep track of completed tasks and points
  const [completedTasks, setCompletedTasks] = useState([]);

  // Function to handle task completion
  const handleTaskCompletion = (taskId) => {
    // Check if the task is already completed
    const isCompleted = completedTasks.includes(taskId);

    if (!isCompleted) {
      // If the task is not completed, update the state with the completed task ID
      setCompletedTasks([...completedTasks, taskId]);
    } else {
      // If the task is already completed, remove it from the completed tasks
      setCompletedTasks(completedTasks.filter((id) => id !== taskId));
    }
  };

  // Function to calculate the total points earned
  const calculateTotalPoints = () => {
    let totalPoints = 0;
    completedTasks.forEach((taskId) => {
      const completedTask = sustainableActions.find((action) => action.id === taskId);
      if (completedTask) {
        totalPoints += completedTask.points;
      }
    });
    return totalPoints;
  };

  // Render each sustainable action as a list item
  const renderActionItem = ({ item }) => {
    const isCompleted = completedTasks.includes(item.id);

    return (
      <TouchableOpacity
        style={[styles.actionItem, isCompleted ? styles.completedAction : null]}
        onPress={() => handleTaskCompletion(item.id)}
      >
        <Text>{item.action}</Text>
        {isCompleted && <Text style={styles.pointsText}>+{item.points} points</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.totalPoints}>Total Points: {calculateTotalPoints()}</Text>
      <FlatList
        data={sustainableActions}
        renderItem={renderActionItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF6E6',
  },
  actionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  completedAction: {
    backgroundColor: '#D4EDDA',
  },
  pointsText: {
    color: '#28A745',
    fontWeight: 'bold',
  },
  totalPoints: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 10,
  },
});

export default TaskPage;
