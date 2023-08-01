import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header, Body, Footer, Hero, Section, WebLibrary, WebLibraryTitle, KarteWeb } from './Components/index'
function App() {
  return (
    <>
      <Router basename={'/reactobjekt'}>
        <Routes>
          <Route path='/' element={<react />} />
        </Routes>
        <Header />
        <Body >
          <Hero />
          <Section />
        </Body>
        <WebLibrary >
          <WebLibraryTitle />
          <KarteWeb />
        </WebLibrary >
        <Footer />
      </Router>
    </>
  );
}

export default App;
