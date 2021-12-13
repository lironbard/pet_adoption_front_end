import Button from "@material-ui/core/Button";

export default function LoginSignupButton(props) {
  return (
    <Button type="button" className="login-button" onClick={props.toggleModal}>
      Login
    </Button>
  );
}
