import './App.css';
import { UserProvider } from './userContext';
import RouterBody from './Router';
function App() {
  debugger;
  return (
    <div style={{ 
              fontFamily: 'Arial, sans-serif', 
              padding: '20px',  
              backgroundColor: '#f5f5f5',
              width: '100vw',
              height: '100vh',
              boxSizing: 'border-box'
            }}>
      <header>
        <UserProvider >
          <RouterBody/>
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
