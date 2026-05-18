'use client';
import React from 'react';
import Link from 'next/link';

const BrandSlider = () => {
  return (
    <>
      <div className="brand wow fadeInUpBig" data-wow-duration="1s" data-wow-delay=".5s">
    <div className="container container--lg">
        <div className="brand-box py-80 px-16 bg-main-25 border border-neutral-30 rounded-16">
            <h5 className="mb-40 text-center text-neutral-500">TRUSTED BY OVER 17,300 GREAT TEAMS</h5>
            <div className="container">
                <div className="brand-slider">
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img1.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img2.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img3.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img4.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img5.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img6.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img7.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
    </>
  );
};

export default BrandSlider;
