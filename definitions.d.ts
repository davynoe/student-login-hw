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
  isNumeric?: boolean,
}

interface IconButtonProps {
  children: ReactNode,
  onPress: () => void,
}

interface UserCredential {
  username: string,
  password: string,
}

interface AssignmentListProps {
  assignments: Assignment[],
  onSelectAssignment: (id: number) => void,
  onDelete: () => void,
  onAdd: () => void,
}

interface AddAssignmentModalProps {
  isVisible: boolean,
  onClose: () => void,
  onAssignmentAdd: (assignment: Assignment) => void,
}

interface Student {
  id: number,
  name: string,
  email: string,
  grade: number | undefined,
}

interface GradeStudentModalProps {
  isVisible: boolean,
  onClose: () => void,
  studentId: number,
  gradeStudent: (studentId: number, grade: int) => void,
}