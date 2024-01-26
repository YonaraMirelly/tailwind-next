import { Logo } from "./Logo"
import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Search, SquareStack, Users } from 'lucide-react'
import { NavItem } from "./Navitem"
import { UsedSpaceWidget } from "./UsedSpaceWidget"
import { Profile } from "./Profile"
import { InputRoot, InputPrefix, InputControl } from "../Input"

export function Sidebar(){
  return (
    <aside className="flex flex-col gap-6 p-4 border-b border-zinc-200 fixed bottom-0 left-0 top-0 right-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Search"/>
      </InputRoot>
        <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home}/>
        <NavItem title="Dashboard" icon={BarChart}/>
        <NavItem title="Projects" icon={SquareStack}/>
        <NavItem title="Tasks" icon={CheckSquare}/>
        <NavItem title="Reporting" icon={Flag}/>
        <NavItem title="Users" icon={Users}/>
      </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
          <NavItem title="Suport" icon={LifeBuoy}/>
          <NavItem title="Settings" icon={Cog}/>
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200" />
        <Profile />
       </div>
    </aside>
  )
}