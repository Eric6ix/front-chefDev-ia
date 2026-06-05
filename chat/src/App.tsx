import { Chat } from "./pages/chat";
import { JSX } from "react/jsx-runtime";

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-100">
      <Chat />
    </div>
  );
}

export default App;
