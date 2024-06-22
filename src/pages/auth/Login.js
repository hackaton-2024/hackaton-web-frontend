import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import leftWaves from "../../img/left-waves.png";
import rightWaves from "../../img/right-waves.png";

export default function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-[515px] w-full">
        <div className="flex items-center">
          {/* should be an image */}
          <p className="w-[61px] h-[64px] bg-primary rounded-full mr-[16px]"></p>
          <h1 className="font-zenKaku font-bold text-[52px]">DisasterSafe</h1>
        </div>

        <p className="m-[16px]">
          Текст за насърчаване регистрация hendrerit dignissim condimentum
        </p>

        <div className="mt-[48px]">
          <div className="uppercase flex items-center ">
            логин{" "}
            <span className="w-full inline ml-[10px]">
              <hr />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
