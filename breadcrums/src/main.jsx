import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import store from './store';

import { Provider } from 'redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
