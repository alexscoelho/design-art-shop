import { prisma } from "@/app/db";
import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  async function addDesign(data: FormData) {
    "use server";
    const name = data.get("name")?.valueOf();
    const url = data.get("url")?.valueOf();

    if (typeof name !== "string" || typeof url !== "string") {
      throw new Error("Este diseño no es valido.");
    }

    try {
      await prisma.designs.create({
        data: {
          name,
          url,
        },
      });

      redirect("/admin/designs");
    } catch (e) {
      throw e;
    }
  }
  return (
    <form
      action={addDesign}
      className="grid grid-cols-1 max-w-md my-2 mx-4 gap-4"
    >
      <div className="flex flex-col">
        <label htmlFor="name">Nombre</label>
        <input
          maxLength={50}
          required
          name="name"
          type="text"
          className="border py-2 px-2 border-slate-400 rounded-md"
          placeholder="Nombre Producto"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="name">Link</label>
        <input
          required
          name="url"
          type="text"
          className="border py-2 px-2 border-slate-400 rounded-md"
          placeholder="Link"
        />
      </div>
      <div className="flex flex-col">
        <button className="border py-3 px-2 rounded-md text-lg bg-blue-600 hover:bg-blue-700 text-white">
          Crear
        </button>
      </div>
    </form>
  );
};

export default Page;
