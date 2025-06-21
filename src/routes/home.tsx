import { createFileRoute } from '@tanstack/react-router'

import Home from '../components/pages/Home'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home />
}
