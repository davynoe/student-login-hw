import { Href, router } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

function handlePress(condition: boolean, route: Href<string | object>) {
  if (condition) router.push(route);
}

export default function RouteButton({
  label,
  condition,
  route,
}: RouteButtonProps) {
  return (
    <TouchableOpacity
      className="px-8 py-4 bg-[#4195c5] rounded-3xl"
      onPress={() => handlePress(condition, route)}
    >
      <Text className="text-xl font-semibold text-white">{label}</Text>
    </TouchableOpacity>
  );
}
