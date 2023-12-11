import { Suspense, lazy } from "react";
import { WithErrorBoundary } from "../components/WithErrorBoundary";

const Auth = lazy(() => import("mf-auth/Auth"));

interface Props {
  origin: string;
}

export default ({ origin = "" }: Props) => (
  <Suspense fallback={<>Cargando...</>}>
    <WithErrorBoundary>
      <Auth origin={origin} />
    </WithErrorBoundary>
  </Suspense>
);
