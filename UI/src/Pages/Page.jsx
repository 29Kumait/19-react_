import stylex from "@stylexjs/stylex";
import styles from "../styles.jsx";
import Register from "../Components/Registers/Register.jsx";
import img from "../assets/img.svg";
import key from "../assets/key.svg";
import Login from "../Components/Registers/Login.jsx";
import Submitting from "../Components/Submit/Submitting.jsx";

const Page = () => {
  return (
    <>
      <Login />
      <img src={key} alt="logo" {...stylex.props(styles.img)} />
      <img src={img} alt="img" />
      <Register />
      <h3>Submitting</h3>
      <Submitting />
    </>
  );
};

export default Page;
