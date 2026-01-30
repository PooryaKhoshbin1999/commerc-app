import {} from 'antd';
import AppHeader from './components/header/AppHeader';
import AppFooter from './components/footer/AppFooter';
import PageContent from './components/pageContent/PageContent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <AppHeader />
      <PageContent />
      <AppFooter />  
    </BrowserRouter>
     
    </div>
  );
}

export default App;
