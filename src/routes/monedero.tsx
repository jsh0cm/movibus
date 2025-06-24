import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/monedero')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/monedero"!</div>
}
