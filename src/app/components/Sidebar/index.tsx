'use client'
import { Logo } from "./Logo"
import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Menu, Search, SquareStack, Users } from 'lucide-react'
import { NavItem } from "./Navitem"
import { UsedSpaceWidget } from "./UsedSpaceWidget"
import { Profile } from "./Profile"
import * as Collapsible from '@radix-ui/react-collapsible'
import { InputRoot, InputPrefix, InputControl } from "../Input"
import { Button } from "../Botton"

export function Sidebar(){
  return (
    <Collapsible.Root className="flex flex-col gap-6 p-4 border-b border-zinc-200 data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 left-0 top-0 right-0 z-20 bg-white dark:bg-zinc-900 dark:border-zinc-800 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
            <Button variant="ghost">
              <Menu className="h-6 w-6"/>
            </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content 
        forceMount 
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
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

            <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}