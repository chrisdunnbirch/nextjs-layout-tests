import { ReactNode } from "react";
// Next
import type {
	NextComponentType,
	NextLayoutAppComponent,
	NextPageContext,
} from "next";
import type { AppProps } from "next/app";

// Why? https://github.com/vercel/next.js/discussions/18502#discussioncomment-118572

declare module "next" {
	type NextLayout = (page: ReactNode) => ReactNode;

	type NextLayoutPage<P = UnknownObject, IP = P> = NextComponentType<
		NextPageContext,
		IP,
		P
		> & {
		getLayout: NextLayout;
	};

	type NextLayoutAppComponent<P = UnknownObject> = NextComponentType<
		NextPageContext,
		any,
		P
		> & {
		getLayout?: NextLayout;
	};
}

declare module "next/app" {
	type AppLayoutProps<P = UnknownObject> = AppProps & {
		Component: NextLayoutAppComponent;
	};
}
