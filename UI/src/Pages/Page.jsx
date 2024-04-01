import Register from "../Components/Registers/Register.jsx";
import img from "../assets/img.svg";
import Login from "../Components/Registers/Login.jsx";
const Page = () => {
  return (
    <>
      <Login />
      <img src={img} alt="img" />
      <Register />
      <h1>Page</h1>
    </>
  );
};

export default Page;
