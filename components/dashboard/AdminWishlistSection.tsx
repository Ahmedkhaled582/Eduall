import React from 'react';

export default function AdminWishlistSection() {
  return (
    <>
      {/* =========message profile start=========== */}
      <div className="px-24 py-24">
        <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap mb-24">
          <h4 className="text-neutral-500 fw-semibold">Wishlist</h4>
          <div>
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/course-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                    <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                      <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                      <span className="text-lg fw-medium">9h 36m</span>
                    </div>
                    <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
                      <i className="ph-fill ph-heart-straight"></i>
                    </button>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Digital Marketing</a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap">
                        <div className="flex-align gap-4">
                          <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                          <span className="text-lg text-neutral-700">
                            4.7
                            <span className="text-neutral-100">(6.4k)</span>
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <img src="/assets/images/thumbs/dashbord-wishlist-img1.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">Robert</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <h4 className="mb-0 text-main-two-600">$159</h4>
                      <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold">
                        Enroll Now
                        <i className="ph ph-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/course-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                    <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                      <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                      <span className="text-lg fw-medium">25h 06m</span>
                    </div>
                    <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
                      <i className="ph-fill ph-heart-straight"></i>
                    </button>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Python Programming</a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap">
                        <div className="flex-align gap-4">
                          <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                          <span className="text-lg text-neutral-700">
                            4.7
                            <span className="text-neutral-100">(6.4k)</span>
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <img src="/assets/images/thumbs/dashbord-wishlist-img1.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">Robert</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <h4 className="mb-0 text-main-two-600">$499</h4>
                      <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold">
                        Enroll Now
                        <i className="ph ph-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                    <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                      <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                      <span className="text-lg fw-medium">9h 36m</span>
                    </div>
                    <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
                      <i className="ph-fill ph-heart-straight"></i>
                    </button>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Photography Masterclass</a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap">
                        <div className="flex-align gap-4">
                          <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                          <span className="text-lg text-neutral-700">
                            4.7
                            <span className="text-neutral-100">(6.4k)</span>
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <img src="/assets/images/thumbs/dashbord-wishlist-img1.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">Robert</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <h4 className="mb-0 text-main-two-600">$457</h4>
                      <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold">
                        Enroll Now
                        <i className="ph ph-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="900">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/course-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                    <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                      <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                      <span className="text-lg fw-medium">9h 36m</span>
                    </div>
                    <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
                      <i className="ph-fill ph-heart-straight"></i>
                    </button>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Spanish Language Mastery: Beginner to Fluent</a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap">
                        <div className="flex-align gap-4">
                          <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                          <span className="text-lg text-neutral-700">
                            4.7
                            <span className="text-neutral-100">(6.4k)</span>
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <img src="/assets/images/thumbs/dashbord-wishlist-img1.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">Robert</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <h4 className="mb-0 text-main-two-600">$148</h4>
                      <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold">
                        Enroll Now
                        <i className="ph ph-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/course-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                    <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                      <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                      <span className="text-lg fw-medium">9h 36m</span>
                    </div>
                    <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
                      <i className="ph-fill ph-heart-straight"></i>
                    </button>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Financial Planning for Millennials</a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap">
                        <div className="flex-align gap-4">
                          <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                          <span className="text-lg text-neutral-700">
                            4.7
                            <span className="text-neutral-100">(6.4k)</span>
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <img src="/assets/images/thumbs/dashbord-wishlist-img1.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">Robert</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <h4 className="mb-0 text-main-two-600">$546</h4>
                      <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold">
                        Enroll Now
                        <i className="ph ph-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/course-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                    <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                      <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                      <span className="text-lg fw-medium">9h 36m</span>
                    </div>
                    <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
                      <i className="ph-fill ph-heart-straight"></i>
                    </button>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Nutrition Essentials for Healthy Living</a>
                      </h4>
                      <div className="flex-between gap-8 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                          <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                        </div>
                      </div>
                      <div className="flex-between gap-8 flex-wrap">
                        <div className="flex-align gap-4">
                          <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                          <span className="text-lg text-neutral-700">
                            4.7
                            <span className="text-neutral-100">(6.4k)</span>
                          </span>
                        </div>
                        <div className="flex-align gap-8">
                          <span className="text-neutral-700 text-2xl d-flex">
                            <img src="/assets/images/thumbs/dashbord-wishlist-img1.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                          </span>
                          <span className="text-neutral-700 text-lg fw-medium">Robert</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                      <h4 className="mb-0 text-main-two-600">$345</h4>
                      <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold">
                        Enroll Now
                        <i className="ph ph-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mb-24 mt-24">
          <ul className="d-flex align-items-center gap-12 text-center align-items-center justify-content-center">
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              <i className="ph-bold ph-caret-left"></i>
            </li>
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              1
            </li>
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              2
            </li>
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              3
            </li>
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              <i className="ph-bold ph-dots-three"></i>
            </li>
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              <i className="ph-bold ph-caret-right"></i>
            </li>
          </ul>
        </div>
      </div>
      {/* ============message profile end========== */}
    </>
  );
}
