import React from 'react';

export default function StudentStatsGrid() {
  return (
    <div className="mb-32">
      <div className="d-flex align-items-center gap-16 justify-content-between">
        <h5 className="mb-16 text-white">Dashboard</h5>
        <button type="button" className="toggle-student-dashbord-button text-white text-32 d-xl-none d-block">
          <i className="ph-bold ph-list"></i>
        </button>
      </div>
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="bg-white px-20 py-20 rounded-10">
            <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap mb-16">
              <div>
                <span className="text-14 fw-normal text-neutral-400 mb-4">All Courses</span>
                <h6 className="text-18 fw-semibold mb-0">35</h6>
              </div>
              <div className="w-44 h-44 bg-main-600 rounded-circle text-white text-20 d-flex align-items-center justify-content-center">
                <img src="/assets/images/icons/dashbord-item1.png" alt="" />
              </div>
            </div>
            <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="bg-white px-20 py-20 rounded-10">
            <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap mb-16">
              <div>
                <span className="text-14 fw-normal text-neutral-400 mb-4">Enrolled Courses</span>
                <h6 className="text-18 fw-semibold mb-0">15</h6>
              </div>
              <div className="w-44 h-44 bg-success-600 rounded-circle text-white text-20 d-flex align-items-center justify-content-center">
                <img src="/assets/images/icons/dashbord-item2.png" alt="" />
              </div>
            </div>
            <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="bg-white px-20 py-20 rounded-10">
            <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap mb-16">
              <div>
                <span className="text-14 fw-normal text-neutral-400 mb-4">Active Courses</span>
                <h6 className="text-18 fw-semibold mb-0">11</h6>
              </div>
              <div className="w-44 h-44 bg-warning-600 rounded-circle text-white text-20 d-flex align-items-center justify-content-center">
                <img src="/assets/images/icons/dashbord-item2.png" alt="" />
              </div>
            </div>
            <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="bg-white px-20 py-20 rounded-10">
            <div className="d-flex align-items-center gap-10 justify-content-between flex-wrap mb-16">
              <div>
                <span className="text-14 fw-normal text-neutral-400 mb-4">Completed Courses</span>
                <h6 className="text-18 fw-semibold mb-0">4</h6>
              </div>
              <div className="w-44 h-44 bg-neutral-900 rounded-circle text-white text-20 d-flex align-items-center justify-content-center">
                <img src="/assets/images/icons/dashbord-item4.png" alt="" />
              </div>
            </div>
            <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
          </div>
        </div>
      </div>
    </div>
  );
}
