import { ReactNode } from "react";

export type ReflectionProps = {
  children?: ReactNode,
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