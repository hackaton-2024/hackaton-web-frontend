import { useState } from "react"
import EyeClosedIcon from "../icons/EyeClosedIcon"
import EyeOpenedIcon from "../icons/EyeOpenedIcon"

export default function InputField({ name, value, onChange, type = "text" }) {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  return (
    <div className="w-full py-[8px] px-[16px] rounded-[8px] bg-[#F5F5F5] text-[#424242] mt-[16px] first:mt-0">
      <label className="font-zenKaku font-medium block leading-[17px] uppercase text-[12px]">
        {name}
      </label>
      <div className="flex relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent leading-[28px] outline-none mt-[8px] text-[24px]"
        />
        {type === "password" && (
          <div
            className="absolute right-0 cursor-pointer mt-[8px]"
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? <EyeClosedIcon /> : <EyeOpenedIcon />}
          </div>
        )}
      </div>
    </div>
  )
}
