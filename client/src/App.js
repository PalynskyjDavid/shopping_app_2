import './App.css';
import Layout from './Layout/Layout.js';
import UserProvider from './User/UserProvider.tsx'; //<- chybelo zde .tsx => nechtelo se to zkompilovat prý komponenta neexistuje


function App() {
  return (
    <div className='App'>
      <UserProvider>
        <Layout />
      </UserProvider>
    </div>
  );
}

export default App;
