import React from 'react';

export default function StudentAssignmentSection() {
  return (
    <div className="w-100 overflow-y-auto">
      <div className="px-24 py-24 bg-white rounded-10">
        <div className="">
          <div className="d-flex align-items-center gap-16 justify-content-between mb-24">
            <h6 className="mb-0">My Quiz Attempts</h6>
            <button type="button" className="toggle-student-dashbord-button text-neutral-900 text-32 d-xl-none d-block">
              <i className="ph-bold ph-list"></i>
            </button>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-2">
              <div className="">
                <span className="fw-normal text-14 text-neutral-500 mb-12">Courses</span>
                <select className="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal text-neutral-700 line-height-105">
                  <option value="1">All</option>
                  <option value="2">Everyone</option>
                  <option value="3">One</option>  
                  <option value="4">Two</option>  
                </select>
              </div>
            </div>

            <div className="col-lg-4 col-md-2">
              <div className="">
                <span className="fw-normal text-14 text-neutral-500 mb-12">Sort By :</span>
                <select className="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal text-neutral-700 line-height-105">
                  <option value="1">Default</option>
                  <option value="2">date</option>
                  <option value="3">Category</option>
                  <option value="4">Rating</option>
                </select>
              </div>
            </div>

            <div className="col-lg-4 col-md-2">
              <div className="">
                <span className="fw-normal text-14 text-neutral-500 mb-12">Sort By Offer :</span>
                <select className="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal text-neutral-700 line-height-105">
                  <option value="1">Free</option>
                  <option value="2">Basic</option>
                  <option value="3">Standard</option>
                  <option value="4">Premium</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-24">
          <div className="">
            <table id="example-five" className="display min-w-max w-100">
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
                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Notating Scales and Piano Keys (Treble)
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Excel for Beginners</td>
                  <td className="py-28 px-20 shadow-none line-height-105">36</td>
                  <td className="py-28 px-20 shadow-none line-height-105">4</td>
                  <td className="py-28 px-20 shadow-none line-height-105">
                    <div className="d-flex align-items-center gap-12 justify-content-end">
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-download-simple"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Treble Clef Intervals - 4ths and 5ths
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Introduction to Python Programming</td>
                  <td className="py-28 px-20 shadow-none line-height-105">37</td>
                  <td className="py-28 px-20 shadow-none line-height-105">4</td>
                  <td className="py-28 px-20 shadow-none line-height-105">
                    <div className="d-flex align-items-center gap-12 justify-content-end">
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-download-simple"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Duple Rhythm Counting
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Photography Basics</td>
                  <td className="py-28 px-20 shadow-none line-height-105">35</td>
                  <td className="py-28 px-20 shadow-none line-height-105">4</td>
                  <td className="py-22 shadow-none line-height-105">
                    <span className="d-flex align-items-center gap-4 text-12 fw-medium px-12 py-9 text-main-500 border-main-500 border rounded-pill flex-wrap">
                      Submit
                      <i className="ph ph-paper-plane-tilt"></i>
                    </span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Missing the Major Scales (Flats)
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Entrepreneurship 101</td>
                  <td className="py-28 px-20 shadow-none line-height-105">41</td>
                  <td className="py-28 px-20 shadow-none line-height-105">6</td>
                  <td className="py-28 px-20 shadow-none line-height-105">
                    <div className="d-flex align-items-center gap-12 justify-content-end">
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-download-simple"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Half Step Highlights
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Leadership and Management Essentials</td>
                  <td className="py-28 px-20 shadow-none line-height-105">43</td>
                  <td className="py-28 px-20 shadow-none line-height-105">4</td>
                  <td className="py-28 px-20 shadow-none line-height-105">
                    <div className="d-flex align-items-center gap-12 justify-content-end">
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-download-simple"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Arpeggio Activity (Treble)
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Creative Writing Workshop</td>
                  <td className="py-28 px-20 shadow-none line-height-105">39</td>
                  <td className="py-28 px-20 shadow-none line-height-105">4</td>
                  <td className="py-28 px-20 shadow-none line-height-105">
                    <div className="d-flex align-items-center gap-12 justify-content-end">
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-download-simple"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Piano Keys and Notes on the Staff
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Digital Marketing 101</td>
                  <td className="py-28 px-20 shadow-none line-height-105">44</td>
                  <td className="py-28 px-20 shadow-none line-height-105">2</td>
                  <td className="py-22 shadow-none line-height-105">
                    <span className="d-flex align-items-center gap-4 text-12 fw-medium px-12 py-9 text-main-500 border-main-500 border rounded-pill flex-wrap">
                      Submit
                      <i className="ph ph-paper-plane-tilt"></i>
                    </span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Correct Rhythms
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Adobe Photoshop Essentials</td>
                  <td className="py-28 px-20 shadow-none line-height-105">45</td>
                  <td className="py-28 px-20 shadow-none line-height-105">6</td>
                  <td className="py-22 shadow-none line-height-105">
                    <span className="d-flex align-items-center gap-4 text-12 fw-medium px-12 py-9 text-main-500 border-main-500 border rounded-pill flex-wrap">
                      Submit
                      <i className="ph ph-paper-plane-tilt"></i>
                    </span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Pentatonic Practice - Major Scales
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Social Media Strategy</td>
                  <td className="py-28 px-20 shadow-none line-height-105">40</td>
                  <td className="py-28 px-20 shadow-none line-height-105">8</td>
                  <td className="py-22 shadow-none line-height-105">
                    <span className="d-flex align-items-center gap-4 text-12 fw-medium px-12 py-9 text-main-500 border-main-500 border rounded-pill flex-wrap">
                      Submit
                      <i className="ph ph-paper-plane-tilt"></i>
                    </span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Missing the Major Scales 2 (Sharps)
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Introduction to Python</td>
                  <td className="py-28 px-20 shadow-none line-height-105">34</td>
                  <td className="py-28 px-20 shadow-none line-height-105">2</td>
                  <td className="py-28 px-20 shadow-none line-height-105">
                    <div className="d-flex align-items-center gap-12 justify-content-end">
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-download-simple"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Short Composition
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Public Speaking Mastery</td>
                  <td className="py-28 px-20 shadow-none line-height-105">42</td>
                  <td className="py-28 px-20 shadow-none line-height-105">9</td>
                  <td className="py-28 px-20 shadow-none line-height-105">
                    <div className="d-flex align-items-center gap-12 justify-content-end">
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-24 text-neutral-500">
                        <i className="ph ph-download-simple"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none line-height-105 text-14 fw-normal">
                    Match the Key Signature
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105">Web Development Bootcamp</td>
                  <td className="py-28 px-20 shadow-none line-height-105">38</td>
                  <td className="py-28 px-20 shadow-none line-height-105">1</td>
                  <td className="py-22 shadow-none line-height-105">
                    <span className="d-flex align-items-center gap-4 text-12 fw-medium px-12 py-9 text-main-500 border-main-500 border rounded-pill flex-wrap">
                      Submit
                      <i className="ph ph-paper-plane-tilt"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="d-flex align-items-center gap-24 justify-content-between flex-wrap">
          <div className="form-check form-switch">
            <input className="form-check-input focus-box-shadow" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
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
    </div>
  );
}
