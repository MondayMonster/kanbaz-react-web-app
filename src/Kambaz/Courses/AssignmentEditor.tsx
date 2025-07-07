// src/Kambaz/Courses/AssignmentEditor.tsx
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();

  const [title, setTitle] = useState("A1 - ENV + HTML");
  const [description, setDescription] = useState("Build a page using HTML5 tags.");
  const [points, setPoints] = useState(100);
  const [group, setGroup] = useState("Assignments");
  const [gradingType, setGradingType] = useState("Percentage");
  const [submissionType, setSubmissionType] = useState("Online");
  const [entryOptions, setEntryOptions] = useState<string[]>(["Text Entry", "Website URL"]);
  const [assignTo, setAssignTo] = useState("Everyone");
  const [dueDate, setDueDate] = useState("2025-05-13");
  const [availableFrom, setAvailableFrom] = useState("2025-05-06");
  const [availableUntil, setAvailableUntil] = useState("2025-05-20");

  const toggleOption = (option: string) => {
    setEntryOptions(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Edit Assignment - {title}</h2>
      <form>
        <label>Assignment Name:<br />
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <br /><br />

        <label>Description:<br />
          <textarea value={description} onChange={e => setDescription(e.target.value)} rows={5} cols={50} />
        </label>
        <br /><br />

        <label>Points:<br />
          <input type="number" value={points} onChange={e => setPoints(Number(e.target.value))} />
        </label>
        <br /><br />

        <label>Assignment Group:<br />
          <select value={group} onChange={e => setGroup(e.target.value)}>
            <option>Assignments</option>
            <option>Quizzes</option>
            <option>Exams</option>
            <option>Project</option>
          </select>
        </label>
        <br /><br />

        <label>Display Grade as:<br />
          <select value={gradingType} onChange={e => setGradingType(e.target.value)}>
            <option>Percentage</option>
            <option>Points</option>
            <option>Complete/Incomplete</option>
            <option>Letter Grade</option>
          </select>
        </label>
        <br /><br />

        <label>Submission Type:<br />
          <select value={submissionType} onChange={e => setSubmissionType(e.target.value)}>
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </select>
        </label>
        <br /><br />

        <fieldset>
          <legend>Online Entry Options:</legend>
          {["Text Entry", "Website URL", "Media Recordings", "File Uploads"].map(option => (
            <label key={option} style={{ display: "block" }}>
              <input
                type="checkbox"
                checked={entryOptions.includes(option)}
                onChange={() => toggleOption(option)}
              /> {option}
            </label>
          ))}
        </fieldset>
        <br />

        <label>Assign To:<br />
          <input type="text" value={assignTo} onChange={e => setAssignTo(e.target.value)} />
        </label>
        <br /><br />

        <label>Due Date:<br />
          <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        </label>
        <br /><br />

        <label>Available From:<br />
          <input type="date" value={availableFrom} onChange={e => setAvailableFrom(e.target.value)} />
        </label>
        <br /><br />

        <label>Available Until:<br />
          <input type="date" value={availableUntil} onChange={e => setAvailableUntil(e.target.value)} />
        </label>
        <br /><br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
