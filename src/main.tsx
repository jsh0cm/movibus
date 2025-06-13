import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginForm from './components/LoginForm'
import Container from './components/Container'
import Button from './components/Button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container children={
      <LoginForm
        logo="your-logo-url"
        title="Your Title"
        subtitle="Your Subtitle"
        onSubmit={(formData) => console.log(formData)}/>
    } />
  </StrictMode>,
)
