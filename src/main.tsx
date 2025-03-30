import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import GlobalStyle from "./styles/GlobalStyle.ts";
import theme from "./styles/theme.ts";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <GlobalStyle theme={theme} />
        </ThemeProvider>
    </StrictMode>
);
