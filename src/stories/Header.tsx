// import styled from "styled-components";
// import { SubmitButton } from "./SubmitButton/SubmitButton";

// type User = {
//     name: string;
// };

// export interface HeaderProps {
//     user?: User;
//     onLogin?: () => void;
//     onLogout?: () => void;
//     onCreateAccount?: () => void;
// }

// export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
//     <StyledHeader>
//         <HeaderContent>
//             <Logo>
//                 <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                     <g fill="none" fillRule="evenodd">
//                         <path
//                             d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
//                             fill="#FFF"
//                         />
//                         <path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9" />
//                         <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
//                     </g>
//                 </svg>
//                 <h1>Acme</h1>
//             </Logo>
//             <Actions>
//                 {user ? (
//                     <>
//                         <WelcomeMessage>
//                             Welcome, <b>{user.name}</b>!
//                         </WelcomeMessage>
//                         <SubmitButton size="small" onClick={onLogout} label="Log out" />
//                     </>
//                 ) : (
//                     <>
//                         <SubmitButton size="small" onClick={onLogin} label="Log in" />
//                         <SubmitButton primary size="small" onClick={onCreateAccount} label="Sign up" />
//                     </>
//                 )}
//             </Actions>
//         </HeaderContent>
//     </StyledHeader>
// );

// const StyledHeader = styled.header`
//     border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//     padding: 15px 20px;
//     font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
// `;

// const HeaderContent = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `;

// const Logo = styled.div`
//     display: flex;
//     align-items: center;

//     svg {
//         display: inline-block;
//         vertical-align: top;
//     }

//     h1 {
//         margin-left: 10px;
//         font-weight: 700;
//         font-size: 20px;
//         line-height: 1;
//     }
// `;

// const Actions = styled.div`
//     display: flex;
//     align-items: center;

//     button + button {
//         margin-left: 10px;
//     }
// `;

// const WelcomeMessage = styled.span`
//     margin-right: 10px;
//     color: #333;
//     font-size: 14px;
// `;
