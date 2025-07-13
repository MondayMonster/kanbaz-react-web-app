import "./index.css";

export default function CssGridLayout() {
  return (
<div id="wd-css-grid-layout">
  <h2>Grid layout</h2>

  {/* Half and Half */}
  <div className="wd-grid-row">
    <div className="wd-grid-col-half-page wd-bg-color-yellow">
      <h3>Left half</h3>
    </div>
    <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
      <h3>Right half</h3>
    </div>
  </div>

  {/* One-third and Two-thirds */}
  <div className="wd-grid-row">
    <div className="wd-grid-col-third-page wd-bg-color-green wd-fg-color-white">
      <h3>Left third</h3>
    </div>
    <div className="wd-grid-col-two-thirds-page wd-bg-color-red wd-fg-color-white">
      <h3>Right two-thirds</h3>
    </div>
  </div>

  {/* Left sidebar - Main - Right sidebar */}
  <div className="wd-grid-row">
    <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
      <h3>Sidebar</h3>
      <p>This is the left sidebar</p>
    </div>
    <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
      <h3>Main content</h3>
      <p>This is the main content area</p>
    </div>
    <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
      <h3>Sidebar</h3>
      <p>This is the right sidebar</p>
    </div>
  </div>
</div>

  );
}
