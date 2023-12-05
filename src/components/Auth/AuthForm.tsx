import { ChangeEvent, useState } from "react";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { signIn, signWithGoogle } from "../../auth/fb-auth";
import { useAuthorize } from "../../hooks/useAuthorize";

export const AuthForm = ({ color = "black" }: { color?: string }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  useAuthorize();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box m="auto" p={2}>
      <Typography color={color} variant="subtitle1" textAlign="center" mb={2}>
        Login de usuario
      </Typography>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        style={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
        }}
      >
        <TextField
          label="Email"
          type="text"
          placeholder="user@example.com"
          name="email"
          onChange={handleChange}
          variant="standard"
          sx={{ mb: 2, background: "transparent", color: color }}
          autoComplete="off"
        />
        <TextField
          label="Password"
          type="password"
          placeholder="******"
          name="password"
          onChange={handleChange}
          variant="standard"
          sx={{ mb: 2, background: "transparent", color: color }}
        />

        <Box display="flex" justifyContent="space-evenly" mt={2} mb={3}>
          <Button
            size="medium"
            variant="text"
            sx={{ textTransform: "capitalize", color: "black" }}
            onClick={() => signIn(user.email, user.password)}
          >
            <Typography variant="caption" color={color}>
              {" "}
              Iniciar sesión
            </Typography>
          </Button>
          <Typography pt={0.5}>/</Typography>
          <Button
            variant="text"
            sx={{ textTransform: "capitalize", color: "black" }}
          >
            <Typography variant="caption" color={color}>
              Registrarse
            </Typography>
          </Button>
        </Box>
        <Button onClick={signWithGoogle}>
          <Avatar
            sx={{ height: 30, width: 30, boxShadow: 2 }}
            alt="Login"
            src={"/google.svg"}
          />
        </Button>
        <Typography textAlign="center" variant="caption" mb={2} color={color}>
          Ingresar con Google
        </Typography>
      </form>
    </Box>
  );
};
