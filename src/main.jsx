import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { Auth0Provider } from "@auth0/auth0-react"

const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN
const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID
const REDIRECT_URI = window.location.origin
console.log(AUTH0_DOMAIN, AUTH0_CLIENT_ID);

// Minimal Auth0 configuration
const auth0Config = {
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: REDIRECT_URI,
    scope: "openid profile email",
    response_type: "code",
  },
  cacheLocation: "localstorage", // Persist session
  useRefreshTokens: true, // Enable refresh tokens
  // No custom onRedirectCallback for simplicity, let SDK handle it
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider {...auth0Config}>
      <App />
    </Auth0Provider>
  </StrictMode>,
)
