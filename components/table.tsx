// ...
export default async function Table({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    const invoices = await fetchFilteredInvoices(query, currentPage);
    // ...
  }

