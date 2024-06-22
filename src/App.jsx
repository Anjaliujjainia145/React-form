
import './App.css'
// import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
     <h1>React with Chai and share is important. </h1>
     <Login></Login>
     <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
