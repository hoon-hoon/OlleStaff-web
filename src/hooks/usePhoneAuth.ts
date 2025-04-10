import { useEffect, useState } from "react";

export const usePhoneAuth = () => {
    const [timer, setTimer] = useState<number>(0);
    const [message, setMessage] = useState<string>("");
    const [isExpired, setIsExpired] = useState<boolean>(false);
    const [isStarted, setIsStarted] = useState(false);
    const [isRequested, setIsRequested] = useState(false);

    const startTimer = () => {
        setIsStarted(true);
        setIsRequested(true);
        setTimer(10);
        setIsExpired(false);
        setMessage("인증번호를 발송했습니다. 인증란에 입력해 주세요.");
    };

    useEffect(() => {
        if (timer <= 0) {
            setIsExpired(true);
            return;
        }

        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    return {
        timer,
        message,
        isExpired,
        startTimer,
        isStarted,
        isRequested,
    };
};
