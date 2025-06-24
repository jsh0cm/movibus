import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/home" className="[&.active]:font-bold">
          Inicio
        </Link>{' '}
        <Link to="/ticket" className="[&.active]:font-bold">
          Tiquetes
        </Link>
                <Link to="/map" className="[&.active]:font-bold">
          Mapa
        </Link>
                <Link to="/monedero" className="[&.active]:font-bold">
          Monedero
        </Link>
                <Link to="/horario" className="[&.active]:font-bold">
          Horarios
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})