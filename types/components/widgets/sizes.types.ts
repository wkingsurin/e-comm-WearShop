export interface ISizesProps {
	sizes: { label: string; value: string }[];
	initialSize: string;
	onChangeSize?: (size: string) => void;
}
