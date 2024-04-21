import React from 'react';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Tags from './components/Tags';
import Footer from './components/Footer';
import perrito1 from "../src/assets/img/perrito1.jpeg";
import perrito2 from "../src/assets/img/perrito2.jpeg";
import perrito3 from "../src/assets/img/perrito3.jpeg";
import perrito4 from "../src/assets/img/perrito4.jpeg";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header title="Adopta un perrito" />

      <div className="row">
        <div className="col-md-4 d-flex flex-column align-items-center">
          <MyCard
            imageUrl={perrito1}
            name="Obito"
            description="Un perrito muy juguetón."
          >
            <Tags text="Más info" color="primary" />
          </MyCard>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center">
          <MyCard
            imageUrl={perrito2}
            name="Pelusa"
            description="Una perrita muy cariñosa."
          >
            <Tags text="Más info" color="success" />
          </MyCard>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center">
          <MyCard
            imageUrl={perrito3}
            name="Toni"
            description="Una perrita muy cariñosa."
          >
            <Tags text="Más info" color="secondary" />
          </MyCard>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-center">
          <MyCard
            imageUrl={perrito4}
            name="Ramón"
            description="Un perrito muy tierno"
          >
            <Tags text="Más info" color="danger" />
          </MyCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

