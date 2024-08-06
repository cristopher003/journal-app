import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom";

export const RegisterPage = () => {
  return (
    
    <AuthLayout title="Crear cuenta">
    <form>
        <Grid container>
            <Grid item xs={12} sx={{ mb: 2 }}>
                <TextField label="Nombre Completo" type="text" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12} sx={{ mb: 2 }}>
                <TextField label="Email" type="email" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12} sx={{ mb: 2 }}>
                <TextField label="Contraseña" type="password" variant="outlined" fullWidth />
            </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={12}>
                <Button variant="contained" color="primary" fullWidth> Crear Cuenta </Button>
            </Grid>

             <Grid container direction={"row"} justifyContent={"end"}>
             <Typography sx={{ mt: 1,mr:1 }}>¿Ya tienes cuenta?</Typography>
                <Link component={RouterLink} color={"inherit"} to={"/auth/login"}>
                    <Typography sx={{ mt: 1 }}>Ingresar</Typography>
                </Link>
              </Grid>   
        </Grid>
    </form>
</AuthLayout>
  )
}
