import './App.css';
import './components/Common/common.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewsListing from './components/News/NewsListing';
import NewsDetail from './components/News/NewsDetail';
import HeaderFooter from './components/Common/HeaderFooter';
import NoPageFound from './components/Common/NoData';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeaderFooter />} />          
          <Route path='/InfiniteScroll' element={<InfiniteScroll />} />          
          <Route path='/NewsListing' element={<NewsListing />} />
          <Route path='/NewsDetail' element={<NewsDetail />} />
          <Route path='*' element={<NoPageFound NoItemFound="No page found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
