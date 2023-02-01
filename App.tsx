import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TasksScreen from "./screens/TasksScreen";

export default function App() {
  return (
    <SafeAreaView>
      <TasksScreen />
    </SafeAreaView>
  );
}
