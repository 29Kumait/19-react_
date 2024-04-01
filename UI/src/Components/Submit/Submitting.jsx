import { useFormStatus } from "react-dom";
import stylex from "@stylexjs/stylex";
import styles from "../../styles.jsx";
import actionDelay from "./ActionDelay.jsx";

function Submit() {
  const status = useFormStatus();
  return (
    <button disabled={status.pending} {...stylex.props(styles.button)}>
      {status.pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function Submitting() {
  return (
    <form action={actionDelay}>
      <Submit />
    </form>
  );
}
