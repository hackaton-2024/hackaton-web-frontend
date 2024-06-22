import React from "react"
import ArrowRightIcon from "../icons/ArrowRightIcon"
import LoadingIcon from "../icons/LoadingIcon"
export default function Button({ text, onClick, isArrowShown, loading }) {
  return (
    <div
      onClick={onClick}
      className="w-full button-gradient p-[16px] text-[26px] text-center text-white font-zenKaku font-medium leading-[22px] rounded-[8px] cursor-pointer flex items-center justify-center"
    >


      {!loading && (
        <p className="flex items-center justify-center">
          {text}

          {isArrowShown && (
            <span className="ml-[16px]">
              <ArrowRightIcon />
            </span>
          )}

        </p>
      )}
      {loading && <LoadingIcon />}
    </div>
  )
}
