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


<!-- ==========message dashbord start=========== -->
<div class="dashbord bg-main-25">
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

         <div class="dashbord-body my-profile flex-grow-1">
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
        
            <!-- ============Feedbacks start============ -->
                <div class="px-24 py-24">
            
                <div class="px-24 py-24 bg-white rounded-10">
                    <div class="mb-24">
                        <h6 class="fw-medium text-16 text-neutral-500 mb-24">My Quiz Attempts</h6>
                        <div class="row gy-4">

                            <div class="col-lg-4 col-md-2">
                                <div class="">
                                    <span class="fw-normal text-14 text-neutral-500 mb-12">Courses</span>
                                    <select class="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal  text-neutral-700 line-height-105">
                                        <option value="1">All</option>
                                        <option value="2">Everyone</option>
                                        <option value="3">One</option>  
                                        <option value="4">Two</option>  
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-2">
                                <div class="">
                                    <span class="fw-normal text-14 text-neutral-500 mb-12">Sort By :</span>
                                    <select class="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal  text-neutral-700 line-height-105">
                                        <option value="1">Default</option>
                                        <option value="2">date</option>
                                        <option value="3">Category</option>
                                        <option value="4">Rating</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-2">
                                <div class="">
                                    <span class="fw-normal text-14 text-neutral-500 mb-12">Sort By Offer :</span>
                                    <select class="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal  text-neutral-700 line-height-105">
                                        <option value="1">Free</option>
                                        <option value="2">Basic</option>
                                        <option value="3">Standard</option>
                                        <option value="4">Premium</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="mb-24">

                        <div class="overflow-y-auto">
                            <table id="example-five" class="display min-w-max w-100">
                                <thead>
                                    <tr class="bg-main-25 border-bottom border-neutral-30">
                                        <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Quiz</th>
                                        <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Date</th>
                                        <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Qus</th>
                                        <th class="text-12 fw-medium text-neutral-500 py-16 px-20">TM</th>
                                        <th class="text-12 fw-medium text-neutral-500 py-16 px-20">CA</th>
                                        <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Result</th>
                                        <th class="text-12 fw-medium text-neutral-500 py-16 px-20">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Financial Planning for Millennials</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Brooklyn Simmons</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">4</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">7</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">1</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Photography for Beginners</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Ralph Edwards</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">4</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">4</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">8</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Adobe Photoshop Essentials</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Cameron Williamson</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">9</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">3</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">1</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Leadership and Management Essentials</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Kristin Watson</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">6</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">1</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">2</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Web Development Bootcamp</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Annette Black</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">4</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">1</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">6</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Digital Marketing Fundamentals</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Courtney Henry</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">4</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">3</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">2</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Digital Marketing 101</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Bessie Cooper</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">2</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">3</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">5</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Introduction to Python Programming</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Albert Flores</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">6</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">3</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">8</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Social Media Strategy</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Esther Howard</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">8</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">6</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">9</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Project Management Fundamentals</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Jane Cooper</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">2</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">5</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">7</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Social Media Strategy</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Jacob Jones</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">9</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">8</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">6</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr class="hover-bg-neutral-20 border-bottom transition-03">
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <h4 class="fw-medium text-14 text-neutral-500 mb-1">Creative Writing Essentials</h4>
                                            <span class="fw-normal text-12 text-neutral-500">Cody Fisher</span>
                                        </td>
                                        <td class="text-14 fw-normal py-28 px-20 shadow-none line-height-105">January 20, 2025</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">1</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">6</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">5</td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <span class="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                                        </td>
                                        <td class="py-28 px-20 shadow-none line-height-105">
                                            <div class="d-flex align-items-center gap-12  justify-content-end">
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" class="text-24 text-neutral-500"><i class="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                </tbody>
                            </table>
                        </div>

                    </div>
        
                    <div class="d-flex align-items-center gap-24 justify-content-between flex-wrap">
                        <div class="form-check form-switch">
                            <input class="form-check-input focus-box-shadow" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                            <label class="form-check-label text-14 fw-normal text-neutral-500" for="flexSwitchCheckDefault">Dense</label>
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
                                    <span class="text-20 text-neutral-500">
                                        <i class="ph-bold ph-caret-left"></i>
                                    </span>
                                    <span class="text-20 text-neutral-500">
                                        <i class="ph-bold ph-caret-right"></i>
                                    </span>
                                </div>
                            </div>
        
                        </div>
        
                    </div>
        
                </div>
                </div>
            <!-- ============Feedbacks end============ -->

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
        <!-- ==========message dashbord end============ -->
    </div>
</div>



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
