import './App.css';
import { UserContextProvider } from './components/Context/UserContext';
import IndexPage from './components/IndexPage/IndexPage';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;