"use client";
import Link from "next/link";
import courseData from "../data/musicList.json";
const FeauturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course) => course.isFeatured === true
  );
  // console.log("The list of featured courses", featuredCourses);
  return (
    <>
      <div className="py-12 bg-gray-900">
        <div>
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              FEATURED COURSES
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Learn With the Best-iop dfd i know h ui
            </p>
          </div>
        </div>
        <div>2</div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-white sm:text-xl bg-white hover:bg-gray-100 transition duration-200 text-sm"
          >
            View All courses
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeauturedCourses;
