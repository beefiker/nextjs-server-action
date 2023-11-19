import { updateTodo } from "@/action/actions";
import { Prisma } from "@prisma/client";
import { getTodos } from "../page";

type Props = {
  todo: Prisma.PromiseReturnType<typeof getTodos>[number];
};

function Todo({ todo }: Props) {
  return (
    <div className="flex items-center gap-2">
      <p className="rounded-lg border px-3 py-1">{todo.title}</p>
      <form action={updateTodo}>
        <input type="hidden" name="id" value={todo.id} />
        <input type="hidden" name="finished" value={String(todo.finished)} />
        <input
          type="submit"
          className="text-4xl hover:cursor-pointer
        "
          value="✅"
        />
      </form>
    </div>
  );
}

export default Todo;
