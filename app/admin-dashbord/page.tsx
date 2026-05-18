import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EdullAll - LMS, Tutors, Education & Online Course Html Template",
};

export default function Page() {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `<!--==================== Preloader Start ====================-->
  <div class="preloader">
    <img src="/assets/images/icons/preloader.gif" alt="">
  </div>
<!--==================== Preloader End ====================-->

<!--==================== Overlay Start ====================-->
<div class="overlay"></div>
<!--==================== Overlay End ====================-->

<!--==================== Sidebar Overlay End ====================-->
<div class="side-overlay"></div>
<!--==================== Sidebar Overlay End ====================-->

<!-- ==================== Scroll to Top End Here ==================== -->
<div class="progress-wrap">
  <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
  </svg>
</div>
<!-- ==================== Scroll to Top End Here ==================== -->

<!-- ==================== Mobile Menu Start Here ==================== -->
<div class="mobile-menu scroll-sm d-lg-none d-block">
    <button type="button" class="close-button"><i class="ph ph-x"></i> </button>
    <div class="mobile-menu__inner">
        <a href="/" class="mobile-menu__logo">
            <img src="/assets/images/logo/logo.png" alt="Logo">
        </a>
        <div class="mobile-menu__menu">
            
<ul class="nav-menu flex-align nav-menu--mobile">
    <li class="nav-menu__item has-submenu activePage">
        <a href="javascript:void(0)" class="nav-menu__link">Home</a>
        <ul class="nav-submenu scroll-sm">
            <li class="nav-submenu__item activePage">
                <a href="/" class="nav-submenu__link hover-bg-neutral-30"> Home LMS</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/index-2" class="nav-submenu__link hover-bg-neutral-30"> Home Online Course</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/index-3" class="nav-submenu__link hover-bg-neutral-30"> Home University</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/index-4" class="nav-submenu__link hover-bg-neutral-30"> Home Tutor</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/index-5" class="nav-submenu__link hover-bg-neutral-30"> Home Kindergarten</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/index-6" class="nav-submenu__link hover-bg-neutral-30"> Home Kindergarten two</a>
            </li>
        </ul>   
    </li>
    <li class="nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link">Courses</a>
         <ul class="nav-submenu scroll-sm">
            <li class="nav-submenu__item">
                <a href="/course" class="nav-submenu__link hover-bg-neutral-30"> Course Grid View</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/course-list-view" class="nav-submenu__link hover-bg-neutral-30"> Course List View</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/course-details" class="nav-submenu__link hover-bg-neutral-30"> Course Details</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/lesson-details" class="nav-submenu__link hover-bg-neutral-30"> Lesson Details</a>
            </li>
        </ul>
    </li>
    <li class="nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link">Pages</a>
         <ul class="nav-submenu scroll-sm">
            <li class="nav-submenu__item">
                <a href="/about" class="nav-submenu__link hover-bg-neutral-30"> About</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/about-two" class="nav-submenu__link hover-bg-neutral-30"> About Two</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/about-three" class="nav-submenu__link hover-bg-neutral-30"> About Three</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/about-four" class="nav-submenu__link hover-bg-neutral-30"> About Four</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/pricing-plan" class="nav-submenu__link hover-bg-neutral-30">Pricing Plan</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor" class="nav-submenu__link hover-bg-neutral-30"> Instructor</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-two" class="nav-submenu__link hover-bg-neutral-30"> Instructor Two</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-details" class="nav-submenu__link hover-bg-neutral-30"> Instructor Details</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/tutor" class="nav-submenu__link hover-bg-neutral-30"> Premium Tutors</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/tutor-details" class="nav-submenu__link hover-bg-neutral-30"> Premium Tutors Details</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/faq" class="nav-submenu__link hover-bg-neutral-30">FAQ</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/tuition-jobs" class="nav-submenu__link hover-bg-neutral-30">Tuition Jobs</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/events" class="nav-submenu__link hover-bg-neutral-30">Events</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/event-details" class="nav-submenu__link hover-bg-neutral-30">Event Details</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/apply-admission" class="nav-submenu__link hover-bg-neutral-30">Apply Admission</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/gallery" class="nav-submenu__link hover-bg-neutral-30">Gallery</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/privacy-policy" class="nav-submenu__link hover-bg-neutral-30">Privacy Policy</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/favorite-course" class="nav-submenu__link hover-bg-neutral-30">Favorite Course</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/find-tutors" class="nav-submenu__link hover-bg-neutral-30">Find Best Tutors</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/book-online-class" class="nav-submenu__link hover-bg-neutral-30">Book Online Class</a>
            </li>
        </ul>
    </li>
    <li class="nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link">Dashboard</a>
         <ul class="nav-submenu scroll-sm">
            <li class="nav-submenu__item">
                <a href="/admin-dashbord" class="nav-submenu__link hover-bg-neutral-30"> Admin Dashbord</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/my-profile" class="nav-submenu__link hover-bg-neutral-30">My Profile</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/dashbord-message" class="nav-submenu__link hover-bg-neutral-30">Message</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/dashbord-courses" class="nav-submenu__link hover-bg-neutral-30">Courses</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/dashbord-wishlist" class="nav-submenu__link hover-bg-neutral-30">Wishlist</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/deshbord-reviews" class="nav-submenu__link hover-bg-neutral-30">Reviews</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/dashbord-quiz-attempts" class="nav-submenu__link hover-bg-neutral-30">Quiz Attempts</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/dashbord-settings" class="nav-submenu__link hover-bg-neutral-30">Settings</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/student-dashbord" class="nav-submenu__link hover-bg-neutral-30">Student Admin Dashbord</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/student-dashbord-my-profile" class="nav-submenu__link hover-bg-neutral-30">Student My Profile</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/student-dashbord-message" class="nav-submenu__link hover-bg-neutral-30">Student Message</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/student-dashbord-enrolled-courses" class="nav-submenu__link hover-bg-neutral-30">Student Enrolled Courses</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/student-dashbord-wishlist" class="nav-submenu__link hover-bg-neutral-30">Student Wishlist</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/student-dashbord-reviews" class="nav-submenu__link hover-bg-neutral-30">Student Reviews</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/student-dashbord-my-quiz-attempts" class="nav-submenu__link hover-bg-neutral-30">Student My Quiz Attempts</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/student-dashbord-assignment" class="nav-submenu__link hover-bg-neutral-30">Student Assignment</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/student-dashbord-settings" class="nav-submenu__link hover-bg-neutral-30">Student Settings</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard" class="nav-submenu__link hover-bg-neutral-30">Instructor Dashbord</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-my-profile" class="nav-submenu__link hover-bg-neutral-30">Instructor My Profile</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-message" class="nav-submenu__link hover-bg-neutral-30">Instructor Message</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-enrolled-courses" class="nav-submenu__link hover-bg-neutral-30">Instructor Enrolled Courses</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-wishlist" class="nav-submenu__link hover-bg-neutral-30">Instructor Wishlist</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-reviews" class="nav-submenu__link hover-bg-neutral-30">Instructor Reviews</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-my-quiz-attempts" class="nav-submenu__link hover-bg-neutral-30">Instructor My Quiz Attempts</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-order-history" class="nav-submenu__link hover-bg-neutral-30">Instructor Order History</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-my-courses" class="nav-submenu__link hover-bg-neutral-30">Instructor My Courses</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-announcements" class="nav-submenu__link hover-bg-neutral-30">Instructor Announcements</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-assignment" class="nav-submenu__link hover-bg-neutral-30">Instructor Assignment</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-quiz-attempts" class="nav-submenu__link hover-bg-neutral-30">Instructor Quiz Attempts</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-dashboard-account-settings" class="nav-submenu__link hover-bg-neutral-30">Instructor Account Settings</a>
            </li>
        </ul>
    </li>
    <li class="nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link">Product</a>
         <ul class="nav-submenu scroll-sm">
            <li class="nav-submenu__item">
                <a href="/product" class="nav-submenu__link hover-bg-neutral-30"> Product</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/product-details" class="nav-submenu__link hover-bg-neutral-30"> Product Details</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/cart" class="nav-submenu__link hover-bg-neutral-30">Cart</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/checkout" class="nav-submenu__link hover-bg-neutral-30">Checkout</a>
            </li>
        </ul>
    </li>
    <li class="nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link">Blog</a>
         <ul class="nav-submenu scroll-sm">
            <li class="nav-submenu__item">
                <a href="/blog" class="nav-submenu__link hover-bg-neutral-30"> Blog Grid</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/blog-list" class="nav-submenu__link hover-bg-neutral-30"> Blog List</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/blog-classic" class="nav-submenu__link hover-bg-neutral-30"> Blog Classic</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/blog-details" class="nav-submenu__link hover-bg-neutral-30"> Blog Details</a>
            </li>
        </ul>
    </li>
    <li class="nav-menu__item">
        <a href="/contact" class="nav-menu__link">Contact</a>
    </li>
</ul>

            <div class="d-sm-none d-block mt-24">
                <div class="header-select border border-neutral-30 bg-main-25 rounded-pill position-relative">
    <span class="select-icon d-xxl-block d-none position-absolute top-50 translate-middle-y inset-inline-start-0 z-1 ms-lg-4 ms-12 text-xl pointer-event-none d-flex">
        <i class="ph-bold ph-squares-four"></i>
    </span>
    <select class="js-example-basic-single border-0" name="state">
        <option value="1" selected disabled>Categories</option>
        <option value="1">Design</option>
        <option value="1">Development</option>
        <option value="1">Architecture</option>
        <option value="1">Life Style</option>
        <option value="1">Data Science</option>
        <option value="1">Marketing</option>
        <option value="1">Music</option>
        <option value="1">Typography</option>
        <option value="1">Finance</option>
        <option value="1">Motivation</option>
    </select>
</div>
            </div>
            
        </div>
    </div>
</div>
<!-- ==================== Mobile Menu End Here ==================== -->


<!-- ==========admin dashbord start=========== -->
<div class="dashbord bg-main-25 w-100 overflow-hidden">
    <div class="d-flex">

        
<!-- ========Dashdord Sidebar start======== -->
<div class="dashboard-sidebar px-20 py-24 max-w-288-px bg-white w-100 border-end border-neutral-40 position-relative">
    <a href="#">
      <img src="/assets/images/logo/logo.png" alt="" class="">
    </a>
    <span class="w-100 bg-neutral-40 mb-24 mt-24 h-1"></span>
     <div class="overflow-x-auto">
        <div class="scrollbar min-w-max"> 
            <span class="text-neutral-500 fw-normal text-14 mb-8">Welcome Henry,</span>
               <ul>
                   <li class="mb-8">
                       <a href="/admin-dashbord" class="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span class="text-16 text-main-600 item-hover__text transition-03"><i class="ph-bold ph-house"></i></span>
                       Dashboard</a>
                   </li>
                   <li class="mb-8">
                       <a href="/my-profile" class="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span class="text-16 text-main-600 item-hover__text transition-03"><i class="ph ph-user-circle"></i></span>
                       My Profile</a>
                   </li>
                   <li class="mb-8">
                       <a href="/dashbord-message" class="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span class="text-16 text-main-600 item-hover__text transition-03"><i class="ph ph-chat-dots"></i></span>
                       Message</a>
                   </li>
                   <li class="mb-8">
                       <a href="/dashbord-courses" class="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span class="text-16 text-main-600 item-hover__text transition-03"><i class="ph ph-watch"></i></span>
                       Courses</a>
                   </li>
                   <li class="mb-8">
                       <a href="/dashbord-wishlist" class="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span class="text-16 text-main-600 item-hover__text transition-03"><i class="ph ph-bookmark-simple"></i></span>
                       Wishlist</a>
                   </li>
                   <li class="mb-8">
                       <a href="/deshbord-reviews" class="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span class="text-16 text-main-600 item-hover__text transition-03"><i class="ph ph-sparkle"></i></span>
                       Reviews</a>
                   </li>
                   <li class="mb-8">
                       <a href="/dashbord-quiz-attempts" class="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span class="text-16 text-main-600 item-hover__text transition-03"><i class="ph ph-seal-question"></i></span>
                       Quiz Attempts</a>
                   </li>
                   <li class="mb-8">
                       <span class="fw-normal text-14 text-neutral-500">Admin</span>
                   </li>
                   <li class="mb-8">
                       <a href="/dashbord-settings" class="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span class="text-16 text-main-600 item-hover__text transition-03"><i class="ph ph-gear"></i></span>
                       Settings</a>
                   </li>
               </ul>
           </div>
     </div>

     <div class="position-absolute inset-block-end-0 inset-inline-start-0 pb-16 px-16 w-100">
         <a href="/sign-in" class=" text-14 fw-medium text-neutral-500 d-flex align-items-center gap-8  hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap bg-white">
             <span class="text-16 text-main-600 item-hover__text transition-03">
                 <i class="ph ph-sign-out"></i>
             </span>
             Logout
         </a>
     </div>
</div>
<!-- ========Dashdord Sidebar end======== -->


         <div class="dashbord-body flex-grow-1">
            <!-- =====messsage dashbord nab start======== -->
<div class="px-24 py-16 bg-neutral-10 border-bottom border-neutral-40 w-100">
    <div class="d-flex align-items-center justify-content-between gap-24 w-100">
        <div class="d-flex align-items-center gap-24">
            <button type="button" class="toggle-dashbord-button text-neutral-500 text-28 line-height-1 d-lg-none d-block">
                <i class="ph-bold ph-list"></i>
            </button>
            <div class="max-w-357-px position-relative d-sm-block d-none">
                <form action="#">
                    <input type="text" placeholder="Search" class="ps-16 pe-36 py-9 border border-neutral-40 rounded-pill focus-visible-outline focus-border-main-600 text-14 line-height-1">
                    <button type="button" class="w-28 h-28 bg-main-600 text-white text-16 rounded-circle justify-content-center align-items-center d-flex position-absolute top-50-percent translate-middle-y inset-inline-end-0-px me-4">
                        <i class="ph-bold ph-magnifying-glass"></i>
                    </button>
                </form>
            </div>
        </div>

        <div class="d-flex align-items-center gap-16">
            <a href="#" class="px-20 py-10 border-main-600 border rounded-pill text-14 text-main-600 hover-bg-main-600 hover-text-white hover-border-600 d-lg-block d-none line-height-1">Create a New Course</a>
            <div class="w-36 h-36 border-neutral-50 border rounded-pill justify-content-center align-items-center d-flex text-20 text-neutral-500 hover-bg-main-600  transition-03">
                <button type="button" class="hover-text-white transition-03">
                    <i class="ph ph-translate"></i>
                </button>
            </div>
            <div class="position-relative">
                <div class="w-36 h-36 border-neutral-50 border rounded-pill justify-content-center align-items-center d-flex text-20 text-neutral-500 position-relative">
                    <div>
                        <button class="dropdown-toggle w-36 h-36 border-neutral-50 border rounded-pill hover-bg-main-600 hover-text-white transition-03" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ph ph-bell-simple"></i>
                        </button>
                        <ul class="dropdown-menu rounded-12">

                            <li>
                                <a class="dropdown-item d-flex align-items-center gap-12 px-16 py-12" href="javascript:void(0)">
                                <div class="d-flex w-100 justify-content-between gap-12">
                                    <div class="d-flex align-items-center gap-12 ">
                                        <span class="w-36 h-36">
                                            <img src="/assets/images/thumbs/reviewer-img1.png" alt="">
                                        </span>
                                        <div>
                                            <span class="text-md fw-semibold text-line-1">Ronald Richards</span>
                                            <p class="text-sm text-line-1 text-neutral-300">You can stitch between artboards</p>
                                        </div>
                                    </div>
                                    <span class="text-sm fw-medium text-neutral-400">23 Mins ago</span>
                                </div>
                                </a>
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center gap-12 px-16 py-12" href="javascript:void(0)">
                                <div class="d-flex w-100 justify-content-between gap-12">
                                    <div class="d-flex align-items-center gap-12 ">
                                        <span class="w-36 h-36"><img src="/assets/images/thumbs/reviewer-img4.png" alt=""></span>
                                        <div>
                                            <span class="text-md fw-semibold text-line-1">Arlene McCoy</span>
                                            <p class="text-sm text-line-1 text-neutral-300">Invite you to prototyping</p>
                                        </div>
                                    </div>
                                    <span class="text-sm fw-medium text-neutral-400">23 Mins ago</span>
                                </div>
                                </a>
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center gap-12 px-16 py-12" href="javascript:void(0)">
                                <div class="d-flex w-100 justify-content-between gap-12">
                                    <div class="d-flex align-items-center gap-12 ">
                                        <span class="w-36 h-36"><img src="/assets/images/thumbs/instructor-details-thumb.png" alt=""></span>
                                        <div>
                                            <span class="text-md fw-semibold text-line-1">Annette Black</span>
                                            <p class="text-sm text-line-1 text-neutral-300">Invite you to prototyping</p>
                                        </div>
                                    </div>
                                    <span class="text-sm fw-medium text-neutral-400">23 Mins ago</span>
                                </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="position-absolute inset-inline-start-22px top--20-percent">
                        <span class="bg-main-600 text-white w-16 h-16 rounded-circle text-9 d-flex justify-content-center align-items-center">2</span>
                    </div>
                </div>
            </div>

            <div class="w-36 h-36 border-neutral-50 border rounded-pill justify-content-center align-items-center d-flex text-20 text-neutral-500 hover-bg-main-600 transition-03">
                <button type="button" class=" hover-text-white transition-03">
                    <i class="ph ph-chat-dots"></i>
                </button>
            </div>

            <div class="dropdown">
                <button class="dropdown-toggle w-36 h-36 border-neutral-50 border rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/assets/images/thumbs/testimonials-three-img1.png" alt="">
                </button>
                <ul class="dropdown-menu rounded-12">
                    <li>
                        <a class="dropdown-item d-flex align-items-center gap-12 hover-text-main-600 transition-03" href="/my-profile">
                        <span><i class="ph ph-user-circle"></i></span>
                        <span>My Profile</span>
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center gap-12 hover-text-main-600 transition-03" href="/dashbord-settings">
                        <span><i class="ph ph-gear"></i></span>
                        <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center gap-12 hover-text-main-600 transition-03" href="/sign-in">
                        <span><i class="ph ph-power"></i></span>
                        <span>Log Out</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</div>
<!-- =====message nab end======== -->

        <!-- =====dashbord body item start===== -->
        <div class="px-24 py-24">
            <h4 class="fw-semibold text-neutral-500 text-20 ">Dashboard</h4>
            <div class="row gy-4">
                <div class="col-xl-4 col-sm-6">
                    <div class="px-20 py-20 bg-white rounded-10">
                        <div class="d-flex gap-16 justify-content-between mb-12">
                            <div>
                                <span class="fw-normal text-14 text-neutral-400 mb-4">Total Courses</span>
                                <h6 class="text-18 fw-semibold text-neutral-500 mb-0">2000+</h6>
                            </div>
                            <span class="w-44 h-44 bg-main-600 rounded-circle justify-content-center align-items-center d-flex">
                                <img src="/assets/images/icons/dashbord-item1.png" alt="">
                            </span>
                        </div>
                        <a href="#" class="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
                    </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                    <div class="px-20 py-20 bg-white rounded-10">
                        <div class="d-flex gap-16 justify-content-between mb-12">
                            <div>
                                <span class="fw-normal text-14 text-neutral-400 mb-4">Enrolled Courses</span>
                                <h6 class="text-18 fw-semibold text-neutral-500 mb-0">900+</h6>
                            </div>
                            <span class="w-44 h-44 bg-success-600 rounded-circle justify-content-center align-items-center d-flex">
                                <img src="/assets/images/icons/dashbord-item2.png" alt="">
                            </span>
                        </div>
                        <a href="#" class="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
                    </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                    <div class="px-20 py-20 bg-white rounded-10">
                        <div class="d-flex gap-16 justify-content-between mb-12">
                            <div>
                                <span class="fw-normal text-14 text-neutral-400 mb-4">Active Courses</span>
                                <h6 class="text-18 fw-semibold text-neutral-500 mb-0">100+</h6>
                            </div>
                            <span class="w-44 h-44 bg-warning-600 rounded-circle justify-content-center align-items-center d-flex">
                                <img src="/assets/images/icons/dashbord-item3.png" alt="">
                            </span>
                        </div>
                        <a href="#" class="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
                    </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                    <div class="px-20 py-20 bg-white rounded-10">
                        <div class="d-flex gap-16 justify-content-between mb-12">
                            <div>
                                <span class="fw-normal text-14 text-neutral-400 mb-4">Completed Courses</span>
                                <h6 class="text-18 fw-semibold text-neutral-500 mb-0">1000+</h6>
                            </div>
                            <span class="w-44 h-44 bg-warning-600 rounded-circle justify-content-center align-items-center d-flex">
                                <img src="/assets/images/icons/dashbord-item4.png" alt="">
                            </span>
                        </div>
                        <a href="#" class="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
                    </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                    <div class="px-20 py-20 bg-white rounded-10">
                        <div class="d-flex gap-16 justify-content-between mb-12">
                            <div>
                                <span class="fw-normal text-14 text-neutral-400 mb-4">Total Students</span>
                                <h6 class="text-18 fw-semibold text-neutral-500 mb-0">88,000+</h6>
                            </div>
                            <span class="w-44 h-44 bg-main-600 rounded-circle justify-content-center align-items-center d-flex">
                                <img src="/assets/images/icons/dashbord-item5.png" alt="">
                            </span>
                        </div>
                        <a href="#" class="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
                    </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                    <div class="px-20 py-20 bg-white rounded-10">
                        <div class="d-flex gap-16 justify-content-between mb-12">
                            <div>
                                <span class="fw-normal text-14 text-neutral-400 mb-4">Total Earnings</span>
                                <h6 class="text-18 fw-semibold text-neutral-500 mb-0">$956,542.00</h6>
                            </div>
                            <span class="w-44 h-44 bg-success-600 rounded-circle justify-content-center align-items-center d-flex">
                                <img src="/assets/images/icons/dashbord-item6.png" alt="">
                            </span>
                        </div>
                        <a href="#" class="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
                    </div>
                </div>

                 <div class="col-xl-8">
                    <div class="bg-white px-20 py-20 rounded-10 z-n1">
                        <div class="d-flex align-items-center justify-content-between gpa-24">
                            <span class="text-16 fw-medium text-neutral-400">Overview Information</span>
                            <div class="d-flex align-items-center gap-8">
                                <span class="fw-medium text-12 text-neutral-400">Sort By :</span>
                                <select class="form-select text-12 w-auto pe-26 border-neutral-40 border bg-main-25 px-16 py-8 fw-normal">
                                    <option value="1">Last 2 years</option>
                                    <option value="1">Last 3 years</option>
                                    <option value="1">Last 4 years</option>
                                    <option value="1">Last 1 years</option>
                                </select>
                            </div>
                        </div>
                        <span class="mt-20 mb-20 border-bottom-solid d-inline-block w-100"></span>
                        <div id="react-chart">
                            
                        </div>
                        <div class="d-flex justify-content-center text-center">
                            <ul class="d-flex align-items-center gap-24">
                                <li class="text-14 fw-normal d-flex align-items-center gap-8 text-neutral-500">
                                    <span class="w-6 h-6 bg-main-600 rounded-circle z-1 flex-shrink-0"></span>
                                    Total Students
                                </li>
                                <li class="text-14 fw-normal d-flex align-items-center gap-8 text-neutral-500">
                                    <span class="w-6 h-6 bg-warning-600 rounded-circle z-1 flex-shrink-0"></span>
                                    Total Courses
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 

                 <div class="col-xl-4">
                    <div class="px-20 py-20 bg-white rounded-10 z-n1">
                        <div class="d-flex align-items-center justify-content-between gpa-24">
                            <span class="text-14 fw-normal text-neutral-500">Reports</span>
                            <div class="d-flex align-items-center gap-8">
                                <span class="fw-normal text-12 text-neutral-400">Sort By :</span>
                                <select class="form-select w-auto pe-26 border-neutral-40 border text-12 bg-main-25 px-16 py-8">
                                    <option value="1">Weekly</option>
                                    <option value="1">yearly</option>
                                    <option value="1">monthly</option>
                                    <option value="1">daly</option>
                                </select>
                            </div>
                        </div>
                        <span class="mt-20 mb-20 border-bottom-solid d-inline-block w-100"></span>
                        <div id="donutChart">
                        </div>
                        <span class="mt-20 mb-20 border-bottom-solid d-inline-block w-100"></span>
                        <div class="d-flex align-items-center flex-wrap gap-20">
                            <ul>
                                <li class="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12 mb-16">
                                    <span class="w-6 h-6 bg-primary-500 rounded-circle z-1"></span>
                                    Total Courses
                                </li>
                                <li class="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12">
                                    <span class="w-6 h-6 bg-purple-500 rounded-circle z-1"></span>
                                    Enrolled Courses
                                </li>
                            </ul>
                            <span class="h-50-px h-50-px bg-neutral-40 w-1"></span>
                            <ul>
                                <li class="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12 mb-16">
                                    <span class="w-6 h-6 bg-warning-700 rounded-circle z-1"></span>
                                    Active Courses
                                </li>
                                <li class="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12">
                                    <span class="w-6 h-6 bg-success-600 rounded-circle z-1"></span>
                                    Completed Courses
                                </li>
                            </ul>
                            <span class="h-50-px bg-neutral-40 w-1"></span>
                            <ul>
                                <li class="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12 mb-16">
                                    <span class="w-6 h-6 bg-primary-700 rounded-circle z-1"></span>
                                    Total Students
                                </li>
                                <li class="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12">
                                    <span class="w-6 h-6 bg-warning-500 rounded-circle z-1"></span>
                                    Total Earnings
                                </li>
                            </ul>
                        </div>
                        <span class="mt-20 border-bottom-solid d-inline-block w-100"></span>
                    </div>
                </div> 

                 <div class="col-xl-6">
                    <div class="px-24 py-24 bg-white rounded-10">
                        <div class="d-flex align-items-center justify-content-between mb-24">
                            <h6 class="mb-0 fw-medium text-16 text-neutral-500">Popular Instructor</h6>
                            <a href="#" class="text-12 fw-medium text-main-600 fw-medium hover-underline transition-03">View all</a>
                        </div>
                        <div>

                            <div class="overflow-x-auto">
                                <table id="example" class="display min-w-max">
                                    <thead>
                                        <tr class="bg-main-25 border-bottom flex-wrap">
                                            <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Instructor</th>
                                            <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Courses</th>
                                            <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Students</th>
                                            <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Reviews</th>
                                        </tr>
                                    </thead>
                                    <tbody>
        
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <img src="/assets/images/thumbs/testi-img2.png" alt="" class="w-32 h-32">
                                                    <span class="fw-medium text-14 text-neutral-500">Kathryn Murphy</span>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">17</td>
                                            <td class="py-22 text-14 fw-normal text-neutral-500 px-20 shadow-none">2132</td>
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                                                    <span class="text-20 text-warning-600">
                                                        <i class="ph-fill ph-star"></i>
                                                    </span>
                                                    4.8(55K+ Students)
                                                </div>
                                            </td>
                                        </tr>
                                        
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <img src="/assets/images/thumbs/user-two-img5.png" alt="" class="w-32 h-32">
                                                    <span class="fw-medium text-14 text-neutral-500">Leslie Alexander</span>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">6</td>
                                            <td class="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">234</td>
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                                                    <span class="text-20 text-warning-600">
                                                        <i class="ph-fill ph-star"></i>
                                                    </span>
                                                    4.8(55K+ Students)
                                                </div>
                                            </td>
                                        </tr>
        
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" class="w-32 h-32">
                                                    <span class="fw-medium text-14 text-neutral-500">Savannah Nguyen</span>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">12</td>
                                            <td class="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">113</td>
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                                                    <span class="text-20 text-warning-600">
                                                        <i class="ph-fill ph-star"></i>
                                                    </span>
                                                    4.8(55K+ Students)
                                                </div>
                                            </td>
                                        </tr>
        
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <img src="/assets/images/thumbs/user-two-img1.png" alt="" class="w-32 h-32">
                                                    <span class="fw-medium text-14 text-neutral-500">Ralph Edwards</span>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">13</td>
                                            <td class="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">231</td>
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                                                    <span class="text-20 text-warning-600">
                                                        <i class="ph-fill ph-star"></i>
                                                    </span>
                                                    4.8(55K+ Students)
                                                </div>
                                            </td>
                                        </tr>
        
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <img src="/assets/images/thumbs/testimonial-five-img3.png" alt="" class="w-32 h-32">
                                                    <span class="fw-medium text-14 text-neutral-500">Jane Cooper</span>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">8</td>
                                            <td class="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">190</td>
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                                                    <span class="text-20 text-warning-600">
                                                        <i class="ph-fill ph-star"></i>
                                                    </span>
                                                    4.8(55K+ Students)
                                                </div>
                                            </td>
                                        </tr>
        
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <img src="/assets/images/thumbs/reviewer-img4.png" alt="" class="w-32 h-32">
                                                    <span class="fw-medium text-14 text-neutral-500">Kristin Watson</span>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">1</td>
                                            <td class="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">121</td>
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                                                    <span class="text-20 text-warning-600">
                                                        <i class="ph-fill ph-star"></i>
                                                    </span>
                                                    4.8(55K+ Students)
                                                </div>
                                            </td>
                                        </tr>
        
                                        <tr class="hover-bg-neutral-20 border-neutral-25 border-bottom transition-03">
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <img src="/assets/images/thumbs/reviewer-img3.png" alt="" class="w-32 h-32">
                                                    <span class="fw-medium text-14 text-neutral-500">Wade Warren</span>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">5</td>
                                            <td class="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">623</td>
                                            <td class="py-22 px-20 shadow-none line-height-1">
                                                <div class="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                                                    <span class="text-20 text-warning-600">
                                                        <i class="ph-fill ph-star"></i>
                                                    </span>
                                                    4.8(55K+ Students)
                                                </div>
                                            </td>
                                        </tr>
        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> 

                 <div class="col-xl-6">
                    <div class="px-24 py-24 bg-white rounded-10">
                        <div class="d-flex align-items-center justify-content-between mb-24">
                            <h6 class="mb-0 fw-medium text-16 text-neutral-500">Recent Course</h6>
                            <a href="#" class="text-12 fw-medium text-main-600 hover-underline transition-03">View all</a>
                        </div>
                        <div>

                            <div class="overflow-x-auto">
                                <table id="example-two" class="display min-w-max">
                                    <thead>
                                        <tr class="bg-main-25 border-bottom border-neutral-30">
                                            <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Course Title | Hours</th>
                                            <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Total Lesson</th>
                                            <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Students</th>
                                        </tr>
                                    </thead>
                                    <tbody>
    
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 line-height-1 px-20 shadow-none">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0)">
                                                        <img src="/assets/images/thumbs/dashboard-img1.png" alt="" class="w-48 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-0 text-neutral-500">Vuejs Courses</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal text-neutral-500 py-22 line-height-1 px-20 shadow-none">10</td>
                                            <td class="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">193</td>
                                        </tr>
    
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 line-height-1 px-20 shadow-none">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0)">
                                                        <img src="/assets/images/thumbs/dashboard-img2.png" alt="" class="w-48 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-0 text-neutral-500">Swift Courses</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">16</td>
                                            <td class="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">193</td>
                                        </tr>
                                        
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 line-height-1 px-20 shadow-none">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0)">
                                                        <img src="/assets/images/thumbs/dashboard-img3.png" alt="" class="w-48 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-0 text-neutral-500">Objective C Courses</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">5</td>
                                            <td class="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">542</td>
                                        </tr>
    
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 line-height-1 px-20 shadow-none">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0)">
                                                        <img src="/assets/images/thumbs/dashboard-img4.png" alt="" class="w-48 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-0 text-neutral-500">NodeJS Courses</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">20</td>
                                            <td class="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">321</td>
                                        </tr>
    
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 line-height-1 px-20 shadow-none">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0)">
                                                        <img src="/assets/images/thumbs/dashboard-img5.png" alt="" class="w-48 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-0 text-neutral-500">CSS3 Courses</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">12</td>
                                            <td class="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">113</td>
                                        </tr>
    
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-22 line-height-1 px-20 shadow-none">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0)">
                                                        <img src="/assets/images/thumbs/dashboard-img6.png" alt="" class="w-48 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-0 text-neutral-500">Angular Courses</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">8</td>
                                            <td class="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">4734</td>
                                        </tr>
    
                                        <tr class="hover-bg-neutral-20 border-neutral-25 border-bottom transition-03">
                                            <td class="py-22 line-height-1 px-20 shadow-none">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0)">
                                                        <img src="/assets/images/thumbs/dashboard-img7.png" alt="" class="w-48 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-0 text-neutral-500">Jango Courses</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">7</td>
                                            <td class="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">472</td>
                                        </tr>
    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="col-xl-6">
                    <div class="px-24 py-24 bg-white rounded-10">
                        <div class="d-flex align-items-center justify-content-between mb-24">
                            <h6 class="mb-0 fw-medium text-16 text-neutral-500">Notifications</h6>
                            <a href="#" class="text-12 fw-medium text-main-600 hover-underline transition-03">View all</a>
                        </div>

                        <div>
                           <div class="overflow-x-auto">
                            <table id="example-three" class="display min-w-max">
                                <thead>
                                    <tr class="bg-main-25 border-bottom border-neutral-30">
                                        <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Notification | Time</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-20 px-20 shadow-none line-height-1">
                                            <div class="d-flex align-items-center gap-12">
                                                <a href="javascript:void(0) flex-shrink-0">
                                                    <img src="/assets/images/thumbs/dashbord-notification-img1.png" alt="" class="w-32 h-32">
                                                </a>
                                                <div>
                                                    <h6 class="fw-medium text-14 text-neutral-500 mb-3">Sarah just posted something new. Take a look!</h6>
                                                    <span class="fw-normal text-12 text-neutral-500">a minute ago</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-20 px-20 shadow-none line-height-1">
                                            <div class="d-flex align-items-center gap-12">
                                                <a href="javascript:void(0) flex-shrink-0">
                                                    <img src="/assets/images/thumbs/dashbord-notification-img2.png" alt="" class="w-32 h-32">
                                                </a>
                                                <div>
                                                    <h6 class="fw-medium text-14 text-neutral-500 mb-3">Trending content: 'Hidden Gems of the City.' You won't want to miss it!</h6>
                                                    <span class="fw-normal text-12 text-neutral-500">3 hours ago</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-20 px-20 shadow-none line-height-1">
                                            <div class="d-flex align-items-center gap-12">
                                                <a href="javascript:void(0) flex-shrink-0">
                                                    <img src="/assets/images/thumbs/dashbord-notification-img3.png" alt="" class="w-32 h-32">
                                                </a>
                                                <div>
                                                    <h6 class="fw-medium text-14 text-neutral-500 mb-3">Trending content: 'Hidden Gems of the City.' You won't want to miss it!</h6>
                                                    <span class="fw-normal text-12 text-neutral-500">3 weeks ago</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-20 px-20 shadow-none line-height-1">
                                            <div class="d-flex align-items-center gap-12">
                                                <a href="javascript:void(0) flex-shrink-0">
                                                    <img src="/assets/images/thumbs/dashbord-notification-img4.png" alt="" class="w-32 h-32">
                                                </a>
                                                <div>
                                                    <h6 class="fw-medium text-14 text-neutral-500 mb-3">Someone commented on your recent post 'Exploring the Wilderness': 'Amazing photos!</h6>
                                                    <span class="fw-normal text-12 text-neutral-500">1 months ago</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-20 px-20 shadow-none line-height-1">
                                            <div class="d-flex align-items-center gap-12">
                                                <a href="javascript:void(0) flex-shrink-0">
                                                    <img src="/assets/images/thumbs/dashbord-notification-img5.png" alt="" class="w-32 h-32">
                                                </a>
                                                <div>
                                                    <h6 class="fw-medium text-14 text-neutral-500 mb-3">We've shared a fresh article: '10 Tips for Healthy Living.' Check it out!</h6>
                                                    <span class="fw-normal text-12 text-neutral-500">3 months ago</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-20 px-20 shadow-none line-height-1">
                                            <div class="d-flex align-items-center gap-12">
                                                <a href="javascript:void(0) flex-shrink-0">
                                                    <img src="/assets/images/thumbs/dashbord-notification-img6.png" alt="" class="w-32 h-32">
                                                </a>
                                                <div>
                                                    <h6 class="fw-medium text-14 text-neutral-500 mb-3">Great news! Your content 'Epic Road Trip' is now featured on the homepage.</h6>
                                                    <span class="fw-normal text-12 text-neutral-500">5 months ago</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-20 px-20 shadow-none line-height-1">
                                            <div class="d-flex align-items-center gap-12">
                                                <a href="javascript:void(0) flex-shrink-0">
                                                    <img src="/assets/images/thumbs/dashbord-notification-img7.png" alt="" class="w-32 h-32">
                                                </a>
                                                <div>
                                                    <h6 class="fw-medium text-14 text-neutral-500 mb-3">Join the discussion on our article 'Eco-Friendly Living.' Share your thoughts!</h6>
                                                    <span class="fw-normal text-12 text-neutral-500">7 months ago</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                           </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6">
                    <div class="px-24 py-24 bg-white rounded-10">
                        <div class="d-flex align-items-center justify-content-between mb-24">
                            <h6 class="mb-0 fw-medium text-16 text-neutral-500">Notice Board</h6>
                            <a href="#" class="text-12 fw-medium text-main-600 hover-underline transition-03">View all</a>
                        </div>

                        <div>
                            <div class="overflow-x-auto">
                                <table id="example-four" class="display min-w-max">
                                    <thead>
                                        <tr class="bg-main-25 border-bottom border-neutral-30">
                                            <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Notice | Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
    
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-20 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0) flex-shrink-0">
                                                        <img src="/assets/images/thumbs/dashbord-notice-img1.png" alt="" class="w-32 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-3 text-neutral-500">Instructional Management Tools Software</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">a minute ago</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
    
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-20 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0) flex-shrink-0">
                                                        <img src="/assets/images/thumbs/dashbord-notice-img2.png" alt="" class="w-32 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-3 text-neutral-500">Software Maintenance and Support</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">3 hours ago</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-20 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0) flex-shrink-0">
                                                        <img src="/assets/images/thumbs/dashbord-notice-img3.png" alt="" class="w-32 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-3 text-neutral-500 text-line-1">Cloud computing capabilities to conduct a Zero Trust Pilot project</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">3 weeks ago</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
    
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-20 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0) flex-shrink-0">
                                                        <img src="/assets/images/thumbs/dashbord-notice-img4.png" alt="" class="w-32 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-3 text-neutral-500">Legal Library Software</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">1 months ago</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
    
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-20 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0) flex-shrink-0">
                                                        <img src="/assets/images/thumbs/dashbord-notice-img5.png" alt="" class="w-32 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-3 text-neutral-500">Judiciary Cloud Services </h6>
                                                        <span class="fw-normal text-12 text-neutral-500">3 months ago</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
    
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-20 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0) flex-shrink-0">
                                                        <img src="/assets/images/thumbs/dashbord-notice-img6.png" alt="" class="w-32 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-3 text-neutral-500">CIPS Personnel Tracking System (PTS) Integration</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">5 months ago</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
    
                                        <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                            <td class="py-20 px-20 shadow-none line-height-1">
                                                <div class="d-flex align-items-center gap-12">
                                                    <a href="javascript:void(0) flex-shrink-0">
                                                        <img src="/assets/images/thumbs/dashbord-notice-img7.png" alt="" class="w-32 h-32">
                                                    </a>
                                                    <div>
                                                        <h6 class="fw-medium text-14 mb-3 text-neutral-500 text-line-1">Cloud Operations, Security, Management and Optimization at Speed of Commercial (COSMOS)</h6>
                                                        <span class="fw-normal text-12 text-neutral-500">7 months ago</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="px-24 py-24 bg-white rounded-10">
                        <div class="d-flex align-items-center justify-content-between mb-24">
                            <h6 class="mb-0 fw-medium text-16 text-neutral-500">Total Feedbacks</h6>
                            <a href="#" class="text-12 fw-medium text-main-600 hover-underline transition-03">View all</a>
                        </div>
                        <div class="mb-24">

                            <div class="overflow-x-auto">
                                <div class="min-w-max">
                                    <div class="table-responsive"> 
                                              <table id="example-five" class="display nowrap" style="width:100%"><thead>
                                                <tr class="bg-main-25 border-bottom border-neutral-30">
                                                    <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Course Name</th>
                                                    <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Rating</th>
                                                    <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Enrolled</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                        
                                                <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">Automation System</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">8</td>
                                                </tr>
                        
                                                <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">Laboratory Expansion</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">13</td>
                                                </tr>
                        
                                                <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">Cleanroom Upgrade</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">24</td>
                                                </tr>
                        
                                                <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">Quality Control</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">30</td>
                                                </tr>
                        
                                                <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">Analytical Equipment</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">11</td>
                                                </tr>
                        
                                                <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">Vaccine Development</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">33</td>
                                                </tr>
                        
                                                <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">Packaging Line</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">40</td>
                                                </tr>
                        
                                                <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">IT Infrastructure</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">14</td>
                                                </tr>
                        
                                                <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">Clinical Trials</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">36</td>
                                                </tr>
                        
                                                <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">Clinical Trials</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">17</td>
                                                </tr>
                        
                                                <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">Cold Chain</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">22</td>
                                                </tr>
                        
                                                <tr class="hover-bg-neutral-20 transition-03">
                                                    <td class="py-28 px-20 shadow-none line-height-1">
                                                        <span class="fw-normal text-14 text-neutral-500">IT Infrastructure</span>
                                                    </td>
                                                    <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
                                                        <div>
                                                            <ul class="d-flex align-items-center gap-6">
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star"></i></li>
                                                                <li class="text-20 text-warning-600"><i class="ph-fill ph-star-half"></i></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td class="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">3</td>
                                                </tr>
                        
                                            </tbody>
                                        </table>
                                    </div>

                                 </div>
                            </div> 

                            


                        </div>

                        <div class="d-flex align-items-center gap-24 justify-content-between flex-wrap">
                            <div class="form-check form-switch d-flex align-items-center gap-12">
                                <input class="form-check-input focus-box-shadow w-60 h-32 line-height-1" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                <label class="form-check-label text-14 fw-normal text-neutral-500 line-height-1" for="flexSwitchCheckDefault">Dense</label>
                            </div>
                            <div class="d-flex align-items-center gap-40 flex-wrap">

                                <div class="d-flex align-items-center gap-16">
                                    <span class="fw-normal text-14 text-neutral-500">Rows per page:</span>
                                    <select class="form-select w-auto pe-32 text-14 fw-normal text-neutral-500 bg-transparent border-0">
                                        <option value="1">12</option>
                                        <option value="1">13</option>
                                        <option value="1">11</option>
                                        <option value="1">15</option>
                                    </select>
                                </div>

                                <div class="d-flex align-items-center gap-16">
                                    <span class="fw-normal text-14 text-neutral-500">1-12 of 100</span>
                                    <div class="d-flex align-items-center gpa-8">
                                        <span class="text-16 text-neutral-500">
                                            <i class="ph-bold ph-caret-left"></i>
                                        </span>
                                        <span class="text-16 text-neutral-500">
                                            <i class="ph-bold ph-caret-right"></i>
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
         <!-- =====dashbord body item end===== -->
       
          <!-- =========message profile footer start============== -->
<div class="bg-neutral-20 border-neutral-40 border-top px-24 py-16 mt-auto">
    <div class="d-flex align-items-center gap-24 justify-content-between flex-wrap">
        <p class="fw-medium text-14 text-neutral-500">
            Copyright ©2025 
            <a href="/admin-dashbord" class="text-main-600 fw-medium">EduAll</a>.
            All Rights Reserved
        </p>
        <div class="d-flex align-items-center gap-24">
            <a href="#" class="fw-medium text-14 text-neutral-500 hover-text-main-600">Privacy policy</a>
            <a href="#" class="fw-medium text-14 text-neutral-500 hover-text-main-600">Privacy policy</a>
        </div>
    </div>
</div>
<!-- =========message profile footer end============== -->
        </div>

    </div>
</div>
<!-- ==========admin dashbord end============ -->


    <!-- Jquery js -->
    <!-- -->
    <!-- Bootstrap Bundle Js -->
    <!-- select2 Js -->
    <!-- Phosphor Icon Js -->
    <!-- Slick js -->
    <!-- Slick js -->
    <!-- magnific popup -->
    <!-- Jquery Ui js -->
    <!-- marquee js -->
    <!-- react charts-->
    <!-- plyr Js -->
    <!-- vanilla Tilt -->
    <!-- Editor js Toolbar Start -->
    <!-- dataTables -->
    <!-- Tilt -->
    <!-- wow -->
    
    <!-- main js -->`
      }}
    />
  );
}
