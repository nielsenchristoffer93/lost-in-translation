function SignImage(props) {

  // Ugly solution?
  function checkForWhitespace() {
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
