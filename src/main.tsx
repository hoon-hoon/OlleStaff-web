import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import theme from "./styles/theme.ts";
import { ThemeProvider } from "@emotion/react";
import { Global } from "@emotion/react";
import { GlobalStyle } from "./styles/GlobalStyle.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <Global styles={GlobalStyle} />
        </ThemeProvider>
    </StrictMode>
);
