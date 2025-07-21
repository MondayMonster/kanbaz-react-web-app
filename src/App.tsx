import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Lab1 from './Labs/Lab1';
import Kambaz from './Kambaz/';
import Lab2 from "./Labs/Lab2/Lab2"; // Lab 2 Landing Page
import Lab3 from "./Labs/Lab3"; // Lab 3 Landing Page
import 'bootstrap/dist/css/bootstrap.min.css';


// Lab 2 Exercises
import CssIdSelectors from "./Labs/Lab2/CssIdSelectors";
import CssClassSelectors from "./Labs/Lab2/CssClassSelectors";
import CssDocumentStructure from "./Labs/Lab2/CssDocumentStructure";
import CssForegroundColor from "./Labs/Lab2/CssForegroundColor";
import CssBackgroundColor from "./Labs/Lab2/CssBackgroundColor";
import CssBorders from "./Labs/Lab2/CssBorders";
import CssMargins from "./Labs/Lab2/CssMargins";
import CssCorners from "./Labs/Lab2/CssCorners";
import CssDimensions from "./Labs/Lab2/CssDimensions";
import CssRelativePosition from "./Labs/Lab2/CssRelativePosition";
import CssAbsolutePosition from "./Labs/Lab2/CssAbsolutePosition";
import CssFixedPosition from "./Labs/Lab2/CssFixedPosition";
import CssZIndex from "./Labs/Lab2/CssZIndex";
import CssFloatingImages from "./Labs/Lab2/CssFloatingImages";
import CssGridLayout from "./Labs/Lab2/CssGridLayout";
import CssFlexLayout from "./Labs/Lab2/CssFlexLayout";
import ReactIconsDemo from "./Labs/Lab2/ReactIconsDemo";
import BootstrapGridLayouts from './Labs/Lab2/BootStrapGridLayout';
import ResponsiveGridDemo from "./Labs/Lab2/ResponsiveGridDemo.tsx";
import BootstrapTablesDemo from "./Labs/Lab2/BootstrapTableDemo.tsx";
import BootstrapListsDemo from "./Labs/Lab2/BootstrapListDemo.tsx";
import BootstrapFormsDemo from "./Labs/Lab2/BootstrapFormsDemo.tsx"; 
import BootstrapTabsAndCardsDemo from "./Labs/Lab2/BootstrapTabsAndCardsDemo.tsx"; 
export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Redirect base to Lab 1 */}
        <Route path="/" element={<Navigate to="/labs/lab1" replace />} />

        {/* Lab 1 Landing */}
        <Route path="/labs/lab1" element={<Lab1 />} />

        {/* Lab 2 Landing */}
        <Route path="/labs/lab2" element={<Lab2 />} />

        {/* Lab 3 Exercises */}
        <Route path="/labs/lab3/*" element={<Lab3 />} />

        {/* Kambaz Application */}
        <Route path="/kambaz/*" element={<Kambaz />} />

        {/* Lab 2 Exercises */}
        <Route path="/labs/lab2/id-selectors" element={<CssIdSelectors />} />
        <Route path="/labs/lab2/class-selectors" element={<CssClassSelectors />} />
        <Route path="/labs/lab2/document-structure" element={<CssDocumentStructure />} />
        <Route path="/labs/lab2/foreground-color" element={<CssForegroundColor />} />
        <Route path="/labs/lab2/background-color" element={<CssBackgroundColor />} />
        <Route path="/labs/lab2/borders" element={<CssBorders />} />
        <Route path="/labs/lab2/margins" element={<CssMargins />} />
        <Route path="/labs/lab2/corners" element={<CssCorners />} />
        <Route path="/labs/lab2/dimensions" element={<CssDimensions />} />
        <Route path="/labs/lab2/relative-position" element={<CssRelativePosition />} />
        <Route path="/labs/lab2/absolute-position" element={<CssAbsolutePosition />} />
        <Route path="/labs/lab2/fixed-position" element={<CssFixedPosition />} />
        <Route path="/labs/lab2/z-index" element={<CssZIndex />} />
        <Route path="/labs/lab2/floating-images" element={<CssFloatingImages />} />
        <Route path="/labs/lab2/grid-layout" element={<CssGridLayout />} />
        <Route path="/labs/lab2/flex-layout" element={<CssFlexLayout />} />
        <Route path="/labs/lab2/react-icons" element={<ReactIconsDemo />} />
        <Route path="/labs/lab2/bootstrap-grids" element={<BootstrapGridLayouts />} />
        <Route path="/labs/lab2/responsive" element={<ResponsiveGridDemo />} />
        <Route path="/labs/lab2/bootstrap-tables" element={<BootstrapTablesDemo />} />      
        <Route path="/labs/lab2/bootstrap-lists" element={<BootstrapListsDemo />} />
        <Route path="/labs/lab2/bootstrap-forms" element={<BootstrapFormsDemo />} />
        <Route path="/labs/lab2/bootstrap-tabs-cards" element={<BootstrapTabsAndCardsDemo />} />
      </Routes>
    </HashRouter>
  );
}
