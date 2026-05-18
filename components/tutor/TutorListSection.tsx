import React from 'react';

export default function TutorListSection() {
  return (
    <>
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
        <div className="col-sm-6">
          <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative">
              <a href="/tutor-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/instructor-img1.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="pt-32 pb-24 px-16 position-relative">
              <div className="">
                <h4 className="mb-16">
                  <a href="/tutor-details" className="link text-line-2">Ronald Richards</a>
                </h4>
                <div className="flex-between gap-8 flex-wrap">
                  <div className="flex-align gap-12">
                    <span className="text-2xl text-main-600 d-flex"><i className="ph-bold ph-graduation-cap"></i></span>
                    <span className="">Global University</span>
                  </div>
                  <div className="flex-align gap-4">
                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                    <span className="text-lg text-neutral-700">
                      4.7
                      <span className="text-neutral-100">(6.4k)</span>
                    </span>
                  </div>
                </div>
                <div className="mt-24 flex-between gap-16 flex-wrap">
                  <h4 className="mb-0 text-main-two-600">
                    $155 <span className="text-inherit text-neutral-200 fw-normal">per/hr</span> 
                  </h4>
                  <div className="flex-align gap-8 py-10 px-14 border border-main-100 rounded-8 bg-main-25">
                    <span className="text-xl d-flex text-main-600"><i className="ph-bold ph-map-pin"></i></span>
                    <span className="text-sm fw-medium text-neutral-500">New York</span>
                  </div>
                </div>
              </div>
              <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-24 border-dashed border-0">
                <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                  Apply Now
                  <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative">
              <a href="/tutor-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/instructor-img2.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="pt-32 pb-24 px-16 position-relative">
              <div className="">
                <h4 className="mb-16">
                  <a href="/tutor-details" className="link text-line-2">Jacob Jones</a>
                </h4>
                <div className="flex-between gap-8 flex-wrap">
                  <div className="flex-align gap-12">
                    <span className="text-2xl text-main-600 d-flex"><i className="ph-bold ph-graduation-cap"></i></span>
                    <span className="">LKS University</span>
                  </div>
                  <div className="flex-align gap-4">
                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                    <span className="text-lg text-neutral-700">
                      4.7
                      <span className="text-neutral-100">(6.4k)</span>
                    </span>
                  </div>
                </div>
                <div className="mt-24 flex-between gap-16 flex-wrap">
                  <h4 className="mb-0 text-main-two-600">
                    $155 <span className="text-inherit text-neutral-200 fw-normal">per/hr</span> 
                  </h4>
                  <div className="flex-align gap-8 py-10 px-14 border border-main-100 rounded-8 bg-main-25">
                    <span className="text-xl d-flex text-main-600"><i className="ph-bold ph-map-pin"></i></span>
                    <span className="text-sm fw-medium text-neutral-500">Phoenix</span>
                  </div>
                </div>
              </div>
              <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-24 border-dashed border-0">
                <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                  Apply Now
                  <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative">
              <a href="/tutor-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/instructor-img3.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="pt-32 pb-24 px-16 position-relative">
              <div className="">
                <h4 className="mb-16">
                  <a href="/tutor-details" className="link text-line-2">Darlene Robertson</a>
                </h4>
                <div className="flex-between gap-8 flex-wrap">
                  <div className="flex-align gap-12">
                    <span className="text-2xl text-main-600 d-flex"><i className="ph-bold ph-graduation-cap"></i></span>
                    <span className="">Notware</span>
                  </div>
                  <div className="flex-align gap-4">
                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                    <span className="text-lg text-neutral-700">
                      4.7
                      <span className="text-neutral-100">(6.4k)</span>
                    </span>
                  </div>
                </div>
                <div className="mt-24 flex-between gap-16 flex-wrap">
                  <h4 className="mb-0 text-main-two-600">
                    $155 <span className="text-inherit text-neutral-200 fw-normal">per/hr</span> 
                  </h4>
                  <div className="flex-align gap-8 py-10 px-14 border border-main-100 rounded-8 bg-main-25">
                    <span className="text-xl d-flex text-main-600"><i className="ph-bold ph-map-pin"></i></span>
                    <span className="text-sm fw-medium text-neutral-500">Chicago</span>
                  </div>
                </div>
              </div>
              <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-24 border-dashed border-0">
                <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                  Apply Now
                  <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative">
              <a href="/tutor-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/instructor-img4.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="pt-32 pb-24 px-16 position-relative">
              <div className="">
                <h4 className="mb-16">
                  <a href="/tutor-details" className="link text-line-2">Esther Howard</a>
                </h4>
                <div className="flex-between gap-8 flex-wrap">
                  <div className="flex-align gap-12">
                    <span className="text-2xl text-main-600 d-flex"><i className="ph-bold ph-graduation-cap"></i></span>
                    <span className="">Global University</span>
                  </div>
                  <div className="flex-align gap-4">
                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                    <span className="text-lg text-neutral-700">
                      4.7
                      <span className="text-neutral-100">(6.4k)</span>
                    </span>
                  </div>
                </div>
                <div className="mt-24 flex-between gap-16 flex-wrap">
                  <h4 className="mb-0 text-main-two-600">
                    $155 <span className="text-inherit text-neutral-200 fw-normal">per/hr</span> 
                  </h4>
                  <div className="flex-align gap-8 py-10 px-14 border border-main-100 rounded-8 bg-main-25">
                    <span className="text-xl d-flex text-main-600"><i className="ph-bold ph-map-pin"></i></span>
                    <span className="text-sm fw-medium text-neutral-500">Phoenix</span>
                  </div>
                </div>
              </div>
              <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-24 border-dashed border-0">
                <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                  Apply Now
                  <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative">
              <a href="/tutor-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/instructor-img5.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="pt-32 pb-24 px-16 position-relative">
              <div className="">
                <h4 className="mb-16">
                  <a href="/tutor-details" className="link text-line-2">Wade Warren</a>
                </h4>
                <div className="flex-between gap-8 flex-wrap">
                  <div className="flex-align gap-12">
                    <span className="text-2xl text-main-600 d-flex"><i className="ph-bold ph-graduation-cap"></i></span>
                    <span className="">GFC University</span>
                  </div>
                  <div className="flex-align gap-4">
                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                    <span className="text-lg text-neutral-700">
                      4.7
                      <span className="text-neutral-100">(6.4k)</span>
                    </span>
                  </div>
                </div>
                <div className="mt-24 flex-between gap-16 flex-wrap">
                  <h4 className="mb-0 text-main-two-600">
                    $155 <span className="text-inherit text-neutral-200 fw-normal">per/hr</span> 
                  </h4>
                  <div className="flex-align gap-8 py-10 px-14 border border-main-100 rounded-8 bg-main-25">
                    <span className="text-xl d-flex text-main-600"><i className="ph-bold ph-map-pin"></i></span>
                    <span className="text-sm fw-medium text-neutral-500">Phoenix</span>
                  </div>
                </div>
              </div>
              <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-24 border-dashed border-0">
                <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                  Apply Now
                  <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative">
              <a href="/tutor-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/instructor-img6.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="pt-32 pb-24 px-16 position-relative">
              <div className="">
                <h4 className="mb-16">
                  <a href="/tutor-details" className="link text-line-2">Dianne Russell</a>
                </h4>
                <div className="flex-between gap-8 flex-wrap">
                  <div className="flex-align gap-12">
                    <span className="text-2xl text-main-600 d-flex"><i className="ph-bold ph-graduation-cap"></i></span>
                    <span className="">GFC University</span>
                  </div>
                  <div className="flex-align gap-4">
                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                    <span className="text-lg text-neutral-700">
                      4.7
                      <span className="text-neutral-100">(6.4k)</span>
                    </span>
                  </div>
                </div>
                <div className="mt-24 flex-between gap-16 flex-wrap">
                  <h4 className="mb-0 text-main-two-600">
                    $155 <span className="text-inherit text-neutral-200 fw-normal">per/hr</span> 
                  </h4>
                  <div className="flex-align gap-8 py-10 px-14 border border-main-100 rounded-8 bg-main-25">
                    <span className="text-xl d-flex text-main-600"><i className="ph-bold ph-map-pin"></i></span>
                    <span className="text-sm fw-medium text-neutral-500">Phoenix</span>
                  </div>
                </div>
              </div>
              <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-24 border-dashed border-0">
                <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                  Apply Now
                  <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="pagination mt-40 flex-align gap-12 flex-wrap justify-content-center">
        <li className="page-item">
          <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">
            <i className="ph-bold ph-caret-left"></i>
          </a>
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
          <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">
            <i className="ph-bold ph-caret-right"></i>
          </a>
        </li>
      </ul>
    </>
  );
}
