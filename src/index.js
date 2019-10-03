import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToastProvider from './components/Toast/ToastProvider';
import SearchRoute from './routes/SearchRoute';
import './index.css';

const LazyAccommodationRoute = React.lazy(() => import('./routes/AccommodationRoute'));

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={SearchRoute} />
            <Route exact path="/accommodations/:id/">
              <React.Suspense fallback="Loading...">
                <LazyAccommodationRoute />
              </React.Suspense>
            </Route>
          </Switch>
        </div>
      </Router>
    </ToastProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
