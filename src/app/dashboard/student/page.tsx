import styles from "./student.module.css";

export default function StudentDashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Student Dashboard</h1>

      {/* Available Courses */}
      <div className={styles.card}>
        <h2>📚 Available Courses</h2>

        <ul>
          <li>CS101 - Introduction to Programming</li>
          <li>CS201 - Data Structures</li>
          <li>CS301 - Database Systems</li>
        </ul>

        <button className={styles.btn}>Enroll Selected Course</button>
      </div>

      {/* Enrolled Courses */}
      <div className={styles.card}>
        <h2>📖 My Courses</h2>

        <ul>
          <li>CS101 - Enrolled</li>
          <li>CS201 - Enrolled</li>
        </ul>
      </div>

      {/* Grades */}
      <div className={styles.card}>
        <h2>📝 My Grades</h2>

        <ul>
          <li>CS101 - A</li>
          <li>CS201 - B+</li>
        </ul>
      </div>

      {/* GPA */}
      <div className={styles.card}>
        <h2>🎯 GPA</h2>
        <p className={styles.gpa}>3.75</p>
      </div>
    </div>
  );
}