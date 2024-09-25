import Buttonele from "./Buttonele";

function Buttons({onButtonclick}) {
    const but = ["AC", "DELETE", "=", "+", "1", "2", "3", "-", "4", "5", "6", "*", "7", "8", "9", "/"];

    return (
        <>
            {but.map((value) => (
                <Buttonele key={value} value={value}  onButtonclick={onButtonclick}/>
            ))}
        </>
    );
}

export default Buttons;
