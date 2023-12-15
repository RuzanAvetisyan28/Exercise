// import { useState } from 'react'
import './App.scss'
// import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.css';
// import Layout from './hoc/Layout'
// import Header from './components/Header'

import Container from "./components/Container";
import Header from "./components/Header";
import Layout from "./hoc/Layout";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectProsValues } from './redux/PropValues/selectors';
import { setProsItems1 } from './redux/PropValues/actions';



function App() {
  return (
     <Layout>
      <Container/>
     </Layout> 
  );
}

export default App;
