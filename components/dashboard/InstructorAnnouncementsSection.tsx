import React from 'react';

export default function InstructorAnnouncementsSection() {
  return (
    <div className="w-100 animate-fade-in">
      {/* ============Feedbacks start============ */}
      <div className="px-24 py-24 bg-white rounded-10">
        <div className="d-flex align-items-center gap-8 justify-content-between">
          <h6 className="mb-0 fw-medium">Announcements</h6>
          <button type="button" className="toggle-student-dashbord-button text-neutral-900 text-24 d-xl-none d-block">
            <i className="ph-bold ph-list"></i>
          </button>
        </div>
        <div className="mb-24">
          <div className="">
            <table id="example-five" className="display min-w-max w-100 overflow-x-auto">
              <thead>
                <tr className="bg-main-25">
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Announcements</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Course Name</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Date</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Time</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { title: "Spring Concert Tickets On Sale Starting Today", course: "Swift Courses", date: "January 20, 2025", time: "02:30 pm" },
                  { title: "Make Up Test for Those Absent Last Week", course: "Objective C Courses", date: "January 20, 2025", time: "05:51 am" },
                  { title: "Bring Home Midterm Progress Reports Today", course: "CSS3 Courses", date: "January 20, 2025", time: "11:49 pm" },
                  { title: "Submit Nominations for Student Council President", course: "Jango Courses", date: "January 20, 2025", time: "07:40 am" },
                  { title: "Remember to Submit Community Service Forms", course: "React Courses", date: "January 20, 2025", time: "01:55 pm" },
                  { title: "Library Books Due One Week From Today", course: "LaravelCourses", date: "January 20, 2025", time: "04:15 am" },
                  { title: "Graduation Ticket Sales Start Monday at 9AM", course: "PHP", date: "January 20, 2025", time: "03:48 am" },
                  { title: "Sign Up Now for After School Tutoring Sessions", course: "Angular Courses", date: "January 20, 2025", time: "07:38 am" },
                  { title: "Mandatory Textbook Pickup After School Wednesday", course: "Html", date: "January 20, 2025", time: "01:09 am" },
                  { title: "Textbook Chapter to Read Before Next Class", course: "Python Courses", date: "January 20, 2025", time: "06:32 pm" },
                  { title: "Were You Absent Last Week? Makeup Work Available", course: "Vuejs Courses", date: "January 20, 2025", time: "12:23 pm" },
                  { title: "Bus Route Change Effective Monday Morning", course: "NodeJS Courses", date: "January 20, 2025", time: "01:08 pm" }
                ].map((item, idx) => (
                  <tr key={idx} className="hover-bg-neutral-20 transition-03">
                    <td className="py-28 px-20 shadow-none">
                      <span className="fw-normal text-14 text-neutral-500">{item.title}</span>
                    </td>
                    <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">{item.course}</td>
                    <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">{item.date}</td>
                    <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">{item.time}</td>
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
