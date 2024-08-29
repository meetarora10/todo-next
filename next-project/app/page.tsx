import Navbar from "@/components/Navbar";
import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";
import "./globals.css";
export default function Home() {
  return (
    <>
      <Navbar />
      <AddTask />
      <TodoList />
    </>
  );
}
