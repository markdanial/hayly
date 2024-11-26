// import { product1 } from "@/data/product";
import Pagination1 from "./Pagination1";
import ListingSlideCard from "../card/ListingSlideCard";
// import BestServiceCard1 from "../card/BestServiceCard1";
import { fetchListings } from '@/lib/data';

export default async function ListStyleContent() {
  let listings;
  let query = '';
  try {
    listings = await fetchListings(query);
  } catch (error) {
    console.error('Failed to fetch listings:', error);
    // listings = placeholderListings;
  }
console.log('listings.breeds!!!!!!!!', listings?.[0]?.breeds);
  return (
    <>
      <section className="pt0 pb90">
        <div className="container">
          <div className="row mt35">
            <div className="col-lg-12 mb15">
              <h2>List Stytle V3</h2>
              <p className="text">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
            </div>
            {listings?.map((listing,i) => (
              <div key={ i } className="col-sm-6 col-xl-3">
                  <ListingSlideCard data={listing} style="style3" />
              </div>
            ))}
          </div>
          <Pagination1 />
        </div>
      </section>
    </>
  );
}
