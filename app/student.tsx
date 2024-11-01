import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import RouteButton from "@/components/RouteButton";
import "../global.css";
import AssignmentList from "@/components/AssignmentList";
import AddAssignmentModal from "@/components/AddAssignmentModal";
import useAssignments from "@/hooks/useAssignments";

export default function Student() {
  const {
    assignments,
    toggleAssignmentCompletion,
    addAssignment,
    deleteCompletedAssignments,
    modalVisibility,
    setModalVisibility,
  } = useAssignments();

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
      <AssignmentList
        assignments={assignments}
        onSelectAssignment={toggleAssignmentCompletion}
        onDelete={deleteCompletedAssignments}
        onAdd={() => setModalVisibility(true)}
      />
      <RouteButton label={"Log out"} condition={true} route={"/"} />
      <AddAssignmentModal
        isVisible={modalVisibility}
        onAssignmentAdd={addAssignment}
        onClose={() => setModalVisibility(false)}
      />
    </SafeAreaView>
  );
}
