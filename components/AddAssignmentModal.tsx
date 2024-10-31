import { useState } from "react";
import AddItemModal from "./AddItemModal";
import ItemInputField from "./ItemInputField";
import { View } from "react-native";

export default function AddAssignmentModal({
  isVisible,
  onClose,
  onAssignmentAdd,
}: AddAssignmentModalProps) {
  const [newAssignmentTitle, setNewAssignmentTitle] = useState("");
  const [newAssignmentDueDate, setNewAssignmentDueDate] = useState("");
  const [newAssignmentCourse, setNewAssignmentCourse] = useState("");

  function cleanInputFields() {
    setNewAssignmentTitle("");
    setNewAssignmentCourse("");
    setNewAssignmentDueDate("");
  }

  function handleConfirm() {
    onAssignmentAdd({
      id: Date.now(),
      title: newAssignmentTitle,
      course: newAssignmentCourse,
      dueDate: newAssignmentDueDate,
      completed: false,
    });
    cleanInputFields();
  }

  return (
    <AddItemModal
      title="Add Assignment"
      isVisible={isVisible}
      onClose={onClose}
      onConfirm={handleConfirm}
      onCancel={cleanInputFields}
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
  );
}
