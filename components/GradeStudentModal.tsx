import { useState } from "react";
import AddItemModal from "./AddItemModal";
import ItemInputField from "./ItemInputField";

export default function GradeStudentModal({
  isVisible,
  onClose,
  studentId,
  gradeStudent,
}: GradeStudentModalProps) {
  const [gradeInput, setNewGradeInput] = useState("");

  function handleConfirm() {
    const grade = gradeInput.trim() === "" ? -1 : Number(gradeInput.trim());
    gradeStudent(studentId, grade);
    setNewGradeInput("");
  }

  function handleClose() {
    setNewGradeInput("");
    onClose();
  }

  return (
    <AddItemModal
      title="Grade/Regrade Student"
      isVisible={isVisible}
      onClose={() => handleClose()}
      onConfirm={() => handleConfirm()}
      onCancel={() => setNewGradeInput("")}
    >
      <ItemInputField
        value={gradeInput}
        onChangeText={setNewGradeInput}
        label="Grade"
        isNumeric
      />
    </AddItemModal>
  );
}
