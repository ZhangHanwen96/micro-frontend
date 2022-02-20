import { mount } from "marketing/Marketing";
import React, { useRef, useEffect } from "react";

export default () => {
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			mount(ref.current);
		}
	}, []);

	return <div ref={ref}></div>;
};
