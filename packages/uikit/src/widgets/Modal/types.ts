import { BoxProps } from "../../components/Box";

export interface ModalTheme {
  background: string;
}

export type Handler = () => void;

export type HandlerArgs = (args?: any) => void;

export interface InjectedProps {
  onDismiss?: Handler;
  mode?: string;
}

export interface ModalProps extends InjectedProps, Omit<BoxProps, "title"> {
  title: React.ReactNode;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  headerBackground?: string;
}
