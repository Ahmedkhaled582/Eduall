import React from 'react';

export default function AdminProfileSection() {
  return (
    <>
      {/* =========my profile start=========== */}
      <div className="px-24 py-24">
        <div className="bg-white rounded-10 px-24 py-24">
          <div className="d-flex align-items-center gap-16 justify-content-between mb-20">
            <span className="fw-medium text-16 text-neutral-500">My Profile</span>
            <div className="d-flex align-items-center gap-8">
              <span className="text-20">
                <i className="ph-bold ph-download-simple"></i>
              </span>
              <span className="text-20">
                <i className="ph ph-printer"></i>
              </span>
            </div>
          </div>
          <div className="d-flex flex-wrap">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-16 justify-content-between border-neutral-30 border-top border-bottom px-20 py-26 line-height-105 border-end flex-wrap text-end">
                <span className="text-14 fw-normal text-neutral-600">First Name</span>
                <span className="text-14 fw-normal text-neutral-600">Cameron</span>
              </div>
              <div className="d-flex align-items-center gap-16 justify-content-between border-neutral-30 border-bottom px-20 py-26 line-height-105 border-end flex-wrap text-end">
                <span className="text-14 fw-normal text-neutral-600">Last Name</span>
                <span className="text-14 fw-normal text-neutral-600">Williamson</span>
              </div>
              <div className="d-flex align-items-center gap-16 justify-content-between border-neutral-30 border-bottom px-20 py-26 line-height-105 border-end flex-wrap text-end">
                <span className="text-14 fw-normal text-neutral-600">Username</span>
                <span className="text-14 fw-normal text-neutral-600">@Williamson458</span>
              </div>
              <div className="d-flex align-items-center gap-16 justify-content-between border-neutral-30 border-bottom px-20 py-26 line-height-105 border-end flex-wrap text-end">
                <span className="text-14 fw-normal text-neutral-600">Email</span>
                <span className="text-14 fw-normal text-neutral-600">demo@gmail.com</span>
              </div>
              <div className="d-flex align-items-center gap-16 justify-content-between border-neutral-30 border-bottom px-20 py-26 line-height-105 border-end flex-wrap text-end">
                <span className="text-14 fw-normal text-neutral-600">Phone Number</span>
                <span className="text-14 fw-normal text-neutral-600">(808) 555-0111</span>
              </div>
            </div>

            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-16 justify-content-between border-neutral-30 border-top border-bottom px-20 py-26 line-height-105 flex-wrap text-end">
                <span className="text-14 fw-normal text-neutral-600">Registration Date</span>
                <span className="text-14 fw-normal text-neutral-600">June 05, 2025 9:25 PM</span>
              </div>
              <div className="d-flex align-items-center gap-16 justify-content-between border-neutral-30 border-bottom px-20 py-26 line-height-105 flex-wrap text-end">
                <span className="text-14 fw-normal text-neutral-600">Skill/Occupation</span>
                <span className="text-14 fw-normal text-neutral-600">UI/UX Design</span>
              </div>
              <div className="d-flex align-items-center gap-16 justify-content-between border-neutral-30 border-bottom px-20 py-26 line-height-105 flex-wrap text-end">
                <span className="text-14 fw-normal text-neutral-600">Address</span>
                <span className="text-14 fw-normal text-neutral-600">2464 Royal Ln. Mesa, New Jersey 45463</span>
              </div>
              <div className="d-flex gap-16 justify-content-between border-neutral-30 border-bottom px-20 py-24 line-height-105 flex-wrap text-end">
                <span className="text-14 fw-normal text-neutral-600">Biography</span>
                <span className="text-14 fw-normal text-neutral-600 max-w-344-px pb-40">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============my profile end========== */}
    </>
  );
}
