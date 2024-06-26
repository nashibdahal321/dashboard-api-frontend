"use client";

import Image from "next/image";
import styles from "./page.module.css";



import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import NextLink from 'next/link'
import { useRouter } from 'next/navigation';

export default function Login () {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const { push } = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "dashboard/login/", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => res.json()).then(res => {
        if (res.success) {
          push("/dashboard");
        } else {
          setErrorMessage("Incorrect Credentials")
        }
        console.log("success", res);
      }).catch(res => {
        setErrorMessage("Could not login")
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

        <form onSubmit={handleSubmit}
          style={{form: {
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
              <div style = {{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                marginTop: "30px",
                marginBottom: "10px"
              }}>
                 <NextLink href="/signup/" style={{width: "100%"}}>
                  <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                >
                 Create Account
                  
                </Button></NextLink>
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

          <Grid container justify="flex-end" style={{
            flexDirection: "column",
            gap: "10px"
          }}>
            <Grid item>
              <Link href="#" variant="body2">
                Forgot Password
              </Link>
            </Grid>
            <Grid item>
              <p style={{color:"red"}}>{errorMessage}</p>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}


// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.js</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore starter templates for Next.js.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
