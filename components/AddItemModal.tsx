import { Modal, View, Text, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AddItemModal({
  title,
  isVisible,
  onClose,
  onConfirm,
  onCancel,
  cancelShouldClose = true,
  children,
}: AddItemModalProps) {
  return (
    <Modal
      visible={isVisible}
      transparent
      onRequestClose={onClose}
      animationType="fade"
    >
      <View className="flex-1 justify-center items-center bg-zinc-800/40">
        <View className="bg-[#607fa3] w-[95%] px-3 py-4 rounded-xl flex-col gap-y-3">
          <View className="flex-row items-center justify-end w-full">
            <Text className="absolute text-white text-xl font-inter-m w-full text-center">
              {title}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={30} color="white" />
            </TouchableOpacity>
          </View>
          {children}
          <View className="w-full flex-row items-center justify-center gap-x-5">
            <TouchableOpacity
              className="p-3 bg-[#93b7e1] rounded-[16px] flex-row items-center justify-center gap-x-[3px]"
              onPress={() => {
                onCancel();
                if (cancelShouldClose) onClose();
              }}
            >
              <Ionicons name="close-sharp" size={20} color="white" />
              <Text className="text-gray-100 font-semibold text-base">
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="p-3 bg-[#93b7e1] rounded-[16px] flex-row items-center justify-center gap-x-[3px]"
              onPress={onConfirm}
            >
              <Ionicons name="checkmark-sharp" size={20} color="white" />
              <Text className="text-gray-100 font-semibold text-base">
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
