import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import ProtectedRoute from "./Account/ProtectedRoute";
import "./styles.css";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import Session from "./Account/Session";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const findCoursesForUser = async () => {
    try {
      // Add a check for currentUser before accessing _id
      if (!currentUser) {
        console.log("No current user available.");
        setCourses([]);
        return;
      }
      
      // Use a safer approach with error handling
      const courses = await userClient.findCoursesForUser(currentUser._id || "current");
      if (!courses || courses.length === 0) {
        console.log("No courses found for this user.");
        setCourses([]);
      } else {
        setCourses(courses);
      }    
    } catch (error) {
      console.log("Failed to fetch courses:", error);
      setCourses([]); // Ensure courses state is set even on error
    }

  };
  // fetch all the courses in database
  const fetchAllCourses = async () => {
    try {
      // Add a check for currentUser before accessing _id
      if (!currentUser) {
        console.log("No current user available for fetching all courses.");
        setCourses([]);
        return;
      }
      
      const allCourses = await courseClient.fetchAllCourses();
      // Use a safer approach to get enrolled courses
      const enrolledCourses = await userClient.findCoursesForUser(currentUser._id || "current");
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error("Error fetching all courses:", error);
      setCourses([]); // Ensure courses state is set even on error
    }
  };


 useEffect(() => {
    if (enrolling) {
      fetchAllCourses();
    } else {
      findCoursesForUser();
    }
    // console.log("courses: ", courses);
  }, [currentUser, enrolling]);

    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (!currentUser || !currentUser._id) {
      console.error("Cannot update enrollment: No user ID available");
      return;
    }
    
    try {
      if (enrolled) {
        await userClient.enrollIntoCourse(currentUser._id, courseId);
      } else {
        await userClient.unenrollFromCourse(currentUser._id, courseId);
      }
      setCourses(
        courses.map((course) => {
          if (course._id === courseId) {
            return { ...course, enrolled: enrolled };
          } else {
            return course;
          }
        })
      );
    } catch (error) {
      console.error("Error updating enrollment:", error);
    }
  };

const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
