import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import RouteButton from "@/components/RouteButton";
import "../global.css";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import AssignmentItem from "@/components/AssignmentItem";
import assignmentData from "@/data/assignmentData";
import { useState } from "react";
import AddItemModal from "@/components/AddItemModal";
import ItemInputField from "@/components/ItemInputField";

export default function Student() {
  const [assignments, setAssignments] = useState(assignmentData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [assignmentEditMode, setAssignentEditMode] = useState(false);
  const [newAssignmentTitle, setNewAssignmentTitle] = useState("");
  const [newAssignmentDueDate, setNewAssignmentDueDate] = useState("");
  const [newAssignmentCourse, setNewAssignmentCourse] = useState("");

  function toggleAssignmentCompletion(id: number) {
    const newAssignments = [...assignments];
    const assignment = newAssignments.find(
      (assignment) => assignment.id === id
    );
    if (assignment) {
      assignment.completed = !assignment.completed;
      setAssignments(newAssignments);
    }
  }

  function addAssignment(assignment: Assignment) {
    const newAssignments = [...assignments];
    newAssignments.push(assignment);
    setAssignments(newAssignments);
  }

  function deleteCompletedAssignments() {
    const newAssignments = assignments.filter(
      (assignment) => !assignment.completed
    );
    setAssignments(newAssignments);
  }

  function cleanInputFields() {
    setNewAssignmentTitle("");
    setNewAssignmentCourse("");
    setNewAssignmentDueDate("");
  }

  function handleConfirm() {
    addAssignment({
      id: Date.now(),
      title: newAssignmentTitle,
      course: newAssignmentCourse,
      dueDate: newAssignmentDueDate,
      completed: false,
    });
    cleanInputFields();
    setIsModalVisible(false);
  }

  function handleCancel() {
    cleanInputFields();
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView className="h-full w-full pt-12 bg-[#335276] flex-col items-center gap-y-10">
      <View className="flex-col gap-y-1 w-full px-6">
        <Text className="text-gray-100 font-bold text-2xl">Welcome, Eren</Text>
        <View className="flex-row gap-x-4">
          <Text className="text-gray-200 font-semibold text-lg">GPA: 2.8</Text>
          <Text className="text-gray-200 font-semibold text-lg">
            Absence: 3
          </Text>
          <Text className="text-gray-200 font-semibold text-lg">
            Assignments: {assignments.length}
          </Text>
        </View>
      </View>
      <View className="w-3/4 h-[2px] bg-white" />
      <View className="flex-col w-full h-[65%] gap-y-4 px-6">
        <Text className="text-gray-100 font-bold text-2xl">Assignments</Text>
        <ScrollView
          className="w-full h-full flex-col"
          contentContainerStyle={{ rowGap: 20 }}
        >
          {assignments.map((assignment, index) => (
            <AssignmentItem
              key={index}
              assignment={assignment}
              onPress={toggleAssignmentCompletion}
              isPressable={assignmentEditMode}
            />
          ))}
        </ScrollView>
        <View className="w-full flex-row justify-end items-center gap-x-2">
          <TouchableOpacity
            className="p-3 bg-[#93b7e1] rounded-[16px] flex-row items-center justify-center gap-x-[3px]"
            onPress={() => setAssignentEditMode(!assignmentEditMode)}
          >
            <Ionicons
              name={assignmentEditMode ? "checkmark-sharp" : "pencil"}
              size={20}
              color="white"
            />
            <Text className="text-gray-100 font-semibold text-base">
              {assignmentEditMode ? "Finish" : "Edit"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="p-3 bg-[#93b7e1] rounded-[16px] flex-row items-center justify-center gap-x-[3px]"
            onPress={() =>
              assignmentEditMode
                ? deleteCompletedAssignments()
                : setIsModalVisible(true)
            }
          >
            <Entypo
              name={assignmentEditMode ? "trash" : "plus"}
              size={20}
              color="white"
            />
            <Text className="text-gray-100 font-semibold text-base">
              {assignmentEditMode ? "Delete" : "Add"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <RouteButton label={"Log out"} condition={true} route={"/"} />
      <AddItemModal
        title="Add Assignment"
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
        <View className="w-full flex-col gap-y-5">
          <ItemInputField
            label="Title"
            value={newAssignmentTitle}
            onChangeText={setNewAssignmentTitle}
          />
          <ItemInputField
            label="Course"
            value={newAssignmentCourse}
            onChangeText={setNewAssignmentCourse}
          />
          <ItemInputField
            label="Due Date"
            value={newAssignmentDueDate}
            onChangeText={setNewAssignmentDueDate}
          />
        </View>
      </AddItemModal>
    </SafeAreaView>
  );
}
