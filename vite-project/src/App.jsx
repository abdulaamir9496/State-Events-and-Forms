// import HandleEvent from './components/HandleEvent'
// import CounterState from './components/CounterState'
// import HandleMultipleStateEvents from './components/HandleMultipleStateEvents'
// import HandleInputElement from './components/HandleInputElement'
import HandleMultipleInputElement from './components/HandleMultipleInputElement'

// import { useContext } from 'react'
// import ThemeContext from './components/ThemeContext'
// import UserContext from './components/UserContext';

// import { useContext } from "react"
// import UserContext from "./components/UserContext"

function App() {

  // Task 1: Theme Context
  // const {theme, toggleTheme} = useContext(ThemeContext);

  // Task 2: User Authentication
  // const { user, login, logout } = useContext(UserContext);

  return (
    <>
      {/* <HandleEvent /> */}
      {/* <CounterState /> */}
      {/* <HandleMultipleStateEvents /> */}
      {/* <HandleInputElement /> */}
      <HandleMultipleInputElement />

      {/* Task 1: Theme Context */}
      {/* <div style={{background: theme === 'light'? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Current Theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div> */}

      {/* Task 2: User Authentication */}
      {/* <div>
        <h1>{user ? `Welcome, ${user.name}` : 'Please login'}</h1>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={() => login("Abdul Aamir")}>Login</button>
        )}
      </div> */}

      {/* Task 3: Nested Components */}
      {/* <div>
        <h1>App component
          <Parent />
        </h1>
      </div> */}
    </>
  )
}

//parent function: 
// function Parent() {
//   return(
//     <div>
//       <h2>Parent Component</h2>
//       <Child />
//     </div>
//   )
// }

//child function: 
// function Child() {

//   const {user} = useContext(UserContext);

//   return <h3>Child Component: {user ? `Hello, ${user.name}` : "No user logged in"}</h3>
// }

export default App
