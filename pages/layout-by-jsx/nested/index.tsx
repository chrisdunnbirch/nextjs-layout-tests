import { NextLayoutPage } from "next";
// Layouts
import { getLayoutFooNested } from "layouts/foo/foo_nested";

const LayoutByJsxNestedPage: NextLayoutPage = () => (
	<div className="layout_by_jsx">Layout by JSX Nested</div>
);
LayoutByJsxNestedPage.getLayout = getLayoutFooNested;

export default LayoutByJsxNestedPage;
