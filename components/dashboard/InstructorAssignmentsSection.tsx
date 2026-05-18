import React from 'react';

export default function InstructorAssignmentsSection() {
  return (
    <div className="w-100 animate-fade-in">
      {/* ============Feedbacks start============ */}
      <div className="px-24 py-24 bg-white rounded-10">
        <div className="d-flex align-items-center gap-8 justify-content-between mb-24">
          <h6 className="mb-0 fw-medium">Announcements</h6>
          <button type="button" className="toggle-student-dashbord-button text-neutral-900 text-24 d-xl-none d-block">
            <i className="ph-bold ph-list"></i>
          </button>
        </div>

        <div className="row gy-4 mb-24">
          <div className="col-lg-4 col-md-2">
            <div>
              <span className="fw-normal text-14 text-neutral-500 mb-12 d-block">Courses</span>
              <select className="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal text-neutral-700 line-height-105">
                <option value="1">All</option>
                <option value="2">Everyone</option>
                <option value="3">One</option>  
                <option value="4">Two</option>  
              </select>
            </div>
          </div>

          <div className="col-lg-4 col-md-2">
            <div>
              <span className="fw-normal text-14 text-neutral-500 mb-12 d-block">Sort By :</span>
              <select className="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal text-neutral-700 line-height-105">
                <option value="1">Default</option>
                <option value="2">date</option>
                <option value="3">Category</option>
                <option value="4">Rating</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4 col-md-2">
            <div>
              <span className="fw-normal text-14 text-neutral-500 mb-12 d-block">Sort By Offer :</span>
              <select className="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal text-neutral-700 line-height-105">
                <option value="1">Free</option>
                <option value="2">Basic</option>
                <option value="3">Standard</option>
                <option value="4">Premium</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="">
            <table id="example-five" className="display min-w-max w-100 overflow-x-auto">
              <thead>
                <tr className="bg-main-25">
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Assignment Name</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Course Name</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Total Marks</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Total Submit</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Notating Scales and Piano Keys (Treble)", course: "Excel for Beginners", marks: "36", submissions: "4" },
                  { name: "Treble Clef Intervals - 4ths and 5ths", course: "Introduction to Python Programming", marks: "37", submissions: "4" },
                  { name: "Duple Rhythm Counting", course: "Photography Basics", marks: "35", submissions: "9" },
                  { name: "Missing the Major Scales (Flats)", course: "Entrepreneurship 101", marks: "41", submissions: "6" },
                  { name: "Half Step Highlights", course: "Leadership and Management Essentials", marks: "43", submissions: "4" },
                  { name: "Arpeggio Activity (Treble)", course: "Creative Writing Workshop", marks: "39", submissions: "4" },
                  { name: "Piano Keys and Notes on the Staff", course: "Digital Marketing 101", marks: "44", submissions: "2" },
                  { name: "Correct Rhythms", course: "Adobe Photoshop Essentials", marks: "45", submissions: "6" },
                  { name: "Missing the Major Scales 2 (Sharps)", course: "Introduction to Python", marks: "34", submissions: "2" },
                  { name: "Short Composition", course: "Public Speaking Mastery", marks: "42", submissions: "9" },
                  { name: "Match the Key Signature", course: "Web Development Bootcamp", marks: "38", submissions: "1" }
                ].map((assignment, idx) => (
                  <tr key={idx} className="hover-bg-neutral-20 transition-03">
                    <td className="py-28 px-20 shadow-none">
                      <span className="fw-normal text-14 text-neutral-500">{assignment.name}</span>
                    </td>
                    <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">{assignment.course}</td>
                    <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">{assignment.marks}</td>
                    <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">{assignment.submissions}</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12">
                        <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                          <i className="ph ph-pencil-simple-line"></i>
                        </button>
                        <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                          <i className="ph ph-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="d-flex align-items-center gap-24 justify-content-between flex-wrap">
          <div className="form-check form-switch d-flex align-items-center gap-8">
            <input className="form-check-input focus-box-shadow w-60 h-32" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label text-14 fw-normal text-neutral-500" htmlFor="flexSwitchCheckDefault">Dense</label>
          </div>
          <div className="d-flex align-items-center gap-40 flex-wrap">
            <div className="d-flex align-items-center gap-16">
              <span className="fw-normal text-14 text-neutral-500">Rows per page:</span>
              <select className="form-select w-auto pe-32 text-14 fw-normal text-neutral-500 bg-transparent border-0">
                <option value="1">12</option>
                <option value="1">13</option>
                <option value="1">11</option>
                <option value="1">15</option>
              </select>
            </div>

            <div className="d-flex align-items-center gap-16">
              <span className="fw-normal text-14 text-neutral-500">1-12 of 100</span>
              <div className="d-flex align-items-center gpa-8">
                <span className="text-20 text-neutral-500">
                  <i className="ph-bold ph-caret-left"></i>
                </span>
                <span className="text-20 text-neutral-500">
                  <i className="ph-bold ph-caret-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============Feedbacks end============ */}
    </div>
  );
}
