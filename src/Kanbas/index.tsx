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
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
 const fetchCourses = async () => {
    let courses = [];
    try {
      courses = await userClient.findMyCourses();
    } catch (error) {
      console.error(error);
    }
    setCourses(courses);
    // Call enrollmentsReducer to set current user's enrollment.
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  // fetch all the courses in database
  const fetchAllCourses = async () => {
    let allCourses = [];
    try {
      allCourses = await courseClient.fetchAllCourses();
    } catch (error) {
      console.error(error);
    }
    setAllCourses(allCourses);
  };
  useEffect(() => {
    fetchAllCourses();
  }, [currentUser]);

  const enrollCurrentCourse = async (userId: string, courseId: string) => {
    await userClient.addEnrollment(userId, courseId);
    fetchCourses();
  };

  const unenrollCurrentCourse = async (userId: string, courseId: string) => {
    await userClient.deleteEnrollment(userId, courseId);
    fetchCourses();
  };

const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
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
                    allCourses={allCourses}
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    enrollCurrentCourse={enrollCurrentCourse}
                    unenrollCurrentCourse={unenrollCurrentCourse}
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
