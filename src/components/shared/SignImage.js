/**
 * Custom Image Component
 * @param {*} props Characters to be translated, from a char to the releveant image
 *
 * @returns The image derived from the prop
 */
const SignImage = (props) => {
    /**
     * Checks for a whitespace character within the inputted array
     *
     * @returns "whitespace" if whitespace is detected, or the original input if no whitespace is detected
     */
    const checkForWhitespace = () => {
        if (!props.letter.match(/[a-z]/i)) {
            console.log("Letter is Empty");
            return "whitespace";
        } else {
            return props.letter;
        }
    }

    return (
        <img
            className="sign-img"
            src={`/resources/individial_signs/${checkForWhitespace()}.png`}
            alt={`${props.letter}.png`}
        />
    );
}
export default SignImage;
