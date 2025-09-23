import "./App.css";
import Card from "./component/Card";
import Cards from "./component/Cards";
import HeroSection from "./component/HeroSection";

function App() {
  return (
    <>
      {/* <HeroSection /> */}
      {/* <Card /> */}
      <div className="p-6 space-y-4">
        <Cards
          title="React basics"
          description="learn components , props and jsx"
        />
        <Cards
          title="Backend basics"
          description="learn components , props and jsx"
        />
      </div>
      <img src="https://cdn.prod.website-files.com/6090f790a8effe37f12b39d4/6090f790a8effe58052b4736_Upgrade.jpg" />
      {/* ProfileCard component Props: name , role , imageUrl  display them */}
    </>
  );
}

export default App;
