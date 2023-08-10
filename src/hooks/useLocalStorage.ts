import {useEffect, useState} from "react";

export default function useLocalStorage<T>(key: string, initialVal: T | (() => T)) {
	const [val, setVal] = useState<T>(() => {
		const localVal = localStorage.getItem(key);
		if (localVal) return JSON.parse(localVal);
		if (typeof initialVal === "function") return (initialVal as () => T)();
		return initialVal;
	});
	
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(val));
	}, [key, val]);
	return [val, setVal] as [typeof val, typeof setVal];
}
