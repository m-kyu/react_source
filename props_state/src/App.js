import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom'
import './css/index.scss';
import Index from './pages/Index';
import Sub from './pages/Sub';
import Header from './comp/Header';

{/* 
  comp (Header/ List/Item/View)
  pages (Index / Sub) 
*/}
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sub/:type" element={<Sub />} />
        </Routes>
      </main>
      <footer></footer>
    </Router>
  );
}

export default App;
