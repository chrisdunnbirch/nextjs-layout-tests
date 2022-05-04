import { FC, ReactNode } from "react";
import { NextLayout } from "next";
// Layouts
import { getLayoutFoo } from "layouts/foo";

interface FooNestedLayoutProps {
	children: ReactNode;
}

export const FooNestedLayout: FC<FooNestedLayoutProps> = ({ children }) => (
	<div className="foo_nested_layout">{children}</div>
);

export const getLayoutFooNested: NextLayout = (page) => getLayoutFoo(
	<FooNestedLayout>{page}</FooNestedLayout>
);
