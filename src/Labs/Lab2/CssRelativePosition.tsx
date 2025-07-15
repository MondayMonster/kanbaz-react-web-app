import "./index.css";

export default function CssRelativePosition() {
  return (
<div id="wd-css-position-relative" className="container p-2 border border-secondary mt-3">
  <h2>Relative</h2>
  <div className="wd-bg-color-gray">
    <div className="wd-bg-color-yellow wd-dimension-portrait">
      <div className="wd-pos-relative-nudge-down-right">
        Portrait
      </div>
    </div>

    <div className="wd-pos-relative-nudge-up-right 
                    wd-bg-color-blue wd-fg-color-white 
                    wd-dimension-landscape">
      Landscape
    </div>

    <div className="wd-bg-color-red wd-fg-color-white 
                    wd-dimension-square">
      Square
    </div>
  </div>
</div>

  );
}
