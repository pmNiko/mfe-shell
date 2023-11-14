import { ComponentType, LazyExoticComponent } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ResourceNotAvailable from "./ResourceNotAvailable";

export const withErrorBoundary = (
  Component: LazyExoticComponent<ComponentType<any>>
) => {
  return (
    <ErrorBoundary fallback={<ResourceNotAvailable />}>
      <Component />
    </ErrorBoundary>
  );
};
