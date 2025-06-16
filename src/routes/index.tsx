import { createFileRoute } from '@tanstack/react-router'

import Button  from '../components/ui/Button'
import Container from '../components/ui/Container'
import { LoginFormProps } from '../components/ui/LoginForm';

const btn = (
  <Button
    text="INICIAR SESION"
    style="bg-color-primary "
  />
)

const headerProps = {
  logo: ''
}



export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

    const loginFormProps: LoginFormProps = {
    title: 'Login Form',
    subtitle: 'Please enter your credentials',
    button: <Button text="Login" />,
    onSubmit: (formData: LoginFormData) => {
      // Handle form submission
    },
  };

  return (
    <Container header={headerProps} loginForm={loginFormProps} />
  )
}
