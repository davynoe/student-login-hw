interface Assignment {
  id: number,
  title: string,
  dueDate: string,
  course: string,
  completed: boolean,
}

interface AssignmentItemProps {
  assignment: Assignment,
  onPress: (index: number) => void,
  isPressable: boolean,
}

interface AssetImages {
  imuLogo: ImageSourcePropType,
}

interface LoginInputFieldProps {
  label: string,
  value: string,
  onValueChange: (text: string) => void,
  isPassword?: boolean,
}

interface RouteButtonProps {
  label: string,
  condition: boolean,
  route: Href<string | object>,
}

interface AddItemModalProps {
  title: string
  isVisible: boolean,
  children: ReactNode,
  onClose: () => void,
  onConfirm: () => void,
  onCancel: () => void,
  cancelShouldClose?: boolean,
}

interface ItemInputFieldProps {
  label: string,
  value: string,
  onChangeText: (text: string) => void,
}

interface IconButtonProps {
  children: ReactNode,
  onPress: () => void,
}

interface UserCredential {
  username: string,
  password: string,
}