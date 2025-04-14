export default function Test() {
    return (
        <>
            {[...Array(1000)].map((_, i) => (
                <div key={i}>긴글이라생각하고우오아아앙 {i + 1}</div>
            ))}
        </>
    );
}
