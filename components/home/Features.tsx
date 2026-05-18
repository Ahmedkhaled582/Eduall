'use client';
import React from 'react';
import Link from 'next/link';

const Features = () => {
  return (
    <>
      <section className="features py-120 position-relative overflow-hidden">
    <img src="/assets/images/shapes/shape2.png" alt="" className="shape two animation-scalation" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="shape six animation-walking" />

    <div className="container">
        <div className="section-heading text-center">
            <h2 className="mb-24 wow bounceIn">Explore 4,000+ Free Online Courses For Students</h2>
            <p className="wow bounceInUp">Welcome to our diverse and dynamic course catalog. we're dedicated to providing you with access to high-quality education</p>
        </div>
        <div className="features-slider">
            <div className="px-8" data-aos="zoom-in" data-aos-duration="400">
                <div className="features-item item-hover animation-item bg-main-25 border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
                    <span className="mb-32 w-110 h-110 flex-center bg-white rounded-circle">
                        <img src="/assets/images/icons/feature-icon1.png" className="animate__bounce" alt="" />
                    </span>
                    <h4 className="mb-16 transition-1 item-hover__text">Language Learning</h4>
                    <p className="transition-1 item-hover__text text-line-2">Courses teaching languages such as English, Spanish, French, Mandarin etc</p>
                    <a href="/course-list-view" className="item-hover__text flex-align gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1">
                        View Category
                        <i className="ph ph-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="px-8" data-aos="zoom-in" data-aos-duration="800">
                <div className="features-item item-hover animation-item bg-main-25 border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
                    <span className="mb-32 w-110 h-110 flex-center bg-white rounded-circle">
                        <img src="/assets/images/icons/feature-icon2.png" className="animate__bounce" alt="" />
                    </span>
                    <h4 className="mb-16 transition-1 item-hover__text">Creative Arts & Design</h4>
                    <p className="transition-1 item-hover__text text-line-2">Courses on graphic design, digital art, photography, video editing</p>
                    <a href="/course-list-view" className="item-hover__text flex-align gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1">
                        View Category
                        <i className="ph ph-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="px-8" data-aos="zoom-in" data-aos-duration="1200">
                <div className="features-item item-hover animation-item bg-main-25 border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
                    <span className="mb-32 w-110 h-110 flex-center bg-white rounded-circle">
                        <img src="/assets/images/icons/feature-icon3.png" className="animate__bounce" alt="" />
                    </span>
                    <h4 className="mb-16 transition-1 item-hover__text">Health & Fitness</h4>
                    <p className="transition-1 item-hover__text text-line-2">Courses on nutrition, fitness training, yoga, meditation, wellness coaching...</p>
                    <a href="/course-list-view" className="item-hover__text flex-align gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1">
                        View Category
                        <i className="ph ph-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="px-8" data-aos="zoom-in" data-aos-duration="1600">
                <div className="features-item item-hover animation-item bg-main-25 border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
                    <span className="mb-32 w-110 h-110 flex-center bg-white rounded-circle">
                        <img src="/assets/images/icons/feature-icon2.png" className="animate__bounce" alt="" />
                    </span>
                    <h4 className="mb-16 transition-1 item-hover__text">Creative Arts & Design</h4>
                    <p className="transition-1 item-hover__text text-line-2">Courses on graphic design, digital art, photography, video editing</p>
                    <a href="/course-list-view" className="item-hover__text flex-align gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1">
                        View Category
                        <i className="ph ph-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="flex-align gap-16 mt-40 justify-content-center">
            <button type="button" id="features-prev" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                <i className="ph ph-caret-left"></i>
            </button>
            <button type="button" id="features-next" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                <i className="ph ph-caret-right"></i>
            </button>
        </div>
    </div>
 </section>
    </>
  );
};

export default Features;
