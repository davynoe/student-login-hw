import assignmentData from "@/data/assignmentData";
import { useState } from "react";

export default function useAssignments() {
  const [assignments, setAssignments] = useState(assignmentData);
  const [modalVisibility, setModalVisibility] = useState(false);

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

  function deleteCompletedAssignments() {
    const newAssignments = assignments.filter(
      (assignment) => !assignment.completed
    );
    setAssignments(newAssignments);
  }

  function addAssignment(assignment: Assignment) {
    const newAssignments = [...assignments];
    newAssignments.push(assignment);
    setAssignments(newAssignments);
  }

  return {
    assignments,
    toggleAssignmentCompletion,
    addAssignment,
    deleteCompletedAssignments,
    modalVisibility,
    setModalVisibility,
  }
}