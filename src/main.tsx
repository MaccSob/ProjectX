import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import { LoginForm } from './LoginForm.tsx';
import { FormRegister } from './RegisterForm.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<FormRegister/>} />
          <Route path="/" element={<App/>} />
   </Routes>
   
   </BrowserRouter>
  </StrictMode>,
)
