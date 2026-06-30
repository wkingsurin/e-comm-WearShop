export interface ISizesProps {
	sizes: { value: string; isAvailable: boolean }[];
	initialSize: string;
	onChangeSize?: (size: string) => void;
}
