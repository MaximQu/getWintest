import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type UseFetchResult<T> = {
	data: T | null;
	loading: boolean;
	error: null | AxiosError;
};

const useFetch = <T>(url: string): UseFetchResult<T> => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<null | AxiosError>(null);

	const fetchData = async () => {
		setLoading(true);
		try {
			const res: AxiosResponse<T> = await axios.get(url);
			const result = res.data as T;
			setData(result);
		} catch (err: any) {
			setError(err);
			throw new Error(err);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchData();
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
