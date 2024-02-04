export interface ReflectionProps {
  children?: any,
  myWhite?: string,
  color?: string,
  sideColor?: string,
  angle?: number,
  borderRadius?: string,
  sun?: boolean,
  light?: boolean,
  position?: string,
  margin?: string,
}

export interface ReflectionState  extends ReflectionProps {
  myWhite?: string,
  isMobileView?: boolean,
}