import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/clients" element={<Page2 />} />
        <Route path="/client/:id" element={<Page3 />} />
        <Route path="*" element={<Navigate to={"/"} />} />

    </Routes>
</BrowserRouter>
  )
}

export default App
