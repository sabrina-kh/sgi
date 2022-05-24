import react from "react";
import { Card } from "react-bootstrap";
import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div>
      <Card
        variant="outlined"
        style={{ padding: "10%", width: "100%", borderColor: "dodgeblue" }}
      >
        <form>
          <TextField
            id="outlined-basic"
            label="Adresse Email"
            variant="outlined"
            style={{ padding: "0px", marginBlock: "3%", width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Mot de Passe"
            variant="outlined"
            style={{ padding: "0px", marginBlock: "3%", width: "100%" }}
          />
          <br />
          <Button
            variant="contained"
            size="small"
            disableElevation
            style={{ marginBlock: "3%", marginInline: "25%", width: "50%" }}
          >
            Se Connecter
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
