import React from 'react';

export default function TutorSidebar() {
  return (
    <div className="sidebar rounded-12 bg-white p-32 box-shadow-md">
      <form action="#">
        <div className="flex-between mb-24">
          <h4 className="mb-0">Filter</h4>
          <button type="button" className="sidebar-close text-xl text-neutral-500 d-lg-none hover-text-main-600">
            <i className="ph-bold ph-x"></i>
          </button>
        </div>

        <div className="position-relative">
          <input type="text" className="common-input pe-48 rounded-pill bg-main-25" placeholder="Enter Your Email..." />
          <button type="submit" className="text-neutral-500 text-xl d-flex position-absolute top-50 translate-middle-y inset-inline-end-0 me-24 hover-text-main-600">
            <i className="ph-bold ph-magnifying-glass"></i>
          </button>
        </div>
        <span className="d-block border border-neutral-30 border-dashed my-24"></span>

        <div className="d-flex flex-column gap-32">
          <div className="">
            <h6 className="text-lg mb-24 fw-semibold">Tutor Type</h6>
            <div className="d-flex flex-column gap-16">
              <div className="form-check common-check mb-0">
                <input className="form-check-input bg-main-25" type="checkbox" name="tutorType" id="AllTutors" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="AllTutors">All Tutors</label>
              </div>
              <div className="form-check common-check mb-0">
                <input className="form-check-input bg-main-25" type="checkbox" name="tutorType" id="Premiums" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Premiums">Premiums</label>
              </div>
            </div>
          </div>
          <div className="">
            <h6 className="text-lg mb-24 fw-semibold">Gender</h6>
            <div className="d-flex flex-column gap-16">
              <div className="form-check common-check mb-0">
                <input className="form-check-input bg-main-25" type="checkbox" name="tutorType" id="Male" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Male">Male</label>
              </div>
              <div className="form-check common-check mb-0">
                <input className="form-check-input bg-main-25" type="checkbox" name="tutorType" id="Female" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Female">Female</label>
              </div>
            </div>
          </div>
          <div className="">
            <h6 className="text-lg mb-24 fw-semibold">Tuition Type</h6>
            <div className="d-flex flex-column gap-16">
              <div className="form-check common-check mb-0">
                <input className="form-check-input bg-main-25" type="checkbox" name="tutorType" id="Home" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Home">Home</label>
              </div>
              <div className="form-check common-check mb-0">
                <input className="form-check-input bg-main-25" type="checkbox" name="tutorType" id="Online" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Online">Online</label>
              </div>
              <div className="form-check common-check mb-0">
                <input className="form-check-input bg-main-25" type="checkbox" name="tutorType" id="Package" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Package">Package</label>
              </div>
              <div className="form-check common-check mb-0">
                <input className="form-check-input bg-main-25" type="checkbox" name="tutorType" id="Group" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Group">Group</label>
              </div>
              <div className="form-check common-check mb-0">
                <input className="form-check-input bg-main-25" type="checkbox" name="tutorType" id="School" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="School">School</label>
              </div>
              <div className="form-check common-check mb-0">
                <input className="form-check-input bg-main-25" type="checkbox" name="tutorType" id="Collage" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Collage">Collage</label>
              </div>
            </div>
          </div>
          <div className="">
            <h6 className="text-lg mb-20 fw-medium">Pricing scale</h6>
            <div className="custom--range">
              <div id="slider-range"></div>
              <div className="custom--range__content">
                <input type="text" className="custom--range__prices text-neutral-600 text-start text-md fw-medium w-100 text-center bg-transparent border-0 outline-0" id="amount" readOnly />
              </div>
            </div>
          </div>
          <div className="">
            <h6 className="text-lg mb-20 fw-medium">Star Category</h6>
            <div className="d-flex flex-column gap-16">
              <div className="flex-between gap-16">
                <div className="form-check common-check mb-0">
                  <input className="form-check-input" type="checkbox" name="categories" id="star5" />
                  <label className="form-check-label fw-normal flex-grow-1 flex-align gap-8" htmlFor="star5">
                    <span className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></span>
                    5 Star
                  </label>
                </div>
                <span className="text-neutral-500">122</span>
              </div>
              <div className="flex-between gap-16">
                <div className="form-check common-check mb-0">
                  <input className="form-check-input" type="checkbox" name="categories" id="star4" />
                  <label className="form-check-label fw-normal flex-grow-1 flex-align gap-8" htmlFor="star4">
                    <span className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></span>
                    4 Star
                  </label>
                </div>
                <span className="text-neutral-500">356</span>
              </div>
              <div className="flex-between gap-16">
                <div className="form-check common-check mb-0">
                  <input className="form-check-input" type="checkbox" name="categories" id="star3" />
                  <label className="form-check-label fw-normal flex-grow-1 flex-align gap-8" htmlFor="star3">
                    <span className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></span>
                    3 Star
                  </label>
                </div>
                <span className="text-neutral-500">356</span>
              </div>
              <div className="flex-between gap-16">
                <div className="form-check common-check mb-0">
                  <input className="form-check-input" type="checkbox" name="categories" id="star2" />
                  <label className="form-check-label fw-normal flex-grow-1 flex-align gap-8" htmlFor="star2">
                    <span className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></span>
                    2 Star
                  </label>
                </div>
                <span className="text-neutral-500">213</span>
              </div>
              <div className="flex-between gap-16">
                <div className="form-check common-check mb-0">
                  <input className="form-check-input" type="checkbox" name="categories" id="star1s" />
                  <label className="form-check-label fw-normal flex-grow-1 flex-align gap-8" htmlFor="star1s">
                    <span className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></span>
                    1 Star
                  </label>
                </div>
                <span className="text-neutral-500">10</span>
              </div>
            </div>
          </div>
          <div className="">
            <h6 className="text-lg mb-20 fw-medium">Location</h6>
            <input type="text" className="common-input border-transparent rounded-pill focus-border-main-600 bg-main-25" placeholder="Enter location..." />
          </div>
          <div className="">
            <h6 className="text-lg mb-20 fw-medium">Select Country</h6>
            <select className="common-input form-select border-transparent rounded-pill focus-border-main-600 bg-main-25">
              <option value="1">Bangladesh</option>
              <option value="1">Pakistan</option>
              <option value="1">England</option>
              <option value="1">Australia</option>
              <option value="1">Indoneshia</option>
            </select>
          </div>
          <div className="">
            <h6 className="text-lg mb-20 fw-medium">Select Language</h6>
            <select className="common-input form-select border-transparent rounded-pill focus-border-main-600 bg-main-25">
              <option value="1">Bangla</option>
              <option value="1">English</option>
              <option value="1">Hindi</option>
              <option value="1">Urdhu</option>
            </select>
          </div>
          <div className="">
            <h6 className="text-lg mb-20 fw-medium">Select Department </h6>
            <select className="common-input form-select border-transparent rounded-pill focus-border-main-600 bg-main-25">
              <option value="1">English</option>
              <option value="1">Bangla</option>
              <option value="1">Economics</option>
              <option value="1">Management</option>
            </select>
          </div>
          <div className="">
            <h6 className="text-lg mb-20 fw-medium">Select Subject</h6>
            <select className="common-input form-select border-transparent rounded-pill focus-border-main-600 bg-main-25">
              <option value="1">English</option>
              <option value="1">Bangla</option>
              <option value="1">Economics</option>
              <option value="1">Management</option>
            </select>
          </div>
        </div>

        <span className="d-block border border-neutral-30 border-dashed my-32"></span>
        <button type="reset" className="btn btn-outline-main rounded-pill flex-center gap-16 fw-semibold w-100">
          <i className="ph-bold ph-arrow-clockwise d-flex text-lg"></i>
          Reset Filters
        </button>
      </form>
    </div>
  );
}
