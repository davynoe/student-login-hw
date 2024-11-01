import GradeStudentModal from "@/components/GradeStudentModal";
import RouteButton from "@/components/RouteButton";
import "@/global.css";
import useStudents from "@/hooks/useStudents";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Teacher() {
  const {
    students,
    modalVisibility,
    selectedStudent,
    setModalVisibility,
    handleGradePress,
    gradeColor,
    gradeStudent,
    getAverageGrade,
    getUngradedStudentCount,
  } = useStudents();

  return (
    <SafeAreaView className="h-full w-full py-12 bg-[#335276] flex-col items-center gap-y-10">
      <View className="flex-col gap-y-1 w-full px-6">
        <Text className="text-gray-100 font-bold text-2xl">Welcome, Eren</Text>
        <View className="flex-row gap-x-4">
          <Text className="text-gray-200 font-semibold text-lg">
            Students: {students.length}
          </Text>
          <Text className="text-gray-200 font-semibold text-lg">
            Ungraded: {getUngradedStudentCount()}
          </Text>
          <Text className="text-gray-200 font-semibold text-lg">
            Avg Grade: {getAverageGrade()}
          </Text>
        </View>
      </View>
      <View className="w-3/4 h-[2px] bg-white" />
      <View className="flex-1 w-[95%] gap-y-2">
        <Text className="text-gray-100 font-bold text-2xl">Students</Text>
        <ScrollView
          className="w-full h-full flex-col"
          contentContainerStyle={{ rowGap: 20 }}
        >
          {students.map((student, index) => (
            <View
              key={index}
              className="flex-row justify-between gap-x-2 bg-[#93b7e1] p-4 rounded-[16px]"
            >
              <View className="flex-1 flex-col gap-y-2">
                <View className="flex-row gap-x-2 items-center">
                  <Ionicons name="person" size={24} color="white" />
                  <Text className="text-gray-100 font-semibold text-lg">
                    {student.name}
                  </Text>
                </View>
                <View className="flex-row gap-x-2 items-center">
                  <Ionicons name="mail" size={24} color="white" />
                  <Text className="text-gray-100 font-semibold text-lg">
                    {student.email}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                className="flex-col items-center justify-center bg-slate-300 px-4 py-1 gap-y-2 rounded-lg"
                onPress={() => handleGradePress(student.id)}
              >
                <Ionicons
                  name="star"
                  size={24}
                  color={gradeColor(student.grade)}
                />
                <Text
                  className="font-bold"
                  style={{ color: gradeColor(student.grade) }}
                >
                  Grade: {student.grade ?? "UNSET"}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <RouteButton label="Log out" condition={true} route="/" />
      <GradeStudentModal
        isVisible={modalVisibility}
        onClose={() => setModalVisibility(false)}
        studentId={selectedStudent!}
        gradeStudent={gradeStudent}
      />
    </SafeAreaView>
  );
}
