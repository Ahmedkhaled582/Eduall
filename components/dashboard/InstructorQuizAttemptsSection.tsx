import React from 'react';

export default function InstructorQuizAttemptsSection() {
  return (
    <div className="w-100 animate-fade-in">
      {/* ============Feedbacks start============ */}
      <div className="px-24 py-24 bg-white rounded-10">
        <div className="d-flex align-items-center gap-8 justify-content-between">
          <h6 className="mb-0 fw-medium">Quiz Attempts</h6>
          <button type="button" className="toggle-student-dashbord-button text-neutral-900 text-24 d-xl-none d-block">
            <i className="ph-bold ph-list"></i>
          </button>
        </div>

        <div className="mb-24">
          <div className="">
            <table id="example-five" className="display min-w-max w-100 overflow-x-auto">
              <thead>
                <tr className="bg-main-25">
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Quiz</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Date</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Qus</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">TM</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">CA</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Result</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { quiz: "Financial Planning for Millennials", student: "Brooklyn Simmons", date: "January 20, 2025", questions: "4", totalMarks: "7", correctAnswers: "1", result: "Pass" },
                  { quiz: "Photography for Beginners", student: "Ralph Edwards", date: "January 20, 2025", questions: "4", totalMarks: "4", correctAnswers: "8", result: "Pass" },
                  { quiz: "Adobe Photoshop Essentials", student: "Cameron Williamson", date: "January 20, 2025", questions: "9", totalMarks: "3", correctAnswers: "1", result: "Fail" },
                  { quiz: "Leadership and Management Essentials", student: "Kristin Watson", date: "January 20, 2025", questions: "6", totalMarks: "1", correctAnswers: "2", result: "Pass" },
                  { quiz: "Web Development Bootcamp", student: "Annette Black", date: "January 20, 2025", questions: "4", totalMarks: "1", correctAnswers: "6", result: "Pass" },
                  { quiz: "Digital Marketing Fundamentals", student: "Courtney Henry", date: "January 20, 2025", questions: "4", totalMarks: "3", correctAnswers: "2", result: "Fail" },
                  { quiz: "Digital Marketing 101", student: "Bessie Cooper", date: "January 20, 2025", questions: "2", totalMarks: "3", correctAnswers: "5", result: "Pass" },
                  { quiz: "Introduction to Python Programming", student: "Albert Flores", date: "January 20, 2025", questions: "6", totalMarks: "3", correctAnswers: "8", result: "Fail" },
                  { quiz: "Social Media Strategy", student: "Esther Howard", date: "January 20, 2025", questions: "8", totalMarks: "6", correctAnswers: "9", result: "Fail" },
                  { quiz: "Project Management Fundamentals", student: "Jane Cooper", date: "January 20, 2025", questions: "2", totalMarks: "5", correctAnswers: "7", result: "Pass" },
                  { quiz: "Social Media Strategy", student: "Jacob Jones", date: "January 20, 2025", questions: "9", totalMarks: "8", correctAnswers: "6", result: "Fail" },
                  { quiz: "Creative Writing Essentials", student: "Cody Fisher", date: "January 20, 2025", questions: "1", totalMarks: "6", correctAnswers: "5", result: "Fail" }
                ].map((attempt, idx) => (
                  <tr key={idx} className="hover-bg-neutral-20 transition-03">
                    <td className="py-28 px-20 shadow-none">
                      <div>
                        <h6 className="fw-medium text-14 text-neutral-500 mb-5">{attempt.quiz}</h6>
                        <span className="fw-normal text-12 text-neutral-500">{attempt.student}</span>
                      </div>
                    </td>
                    <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">{attempt.date}</td>
                    <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">{attempt.questions}</td>
                    <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">{attempt.totalMarks}</td>
                    <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">{attempt.correctAnswers}</td>
                    <td className="py-22 px-16 shadow-none">
                      <span className={`text-12 fw-normal border-neutral-30 border rounded-pill px-16 py-8 ${attempt.result === 'Pass' ? 'text-success-500 bg-main-05' : 'text-warning-600 bg-warning-5'}`}>
                        {attempt.result}
                      </span>
                    </td>
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
