"use client";

import { createTodo } from "@/action/actions";
import { useRef } from "react";

function CreateTodo() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form ref={ref}>
      <input
        type="text"
        name="title"
        className="rounded-xl border p-3 text-xl text-black"
        required
      />
      <button
        type="submit"
        className="ml-4 rounded-xl border bg-white p-4 text-black"
        formAction={(formData) => {
          createTodo(formData).then(() => {
            ref.current?.reset();
          });
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default CreateTodo;
