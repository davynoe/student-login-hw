interface Assignment {
  title: string,
  class: string,
  dueDate: string,
}

interface AssignmentsProps {
  assignmentList: Assignment[],
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