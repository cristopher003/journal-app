
import {  StarBorder } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const  NothingSelectedView = () => {
  return (
    <Grid container spacing={0} direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main",borderRadius:3}} >

        <Grid item 
            xs={12} >
                <StarBorder   sx={{fontSize:100,color:'white' }}></StarBorder>
        </Grid>

        <Grid item 
            xs={12}>
                <Typography color="white" variant="h5">Crea una nota</Typography>
        </Grid>
    </Grid>
  )
}
