import "styled-components";

declare module "styled-components" {
    export type DefaultThemeColorKey =
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

    export interface DefaultTheme {
        color: {
            [key in DefaultThemeColorKey]: string;
        };
    }
}
