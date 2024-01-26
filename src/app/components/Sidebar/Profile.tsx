import { LogOut } from "lucide-react";
import { Button } from "../Botton";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img 
        src="https://github.com/YonaraMirelly.png" 
        className="w-10 h-10 rounded-full" 
        alt=""  
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Yonara Mirelly
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          Yonaanara@gmail.com
        </span>

      </div>
      <Button type="button" variant='ghost'>
        <LogOut className="w-5 h-5 text-zinc-500"/>
      </Button>
    </div>
  )
}