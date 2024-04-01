import { useFormState } from "react-dom";
import { FetchSignIn } from "./FetchSign.server.jsx";
import stylex from "@stylexjs/stylex";
import styles from "../../styles.jsx";
export default function Login() {
  async function LoginRequest(prevState, formData) {
    "use server";
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const { token } = await FetchSignIn({ username, password });
      if (!token) {
        return "failed";
      }
      return "logged in successfully";
    } catch (error) {
      return error.toString();
    }
  }

  const [formState, action] = useFormState(LoginRequest, null);

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
