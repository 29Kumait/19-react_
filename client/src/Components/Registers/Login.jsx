import { useActionState } from "react";
import { useNavigate } from "react-router-dom";
import stylex from "@stylexjs/stylex";
import styles from "../../styles.jsx";
import { FetchSignIn } from "./FetchSign.server.jsx";


export default function Login() {
  const navigate = useNavigate();

  async function LoginRequest(prevState, formData) {
    "use server";
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const { token } = await FetchSignIn({ username, password });
      if (!token) {
        return "Login failed";
      }

      navigate('/page-login');
      return "Logged in successfully";
    } catch (error) {
      return error.toString();
    }
  }

  const [formState, action] = useActionState(LoginRequest, null);

  return (
    <>
      <form action={action}>
        <input type="text" name="username" required />
        <input type="password" name="password" required />
        <button type="submit" {...stylex.props(styles.button)}>
          in
        </button>
      </form>

      <p> submission: {formState}</p>
    </>
  );
}
