import { Link } from 'react-router-dom';

export default function Lab1() {
  const showAlert = () => alert('Button Clicked!');

  return (
    <div id="wd-lab1" style={{ padding: '20px' }}>
      <h1>Lab 1 - HTML Elements Demo</h1>
      <h3>Sidhdant Narode</h3>
      <h3>Section CS5610.60924.202560</h3>
      <h3>GitHub Link</h3>
      <a href="https://github.com/MondayMonster/kanbaz-react-web-app" target="_blank">View Source on GitHub</a>

      <h2>Go To</h2>
        <ul>
        <li><Link to="/Kambaz">Kambaz App</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        </ul>      
      <hr />

      <h2>Heading Tags</h2>
      <p>Ever since I created my first simple webpage for a school project, I've been fascinated by the ability to build something visible and interactive from scratch. Web development allows me to blend creativity and logic, which is why I want to pursue it further.</p>

      <h2>Paragraph Tag</h2>
      <p>I am Narode, someone who enjoys an active lifestyle. Football has always been my favorite sport, and there's nothing like the thrill of playing outdoors with friends. When I'm not kicking a ball around, you might find me curled up with a good book or exploring nature trails.</p>

      <h2>Lists</h2>
      <h3>Ordered List (Making a Brookie)</h3>
      <ol>
        <li>Preheat your oven to 350°F (175°C).</li>
        <li>Prepare cookie dough and brownie batter separately.</li>
        <li>Layer cookie dough in a baking pan.</li>
        <li>Pour brownie batter on top.</li>
        <li>Bake for about 25 minutes.</li>
        <li>Let it cool, slice, and serve.</li>
      </ol>

      <h3>Unordered List (Favorite Books)</h3>
      <ul>
        <li>The Huntress by Kate Quinn</li>
        <li>More Days at the Morisaki Bookshop by Satoshi Yagisawa</li>
        <li>Theodore Boone by John Grisham</li>
      </ul>
      
      <h2>Table Example (Grades)</h2>
      <table border={1}>
        <thead>
          <tr><th>Assignment</th><th>Date</th><th>Topic</th><th>Score</th></tr>
        </thead>
        <tbody>
          <tr><td>Q3</td><td>2025-03-10</td><td>HTML Basics</td><td>95</td></tr>
          <tr><td>Q4</td><td>2025-04-15</td><td>CSS Fundamentals</td><td>88</td></tr>
          <tr><td>Q5</td><td>2025-05-15</td><td>JavaScript Intro</td><td>80</td></tr>
          <tr><td>Q6</td><td>2025-06-15</td><td>React Basics</td><td>84</td></tr>
          <tr><td>Q7</td><td>2025-07-15</td><td>React Router</td><td>86</td></tr>
          <tr><td>Q8</td><td>2025-08-15</td><td>Redux Overview</td><td>87</td></tr>
          <tr><td>Q9</td><td>2025-09-15</td><td>Node.js Basics</td><td>88</td></tr>
          <tr><td>Q10</td><td>2025-10-01</td><td>MongoDB Intro</td><td>92</td></tr>
          <tr><td colSpan={3}><strong>Average Score</strong></td><td><strong>87.5</strong></td></tr>
        </tbody>
      </table>

      <h2>Images</h2>
      <p>This is me in my elements.</p>
      <img src="/images/me.jpeg" alt="Me" width="150"/>

      <p>And this a cat meme I saw on the day of making this assignmnet.</p>
      <img src="/images/catmeme.jpg" alt="Cat Meme" width="150"/>

      <h2>Forms</h2>
      Username: <input placeholder="Username" /><br/>
      Password: <input type="password" placeholder="Password" /><br/>
      First Name: <input placeholder="First Name" defaultValue="Narode"/><br/>
      Last Name: <input placeholder="Last Name" defaultValue="Doe"/><br/>
      Email: <input type="email" defaultValue="narode@example.com"/><br/>
      Salary: <input type="number" placeholder="Salary"/><br/>
      DOB: <input type="date" defaultValue="2000-01-01"/><br/>

      Description:<br/>
      <textarea defaultValue="About me..."></textarea><br/>

      File upload: <input type="file"/><br/>

      <h3>Favorite Genre (Radio)</h3>
      <input type="radio" name="genre"/> Comedy<br/>
      <input type="radio" name="genre"/> Drama<br/>
      <input type="radio" name="genre"/> SciFi<br/>
      <input type="radio" name="genre"/> Fantasy<br/>

      <h3>Favorite Genres (Checkbox)</h3>
      <input type="checkbox"/> Comedy<br/>
      <input type="checkbox"/> Drama<br/>
      <input type="checkbox"/> SciFi<br/>
      <input type="checkbox"/> Fantasy<br/>

      Dropdown (Single):
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
      </select><br/>

      Dropdown (Multiple):
      <select multiple>
        <option>Option A</option>
        <option>Option B</option>
      </select><br/>

      Rating: <input type="range" min="0" max="5"/><br/>

      <button onClick={showAlert}>Click me!</button><br/>


    </div>
  );
}
