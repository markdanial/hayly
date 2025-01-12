"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Navigation } from "swiper";

// import TrendingServiceCard1 from "../card/TrendingServiceCard1";
// import { product1 } from "@/data/product";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Listing } from "@/types/listings";
import ListingSlideCard from "../card/ListingSlideCard";

export default function TrendingHorseListings({ listings }: { listings: Listing[] }) {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
console.log('listings', listings);
  return (
    <>
      <section className="pb90 pb30-md bgc-thm3">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">Horse Listings</h2>
                <p className="paragraph">
                  Explore Top Listings Tailored for Equestrians
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4 mb-lg-2">
                <Link className="ud-btn2" href="/service-1">
                  All Listings
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="position-relative">
                {showSwiper && (
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    className="mySwiper"
                    navigation={{
                      prevEl: ".prev-btn",
                      nextEl: ".next-btn",
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {listings.slice(0, 6).map((item,i) => (
                      <SwiperSlide key={ i }>
                        <ListingSlideCard data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
                <button type="button" className="prev-btn">
                  <i className="far fa-chevron-left" />
                </button>
                <button type="button" className="next-btn">
                  <i className="far fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
