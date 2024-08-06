import Header from "./components/section/Header";
import MainSection from "./components/section/MainSection";
import TitleSection from "./components/section/TitleSection";
function App() {
  return (
    <div className="h-[135vh] bg-gradient-to-b from-linear1 to-linear2">
      <Header />
      <TitleSection />
      <MainSection />
    </div>
  );
}

export default App;
