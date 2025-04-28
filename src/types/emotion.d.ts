import "@emotion/react";

declare module "@emotion/react" {
    export type ThemeColorKey =
        | "Black"
        | "White"
        | "Gray0"
        | "Gray1"
        | "Gray2"
        | "Gray3"
        | "Gray4"
        | "Gray5"
        | "Main"
        | "Sub1"
        | "Sub2"
        | "Red1"
        | "Yellow1"
        | "Green1"
        | "Blue1";

    export interface Theme {
        color: {
            [key in ThemeColorKey]: string;
        };
    }
}
