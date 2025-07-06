const buttonStyle = {
  padding: "6px 12px",
  margin: "4px 0",
  fontSize: "14px",
  display: "block",
  width: "100%",
  maxWidth: "200px",
};

export default function CourseStatus() {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "220px" }}>
      <h3>Course Status</h3>
      <button style={buttonStyle}>Unpublish</button>
      <button style={buttonStyle}>Publish</button>

      <button style={buttonStyle}>Import Existing Content</button>
      <button style={buttonStyle}>Import from Commons</button>
      <button style={buttonStyle}>Choose Home Page</button>
      <button style={buttonStyle}>View Course Stream</button>
      <button style={buttonStyle}>New Announcement</button>
      <button style={buttonStyle}>New Analytics</button>
      <button style={buttonStyle}>View Course Notifications</button>
    </div>
  );
}
