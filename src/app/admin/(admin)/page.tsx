import PersonTable from "@/app/components/table/PersonTable";

export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">User Management</h1>
      <PersonTable />
    </div>
  );
}
