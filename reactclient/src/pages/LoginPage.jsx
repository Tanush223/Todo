import { useState } from "react";
import Textinput from "../components/Textinput";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  return (
    <>
      <div className="flex h-screen justify-center bg-[#ffb5b5] text-[#493e3e]">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-[#ff3e3e] w-full text-center h-max p-5">
            <div className="pb-4">
              <Heading lable={"Login"} />
            </div>

            <Textinput
              placeholeder={"Enter Email"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Textinput
              placeholeder={"Enter Password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              lable={"login"}
              onClick={async () => {
                try {
                  const responce = await axios.post(
                    "http://localhost:3000/user/login",
                    {
                      email,
                      password,
                    }
                  );
                  localStorage.setItem("token", responce.data.token);
                  //redirect to homepage
                  nav("/home");
                } catch (error) {
                  console.log("login error:", error);
                }
              }}
            />
          </div>
          <div className=" w-80 h-max text-center text-xs p-3">
            <SubHeading
              lable={"Enter Your credentials to acces your account   : )"}
              to={"/"}
              totext={"Dot't have an account ?"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
