import { Link } from "react-router-dom";

export default function Lab2() {
  return (
    <div id="wd-lab2" style={{ padding: '20px' }}>
      <h1>Lab 2 - Cascading Style Sheets</h1>
      <h3>Siddhant Narode</h3>
      <h3>Section CS5610.60924.202560</h3>
      <h3>GitHub Link</h3>
      <a href="https://github.com/MondayMonster/kanbaz-react-web-app" target="_blank">View Source on GitHub</a>

      <h2>Labs</h2>
        <ul>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/labs/lab2">Lab 2</Link><br /></li>
        <li><Link to="/Kambaz">Kambaz App</Link></li>
        </ul>      
      <hr />

      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue",
                  color: "white" }}>
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>

      <h3>CSS Exercises</h3>
      <ul>
        <li><Link to="/labs/lab2/id-selectors">ID Selectors</Link></li>
        <li><Link to="/labs/lab2/class-selectors">Class Selectors</Link></li>
        <li><Link to="/labs/lab2/document-structure">Document Structure</Link></li>
        <li><Link to="/labs/lab2/foreground-color">Foreground Color</Link></li>
        <li><Link to="/labs/lab2/background-color">Background Color</Link></li>
        <li><Link to="/labs/lab2/borders">Borders</Link></li>
        <li><Link to="/labs/lab2/margins">Margins</Link></li>
        <li><Link to="/labs/lab2/corners">Corners</Link></li>
        <li><Link to="/labs/lab2/dimensions">Dimensions</Link></li>
        <li><Link to="/labs/lab2/relative-position">Relative Position</Link></li>
        <li><Link to="/labs/lab2/absolute-position">Absolute Position</Link></li>
        <li><Link to="/labs/lab2/fixed-position">Fixed Position</Link></li>
        <li><Link to="/labs/lab2/z-index">Z Index</Link></li>
        <li><Link to="/labs/lab2/floating-images">Floating Images</Link></li>
        <li><Link to="/labs/lab2/grid-layout">Grid Layout</Link></li>
        <li><Link to="/labs/lab2/flex-layout">Flex Layout</Link></li>
        <li><Link to="/labs/lab2/react-icons">React Icons</Link></li>
      </ul>

    </div>
  );
}
