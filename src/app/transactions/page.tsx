import { NavBar } from "@/components/NavBar";

export default function TransactionsPage() {
  return (
    <>
      <NavBar active="transactions" />

      <main className="flex justify-center">
        <div className="bg-slate-900 m-4 p-4 rounded min-w-1/3">
          <h2>Transactions</h2>
        </div>
      </main>
    </>
  );
}
