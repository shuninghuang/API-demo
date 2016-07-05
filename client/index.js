
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router5'
import { Provider } from 'react-redux'
import App from './containers/App'
import createRouter from './create-router'
import configureStore from './store'

const router = createRouter()
const store = configureStore(router)

router.start(() => {
  ReactDOM.render(
    <Provider store={ store }>
      <RouterProvider router={ router }>
        <App />
      </RouterProvider>
    </Provider>,
    document.getElementById('root')
  )
})
