// // import { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // export default function KakaoRedirectPage() {
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         const fetchUserInfo = async () => {
// //             try {
// //                 const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/me/minimum`, {
// //                     withCredentials: true,
// //                 });

// //                 const { nickname, type } = res.data;

// //                 if (type === "NEED_SIGNUP") {
// //                     navigate("/signup");
// //                 } else if (type === "OWNER") {
// //                     navigate("/owner/home");
// //                 } else if (type === "STAFF") {
// //                     navigate("/staff/home");
// //                 } else {
// //                     navigate("/login");
// //                 }
// //             } catch (err) {
// //                 console.error("사용자 정보 조회 실패", err);
// //                 navigate("/login");
// //             }
// //         };

// //         fetchUserInfo();
// //     }, []);

// //     return <div>사용자 정보 확인 중...</div>;
// // }
