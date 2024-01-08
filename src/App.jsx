import './App.scss'
import 'bootstrap/dist/css/bootstrap.css';

import Container from "./components/Container";
import Layout from "./hoc/Layout";

function App() {
  return (
     <Layout>
      <Container/>
     </Layout> 
  );
}

export default App;
