import { useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import classNames from "classnames";

import Navbar from "./Navbar";

const Layout = ({ children, title, footer = true, dark = false }) => {
	const router = useRouter();

	useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.start();
    }

		router.events.on("routeChangeStart", handleRouteChange);
		router.events.on("routeChangeComplete", () => NProgress.done());
		router.events.on("routeChangeError", () => NProgress.done());

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, []);

	return (
		<div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
			<Navbar />
			<main className="container py-1">
				{/* Title */}
				{title && (
					<h2 className={classNames("text-center", { "text-light": dark })}>
						{title}
					</h2>
				)}

				{/* Content */}
				{children}
			</main>

			{footer && (
				<footer className="text-center text-light bg-primary">
					<div className="container p-1">
						<h2>&copy; Andrew Bateman Portfolio</h2>
						<p>{new Date().getFullYear()}</p>
					</div>
				</footer>
			)}
		</div>
	);
};

Layout.proptypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	footer: PropTypes.bool,
};

export default Layout;