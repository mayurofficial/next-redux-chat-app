import React from "react"
import "../styles/globals.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useRouter } from "next/router"
import { Provider as ReduxProvider } from "react-redux"
import PublicLayout from "../layouts/publicLayout"
import PrivateLayout from "../layouts/privateLayout"
import { defaultTheme } from "../themes/defaultTheme"
import store from "../redux/store"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZQU2OV3ihufsCgqbb-iFJSOp8owA4Y28",
  authDomain: "chatappredux-353b2.firebaseapp.com",
  projectId: "chatappredux-353b2",
  storageBucket: "chatappredux-353b2.appspot.com",
  messagingSenderId: "811490185619",
  appId: "1:811490185619:web:7470e1021be17f32b49866",
  measurementId: "G-M9VMG60XTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function MyApp({ Component, pageProps }) {
  const currentTheme = createTheme(defaultTheme)
  const path = useRouter()

  const isPublic = path.asPath.includes("/auth/")
  const isPrivate = path.asPath.includes("/user/")

  const Wrapper = isPublic
    ? PublicLayout
    : isPrivate
      ? PrivateLayout
      : PublicLayout

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={currentTheme}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default MyApp
