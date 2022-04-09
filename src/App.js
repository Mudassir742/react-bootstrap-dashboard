import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
