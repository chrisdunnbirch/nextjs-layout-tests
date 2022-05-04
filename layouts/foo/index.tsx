import { FC, ReactNode } from "react";
import { NextLayout } from "next";

interface FooLayoutProps {
	children: ReactNode;
}

export const FooLayout: FC<FooLayoutProps> = ({ children }) => (
	<div className="foo_layout">{children}</div>
);

export const getLayoutFoo: NextLayout = (page) => (
	<FooLayout>{page}</FooLayout>
);
