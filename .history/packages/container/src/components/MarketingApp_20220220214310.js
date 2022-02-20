import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
	const ref = useRef(null);

	useEffect(() => {
		console.log(mount);
	}, []);

	return <div ref={ref}></div>;
};
