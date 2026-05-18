import React from 'react';
import Link from 'next/link';
import Preloader from '@/components/layout/Preloader';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';
import Header from '@/components/layout/Header';
import Footer from '@/components/home/Footer';

export const metadata = {
  title: "EdullAll - LMS, Tutors, Education & Online Course Html Template",
};

export default function Page() {
  return (
    <>
      <Preloader />
      <div className="side-overlay"></div>
      <ProgressWrap />
      <Overlay />
      <MobileMenu />
      <Header />
      
      {/* ==================== Breadcrumb Start Here ==================== */}
<section className="breadcrumb py-120 bg-main-25 position-relative z-1 overflow-hidden mb-0">
    <img src="/assets/images/shapes/shape1.png" alt="" className="shape one animation-rotation d-md-block d-none" />
    <img src="/assets/images/shapes/shape2.png" alt="" className="shape two animation-scalation d-md-block d-none" />
    <img src="/assets/images/shapes/shape3.png" alt="" className="shape eight animation-walking d-md-block d-none" />
    <img src="/assets/images/shapes/shape5.png" alt="" className="shape six animation-walking d-md-block d-none" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="shape four animation-scalation" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="shape nine animation-scalation" />
    
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="breadcrumb__wrapper">
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> Courses Details</h1>
                    <ul className="breadcrumb__list d-flex align-items-center justify-content-center gap-4">
                        <li className="breadcrumb__item">
                            <a href="/" className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"> 
                                <i className="text-lg d-inline-flex ph-bold ph-house"></i> Home</a>
                         </li>
                        <li className="breadcrumb__item">
                            <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                        </li>
                        <li className="breadcrumb__item">
                            <a href="/course" className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"> Courses</a> 
                        </li>
                        <li className="breadcrumb__item ">
                            <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                        </li>
                        <li className="breadcrumb__item"> 
                            <span className="text-main-two-600"> Courses Details </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* ============================== Course Details Section Start ============================== */}
    <section className="course-details py-120">
        <div className="container">
            <div className="row gy-4">
                <div className="col-xl-8">
                    {/* Details Content Start */}
                    <div className="course-details__content border border-neutral-30 rounded-12 bg-main-25 p-12">
                        <img src="/assets/images/thumbs/course-details-img.png" alt="" className="rounded-8 cover-img" />
                        <div className="p-20">
                            <h2 className="mt-24 mb-24">Learn Python: From Beginner to Advanced</h2>
                            <p className="text-neutral-700">Unlock the power of Python, one of the most versatile and in-demand programming languages today. This comprehensive course is designed for both beginners and experienced programmers looking to enhance their skills. Whether you're aiming to start a new career in software development, data analysis, or simply want to automate everyday tasks, this course will provide you with the skills and knowledge you need to succeed.</p>
                            <span className="d-block border-bottom border-main-100 my-32"></span>
                            <h3 className="mb-16">What You Will Learn:</h3>
                            <ul className="list-dotted d-flex flex-column gap-24">
                                <li>Foundations of Python: Understand the basics of Python programming, including syntax, variables, and data types. Learn how to write, debug, and execute Python scripts.</li>
                                <li>Data Structures and Algorithms: Master Python's built-in data structures such as lists, dictionaries, and sets. Implement algorithms for sorting, searching, and manipulating data efficiently.</li>
                                <li>Object-Oriented Programming (OOP): Gain proficiency in OOP concepts like classes, objects, inheritance, and polymorphism, which are crucial for developing complex and modular programs.</li>
                                <li>File Handling and I/O Operations: Learn how to read from and write to files, manage file directories, and handle exceptions for robust file operations.</li>
                                <li>Libraries and Frameworks: Explore essential Python libraries such as NumPy, Pandas, Matplotlib, and Seaborn for data manipulation and visualization. Get an introduction to web frameworks like Flask and Django.</li>
                                <li>Data Science and Machine Learning: Dive into data analysis and visualization. Use Scikit-learn for building and evaluating machine learning models.</li>
                                <li>Project Development: Apply your skills in real-world scenarios with hands-on projects. Develop a comprehensive capstone project that showcases your mastery of Python.</li>
                            </ul>
                            <span className="d-block border-bottom border-main-100 my-32"></span>
                            <h4 className="mb-16">Why Choose This Course:</h4>
                            <ul className="list-dotted d-flex flex-column gap-24">
                                <li>Expert Instruction: Learn from Dr. Jane Smith, an experienced software developer and educator, who brings real-world insights and practical knowledge to the classroom.</li>
                                <li>Hands-On Learning: Engage in interactive exercises and projects that reinforce your learning and provide practical experience.</li>
                                <li>Flexible Learning: Study at your own pace with lifetime access to all course materials, including video lectures, coding exercises, and downloadable resources.</li>
                                <li>Comprehensive Curriculum: Cover all essential aspects of Python programming, from the basics to advanced topics, ensuring a well-rounded understanding of the language.</li>
                                <li>Supportive Community: Benefit from a supportive learning environment with access to the course forum, where you can ask questions, share insights, and collaborate with fellow learners.</li>
                            </ul>
                            <span className="d-block border-bottom border-main-100 my-32"></span>
                            <h5 className="mb-16">Ideal For:</h5>
                            <ul className="list-dotted d-flex flex-column gap-24">
                                <li>Beginners with no prior programming experience looking to start a career in software development or data science.</li>
                                <li>Intermediate programmers who want to deepen their understanding of Python and explore advanced topics.</li>
                                <li>Professionals seeking to automate tasks, analyze data, or develop web applications using Python.</li>
                            </ul>
                            <span className="d-block border-bottom border-main-100 my-32"></span>
                            <h6 className="mb-16">Enroll Today:</h6>
                            <ul className="list-dotted d-flex flex-column gap-24">
                                <li>Take the first step towards mastering Python. Enroll now and start your journey to becoming a proficient Python programmer!</li>
                            </ul>
                            <p className="mt-24 text-neutral-700">This detailed overview should give potential students a clear understanding of what they can expect from the course and the benefits of enrolling. Feel free to adjust any part of it to better fit your specific course offerings. Let me know if you need further customization or additional details!</p>
                        </div>
                    </div>
                    {/* Details Content End */}

                    {/* Curriculum Start */}
                    <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24">
                        <h5 className="mb-0">Curriculum</h5>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                        <div className="accordion common-accordion style-three" id="accordionExampleTwo">

                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneTwo" aria-expanded="true" aria-controls="collapseOneTwo">
                                    Introduction to Python
                                </button>
                              </h2>
                              <div id="collapseOneTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExampleTwo">
                                <div className="accordion-body p-0">
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">What is Python?</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Setting up your Python environment</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Writing your first Python program</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Understanding Python syntax and structure</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                </div>
                              </div>
                            </div>
                            
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoTwo" aria-expanded="false" aria-controls="collapseTwoTwo">
                                    Will I receive a certificate upon completion?
                                </button>
                              </h2>
                              <div id="collapseTwoTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExampleTwo">
                                <div className="accordion-body p-0">
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">What is Python?</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Setting up your Python environment</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Writing your first Python program</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Understanding Python syntax and structure</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeTwo" aria-expanded="false" aria-controls="collapseThreeTwo">
                                    What if I have questions during the course?
                                </button>
                              </h2>
                              <div id="collapseThreeTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExampleTwo">
                                <div className="accordion-body p-0">
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">What is Python?</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Setting up your Python environment</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Writing your first Python program</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Understanding Python syntax and structure</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourTwo" aria-expanded="false" aria-controls="collapseFourTwo">
                                    Can I access the course materials after completion?
                                </button>
                              </h2>
                              <div id="collapseFourTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExampleTwo">
                                <div className="accordion-body p-0">
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">What is Python?</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Setting up your Python environment</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Writing your first Python program</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Understanding Python syntax and structure</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFiveTwo" aria-expanded="false" aria-controls="collapseFiveTwo">
                                    Do I need any prior programming experience to take this course?
                                </button>
                              </h2>
                              <div id="collapseFiveTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExampleTwo">
                                <div className="accordion-body p-0">
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">What is Python?</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Setting up your Python environment</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Writing your first Python program</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                    <a href="#" className="curriculam-item flex-between gap-16 text-neutral-500 fw-medium hover-text-main-600">   
                                        <span className="flex-align gap-12">
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                            <span className="text-line-1">Understanding Python syntax and structure</span>
                                        </span>
                                        <span className="flex-align gap-12 flex-shrink-0">
                                            30:25
                                            <i className="text-xl d-flex ph-bold ph-video-camera"></i>
                                        </span>
                                    </a>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    {/* Curriculum End */}

                    {/* FAQs Start */}
                    <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24">
                        <h5 className="mb-0">FAQs</h5>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                        <div className="accordion common-accordion style-two" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How long is the course?
                                </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="accordion-body__desc">You can reach out to the instructor via the course forum or email. We also have weekly Q&A sessions where you can get your questions answered live.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Will I receive a certificate upon completion?
                                </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="accordion-body__desc">You can reach out to the instructor via the course forum or email. We also have weekly Q&A sessions where you can get your questions answered live.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What if I have questions during the course?
                                </button>
                              </h2>
                              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="accordion-body__desc">You can reach out to the instructor via the course forum or email. We also have weekly Q&A sessions where you can get your questions answered live.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Can I access the course materials after completion?
                                </button>
                              </h2>
                              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="accordion-body__desc">You can reach out to the instructor via the course forum or email. We also have weekly Q&A sessions where you can get your questions answered live.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Do I need any prior programming experience to take this course?
                                </button>
                              </h2>
                              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="accordion-body__desc">You can reach out to the instructor via the course forum or email. We also have weekly Q&A sessions where you can get your questions answered live.</p>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    {/* FAQs End */}

                    {/* Instructor Start */}
                    <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24">
                        <div className="d-flex align-items-start flex-wrap flex-md-nowrap gap-32">
                            <img src="/assets/images/thumbs/details-instructor.png" alt="" className="" />
                            <div className="">
                                <div className="flex-between gap-16">
                                    <h4 className="mb-0">Denial Lie</h4>
                                    <div className="dropdown flex-shrink-0">
                                        <button className="text-gray-600 text-xl d-flex rounded-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ph-fill ph-dots-three-outline"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu--md border-0 bg-transparent p-0">
                                            <div className="card border border-gray-100 rounded-12 box-shadow-custom">
                                                <div className="card-body p-12">
                                                    <div className="max-h-200 overflow-y-auto scroll-sm pe-8">
                                                        <ul>
                                                            <li className="mb-0">
                                                                <button type="button" className="delete-item-btn py-6 text-15 px-8 hover-bg-gray-50 text-gray-300 w-100 rounded-8 fw-normal text-xs d-block text-start">
                                                                    <span className="text">Delete</span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="d-block border border-neutral-30 my-20 border-dashed"></span>
                                <div className="d-flex flex-column gap-16 flex-wrap max-w-340">
                                    <div className="flex-between gap-8">
                                        <div className="flex-align gap-8">
                                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-lightbulb"></i></span>
                                            <span className="text-neutral-700 text-lg fw-medium">UI/UX Designer</span>
                                        </div>
                                        <div className="flex-align gap-8">
                                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-watch"></i></span>
                                            <span className="text-neutral-700 text-lg fw-medium">12 Course</span>
                                        </div>
                                    </div>
                                    <div className="flex-between gap-8 flex-wrap">
                                        <div className="flex-align gap-8">
                                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                                            <span className="text-neutral-700 text-lg fw-medium">36k Students</span>
                                        </div>
                                        <div className="flex-align gap-4">
                                            <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                            <span className="text-lg text-neutral-700 fw-semibold">
                                                4.7
                                                <span className="text-neutral-100 fw-normal">(6.4k)</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <span className="d-block border border-neutral-30 my-20 border-dashed"></span>
                                <p className="text-neutral-500">Offer brief biographies or profiles of each instructor. These may include details about their careers, achievements, and interests.</p>
                                <span className="d-block border border-neutral-30 my-20 border-dashed"></span>
                                <ul className="social-list flex-align gap-16">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className="text-main-600 text-xl hover-text-white w-40 h-40 rounded-circle border border-main-600 hover-bg-main-600 flex-center"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className="text-main-600 text-xl hover-text-white w-40 h-40 rounded-circle border border-main-600 hover-bg-main-600 flex-center"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className="text-main-600 text-xl hover-text-white w-40 h-40 rounded-circle border border-main-600 hover-bg-main-600 flex-center"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.pinterest.com" className="text-main-600 text-xl hover-text-white w-40 h-40 rounded-circle border border-main-600 hover-bg-main-600 flex-center"><i className="ph-bold ph-pinterest-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Instructor End */}

                    {/* Review Start */}
                    <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24">
                        <h5 className="mb-0">Average Reviews</h5>
                        <span className="d-block border border-neutral-30 my-32 border-dashed"></span>

                        <div className="d-flex flex-sm-row flex-column gap-36">
                            <div className="rounded-16 px-40 py-24 flex-center flex-column flex-shrink-0 text-center bg-main-600 text-white">
                                <h2 className="mb-8 text-white">4.8</h2>
                                <div className="flex-center gap-4">
                                    <span className="text-15 fw-medium text-white d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-15 fw-medium text-white d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-15 fw-medium text-white d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-15 fw-medium text-white d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-15 fw-medium text-white d-flex"><i className="ph-fill ph-star-half"></i></span>
                                </div>
                                <span className="mt-8 text-gray-500">26 Rating</span>
                            </div>

                            <div className="flex-grow-1">
                                <div className="flex-align gap-20 mb-8">
                                    <div className="flex-align gap-8">
                                        <span className="text-lg fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                        <span className="text-gray-900 flex-shrink-0">5</span>
                                    </div>
                                    <div className="progress w-100 bg-white rounded-pill h-12" role="progressbar" aria-label="Basic example" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-main-600 rounded-pill" style={{"width":"90%"}}></div>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">90%</span>
                                </div>
                                <div className="flex-align gap-20 mb-8">
                                    <div className="flex-align gap-8">
                                        <span className="text-lg fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                        <span className="text-gray-900 flex-shrink-0">5</span>
                                    </div>
                                    <div className="progress w-100 bg-white rounded-pill h-12" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-main-600 rounded-pill" style={{"width":"75%"}}></div>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">75%</span>
                                </div>
                                <div className="flex-align gap-20 mb-8">
                                    <div className="flex-align gap-8">
                                        <span className="text-lg fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                        <span className="text-gray-900 flex-shrink-0">5</span>
                                    </div>
                                    <div className="progress w-100 bg-white rounded-pill h-12" role="progressbar" aria-label="Basic example" aria-valuenow={67} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-main-600 rounded-pill" style={{"width":"67%"}}></div>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">67%</span>
                                </div>
                                <div className="flex-align gap-20 mb-8">
                                    <div className="flex-align gap-8">
                                        <span className="text-lg fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                        <span className="text-gray-900 flex-shrink-0">5</span>
                                    </div>
                                    <div className="progress w-100 bg-white rounded-pill h-12" role="progressbar" aria-label="Basic example" aria-valuenow={44} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-main-600 rounded-pill" style={{"width":"44%"}}></div>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">44%</span>
                                </div>
                                <div className="flex-align gap-20">
                                    <div className="flex-align gap-8">
                                        <span className="text-lg fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                        <span className="text-gray-900 flex-shrink-0">5</span>
                                    </div>
                                    <div className="progress w-100 bg-white rounded-pill h-12" role="progressbar" aria-label="Basic example" aria-valuenow={21} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-main-600 rounded-pill" style={{"width":"21%"}}></div>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">21%</span>
                                </div>
                            </div>
                        </div>
                        <span className="d-block border border-neutral-30 my-32 border-dashed"></span>
                        <div className="flex-between gap-16 flex-wrap mb-24">
                            <h6 className="mb-0">All Reviews</h6>
                            <div className="flex-align gap-16">
                                <div className="flex-align gap-8">
                                    <span className="text-neutral-500 flex-shrink-0">Sort By :</span>
                                    <select className="form-select ps-20 pe-28 py-8 fw-medium rounded-pill bg-main-25 border border-neutral-30 text-neutral-700">
                                        <option value="1">Newest</option>
                                        <option value="1">Trending</option>
                                        <option value="1">Popular</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Review Item */}
                        <div className="border border-neutral-30 rounded-12 bg-white p-32">
                            <div className="flex-align gap-8 mb-16">
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                            </div>
                            <p className="text-neutral-700">"This course was fantastic! The instructor's explanations were clear and concise, making it easy to understand even the more complex topics."</p>
                            <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                            <div className="flex-align gap-24">
                                <img src="/assets/images/thumbs/reviewer-img1.png" alt="" className="w-60 h-60 rounded-circle cover-img" />
                                <div className="">
                                    <h6 className="text-xl mb-8 fw-medium">Mary Johnson</h6>
                                    <span className="text-neutral-700 text-sm">Project Manager</span>
                                </div>
                            </div>
                            <span className="d-block border border-neutral-30 my-24 border-dashed"></span>

                            <div className="flex-align flex-wrap gap-40">
                                <button type="button" className="like-button flex-align gap-8 text-neutral-500 hover-text-main-600">
                                    <span className="like-button__icon text-xl d-flex"><i className="ph-bold ph-thumbs-up"></i></span>
                                    <span className="like-button__text">178</span>
                                </button>
                                <a href="#commentForm" className="flex-align gap-8 text-neutral-500 hover-text-main-600">
                                    <i className="text-xl d-flex ph-bold ph-chat-centered-text"></i>
                                    Reply
                                </a>
                            </div>
                            <div className="flex-align gap-20 mt-24">
                                <img src="/assets/images/thumbs/reviewer-img2.png" alt="" className="w-60 h-60 rounded-circle cover-img" />
                                <input type="text" className="common-input rounded-pill bg-main-25 border-neutral-30 py-16" placeholder="Join the discussion..." />
                            </div>
                        </div>
                        {/* Review Item */}

                        {/* Review Item */}
                        <div className="border border-neutral-30 rounded-12 bg-white p-32 mt-24">
                            <div className="flex-align gap-8 mb-16">
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                            </div>
                            <p className="text-neutral-700">"Great course for beginners and advanced learners alike. The projects were particularly helpful in applying what I learned. Highly recommend!"</p>
                            <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                            <div className="flex-align gap-24">
                                <img src="/assets/images/thumbs/reviewer-img2.png" alt="" className="w-60 h-60 rounded-circle cover-img" />
                                <div className="">
                                    <h6 className="text-xl mb-8 fw-medium">Alice Brown</h6>
                                    <span className="text-neutral-700 text-sm">Software Developer</span>
                                </div>
                            </div>
                            <span className="d-block border border-neutral-30 my-24 border-dashed"></span>

                            <div className="flex-align flex-wrap gap-40">
                                <button type="button" className="like-button flex-align gap-8 text-neutral-500 hover-text-main-600">
                                    <span className="like-button__icon text-xl d-flex"><i className="ph-bold ph-thumbs-up"></i></span>
                                    <span className="like-button__text">178</span>
                                </button>
                                <a href="#commentForm" className="flex-align gap-8 text-neutral-500 hover-text-main-600">
                                    <i className="text-xl d-flex ph-bold ph-chat-centered-text"></i>
                                    Reply
                                </a>
                            </div>
                        </div>
                        {/* Review Item */}

                        {/* Review Item */}
                        <div className="border border-neutral-30 rounded-12 bg-white p-32 mt-24">
                            <div className="flex-align gap-8 mb-16">
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                <span className="text-xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                            </div>
                            <p className="text-neutral-700">"Dr. Smith is an amazing instructor. Her real-world experience and teaching style made this course one of the best I've ever taken."</p>
                            <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                            <div className="flex-align gap-24">
                                <img src="/assets/images/thumbs/reviewer-img3.png" alt="" className="w-60 h-60 rounded-circle cover-img" />
                                <div className="">
                                    <h6 className="text-xl mb-8 fw-medium">David Wilson</h6>
                                    <span className="text-neutral-700 text-sm">Ethical Hacker</span>
                                </div>
                            </div>
                            <span className="d-block border border-neutral-30 my-24 border-dashed"></span>

                            <div className="flex-align flex-wrap gap-40">
                                <button type="button" className="like-button flex-align gap-8 text-neutral-500 hover-text-main-600">
                                    <span className="like-button__icon text-xl d-flex"><i className="ph-bold ph-thumbs-up"></i></span>
                                    <span className="like-button__text">178</span>
                                </button>
                                <a href="#commentForm" className="flex-align gap-8 text-neutral-500 hover-text-main-600">
                                    <i className="text-xl d-flex ph-bold ph-chat-centered-text"></i>
                                    Reply
                                </a>
                            </div>
                        </div>
                        {/* Review Item */}

                        <button type="button" className="btn btn-main rounded-pill flex-center gap-8 mt-40">
                            See All Reviews
                            <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                        </button>
                    </div>
                    {/* Review End */}

                    {/* Review Form Start */}
                    <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24">
                        <form action="#" id="commentForm">
                            <h5 className="mb-0">Write a Review</h5>
                            <span className="d-block border border-neutral-30 my-32 border-dashed"></span>
                            <div className="mb-24">
                                <label htmlFor="name" className="text-neutral-700 text-lg fw-medium mb-12">Name </label>
                                <input type="text" className="common-input rounded-pill" id="name" placeholder="Enter Name..." />
                            </div>
                            <div className="mb-24">
                                <label htmlFor="email" className="text-neutral-700 text-lg fw-medium mb-12">Email </label>
                                <input type="email" className="common-input rounded-pill" id="email" placeholder="Enter Email..." />
                            </div>
                            <div className="mb-24">
                                <label className="text-neutral-700 text-lg fw-medium mb-12">Star Reviews </label>
                                
                                <div id="half-star-rating">
                                    <div className="rating-group">
                                        <input className="rating__input rating__input--none" checked name="rating2" id="rating2-0" value="0" type="radio" />
                                        <label aria-label="0 stars" className="rating__label" htmlFor="rating2-0">&nbsp;</label>
                                        <label aria-label="0.5 stars" className="rating__label rating__label--half" htmlFor="rating2-05"><i className="rating__icon rating__icon--star ph-fill ph-star-half"></i></label>
                                        <input className="rating__input" name="rating2" id="rating2-05" value="0.5" type="radio" />
                                        <label aria-label="1 star" className="rating__label" htmlFor="rating2-10"><i className="rating__icon rating__icon--star ph-fill ph-star"></i></label>
                                        <input className="rating__input" name="rating2" id="rating2-10" value="1" type="radio" />
                                        <label aria-label="1.5 stars" className="rating__label rating__label--half" htmlFor="rating2-15"><i className="rating__icon rating__icon--star ph-fill ph-star-half"></i></label>
                                        <input className="rating__input" name="rating2" id="rating2-15" value="1.5" type="radio" />
                                        <label aria-label="2 stars" className="rating__label" htmlFor="rating2-20"><i className="rating__icon rating__icon--star ph-fill ph-star"></i></label>
                                        <input className="rating__input" name="rating2" id="rating2-20" value="2" type="radio" />
                                        <label aria-label="2.5 stars" className="rating__label rating__label--half" htmlFor="rating2-25"><i className="rating__icon rating__icon--star ph-fill ph-star-half"></i></label>
                                        <input className="rating__input" name="rating2" id="rating2-25" value="2.5" type="radio" checked />
                                        <label aria-label="3 stars" className="rating__label" htmlFor="rating2-30"><i className="rating__icon rating__icon--star ph-fill ph-star"></i></label>
                                        <input className="rating__input" name="rating2" id="rating2-30" value="3" type="radio" />
                                        <label aria-label="3.5 stars" className="rating__label rating__label--half" htmlFor="rating2-35"><i className="rating__icon rating__icon--star ph-fill ph-star-half"></i></label>
                                        <input className="rating__input" name="rating2" id="rating2-35" value="3.5" type="radio" />
                                        <label aria-label="4 stars" className="rating__label" htmlFor="rating2-40"><i className="rating__icon rating__icon--star ph-fill ph-star"></i></label>
                                        <input className="rating__input" name="rating2" id="rating2-40" value="4" type="radio" />
                                        <label aria-label="4.5 stars" className="rating__label rating__label--half" htmlFor="rating2-45"><i className="rating__icon rating__icon--star ph-fill ph-star-half"></i></label>
                                        <input className="rating__input" name="rating2" id="rating2-45" value="4.5" type="radio" />
                                        <label aria-label="5 stars" className="rating__label" htmlFor="rating2-50"><i className="rating__icon rating__icon--star ph-fill ph-star"></i></label>
                                        <input className="rating__input" name="rating2" id="rating2-50" value="5" type="radio" />
                                    </div>
                                </div>

                            </div>
                            <div className="mb-24">
                                <label htmlFor="desc" className="text-neutral-700 text-lg fw-medium mb-12">Your Question </label>
                                <textarea id="desc" className="common-input rounded-24" placeholder="Write you question..."></textarea>
                            </div>
                            <div className="mb-0">
                                <button type="submit" className="btn btn-main rounded-pill flex-center gap-8 mt-40">
                                    Submit Review
                                    <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Review Form End */}
                </div>
                <div className="col-xl-4">
                    <div className="course-details__sidebar border border-neutral-30 rounded-12 bg-white p-8">
                        <div className="border border-neutral-30 rounded-12 bg-main-25 p-24 bg-main-25">
                            <span className="text-neutral-700 text-lg mb-12">Price</span>
                            <div className="flex-align align-items-start flex-wrap gap-8 border-bottom border-neutral-40 pb-24 mb-24">
                                <div className="flex-align gap-12 text-neutral-700">
                                    <span className="text-2xl d-flex"><i className="ph-bold ph-tag"></i></span>
                                    <span className="">From</span>
                                    <h2 className="mb-0">$99.99</h2>
                                </div>
                                <button type="button" className="text-neutral-500 text-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Initial Price">
                                    <i className="ph-bold ph-info"></i>
                                </button>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph ph-watch"></i></span>
                                    <span className="text-neutral-700 text-lg fw-normal">Courses Title</span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">Web Development</span>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"> <i className="ph ph-video-camera"></i></span>
                                    <span className="text-neutral-700 text-lg fw-normal">Lessons</span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">16 Videos</span>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph ph-globe"></i> </span>
                                    <span className="text-neutral-700 text-lg fw-normal">Language</span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">English</span>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"> <i className="ph ph-chart-pie"></i></span>
                                    <span className="text-neutral-700 text-lg fw-normal">Course Level</span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">Beginner</span>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"> <i className="ph ph-star"></i> </span>
                                    <span className="text-neutral-700 text-lg fw-normal">Reviews</span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">4.7(5.5k)</span>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"> <i className="ph ph-question"></i> </span>
                                    <span className="text-neutral-700 text-lg fw-normal">Quizzes</span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">08</span>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"> <i className="ph ph-clock"></i> </span>
                                    <span className="text-neutral-700 text-lg fw-normal">Duration</span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">7 Weeks</span>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"> <i className="ph ph-users"></i> </span>
                                    <span className="text-neutral-700 text-lg fw-normal">Students</span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">2.5k</span>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"> <i className="ph ph-certificate"></i> </span>
                                    <span className="text-neutral-700 text-lg fw-normal">Certifications</span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">Yes</span>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"> <i className="ph ph-seal-percent"></i> </span>
                                    <span className="text-neutral-700 text-lg fw-normal">Pass Percentage</span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">88%</span>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"> <i className="ph ph-calendar-dot"></i> </span>
                                    <span className="text-neutral-700 text-lg fw-normal">Deadline</span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">01 Jun, 2024</span>
                            </div>
                            <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                                <div className="flex-align gap-12">
                                    <span className="text-neutral-700 text-2xl d-flex"> <i className="ph ph-user-circle"></i> </span>
                                    <span className="text-neutral-700 text-lg fw-normal">Instructor </span>
                                </div>
                                <span className="text-lg fw-medium text-neutral-700">Denial Lie</span>
                            </div>
                            <a href="/contact" className="btn btn-main rounded-pill flex-center gap-8 mt-40">
                                See All Reviews
                                <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                            </a>
                            <div className="mt-24 flex-center gap-24">
                                <button type="button" className="w-44 h-44 flex-center bg-white rounded-circle text-main-600 text-lg hover-text-white hover-bg-main-600 transition-1">
                                    <i className="ph-bold ph-shopping-cart-simple"></i>
                                </button>
                                <div className="dropdown flex-shrink-0">
                                    <button className="w-44 h-44 flex-center bg-white rounded-circle text-main-600 text-lg hover-text-white hover-bg-main-600 transition-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ph-bold ph-share-network"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu--md border-0 bg-transparent p-0">
                                        <div className="card border border-gray-100 rounded-12 box-shadow-custom">
                                            <div className="card-body p-16">
                                                <ul className="social-list flex-align gap-8">
                                                    <li className="social-list__item">
                                                        <a href="https://www.facebook.com" className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"><i className="ph-bold ph-facebook-logo"></i></a>
                                                    </li>
                                                    <li className="social-list__item">
                                                        <a href="https://www.twitter.com" className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"> <i className="ph-bold ph-twitter-logo"></i></a>
                                                    </li>
                                                    <li className="social-list__item">
                                                        <a href="https://www.linkedin.com" className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"><i className="ph-bold ph-instagram-logo"></i></a>
                                                    </li>
                                                    <li className="social-list__item">
                                                        <a href="https://www.pinterest.com" className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"><i className="ph-bold ph-pinterest-logo"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ============================== Course Details Section End ============================== */}
    
    {/* ================================= Certificate Section Start ================================= */}
<div className="certificate">
    <div className="container container--lg">
        <div className="certificate-box px-16 bg-main-600 rounded-16">
            <div className="container">
                <div className="position-relative py-80">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="certificate__content">
                                <div className="flex-align gap-8 mb-16 wow bounceInDown">
                                    <span className="w-8 h-8 bg-white rounded-circle"></span>
                                    <h5 className="text-white mb-0">Get Certificate</h5>
                                </div>
                                <h2 className="text-white mb-40 fw-medium wow bounceIn">Get Quality Skills Certificate From the EduAll</h2>
                                <a href="" className="btn btn-white rounded-pill flex-align d-inline-flex gap-8 hover-bg-main-800 wow bounceInUp">
                                    Get Started Now
                                    <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 d-xl-block d-none">
                            <div className="certificate__thumb" data-aos="fade-up-left">    
                                <img src="/assets/images/thumbs/certificate-img.png" alt="" data-tilt data-tilt-max="8" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-full-page-listening />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
{/* ================================= Certificate Section End ================================= */}
      
      <Footer />
    </>
  );
}
