import { useState } from "react";
import Textinput from "../components/Textinput";
import Heading from "../components/Heading";
import Button from "../components/Button";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  return (
    <>
      <div className="flex h-screen justify-center bg-[#ffb5b5] text-[#493e3e]">
        <div className="flex flex-col justify-center">
          <div className="bg-[#ff3e3e] rounded-lg w-full p-5 h-max text-center">
            <div className="pb-4">
              <Heading lable={"SigUp"} />
            </div>
            <Textinput
              placeholeder={"Enter Name"}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
              lable={"SignIn"}
              onClick={async () => {
                try {
                  const responce = await axios.post(
                    "http://localhost:3000/user/signup",
                    {
                      name,
                      email,
                      password,
                    }
                  );
                  localStorage.setItem("token", responce.data.token);

                  //redirect to homepage
                  nav("/home");
                } catch (error) {
                  console.log("Signup error:", error);
                }
              }}
            />
          </div>
          <div className="w-80 h-max text-center text-xs p-3">
            <SubHeading
              lable={"Enter Your info to create account   : )"}
              to={"/login"}
              totext={"If you already have an existing account,go to Login"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SignupPage;
