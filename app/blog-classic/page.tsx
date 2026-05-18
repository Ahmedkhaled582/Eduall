import React from 'react';
import Link from 'next/link';
import Preloader from '@/components/layout/Preloader';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';
import Header from '@/components/layout/Header';
import Footer from '@/components/home/Footer';

export const metadata = {
  title: "EdullAll - LMS, Tutors, Education & Online Course Html Template",
};

export default function Page() {
  return (
    <>
      <Preloader />
      <div className="side-overlay"></div>
      <ProgressWrap />
      <Overlay />
      <MobileMenu />
      <Header />
      
      {/* ==================== Breadcrumb Start Here ==================== */}
<section className="breadcrumb py-120 bg-main-25 position-relative z-1 overflow-hidden mb-0">
    <img src="/assets/images/shapes/shape1.png" alt="" className="shape one animation-rotation d-md-block d-none" />
    <img src="/assets/images/shapes/shape2.png" alt="" className="shape two animation-scalation d-md-block d-none" />
    <img src="/assets/images/shapes/shape3.png" alt="" className="shape eight animation-walking d-md-block d-none" />
    <img src="/assets/images/shapes/shape5.png" alt="" className="shape six animation-walking d-md-block d-none" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="shape four animation-scalation" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="shape nine animation-scalation" />
    
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="breadcrumb__wrapper">
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> Blog Classic</h1>
                    <ul className="breadcrumb__list d-flex align-items-center justify-content-center gap-4">
                        <li className="breadcrumb__item">
                            <a href="/" className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"> 
                                <i className="text-lg d-inline-flex ph-bold ph-house"></i> Home</a>
                         </li>
                        <li className="breadcrumb__item">
                            <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                        </li>
                        <li className="breadcrumb__item">
                            <a href="/course" className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"> </a> 
                        </li>
                        <li className="breadcrumb__item d-none">
                            <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                        </li>
                        <li className="breadcrumb__item"> 
                            <span className="text-main-two-600"> Blog Classic </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* ================================ Blog Classic Section Start =================================== */}
     <div className="blog-page-section py-120">
        <div className="container">
            <div className="flex-between gap-16 flex-wrap mb-40">
                <span className="text-neutral-500">Showing 9 of 600 Results </span>
                <div className="flex-align gap-16">
                    <div className="flex-align gap-8">
                        <span className="text-neutral-500 flex-shrink-0">Sort By :</span>
                        <select className="form-select ps-20 pe-28 py-8 fw-medium rounded-pill bg-main-25 border border-neutral-30 text-neutral-700">
                            <option value="1">Newest</option>
                            <option value="1">Trending</option>
                            <option value="1">Popular</option>
                        </select>
                    </div>
                    <button type="button" className="list-bar-btn text-xl w-40 h-40 bg-main-600 text-white rounded-8 flex-center d-lg-none">
                        <i className="ph-bold ph-funnel"></i>
                    </button>
                </div>
            </div>
            <div className="row gy-4">
                <div className="col-lg-8">
                    <div className="d-flex flex-column gap-24">
                        <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                            <div className="course-item__thumb max-h-unset rounded-12 overflow-hidden position-relative">
                                <a href="/blog-details" className="w-100 h-100">
                                    <img src="/assets/images/thumbs/blog-two-img1.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                                </a>
                                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                    <h3 className="mb-0 text-white fw-medium">21</h3>
                                    DEC
                                </div>
                            </div>
                            <div className="pt-32 pb-24 px-16 position-relative">
                                <h4 className="mb-28">
                                    <a href="/blog-details" className="link text-line-2">Navigating the Job Market: Advice for Graduates</a>
                                </h4>
                                <div className="flex-align gap-14 flex-wrap my-20">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                                        <span className="text-neutral-500 text-lg">By Admin</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                                        <span className="text-neutral-500 text-lg">1.6k</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                                        <span className="text-neutral-500 text-lg">24</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                    <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                        Read More
                                        <i className="ph ph-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>                            
                        <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                            <div className="course-item__thumb max-h-unset rounded-12 overflow-hidden position-relative">
                                <a href="/blog-details" className="w-100 h-100">
                                    <img src="/assets/images/thumbs/blog-two-img2.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                                </a>
                                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                    <h3 className="mb-0 text-white fw-medium">21</h3>
                                    DEC
                                </div>
                            </div>
                            <div className="pt-32 pb-24 px-16 position-relative">
                                <h4 className="mb-28">
                                    <a href="/blog-details" className="link text-line-2">The Importance of Diversity in Higher Education</a>
                                </h4>
                                <div className="flex-align gap-14 flex-wrap my-20">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                                        <span className="text-neutral-500 text-lg">By Admin</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                                        <span className="text-neutral-500 text-lg">1.6k</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                                        <span className="text-neutral-500 text-lg">24</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                    <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                        Read More
                                        <i className="ph ph-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>                        
                        <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                            <div className="course-item__thumb max-h-unset rounded-12 overflow-hidden position-relative">
                                <a href="/blog-details" className="w-100 h-100">
                                    <img src="/assets/images/thumbs/blog-two-img3.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                                </a>
                                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                    <h3 className="mb-0 text-white fw-medium">21</h3>
                                    DEC
                                </div>
                            </div>
                            <div className="pt-32 pb-24 px-16 position-relative">
                                <h4 className="mb-28">
                                    <a href="/blog-details" className="link text-line-2">10 Tips for Successful Online Learning</a>
                                </h4>
                                <div className="flex-align gap-14 flex-wrap my-20">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                                        <span className="text-neutral-500 text-lg">By Admin</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                                        <span className="text-neutral-500 text-lg">1.6k</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                                        <span className="text-neutral-500 text-lg">24</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                    <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                        Read More
                                        <i className="ph ph-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>                        
                        <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                            <div className="course-item__thumb max-h-unset rounded-12 overflow-hidden position-relative">
                                <a href="/blog-details" className="w-100 h-100">
                                    <img src="/assets/images/thumbs/blog-two-img4.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                                </a>
                                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                    <h3 className="mb-0 text-white fw-medium">21</h3>
                                    DEC
                                </div>
                            </div>
                            <div className="pt-32 pb-24 px-16 position-relative">
                                <h4 className="mb-28">
                                    <a href="/blog-details" className="link text-line-2">How to Stay Motivated While Studying from Home</a>
                                </h4>
                                <div className="flex-align gap-14 flex-wrap my-20">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                                        <span className="text-neutral-500 text-lg">By Admin</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                                        <span className="text-neutral-500 text-lg">1.6k</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                                        <span className="text-neutral-500 text-lg">24</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                    <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                        Read More
                                        <i className="ph ph-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>                            
                        <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                            <div className="course-item__thumb max-h-unset rounded-12 overflow-hidden position-relative">
                                <a href="/blog-details" className="w-100 h-100">
                                    <img src="/assets/images/thumbs/blog-two-img5.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                                </a>
                                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                    <h3 className="mb-0 text-white fw-medium">21</h3>
                                    DEC
                                </div>
                            </div>
                            <div className="pt-32 pb-24 px-16 position-relative">
                                <h4 className="mb-28">
                                    <a href="/blog-details" className="link text-line-2">Mastering Python: Beginner to Advanced Tips</a>
                                </h4>
                                <div className="flex-align gap-14 flex-wrap my-20">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                                        <span className="text-neutral-500 text-lg">By Admin</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                                        <span className="text-neutral-500 text-lg">1.6k</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                                        <span className="text-neutral-500 text-lg">24</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                    <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                        Read More
                                        <i className="ph ph-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>                        
                        <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                            <div className="course-item__thumb max-h-unset rounded-12 overflow-hidden position-relative">
                                <a href="/blog-details" className="w-100 h-100">
                                    <img src="/assets/images/thumbs/blog-two-img6.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                                </a>
                                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                    <h3 className="mb-0 text-white fw-medium">21</h3>
                                    DEC
                                </div>
                            </div>
                            <div className="pt-32 pb-24 px-16 position-relative">
                                <h4 className="mb-28">
                                    <a href="/blog-details" className="link text-line-2">Balancing Work and Study: Strategies for Success</a>
                                </h4>
                                <div className="flex-align gap-14 flex-wrap my-20">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                                        <span className="text-neutral-500 text-lg">By Admin</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                                        <span className="text-neutral-500 text-lg">1.6k</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                                        <span className="text-neutral-500 text-lg">24</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                    <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                        Read More
                                        <i className="ph ph-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>                        
                        <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                            <div className="course-item__thumb max-h-unset rounded-12 overflow-hidden position-relative">
                                <a href="/blog-details" className="w-100 h-100">
                                    <img src="/assets/images/thumbs/blog-two-img7.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                                </a>
                                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                    <h3 className="mb-0 text-white fw-medium">21</h3>
                                    DEC
                                </div>
                            </div>
                            <div className="pt-32 pb-24 px-16 position-relative">
                                <h4 className="mb-28">
                                    <a href="/blog-details" className="link text-line-2">The Importance of Lifelong Learning in Today's World</a>
                                </h4>
                                <div className="flex-align gap-14 flex-wrap my-20">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                                        <span className="text-neutral-500 text-lg">By Admin</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                                        <span className="text-neutral-500 text-lg">1.6k</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                                        <span className="text-neutral-500 text-lg">24</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                    <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                        Read More
                                        <i className="ph ph-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>                            
                        <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                            <div className="course-item__thumb max-h-unset rounded-12 overflow-hidden position-relative">
                                <a href="/blog-details" className="w-100 h-100">
                                    <img src="/assets/images/thumbs/blog-two-img8.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                                </a>
                                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                    <h3 className="mb-0 text-white fw-medium">21</h3>
                                    DEC
                                </div>
                            </div>
                            <div className="pt-32 pb-24 px-16 position-relative">
                                <h4 className="mb-28">
                                    <a href="/blog-details" className="link text-line-2">Effective Time Management for Students</a>
                                </h4>
                                <div className="flex-align gap-14 flex-wrap my-20">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                                        <span className="text-neutral-500 text-lg">By Admin</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                                        <span className="text-neutral-500 text-lg">1.6k</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                                        <span className="text-neutral-500 text-lg">24</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                    <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                        Read More
                                        <i className="ph ph-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>                        
                        <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                            <div className="course-item__thumb max-h-unset rounded-12 overflow-hidden position-relative">
                                <a href="/blog-details" className="w-100 h-100">
                                    <img src="/assets/images/thumbs/blog-two-img9.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                                </a>
                                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                    <h3 className="mb-0 text-white fw-medium">21</h3>
                                    DEC
                                </div>
                            </div>
                            <div className="pt-32 pb-24 px-16 position-relative">
                                <h4 className="mb-28">
                                    <a href="/blog-details" className="link text-line-2">The Benefits of Learning a New Language Online</a>
                                </h4>
                                <div className="flex-align gap-14 flex-wrap my-20">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                                        <span className="text-neutral-500 text-lg">By Admin</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                                        <span className="text-neutral-500 text-lg">1.6k</span>
                                    </div>
                                    <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                                        <span className="text-neutral-500 text-lg">24</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                    <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                        Read More
                                        <i className="ph ph-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>                        
                    </div>   
                    <ul className="pagination mt-40 flex-align gap-12 flex-wrap justify-content-center">
                        <li className="page-item">
                            <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#"><i className="ph-bold ph-caret-left"></i></a>
                        </li>
                        <li className="page-item">
                            <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">...</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#"><i className="ph-bold ph-caret-right"></i></a>
                        </li>
                    </ul>        
                </div>

                <div className="col-lg-4">
                    <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25">
                        <h4 className="mb-16">Search</h4> 
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                        <form action="#" className="position-relative">
                            <input type="text" className="common-input rounded-pill py-18 pe-64" placeholder="Search..." />
                            <button type="submit" className="flex-center w-44 h-44 rounded-circle bg-main-600 hover-bg-main-700 text-white text-2xl position-absolute inset-inline-end-0 top-50 translate-middle-y me-8"><i className="ph ph-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25 mt-24">
                        <h4 className="mb-16">Popular Tag</h4> 
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                        <div className="flex-align flex-wrap gap-8">
                            <a href="/blog" className="border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 hover-text-main-600">Machine Learning</a>
                            <a href="/blog" className="border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 hover-text-main-600">Web Development</a>
                            <a href="/blog" className="border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 hover-text-main-600">Python</a>
                            <a href="/blog" className="border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 hover-text-main-600">Laravel</a>
                            <a href="/blog" className="border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 hover-text-main-600">Wordpress</a>
                            <a href="/blog" className="border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 hover-text-main-600">UI/UX Design</a>
                            <a href="/blog" className="border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 hover-text-main-600">AI</a>
                        </div>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                        <a href="/blog" className="h6 mb-0 text-main-600 fw-semibold hover-text-decoration-underline">
                            See All
                            <i className="ph-bold ph-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     </div>
    {/* ================================ Blog Classic Section End =================================== */}
    
    {/* ================================= Certificate Section Start ================================= */}
<div className="certificate">
    <div className="container container--lg">
        <div className="certificate-box px-16 bg-main-600 rounded-16">
            <div className="container">
                <div className="position-relative py-80">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="certificate__content">
                                <div className="flex-align gap-8 mb-16 wow bounceInDown">
                                    <span className="w-8 h-8 bg-white rounded-circle"></span>
                                    <h5 className="text-white mb-0">Get Certificate</h5>
                                </div>
                                <h2 className="text-white mb-40 fw-medium wow bounceIn">Get Quality Skills Certificate From the EduAll</h2>
                                <a href="" className="btn btn-white rounded-pill flex-align d-inline-flex gap-8 hover-bg-main-800 wow bounceInUp">
                                    Get Started Now
                                    <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 d-xl-block d-none">
                            <div className="certificate__thumb" data-aos="fade-up-left">    
                                <img src="/assets/images/thumbs/certificate-img.png" alt="" data-tilt data-tilt-max="8" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-full-page-listening />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
{/* ================================= Certificate Section End ================================= */}
      
      <Footer />
    </>
  );
}
