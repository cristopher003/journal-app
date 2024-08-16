import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";


const formData={
    email:'',
    password:'',
    displayName:'cristopher'
}


const formValidations={
    email:[(value:string)=>value.includes('@'),'El email no es valido'],
    password:[(value:string)=>value.length>=6,'La contraseña debe tener al menos 6 caracteres'],
    displayName:[(value:string)=>value.length>=3,'El nombre debe tener al menos 3 caracteres']
}

export const RegisterPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { email, password, displayName ,onInputChange ,
        isformValid,displayNameValid,emailValid,passwordValid } = useForm(formData,formValidations);


        console.log(displayNameValid);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormSubmitted(true);
        console.log(email, password,displayName);
    }

  return (

    <AuthLayout title="Crear cuenta">
    <form>
        <Grid container>
            <Grid item xs={12} sx={{ mb: 2 }}>
                <TextField 
                onChange={onInputChange} 
                value={displayName}
                label="Nombre Completo" 
                name="displayName" 
                type="text"
                variant="outlined"
                helperText={displayNameValid}
                error={!!displayNameValid && formSubmitted}
                fullWidth />
            </Grid>

            <Grid item xs={12} sx={{ mb: 2 }}>
                <TextField 
                helperText={emailValid}
                error={!!emailValid && formSubmitted }
                label="Email" type="email" onChange={onInputChange} value={email} name="email" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12} sx={{ mb: 2 }}>
                <TextField   
                helperText={passwordValid}
                error={!!passwordValid && formSubmitted} 
                label="Contraseña" type="password" onChange={onInputChange} value={password} name="password" variant="outlined" fullWidth />
            </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={12}>
                <Button  type="submit" onClick={onSubmit} variant="contained" color="primary" fullWidth> Crear Cuenta </Button>
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
