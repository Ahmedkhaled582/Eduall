import React from 'react';

export default function AdminFooter() {
  return (
    <>
      {/* =========message profile footer start============== */}
      <div className="bg-neutral-20 border-neutral-40 border-top px-24 py-16 mt-auto">
        <div className="d-flex align-items-center gap-24 justify-content-between flex-wrap">
          <p className="fw-medium text-14 text-neutral-500 mb-0">
            Copyright ©2025{' '}
            <a href="/admin-dashbord" className="text-main-600 fw-medium">EduAll</a>.
            All Rights Reserved
          </p>
          <div className="d-flex align-items-center gap-24">
            <a href="#" className="fw-medium text-14 text-neutral-500 hover-text-main-600">Privacy policy</a>
            <a href="#" className="fw-medium text-14 text-neutral-500 hover-text-main-600">Privacy policy</a>
          </div>
        </div>
      </div>
      {/* =========message profile footer end============== */}
    </>
  );
}
