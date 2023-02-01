import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import ITask from "../interfaces/ITask";
import { Button, Stack } from "@react-native-material/core";
import AddTaskComponent from "../components/AddTaskComponent";
import uuid from "react-native-uuid";
import TaskListComponent from "../components/TaskListComponent";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { setToken } from "../stores/tokenReducer";

const TasksScreen = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const dispatch = useDispatch();

  const createTask = (text: string) => {
    const newTask = {
      id: uuid.v4().toString(),
      name: text,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (task: ITask) => {
    setTasks([
      ...tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return t;
      }),
    ]);
  };

  const deleteTask = (task: ITask) => {
    setTasks([...tasks.filter((t) => t.id !== task.id)]);
  };

  const logout = () => {
    SecureStore.deleteItemAsync("token");
    dispatch(setToken(""));
  };

  return (
    <Stack mt={6} justify="start" items="start">
      <Button title="Logout" onPress={logout} />
      <AddTaskComponent onAddButtonPressed={createTask} />
      <TaskListComponent
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </Stack>
  );
};

export default TasksScreen;
