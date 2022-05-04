import { NextLayoutPage } from "next";
// Layouts
import { getLayoutFoo } from "layouts/foo";

const LayoutByJsxPage: NextLayoutPage = () => (
	<div className="layout_by_jsx">Layout by JSX</div>
);
LayoutByJsxPage.getLayout = getLayoutFoo;

export default LayoutByJsxPage;
