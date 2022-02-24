import { mount } from "auth/Auth";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		if (ref.current) {
			const onParentNavigate = mount(ref.current, {
				onNavigate: ({ pathname: nextPathname }) => {
					const { pathname } = history.location;

					if (pathname !== nextPathname) {
						history.push(nextPathname);
					}
				},
				initialPath: history.location.pathname,
				onSignIn: () => {},
			});

			history.listen(onParentNavigate);
		}
	}, []);

	return <div ref={ref}></div>;
};
