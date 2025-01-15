import { CiCircleCheck } from "react-icons/ci";

import SwitchTheme from "../../component/switchTeme";

export default function Finale() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen items-center justify-center gap-4 bg-white dark:bg-gray-950">
        <CiCircleCheck className="size-40 text-green-800" />
        <div className="text-center">
          <p className="text-3xl font-bold mb-5">Ordine effetuato</p>
          <a href="/" className="text-xl font-bold underline">Torna alla Home</a>
        </div>
      </div>
    </>
  )
}