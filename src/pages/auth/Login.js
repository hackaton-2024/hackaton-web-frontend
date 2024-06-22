import { useState, useEffect } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import InputField from "../../components/inputs/InputField"
import Button from "../../components/inputs/Button"
import MainLogo from "../../img/MainLogo.png"
import axios from "../../utils/axios"
import { setSession } from "../../auth/utils"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const { dispatch } = useAuthContext()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const login = async (userData) => {
    try {
      setLoading(true)
      const response = await axios.post("/login", userData)
      console.log(response)

      if (response.data.error) {
        setError(response.data.error)
        setLoading(false)
        return
      }

      localStorage.setItem("accessToken", response.data.accessToken)
      setSession(response.data.accessToken)
      dispatch({
        type: "LOGIN",
        payload: {
          isAuthenticated: true,
          user: response.data.user,
        },
      })

      if (response.status == 200) {
        navigate("/")
      }
    } catch (error) {
      setLoading(false)
      setError("Появи се проблем, опитай отново.")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(userData)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-[515px] w-full">
        <div className="flex items-center">
          {/* should be an image */}
          {/* <p className="w-[61px] h-[64px] bg-primary rounded-full mr-[16px]"></p> */}
          <img className="w-auto h-[61px] mr-[10px]" src={MainLogo} alt="" />
          <h1 className="font-zenKaku font-bold text-[52px]">DisasterSafe</h1>
        </div>

        <p className="my-[16px]">
          Текст за насърчаване регистрация hendrerit dignissim condimentum
        </p>

        <div className="mt-[48px]">
          <div className="uppercase flex items-center ">
            логин{" "}
            <span className="w-full inline ml-[10px]">
              <hr />
            </span>
          </div>

          <div className="mt-[22px]">
            <InputField
              name="email"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />

            <InputField
              name="парола"
              value={userData.password}
              type={"password"}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <div className="w-full mt-[32px]">
            <Button
              text="Към приложението"
              isArrowShown={true}
              loading={loading}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
