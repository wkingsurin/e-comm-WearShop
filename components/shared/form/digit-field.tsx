import { Input } from "@/components/ui/input";
import { IDigitFieldProps } from "@/types/components/widgets/form.types";
import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function DigitField({ name }: IDigitFieldProps) {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	const error = errors[name]?.message as string | undefined;

	const inputRefs = useRef<HTMLInputElement[]>([]);

	return (
		<div className="flex flex-col gap-1">
			<Controller
				control={control}
				name={name}
				render={({ field: { value = "", onChange } }) => {
					const getCodeArray = () => {
						const arr = Array(6).fill("");
						for (let i = 0; i < value.length; i++) {
							arr[i] = value[i] || "";
						}

						return arr;
					};

					const handleInputChange = (
						e: React.ChangeEvent<HTMLInputElement>,
						index: number
					) => {
						const value = e.target.value.replace(/\D/g, "");
						if (!value) return;

						const singleDigit = value.slice(-1);
						const currentCodeArray = getCodeArray();

						currentCodeArray[index] = singleDigit;

						const newCode = currentCodeArray.join("");
						onChange(newCode);

						if (index < 5 && singleDigit) {
							inputRefs.current[index + 1]?.focus();
						}
					};

					const handleKeyDown = (
						e: React.KeyboardEvent<HTMLInputElement>,
						index: number
					) => {
						if (e.key === "Backspace") {
							const currentCodeArray = getCodeArray();

							if (!currentCodeArray[index] && index > 0) {
								currentCodeArray[index - 1] = "";
								onChange(currentCodeArray.join(""));
								inputRefs.current[index - 1]?.focus();
							} else {
								currentCodeArray[index] = "";
								onChange(currentCodeArray.join(""));
							}
						}
					};

					const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
						e.preventDefault();

						const pastedData = e.clipboardData
							.getData("text")
							.replace(/\D/g, "")
							.slice(0, 6);
						onChange(pastedData);

						const focusIndex = pastedData.length === 6 ? 5 : pastedData.length;
						inputRefs.current[focusIndex]?.focus();
					};

					return (
						<div className="flex gap-3" onPaste={handlePaste}>
							{Array.from({ length: 6 }).map((_, index) => {
								const char = value[index] || "";

								return (
									<Input
										key={`digit${index}`}
										ref={(element) => {
											if (element) inputRefs.current[index] = element;
										}}
										type="text"
										inputMode="numeric"
										pattern="[0-9]*"
										maxLength={1}
										value={char}
										onChange={(e) => handleInputChange(e, index)}
										onKeyDown={(e) => handleKeyDown(e, index)}
										className="items-center justify-center w-10 px-[14px]"
									/>
								);
							})}
						</div>
					);
				}}
			/>

			{error && (
				<span className="text-xs text-destructive text-center font-medium animate-in fade-in-50">
					{error}
				</span>
			)}
		</div>
	);
}
