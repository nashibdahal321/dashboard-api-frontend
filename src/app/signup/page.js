"use client";

import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import NextLink from 'next/link'
import { useRouter } from 'next/navigation';

export default function Signup () {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const { push } = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "dashboard/register/", {
      method: "POST",
      cache: "no-cache",
      credentials: "include",
      body: JSON.stringify({
        username: username,
        password: password,
        email: email
      })
    })
      .then(res => res.json()).then(res => {
        if (res.success) {
          setErrorMessage("");
          setSuccessMessage("Successfully created user. You can log in with these credentials now.");
        } else {
          setErrorMessage("Could not create user because: " + res.message);
          setSuccessMessage("");
        }
        console.log("success", res);
      }).catch(res => {
        setErrorMessage("Could not create user");
        setSuccessMessage("");
      })
  }


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

        <form onSubmit={handleSubmit} style={{form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "8px"
  }}} noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
              >
                Sign Up
              </Button>

            </Grid>            
          </Grid>

          <Grid container justify="flex-end" style={{
            flexDirection: "column",
            gap: "10px"
          }}>
            <Grid item>
              <NextLink href="/">
                <Link variant="body2">
                  Already have an account? Sign in
                </Link>
              </NextLink>
            </Grid>
            <Grid item>
              <p style={{color:"red"}}>{errorMessage}</p>
            </Grid>
            <Grid item>
              <p style={{color:"green"}}>{successMessage}</p>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}
