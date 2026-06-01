"use client";

import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";

interface IProps {
	children: React.ReactNode;
}

export default function CategoryLayout({ children }: IProps) {
	return (
		<Main>
			<Section>
				<Container>{children}</Container>
			</Section>
			{/* <LastSeenSection /> */}
		</Main>
	);
}
