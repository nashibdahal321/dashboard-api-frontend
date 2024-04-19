"use client";


import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";


export default function Login () {
  return (
    <Container component="main" maxWidth="xs" style={{
      marginTop: "10vh"
    }}>
      <CssBaseline />
      <div style={{
    marginTop: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}

        <form style={{form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "8px"
  }}} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <div style = {{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                marginTop: "30px",
                marginBottom: "10px"
              }}>
                <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
              >
                Create Account
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
              >
                Login
              </Button>
              </div>

              

            </Grid>

            
          </Grid>
          

          
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Forgot Password
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}

