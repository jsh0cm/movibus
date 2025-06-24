import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tarjeta')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tarjeta"!</div>
}
