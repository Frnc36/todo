import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoProvider } from './contexts/Todo.Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>{/* körbe ölelem a prividerrel a szlülö komponenst */}
      <App />
    </TodoProvider>
  </StrictMode>,
)
