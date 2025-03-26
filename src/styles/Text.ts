import theme from "./theme";
import styled, { DefaultTheme } from "styled-components";

// 재사용 될 텍스트
type StyleText = {
    color?: keyof DefaultTheme["color"];
    pointer?: boolean;
    margin?: string;
};

export const Text = {
    Title1: styled.span<StyleText>`
        display: inline-block;
        font-weight: 400;
        font-size: 24px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
    Title1_1: styled.span<StyleText>`
        display: inline-block;
        font-weight: 500;
        font-size: 24px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
    Title2: styled.span<StyleText>`
        display: inline-block;
        font-weight: 400;
        font-size: 20px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
    Title2_1: styled.span<StyleText>`
        display: inline-block;
        font-weight: 500;
        font-size: 20px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
    Title3: styled.span<StyleText>`
        display: inline-block;
        font-weight: 400;
        font-size: 18px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
    Title3_1: styled.span<StyleText>`
        display: inline-block;
        font-weight: 500;
        font-size: 18px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
    Body1: styled.span<StyleText>`
        display: inline-block;
        font-weight: 400;
        font-size: 16px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
    Body1_1: styled.span<StyleText>`
        display: inline-block;
        font-weight: 500;
        font-size: 16px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
    Body2: styled.span<StyleText>`
        display: inline-block;
        font-weight: 400;
        font-size: 14px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
    Body2_1: styled.span<StyleText>`
        display: inline-block;
        font-weight: 500;
        font-size: 14px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
    Body3: styled.span<StyleText>`
        display: inline-block;
        font-weight: 400;
        font-size: 12px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
    Body3_1: styled.span<StyleText>`
        display: inline-block;
        font-weight: 500;
        font-size: 12px;
        color: ${({ color }) => (color ? theme.color[color] : theme.color.Black)};
        cursor: ${props => props.pointer && "pointer"};
    `,
};
