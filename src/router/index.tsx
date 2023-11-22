import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default () => {
  return <RouterProvider router={router} />;
};
