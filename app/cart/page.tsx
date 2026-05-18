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
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> Cart List</h1>
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
                            <span className="text-main-two-600"> Cart List </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* =============================== Cart Section Start ================================== */}
    <div className="py-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25">
                        <h4 className="mb-0">Cart <span className="text-neutral-100 fw-normal">(4 item)</span> </h4>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>

                        <div className="table-responsive overflow-x-auto">
                            <table className="table min-w-max vertical-middle mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-neutral-500 fw-semibold px-24 py-20 border-0">Product</th>
                                        <th className="text-neutral-500 fw-semibold px-24 py-20 border-0">Price</th>
                                        <th className="text-neutral-500 fw-semibold px-24 py-20 border-0">Quantity</th>
                                        <th className="text-neutral-500 fw-semibold px-24 py-20 border-0">Total Price</th>
                                        <th className="text-neutral-500 fw-semibold px-24 py-20 border-0"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <div className="d-flex align-items-center gap-24">
                                                <div className="w-60 h-60 border border-neutral-40 rounded-8 d-flex justify-content-center align-items-center bg-white">
                                                    <img src="/assets/images/thumbs/cart-img1.png" alt="" />
                                                </div>
                                                <div className="">
                                                    <h6 className="text-md mb-12 text-line-1">Chuck 70 Hi Sneaker</h6>
                                                    <div className="d-flex align-items-center gap-16">
                                                        <div className="d-flex align-items-center gap-4">
                                                            <span className="text-xs text-neutral-500">Size:</span>
                                                            <span className="w-20 h-20 border border-neutral-40 bg-white rounded-4 d-flex justify-content-center align-items-center text-sm text-neutral-500">9</span>
                                                        </div>
                                                        <span className="h-20 border border-neutral-40 border-dashed"></span>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <span className="text-xs text-neutral-500">Color:</span>
                                                            <span className="w-20 h-20 border border-neutral-40 bg-white rounded-4 d-flex justify-content-center align-items-center text-sm text-neutral-500">
                                                                <span className="w-12 h-12 rounded-circle bg-pen"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            $11.70
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <div className="border border-neutral-40 bg-main-50 rounded-pill p-4 max-w-116 w-100 d-flex justify-content-between">
                                                <button type="button" className="quantity__minus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral-40 hover-border-main-600 hover-text-white flex-center">
                                                    <i className="ph-bold ph-minus"></i>
                                                </button>
                                                <input type="text" className="quantity__input flex-grow-1 common-input border-0 bg-transparent text-center text-lg fw-semibold text-neutral-700 p-0" value="1" />
                                                <button type="button" className="quantity__plus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral430 hover-border-main-600 hover-text-white flex-center">
                                                    <i className="ph-bold ph-plus"></i>
                                                </button>
                                            </div>
                                            <span className="text-neutral-100 mt-8 text-xs">Available: 72</span>
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            $66.70
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <button className="delete-btn text-lg hover-text-main-600 transition-2">
                                                <i className="ph ph-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <div className="d-flex align-items-center gap-24">
                                                <div className="w-60 h-60 border border-neutral-40 rounded-8 d-flex justify-content-center align-items-center bg-white">
                                                    <img src="/assets/images/thumbs/cart-img2.png" alt="" />
                                                </div>
                                                <div className="">
                                                    <h6 className="text-md mb-12 text-line-1">Cotu Classic Sneaker</h6>
                                                    <div className="d-flex align-items-center gap-16">
                                                        <div className="d-flex align-items-center gap-4">
                                                            <span className="text-xs text-neutral-500">Size:</span>
                                                            <span className="w-20 h-20 border border-neutral-40 bg-white rounded-4 d-flex justify-content-center align-items-center text-sm text-neutral-500">9</span>
                                                        </div>
                                                        <span className="h-20 border border-neutral-40 border-dashed"></span>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <span className="text-xs text-neutral-500">Color:</span>
                                                            <span className="w-20 h-20 border border-neutral-40 bg-white rounded-4 d-flex justify-content-center align-items-center text-sm text-neutral-500">
                                                                <span className="w-12 h-12 rounded-circle bg-watch"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            $5.22
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <div className="border border-neutral-40 bg-main-50 rounded-pill p-4 max-w-116 w-100 d-flex justify-content-between">
                                                <button type="button" className="quantity__minus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral-40 hover-border-main-600 hover-text-white flex-center">
                                                    <i className="ph-bold ph-minus"></i>
                                                </button>
                                                <input type="text" className="quantity__input flex-grow-1 common-input border-0 bg-transparent text-center text-lg fw-semibold text-neutral-700 p-0" value="1" />
                                                <button type="button" className="quantity__plus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral430 hover-border-main-600 hover-text-white flex-center">
                                                    <i className="ph-bold ph-plus"></i>
                                                </button>
                                            </div>
                                            <span className="text-neutral-100 mt-8 text-xs">Available: 72</span>
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            $32.22
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <button className="delete-btn text-lg hover-text-main-600 transition-2">
                                                <i className="ph ph-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <div className="d-flex align-items-center gap-24">
                                                <div className="w-60 h-60 border border-neutral-40 rounded-8 d-flex justify-content-center align-items-center bg-white">
                                                    <img src="/assets/images/thumbs/cart-img3.png" alt="" />
                                                </div>
                                                <div className="">
                                                    <h6 className="text-md mb-12 text-line-1">Zoom Freak 2</h6>
                                                    <div className="d-flex align-items-center gap-16">
                                                        <div className="d-flex align-items-center gap-4">
                                                            <span className="text-xs text-neutral-500">Size:</span>
                                                            <span className="w-20 h-20 border border-neutral-40 bg-white rounded-4 d-flex justify-content-center align-items-center text-sm text-neutral-500">9</span>
                                                        </div>
                                                        <span className="h-20 border border-neutral-40 border-dashed"></span>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <span className="text-xs text-neutral-500">Color:</span>
                                                            <span className="w-20 h-20 border border-neutral-40 bg-white rounded-4 d-flex justify-content-center align-items-center text-sm text-neutral-500">
                                                                <span className="w-12 h-12 rounded-circle bg-black"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            $6.48
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <div className="border border-neutral-40 bg-main-50 rounded-pill p-4 max-w-116 w-100 d-flex justify-content-between">
                                                <button type="button" className="quantity__minus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral-40 hover-border-main-600 hover-text-white flex-center">
                                                    <i className="ph-bold ph-minus"></i>
                                                </button>
                                                <input type="text" className="quantity__input flex-grow-1 common-input border-0 bg-transparent text-center text-lg fw-semibold text-neutral-700 p-0" value="1" />
                                                <button type="button" className="quantity__plus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral430 hover-border-main-600 hover-text-white flex-center">
                                                    <i className="ph-bold ph-plus"></i>
                                                </button>
                                            </div>
                                            <span className="text-neutral-100 mt-8 text-xs">Available: 72</span>
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            $18.48
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <button className="delete-btn text-lg hover-text-main-600 transition-2">
                                                <i className="ph ph-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <div className="d-flex align-items-center gap-24">
                                                <div className="w-60 h-60 border border-neutral-40 rounded-8 d-flex justify-content-center align-items-center bg-white">
                                                    <img src="/assets/images/thumbs/cart-img4.png" alt="" />
                                                </div>
                                                <div className="">
                                                    <h6 className="text-md mb-12 text-line-1">Classic Sneaker</h6>
                                                    <div className="d-flex align-items-center gap-16">
                                                        <div className="d-flex align-items-center gap-4">
                                                            <span className="text-xs text-neutral-500">Size:</span>
                                                            <span className="w-20 h-20 border border-neutral-40 bg-white rounded-4 d-flex justify-content-center align-items-center text-sm text-neutral-500">9</span>
                                                        </div>
                                                        <span className="h-20 border border-neutral-40 border-dashed"></span>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <span className="text-xs text-neutral-500">Color:</span>
                                                            <span className="w-20 h-20 border border-neutral-40 bg-white rounded-4 d-flex justify-content-center align-items-center text-sm text-neutral-500">
                                                                <span className="w-12 h-12 rounded-circle bg-table"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            $17.84
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <div className="border border-neutral-40 bg-main-50 rounded-pill p-4 max-w-116 w-100 d-flex justify-content-between">
                                                <button type="button" className="quantity__minus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral-40 hover-border-main-600 hover-text-white flex-center">
                                                    <i className="ph-bold ph-minus"></i>
                                                </button>
                                                <input type="text" className="quantity__input flex-grow-1 common-input border-0 bg-transparent text-center text-lg fw-semibold text-neutral-700 p-0" value="1" />
                                                <button type="button" className="quantity__plus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral430 hover-border-main-600 hover-text-white flex-center">
                                                    <i className="ph-bold ph-plus"></i>
                                                </button>
                                            </div>
                                            <span className="text-neutral-100 mt-8 text-xs">Available: 72</span>
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            $96.84
                                        </td>
                                        <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                                            <button className="delete-btn text-lg hover-text-main-600 transition-2">
                                                <i className="ph ph-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                 
                                </tbody>
                            </table>
                            <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold mt-24" tabIndex={0}>
                                <i className="ph ph-arrow-left"></i>
                                Continue Shopping
                            </a>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4">
                    <div className="border border-neutral-30 rounded-12 bg-main-25 p-24 bg-main-25">
                        <span className="text-neutral-700 text-lg mb-12">Price</span>
                        <div className="flex-align align-items-start flex-wrap gap-8">
                            <div className="flex-align gap-12 text-neutral-700">
                                <span className="text-2xl d-flex"><i className="ph-bold ph-tag"></i></span>
                                <span className="">From</span>
                                <h2 className="mb-0">$99.99</h2>
                            </div>
                            <button type="button" className="text-neutral-500 text-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Initial Price">
                                <i className="ph-bold ph-info"></i>
                            </button>
                        </div>

                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                        
                        <div className="d-flex flex-column gap-24">
                            <div className="d-flex align-items-center justify-content-between gap-4">
                                <span className="text-neutral-500">Base Price</span>
                                <span className="text-neutral-700 fw-medium">$39.99</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-4">
                                <span className="text-neutral-500">State Tax</span>
                                <span className="text-neutral-700 fw-medium">$5</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-4">
                                <span className="text-neutral-500">Shipping</span>
                                <span className="text-neutral-700 fw-medium">Free</span>
                            </div>
                        </div>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>

                        <form action="#" className="my-24 position-relative">
                            <input type="email" className="form-control bg-white shadow-none border border-neutral-30 rounded-pill h-48 ps-24 pe-44 focus-border-main-600" placeholder="DISCOUNT9" />
                            <button type="submit" className="w-36 h-36 flex-center rounded-circle bg-main-600 text-white hover-bg-main-800 position-absolute top-50 translate-middle-y inset-inline-end-0 me-8">
                                <i className="ph ph-arrow-right"></i>
                            </button>
                        </form>

                        <div className="d-flex align-items-center justify-content-between gap-4">
                            <span className="text-neutral-500">Discount</span>
                            <span className="text-main-two-600 fw-medium">-$9</span>
                        </div>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                        <div className="d-flex align-items-center justify-content-between gap-4">
                            <span className="text-neutral-500">Total</span>
                            <span className="text-main-600 fw-medium">$35.99</span>
                        </div>
                        <span className="d-block border border-neutral-30 mt-24 border-dashed"></span>
                        <a href="/checkout" className="btn btn-main rounded-pill w-100 mt-40">
                            Check Out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* =============================== Cart Section End ================================== */}
      
      <Footer />
    </>
  );
}
