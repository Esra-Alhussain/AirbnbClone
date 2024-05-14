import "./App.module.css";
import Card from "./Components/Card/Card.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
// import the array of data from data.js
import datas from "./data.js";
console.log(datas)

function App() {
  const cardData = datas.map((data) => (
    <Card
      image={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      country={data.location}
      title={data.title}
      price={data.price}
    />
  ));
  
  return (
    <>
      <Navbar />
      <Hero />
      {cardData}
    </>
  );
}

export default App;
