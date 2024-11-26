"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Listing } from '@/types/listings';

/**
 * ListingSlideCard Component
 * 
 * This component is used on the horse listing page and implements listing style v3.
 * It displays horse details in a card format with an image slider.
 * Handles both sale and lease listings with associated horse details like:
 * - Breed information
 * - Age/Foaling date
 * - Height
 * - Gender
 * - Registration details
 * - Price and negotiation status
 * - Location
 */

export default function ListingSlideCard({
  data,
  style = "",
  isContentExpanded,
}: {
  data: Listing;
  style?: string;
  isContentExpanded?: boolean;
}) {
  const {
    id,
    title,
    images,
    breeds,
    location,
    price,
    negotiable,
    for_sale,
    for_lease,
    gender,
    foaled,
    height,
    color,
    registered,
    reg_association,
    reg_number
  } = data;
  const [isFavActive, setFavActive] = useState(false);
  const path = usePathname();
  // const [showSwiper, setShowSwiper] = useState(false);
  // useEffect(() => {
  //   setShowSwiper(true);
  // }, []);
console.log('images', images);
  return (
    <>
      <Link href={`/service-single/${id}`}>
        <div className={`listing-style1 bdrs16`}>
          <div className="list-thumb">
            <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid">
              <div className="item">
                {images && images.length > 1 ? (
                  <Swiper
                    navigation={{
                      prevEl: ".btn__prev__005",
                      nextEl: ".btn__next__005",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{
                      el: ".swiper__pagination__005",
                      clickable: true,
                    }}
                  >
                    {images.map((item, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          height={247}
                          width={331}
                          className="w-100 object-fit-cover"
                          src={'/images/listings/g-1.jpg'}
                          alt="thumbnail"
                        />
                      </SwiperSlide>
                    ))}
                    <div className="swiper__parent">
                      <div className="row justify-content-center">
                        <div className="col-auto">
                          <button className="swiper__btn swiper__btn-2 btn__prev__005">
                            <i className="far fa-arrow-left-long" />
                          </button>
                        </div>
                        <div className="col-auto">
                          <div className="swiper__pagination swiper__pagination-2 swiper__pagination__005"></div>
                        </div>
                        <div className="col-auto">
                          <button className="swiper__btn swiper__btn-2 btn__next__005">
                            <i className="far fa-arrow-right-long" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Swiper>
                ) : (
                  <Image
                    height={247}
                    width={331}
                    className="w-100 object-fit-cover"
                    src={'/images/listings/g-1.jpg'}
                    alt="thumbnail"
                  />
                )}
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setFavActive(!isFavActive);
                  }}
                  className={`listing-fav fz12 z-1 ${
                    isFavActive ? "ui-fav-active" : ""
                  }`}
                >
                  <span className="far fa-heart" />
                </a>
              </div>
            </div>
          </div>
          <div className={`list-content ${isContentExpanded ? "px-0" : ""}`}>
            <p className="list-text body-color fz14 mb-1">{breeds.map((breed: { name: string }) => breed.name).join(', ')}</p>
            <h5 className="list-title">
              {title}
            </h5>
            <div className="review-meta d-flex align-items-center">
              <i className="fas fa-star fz10 review-color me-2" />
              {/* <p className="mb-0 body-color fz14">
                <span className="dark-color me-2">{data.rating}</span>
                {data.review}
                reviews
              </p> */}
            </div>
            <hr className="my-2" />
            <div className="list-meta d-flex justify-content-between align-items-center mt15">
              <a>
                <span className="position-relative mr10">
                  <Image
                    height={30}
                    width={30}
                    className="rounded-circle object-fit-contain"
                    src={'/images/user.png'}
                    alt="Freelancer Photo"
                  />
                  <span className="online-badge" />
                </span>
                <span className="fz14">Seller name</span>
              </a>
              <div className="budget">
                <p className="mb-0 body-color">
                  <span className="fz17 fw500 dark-color ms-1">
                    ${price}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
