import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import SendMessage from "./Components/SendMessage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
      <Sidebar/>
      <Chat/>
      </div>
      <SendMessage/>
    </div>
  );
}

export default App;
