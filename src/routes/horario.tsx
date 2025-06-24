import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/horario')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/horario"!</div>
}
