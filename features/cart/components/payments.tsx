import Image from "next/image";

interface IProps {
    payments: { id: string; label: string; image: string }[];
}

export default function Payments({ payments }: IProps) {
    return (
        <div className="flex flex-col gap-3 min-h-[94px] bg-white rounded-xl px-3 py-6 lg:p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            <span className="text-black/75 font-medium uppercase tracking-wide leading-lg">
                Available payments
            </span>
            <div className="flex gap-2">
                {payments.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-center rounded-md bg-[#F8F9FA] w-1/3 h-10"
                    >
                        <Image
                            src={`/payments/${item.image}`}
                            alt={item.label}
                            width={70}
                            height={16}
                            className="h-4 object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
