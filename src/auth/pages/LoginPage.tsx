import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
    return (
   
        <AuthLayout title="login">
                <form>
                    <Grid container>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField label="Email" type="email" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField label="Contraseña" type="password" variant="outlined" fullWidth />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" color="primary" fullWidth> Login </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" color="primary" fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>

                         <Grid container direction={"row"} justifyContent={"end"}>
                            <Link component={RouterLink} color={"inherit"} to={"/auth/register"}>
                                <Typography sx={{ mt: 1 }}>¿No tienes una cuenta?</Typography>
                            </Link>
                          </Grid>   
                    </Grid>
                </form>
         </AuthLayout>
    )
}
