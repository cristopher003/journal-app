import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication,startGoogleSignIn } from "../../store/auth/thunks";
import { useMemo } from "react";



export const LoginPage = () => {


     const {status} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'cristrsolis@hotmail.com',
        password: '12456'
    });

    const isAuthenticated = useMemo(() => status === 'cheking', [status]);
 
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email, password);
        dispatch(checkingAuthentication(email, password));
    }

    const onGoogleSignIn=()=>{
        dispatch(startGoogleSignIn());
    }

    return (   
        <AuthLayout title="login">
                <form onSubmit={onSubmit}>
                    <Grid container>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField onChange={onInputChange} label="Email" name="email" type="email" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField  onChange={onInputChange}  label="Contraseña"  name="password" type="password" variant="outlined" fullWidth />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                            disabled={isAuthenticated} 
                            type="submit" 
                            variant="contained"
                            color="primary" 
                            fullWidth> Login </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                            disabled={isAuthenticated} 
                            onClick={onGoogleSignIn}
                            variant="contained" 
                            color="primary" 
                            fullWidth>
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
