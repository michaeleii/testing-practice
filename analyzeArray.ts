const analyzeArray = (arr: number[]) => {
	return {
		avg: avg(arr),
		min: min(arr),
		max: max(arr),
		length: length(arr),
	};
};

const avg = (arr: number[]): number =>
	arr.length ? arr.reduce((acc, current) => acc + current) / arr.length : 0;

const min = (arr: number[]): number => (arr.length ? Math.min(...arr) : 0);

const max = (arr: number[]): number => (arr.length ? Math.max(...arr) : 0);

const length = (arr: number[]): number => arr.length;

export { avg, min, max, length, analyzeArray };
