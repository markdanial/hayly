"use client";
import Image from "next/image";
import HeroSearch1 from "../element/HeroSearch1";
import { useState } from "react";
import { useRouter } from "next/navigation";

const role = ["City, state, or zip", "Miami", "New York"];

const popular = ["Arabian", "Appaloosa", "Saddles", "Trailers"];

export default function Hero20() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // role handler
  const roleHandler = (select) => {
    setSelectedRole(select);
  };
  const router = useRouter();

  // search handler
  const searchHandler = () => {
    router.push("/project-1");
  };

  return (
    <section className="hero-home13 at-home20 overflow-hidden">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-banner-wrapper home1_style">
                <div className="ui-hero-slide">
                    <Image
                      height={4000}
                      width={4000}
                      src="/images/horse/horse-1.jpg"
                      className="ui-hero-slide__img"
                      alt="Hero Banner"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-banner-content">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-7">
                <div className="home20-hero-content text-center">
                  <h1 className="animate-up-1 mb25 title text-white">
                  Your Equestrian Journey Starts Here
                  </h1>
                  <p className="text mb30 animate-up-2 text-white">
                  Discover horses, services, and events tailored to your passion
                  </p>
                  <div className="advance-search-tab bgc-white bdr1-dark bdrs60 p10 bdrs4-sm banner-btn position-relative zi9 animate-up-3">
                    <div className="row">
                      <div className="col-md-5 col-lg-6 col-xl-6">
                        <div className="advance-search-field mb10-sm bdrr1 bdrn-sm">
                          <HeroSearch1 />
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 col-xl-3">
                        <div className="bselect-style1">
                          <div className="dropdown bootstrap-select">
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-light"
                              data-bs-toggle="dropdown"
                            >
                              <div className="filter-option">
                                <div className="filter-option-inner">
                                  <div className="filter-option-inner-inner">
                                    {getSelectedRole !== null
                                      ? getSelectedRole
                                      : "City, state, or zip"}
                                  </div>
                                </div>{" "}
                              </div>
                            </button>
                            <div className="dropdown-menu ">
                              <div className="inner show">
                                <ul className="dropdown-menu inner show">
                                  {role.map((item, index) => (
                                    <li
                                      onClick={() => roleHandler(item)}
                                      key={index}
                                      className="selected active"
                                    >
                                      <a
                                        className={`dropdown-item selected ${
                                          getSelectedRole === item ? "active" : ""
                                        }`}
                                      >
                                        <span className="text">{item}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-3">
                        <div className="text-center text-xl-start">
                          <button
                            className="ud-btn btn-thm default-box-shadow2 bdrs60 bdrs4-sm w-100"
                            type="button"
                            onClick={searchHandler}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-block d-md-flex justify-content-center mt30 text-center animate-up-4">
                    <p className="hero-text fz15 me-2 mb-0 text-white">Popular Searches</p>

                    {popular.map((elm,i)=><a key={i} className="text text-white" style={{marginRight:'5px'}} >
                              {`${elm}${(i != (popular.length -1)) ? ',':' '}`}
                            </a>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
