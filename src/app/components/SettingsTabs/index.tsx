
'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'

export function SettingsTabs(){
  return (

    <Tabs.Root>
      <Tabs.List className='mt-6 flex w-full items-center gap-4 border-b border-zinc-200'>
        <TabItem value = "Tab1" title="My details" isSelected/>
        <TabItem value = "Tab2" title="Profile"/>
        <TabItem value = "Tab3" title="Passworld"/>
        <TabItem value = "Tab4" title="Team"/>
        <TabItem value = "Tab5" title="Plan"/>
        <TabItem value = "Tab6" title="Billing"/>
        <TabItem value = "Tab7" title="Email"/>
        <TabItem value = "Tab8" title="Notifications"/>
        <TabItem value = "Tab9" title="Integrations"/>
        <TabItem value = "Tab10" title="API"/>

      </Tabs.List>
    </Tabs.Root>

  )
}