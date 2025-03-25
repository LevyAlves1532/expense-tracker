import { FormEvent, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Input from "../../components/Inputs/Input";
import AuthLayout from "../../components/layouts/AuthLayout";

import { UserContext, UserType } from "../../context/userContext";

import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";
import { validateEmail } from "../../utils/helper";
import { isAxiosError } from "axios";

const Login = () => {
  const navigate = useNavigate();

  const { updateUser } = useContext(UserContext);

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState<string | null>(null);

  // Handle Login Form Submit
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setError('Please enter the password');
      return;
    }

    setError(null);

    // Login API Call
    try {
      const response = await axiosInstance.post<{ access_token: string }>(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { access_token } = response.data;

      if (access_token) {
        localStorage.setItem("token", access_token);

        const responseGetUserInfo = await axiosInstance.get<UserType>(API_PATHS.AUTH.GET_USER_INFO);

        const user = responseGetUserInfo.data;
        if (updateUser) updateUser(user);
        
        navigate("/dashboard");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else {
        console.error(error);
      }
    }
  }

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Input 
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />

          <Input 
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />

          {error && (
            <p className="text-red-500 text-xs pb-2.5">{error}</p>
          )}

          <button type="submit" className="btn-primary">
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account?{" "}
            <Link className="font-medium text-primary underline" to="/sign-up">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login;
