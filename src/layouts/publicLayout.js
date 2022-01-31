import * as React from "react"
import Head from "next/head"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useRouter } from "next/router"
import { getSession } from "@session/cookie"
import Link from "next/link"
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
function PublicLayout({ children }) {
  const { replace } = useRouter()
  const session = getSession("user-token")

  React.useEffect(() => {
    if (session) {
      replace("/user/dashboard", "/user/dashboard")
    }
  }, [session])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}

export default React.memo(PublicLayout);