import "./index.css";

export default function CssDimensions() {
  return (
<div id="wd-css-dimensions" className="container p-2 border border-secondary mt-3">
  <h2>Dimensions</h2>
  <div>
    <div className="wd-dimension-portrait wd-bg-color-yellow">
      Portrait
    </div>
    <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
      Landscape
    </div>
    <div className="wd-dimension-square wd-bg-color-red wd-fg-color-white">
      Square
    </div>
  </div>
</div>

  );
}
