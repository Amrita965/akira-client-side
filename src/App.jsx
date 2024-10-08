
import { RouterProvider } from 'react-router-dom'
import Main from './Layout/Main'
import router from './Routes/Routes/Routes'

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
