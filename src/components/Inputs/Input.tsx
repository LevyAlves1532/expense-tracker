import { ChangeEvent, useState } from "react";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export type Props = {
  value: string;
  label: string;
  placeholder: string;
  type: 'text' | 'password';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, value, placeholder, type, onChange }: Props) => {
  const [ showPassword, setShowPassword ] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>

      <div className="input-box">
        <input 
          type={
            type == 'password' 
              ? showPassword 
                ? 'text'
                : 'password'
              : type
          } 
          placeholder={placeholder}
          value={value}
          className="w-full bg-transparent outline-none" 
          onChange={onChange}
        />

        {type === 'password' && (
          <>
            {showPassword ? (
              <FaRegEye 
                size={22}
                className="text-primary cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEyeSlash 
                size={22}
                className="text-primary cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Input;
