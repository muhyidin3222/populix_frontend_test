import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import ProtectedRoute from 'components/ProtectedRoute'
import Login from 'page/login'
import NotFound from 'page/notFound'
import ProdukList from 'page/produk/list'

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path='/' component={ProdukList} />

        <Route path='/not-found' component={NotFound} />
        <Route path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App