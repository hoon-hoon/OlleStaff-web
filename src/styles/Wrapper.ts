// 무지 박스
import styled from "styled-components";

type StyleWrapper = {
    width?: string;
    height?: string;
    direction?: string;
    justifyContent?: string;
    alignItems?: string;
    margin?: string;
    padding?: string;
    gap?: string;
    border?: string;
    borderRadius?: string;
    bgColor?: string;
    bgImg?: string;
    bgSize?: string;
    pointer?: boolean;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    zIndex?: string;
};

export const Wrapper = {
    FlexBox: styled.div<StyleWrapper>`
        display: flex;
        width: ${props => (props.width ? props.width : "100%")};
        height: ${props => (props.height ? props.height : "auto")};
        flex-direction: ${props => props.direction};
        justify-content: ${props => props.justifyContent};
        align-items: ${props => props.alignItems};
        margin: ${props => (props.margin ? props.margin : "0")};
        padding: ${props => (props.padding ? props.padding : "0")};
        gap: ${props => (props.gap ? props.gap : "0")};
        border: ${props => (props.border ? props.border : "0")};
        border-radius: ${props => props.borderRadius};
        background-color: ${props => (props.bgColor ? props.bgColor : "transparent")};
        cursor: ${props => props.pointer && "pointer"};
    `,
    RelativeBox: styled.div<StyleWrapper>`
        position: relative;
        width: ${props => props.width || "100%"};
        height: ${props => props.height || "auto"};
    `,
    AbsoluteBox: styled.div<StyleWrapper>`
        position: absolute;
        width: ${props => props.width || "auto"};
        height: ${props => props.height || "auto"};
        top: ${props => (props.top ? props.top : 0)};
        right: ${props => (props.right ? props.right : 0)};
        bottom: ${props => (props.bottom ? props.bottom : 0)};
        left: ${props => (props.left ? props.left : 0)};
        z-index: ${props => props.zIndex};
        display: flex;
        flex-direction: ${props => props.direction};
        justify-content: ${props => props.justifyContent};
        align-items: ${props => props.alignItems};
        margin: ${props => props.margin || "0"};
        padding: ${props => props.padding || "0"};
        gap: ${props => props.gap || "0"};
        border: ${props => props.border || "0"};
        border-radius: ${props => props.borderRadius};
        background-color: ${props => props.bgColor || "transparent"};
        cursor: ${props => (props.pointer ? "pointer" : "default")};
    `,
    FixedBox: styled.img<StyleWrapper>`
        position: fixed;
        width: ${props => props.width || "auto"};
        height: ${props => props.height || "auto"};
        top: ${props => props.top};
        right: ${props => props.right};
        bottom: ${props => props.bottom};
        left: ${props => props.left};
        z-index: ${props => props.zIndex};
        display: flex;
        flex-direction: ${props => props.direction};
        justify-content: ${props => props.justifyContent};
        align-items: ${props => props.alignItems};
        margin: ${props => props.margin || "0"};
        padding: ${props => props.padding || "0"};
        gap: ${props => props.gap || "0"};
        border: ${props => props.border || "0"};
        border-radius: ${props => props.borderRadius};
        background-color: ${props => props.bgColor || "transparent"};
        cursor: ${props => (props.pointer ? "pointer" : "default")};
    `,
};
