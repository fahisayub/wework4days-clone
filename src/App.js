import './App.css';
import React from 'react';
import { Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import SearchHeader from './components/SearchHeader'
import Joblist from './components/Joblist'
import Footer from './components/Footer'
function App() {
  return (
    <Container maxW='100%' padding='0px' >
      <Navbar/>
      <SearchHeader/>
      <Joblist/>
      <Footer/>
      

    </Container>
  );
}

export default App;
