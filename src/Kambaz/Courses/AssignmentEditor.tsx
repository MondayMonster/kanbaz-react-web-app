export default function AssignmentEditor() {
  return (
    <div>
      <h3>Edit Assignment</h3>
      <input placeholder="Assignment Name" defaultValue="Assignment 1"/><br/>
      <textarea defaultValue="Description here"/><br/>
      <input type="number" placeholder="Points" defaultValue={100}/><br/>
      <input type="date" defaultValue="2025-12-01"/><br/>
      <button>Save</button>
    </div>
  );
}
