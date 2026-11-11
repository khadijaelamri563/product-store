
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {

  const products = [
    {
      id: 1,
      name: "Laptop HP",
      price: 5000,
      image: ""
    },
    {
      id: 2,
      name: "iPhone",
      price: 7000,
      image: ""
    },
    {
      id: 3,
      name: "Casque Bluetooth",
      price: 350,
      image: ""
    },
    {
      id: 4,
      name: "Clavier",
      price: 250,
      image: ""
    }
  ];

  return (
    <div id="home">

      <Header />

      <ProductList products={products} />

      <Footer />

    </div>
  );
}

export default App;
