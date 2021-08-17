function SignImage(props) {
  return (
    <img
      className="sign-img"
      src={`/resources/individial_signs/${props.letter}.png`}
      alt={`${props.letter}.png`}
    />
  );
}
export default SignImage;
