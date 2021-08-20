const SignImage = (props) => {
  //Checks for a whitespace character within the inputted array, returning "whitespace" if it is whitespace
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
