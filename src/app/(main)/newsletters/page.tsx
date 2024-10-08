import Page from "@/components/page";
import prismadb from "@/lib/db";
import { DataTable } from "@/components/data-table";

export default async function Newsletters() {
  const newsletters = await prismadb.newsletters.findMany();
  console.log(newsletters);

  return (
    <Page title="Newsletters">
      <p>This is a Newsletters page</p>
      <DataTable
        columns={[
          { header: "ID", accessorKey: "id" },
          { header: "Name", accessorKey: "name" },
          { header: "Created At", accessorKey: "createdAt" },
          { header: "Updated At", accessorKey: "updatedAt" },
        ]}
        data={newsletters}
      />
    </Page>
  );
}
