import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FireBreakdown from './views/page1/FireBreakdown';



const App = () => {
  return (
    <BrowserRouter>
      <FireBreakdown />
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/chart" render={() => <FireBreakdown title="Fire Breakdown"/>} />
    </BrowserRouter>
  );
}

export default App;
