import './App.css';
import { UserContextProvider } from './components/Context/UserContext';
import CreatePost from './components/CreatePost/CreatePost';
import IndexPage from './components/IndexPage/IndexPage';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import { Route, Routes } from 'react-router-dom'
import PostPage from './components/PostPage/PostPage';
import EditPost from './components/EditPost/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/edit/:id' element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;