import "./App.module.css";
import Card from "./componants/Card/Card";
import Hero from "./componants/Hero/Hero";
import Navbar from "./componants/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        image="cardImg.png"
        rating="5.2"
        viewCount={6}
        country="Canada"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
        <Card
        image="hero.png"
        rating="5.2"
        viewCount={6}
        country="Canada"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </>
  );
}

export default App;
