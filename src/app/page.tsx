import prisma from "@/server/db";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

export async function getTodos() {
  return await prisma.todo.findMany({
    where: {
      finished: false,
    },
  });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="flex max-w-3xl flex-col gap-20 px-4 py-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Create a new todo</h1>
        <CreateTodo />
      </div>

      <div className="flex flex-col gap-4 text-xl">
        <h1 className="text-2xl font-bold">Todos</h1>
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}
