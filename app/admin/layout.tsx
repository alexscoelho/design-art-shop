import AdminNav from "@/components/AdminNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex flex-col items-center gap-4 my-4">
        <p className="text-2xl">Administracion</p>
      </div>
      <AdminNav />
      {children}
    </section>
  );
}
