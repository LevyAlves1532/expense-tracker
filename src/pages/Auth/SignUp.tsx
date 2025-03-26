import { FormEvent, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { isAxiosError } from "axios";

import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import AuthLayout from "../../components/layouts/AuthLayout";

import { UserContext, UserType } from "../../context/userContext";

import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";
import { validateEmail } from "../../utils/helper";

const SignUp = () => {
  const navigate = useNavigate();

  const { updateUser } = useContext(UserContext);

  const [ profilePic, setProfilePic ] = useState<File | null>(null);
  const [ fullName, setFullName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState<string | null>(null);

  // Handle Sign Up Form Submit
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!fullName) {
      setError('Please enter your name');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setError('Please enter the password');;
      return;
    }

    setError(null);

    // SignUP API Call
    try {
      const formData = new FormData();

      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('password', password);
      
      if (profilePic) {
        formData.append('profileImageUrl', profilePic);
      }

      const response = await axiosInstance.post<{ access_token: string }>(API_PATHS.AUTH.REGISTER, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below
        </p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector 
            image={profilePic}
            setImage={setProfilePic}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John"
              type="text"
            />

            <Input 
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="text"
            />

            <div className="col-span-2">
              <Input 
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 Characters"
                type="password"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-xs pb-2.5">{error}</p>
          )}

          <button type="submit" className="btn-primary">
            SIGN UP
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{" "}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp;
