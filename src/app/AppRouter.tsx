import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..,</div>;

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingMessage />}>
        <Switch>
          <Route exact={true} path="/" component={App} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
