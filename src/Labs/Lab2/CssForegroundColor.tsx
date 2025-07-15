import "./index.css";

export default function CssForegroundColor() {
  return (
    <div id="wd-css-colors" className="container p-2 border border-secondary mt-3"> 
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but
        <span className="wd-fg-color-green"> this text is green</span>
      </p>
    </div>
  );
}
