import React from "react";
import { prisma } from "../db";
import { redirect } from "next/navigation";

const Admin = async () => {
  const categories = await prisma.category.findMany();
  async function addProduct(data: FormData) {
    "use server";
    const name = data.get("name")?.valueOf();
    const description = data.get("description")?.valueOf();
    const categoryLabel = data.get("category")?.valueOf();
    let price = data.get("price")?.valueOf();
    let quantity = data.get("quantity")?.valueOf();

    if (typeof price === "string" && typeof quantity === "string") {
      price = parseInt(price);
      quantity = parseInt(quantity);
    }

    if (
      typeof name !== "string" ||
      typeof description !== "string" ||
      typeof price !== "number" ||
      typeof quantity !== "number" ||
      typeof categoryLabel !== "string"
    ) {
      throw new Error("Este producto no es valido.");
    }

    try {
      await prisma.product.create({
        data: {
          name,
          description,
          price,
          quantity,
          categoryLabel,
          rating: 5,
        },
      });

      redirect("/admin");
    } catch (e) {
      throw e;
    }
  }
  return (
    <>
      <form
        action={addProduct}
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
          <label htmlFor="name">Descripcion</label>
          <textarea
            required
            name="description"
            className="border py-2 px-2 border-slate-400 rounded-md"
            placeholder="Description del Producto"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Precio</label>
          <input
            required
            name="price"
            type="number"
            className="border py-2 px-2 border-slate-400 rounded-md"
            placeholder="Precio"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Cantidad</label>
          <input
            defaultValue={1}
            name="quantity"
            type="number"
            max={5}
            className="border py-2 px-2 border-slate-400 rounded-md"
            placeholder="Cantidad"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pet-select">Categoria del producto</label>
          <select
            className="border py-2 px-2 border-slate-400 rounded-md"
            name="category"
          >
            <option value="">--Selecciona una categoria--</option>
            {categories.map((category) => (
              <option value={category.label}>{category.label}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <button className="border py-3 px-2 rounded-md text-lg bg-blue-600 hover:bg-blue-700 text-white">
            Crear
          </button>
        </div>
      </form>
    </>
  );
};

export default Admin;
