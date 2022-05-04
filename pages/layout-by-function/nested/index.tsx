import { NextLayoutPage } from "next";
// Layouts
import { FooLayout } from "layouts/foo";
import { FooNestedLayout } from "layouts/foo/foo_nested";

const LayoutByFunctionNestedPage: NextLayoutPage = () => (
	<div className="layout_by_function_nested">Layout by Function Nested</div>
);
LayoutByFunctionNestedPage.getLayout = (page) => (
	<FooLayout>
		<FooNestedLayout>
			{page}
		</FooNestedLayout>
	</FooLayout>
);

export default LayoutByFunctionNestedPage;
