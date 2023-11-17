import { lazy } from "react";
import { withErrorBoundary } from "../components";

const RemoteParcelTest = lazy(() => import("mfe-parcel/ParcelTest"));

const ParcelTest = () => withErrorBoundary(RemoteParcelTest);

export default ParcelTest;
