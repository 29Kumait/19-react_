import { useRef } from 'react';
import { useActionState } from "react";
import stylex from '@stylexjs/stylex';
import styles from '../../styles.jsx';
import { FetchSignUp } from './FetchSign.server.jsx';

const stylesRegister = stylex.create({
  form: {
    maxWidth: 380,
    marginStart: 'auto',
    marginEnd: 'auto',
    marginBottom: 34,
  },
  input: {
    backgroundColor: 'transparent',
    borderStyle: 'none',
    boxSizing: 'border-box',
    color: 'var(--primary-text)',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 1.25,
    paddingBottom: 10,
    paddingEnd: 16,
    paddingTop: 26,
    width: '100%',
    alignSelf: 'center',
  },
});

export default function Register() {
  const formRef = useRef();

  async function redirecting(prevState, formData) {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");
    const username = formData.get("username");
    try {
      const { token } = await FetchSignUp({ email, password, username });
      alert(`Registration successful, token: ${token}`);
      formRef.current.reset();
    } catch (error) {
      return error.toString();
    }
  }

  const [formState, formAction] = useActionState(redirecting, null);

  return (
    <form action={formAction} ref={formRef} {...stylex.props(stylesRegister.form)} >
      <input type="text" name="username" required
        placeholder="Username" {...stylex.props(stylesRegister.input)} />
      <input type="email" name="email" required placeholder="Email" {...stylex.props(stylesRegister.input)} />
      <input type="password" name="password" required placeholder="Password" {...stylex.props(stylesRegister.input)} />
      <button type="submit" {...stylex.props(styles.button)}>Sign Up</button>
      {!!formState && <p>{formState}</p>}
    </form>
  );
}