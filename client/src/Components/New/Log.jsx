import { useActionState, useTransition, useRef } from "react";
import { useNavigate } from "react-router-dom";
import stylex from "@stylexjs/stylex";
import styles from "../../styles.jsx";
import { FetchSignIn } from "../Registers/FetchSign.server.jsx";

export default function Log() {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [isPending, startTransition] = useTransition();

  const [formState, loginAction] = useActionState(async () => {
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await FetchSignIn(formData);
      if (!response.token) {
        return { success: false, message: "Login failed" };
      }

      navigate("/");
      return { success: true, message: "Logged in successfully" };
    } catch (error) {
      return { success: false, message: error.toString() };
    }
  });

  const handleSubmit = () => {
    startTransition(() => {
      loginAction();
    });
  };

  return (
    <div>
      <input
        ref={usernameRef}
        type="text"
        name="username"
        required
        disabled={isPending}
      />
      <input
        ref={passwordRef}
        type="password"
        name="password"
        required
        disabled={isPending}
      />
      <button
        onClick={handleSubmit}
        disabled={isPending}
        {...stylex.props(styles.button)}
      >
        Log In
      </button>

      {formState?.message && <p>{formState.message}</p>}
    </div>
  );
}
