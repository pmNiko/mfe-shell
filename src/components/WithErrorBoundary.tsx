import { ErrorBoundary } from "react-error-boundary";

interface Props {
  children?: JSX.Element;
}

export const WithErrorBoundary = ({ children }: Props) => {
  return (
    <ErrorBoundary fallback={<p>El recurso no se encuentra disponible! </p>}>
      {children}
    </ErrorBoundary>
  );
};
