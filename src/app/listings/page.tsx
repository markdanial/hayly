// import Pagination from '@/ui/invoices/pagination';
import Search from '@/ui/search';
// import Table from '@/ui/invoices/listings-table';
import Cards from '@/ui/invoices/listings-cards';
import { CreateListing } from '@/ui/invoices/buttons';
import { lusitana } from '@/ui/fonts';
import { InvoiceSkeleton } from '@/ui/skeletons';
import { Suspense } from 'react';
// import { fetchListings } from '@/lib/data';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Listings'
};
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
//   const totalPages = await fetchListings(query);
console.log('query', query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Listings</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search listings..." />
        <CreateListing />
      </div>
       <Suspense key={query + currentPage} fallback={<InvoiceSkeleton />}>
        <Cards query={query} currentPage={currentPage} />
      </Suspense>
      {/* <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  );
}