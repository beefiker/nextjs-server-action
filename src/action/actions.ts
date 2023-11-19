"use server";

import prisma from "@/server/db";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  try {
    const title = formData?.get("title") as string;
    await prisma.todo.create({
      data: {
        title,
      },
    });
    revalidatePath("/");
  } catch (e) {
    console.log(e);
  }
}

export async function deleteTodo(formData: FormData) {
  try {
    const id = formData?.get("id") as string;
    await prisma.todo.delete({
      where: {
        id: parseInt(id),
      },
    });
    revalidatePath("/");
  } catch (e) {
    console.log(e);
  }
}

export async function updateTodo(formData: FormData) {
  try {
    const id = formData?.get("id") as string;
    const finished = formData?.get("finished") as string;
    await prisma.todo.update({
      where: {
        id: parseInt(id),
      },
      data: {
        finished: finished === "false" ? true : false,
        updatedAt: new Date(),
      },
    });
    revalidatePath("/");
  } catch (e) {
    console.log(e);
  }
}
