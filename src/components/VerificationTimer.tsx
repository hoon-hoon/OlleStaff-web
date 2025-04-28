type Props = {
    timer: number;
};

export const VerificationTimer = ({ timer }: Props) => {
    const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
    const seconds = String(timer % 60).padStart(2, "0");

    return (
        <span style={{ color: timer > 0 ? "#000" : "#999", fontSize: 14 }}>
            {minutes}:{seconds}
        </span>
    );
};
