import { NavBar } from "@/components/NavBar";

export default function CategoriesPage() {
  return (
    <>
      <NavBar active="categories" />

      <main className="flex justify-center">
        <div className="bg-slate-900 m-4 p-4 rounded min-w-1/3">
          <h2>Categories</h2>
        </div>
      </main>
    </>
  );
}
