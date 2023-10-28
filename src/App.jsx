import { RouterProvider, createHashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./Store/store"
import { Home, Report, Students, Teachers } from "./Pages"
import Layout from "./Layout/Layout"

function App() {

  const routers = createHashRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'teachers', element: <Teachers /> },
        { path: 'students', element: <Students /> },
        { path: 'report', element: <Report /> },
      ]
    },
  ])


  return (
    <>

      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </>
  )
}

export default App
