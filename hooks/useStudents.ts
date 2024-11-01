import { useState } from "react";
import studentData from "@/data/studentData";

export default function useStudents() {
  const [students, setStudents] = useState(studentData);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<number>();

  function handleGradePress(id: number) {
    setSelectedStudent(id);
    setModalVisibility(true);
  }

  function gradeColor(grade: number | undefined) {
    if (grade === undefined) {
      return "#ff4c4c"; // Red for undefined grades (warning)
    } else if (grade >= 0 && grade <= 25) {
      return "#ff6200"; // Orange for poor performance
    } else if (grade > 25 && grade <= 50) {
      return "#ffa500"; // Yellow for below-average performance
    } else if (grade > 50 && grade <= 75) {
      return "#007bff"; // Blue Green for average performance
    } else {
      return "#4caf50"; // Green for excellent performance
    }
  }

  function gradeStudent(id: number, grade: number) {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, grade: grade === -1 ? undefined : grade } : student
      )
    );
  }

  function getAverageGrade() {
    const gradedStudents = students.filter(
      (student) => student.grade !== undefined
    );

    if (gradedStudents.length === 0) {
      return "0.00";
    }

    const result =
      gradedStudents.reduce((sum, student) => sum + student.grade!, 0) /
      gradedStudents.length;

    return result.toFixed(2);
  }

  function getUngradedStudentCount() {
    return students.filter((student) => student.grade === undefined).length;
  }

  return {
    students,
    modalVisibility,
    selectedStudent,
    setModalVisibility,
    handleGradePress,
    gradeColor,
    gradeStudent,
    getAverageGrade,
    getUngradedStudentCount,
  }
}