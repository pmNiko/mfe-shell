import { lazy } from "react";
import { withErrorBoundary } from "../components";

const RemoteParcelTest = lazy(
  () => import("mfConceptRemoteAppTest/ParcelTest")
);

const ParcelTest = () => withErrorBoundary(RemoteParcelTest);

export default ParcelTest;
