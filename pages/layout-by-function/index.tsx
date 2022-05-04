import { NextLayoutPage } from "next";
// Layouts
import { FooLayout } from "layouts/foo";

const LayoutByFunctionPage: NextLayoutPage = () => (
	<div className="layout_by_function">Layout by Function</div>
);
LayoutByFunctionPage.getLayout = (page) => <FooLayout>{page}</FooLayout>;

export default LayoutByFunctionPage;
