import { lazy } from "react";
import { withErrorBoundary } from "../components";

const RemoteParcelTest = lazy(() => import("mf-parcel/ParcelTest"));

const ParcelTest = () => withErrorBoundary(RemoteParcelTest);

export default ParcelTest;
