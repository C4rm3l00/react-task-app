import Tasklist from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
      <Analytics/>
      <TaskForm />
      <Tasklist />
    </>
  );
}

export default App;
