import { Avatar, Box, Button, Typography } from "@mui/material";
import { useGlobalStore } from "../../store/useGlobalStore";
import { signOut } from "../../auth/fb-auth";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../router/routes";

export const Profile = ({
  color = "black",
  closeModal,
}: {
  color?: string;
  closeModal: () => void;
}) => {
  const navigate = useNavigate();
  const user = useGlobalStore((state) => state.userData);
  return (
    <Box m="auto" p={2}>
      <Typography color={color} variant="subtitle2" textAlign="center" mb={1}>
        Perfil
      </Typography>
      <Typography color={color} variant="subtitle1" textAlign="center" mb={2}>
        {user.name || user.email}
      </Typography>

      <Box display="flex" justifyContent="center">
        <Avatar
          sx={{ height: 50, width: 50 }}
          alt="Login"
          src={`${user.photo ? user.photo : "/avatar.svg"}`}
        />
      </Box>

      <Typography
        color={color}
        mt={3}
        variant="subtitle2"
        textAlign="center"
        mb={2}
      >
        {user.name && user.email}
      </Typography>

      <Box display="flex" justifyContent="center" mb={2}>
        <Button
          size="medium"
          variant="contained"
          color="primary"
          sx={{ textTransform: "capitalize" }}
          onClick={() => {
            signOut();
            closeModal();
            navigate(Paths.INDEX);
            window.location.reload();
          }}
        >
          <Typography variant="caption">Cerrar sesión</Typography>
        </Button>
      </Box>
    </Box>
  );
};
