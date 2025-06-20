import { createFileRoute } from '@tanstack/react-router'

import Button  from '../components/ui/Button'
import Container from '../components/ui/Container'
import type {LoginFormProps} from '../components/ui/LoginForm';

const btn = (
  <Button
    text="INICIAR SESION"
    style="bg-color-primary "
  />
)

const headerProps = {
  logo: ''
}
const loginFormProps: LoginFormProps = {
  title: 'MoviBus',
  subtitle: 'Iniciar Sesión',
  button: btn,
  onSubmit: (formData) => {
    console.log('Form submitted with data:', formData)
  },
}

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container header={headerProps} loginForm={loginFormProps} />
  )
}
