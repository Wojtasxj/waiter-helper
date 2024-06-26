import { Container } from 'react-bootstrap';
import { Route, Routes } from'react-router-dom';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Tables from './components/pages/Tables/Tables';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';


const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:id" element={<Tables />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </Container>
    </main>
  )
}

export default App;
