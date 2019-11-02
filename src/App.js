import React from 'react';
import ProfilePage from './components/instapaper/pages/instapaper/Profile';

function App() {
  // Maybe in the second iteration create a loading effect and actually draw the app when all components are fetched?
  return (
      <div className="App">
          <ProfilePage/>
      </div>
  );
}

export default App;
