import styles from "./faculty.module.css";

export default function FacultyDashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Faculty Dashboard</h1>

      {/* Assign Course */}
      <div className={styles.card}>
        <h2>📚 Assign Course</h2>

        <form>
          <input type="text" placeholder="Course Code" />
          <input type="text" placeholder="Course Title" />
          <button type="submit">Assign Course</button>
        </form>
      </div>

      {/* View Assigned Courses */}
      <div className={styles.card}>
        <h2>📖 Assigned Courses</h2>

        <ul>
          <li>CS101 - Introduction to Programming</li>
          <li>CS201 - Data Structures</li>
        </ul>
      </div>

      {/* Assign Grade */}
      <div className={styles.card}>
        <h2>📝 Assign Grade</h2>

        <form>
          <input type="text" placeholder="Student ID" />
          <input type="text" placeholder="Course Code" />

          <select>
            <option value="">Select Grade</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>F</option>
          </select>

          <button type="submit">Submit Grade</button>
        </form>
      </div>
    </div>
  );
}