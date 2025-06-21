import { createFileRoute } from '@tanstack/react-router'

import Button  from '../components/ui/Button'
import Container from '../components/ui/Container'
import type {LoginFormData, LoginFormProps} from '../components/ui/LoginForm';

const btn = (
  <Button
    text="INICIAR SESION"
    style="bg-color-primary "
  />
)

const loginFormProps: LoginFormProps = {
  logo: '/movibus_logo.svg',
  title: 'MoviBus',
  subtitle: 'Iniciar Sesión',
  button: btn,
  onSubmit: (formData: LoginFormData) => {
    console.log('Form submitted with data:', formData)
  },
}

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container loginForm={loginFormProps} />
  )
}
