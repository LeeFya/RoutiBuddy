import type { PropsWithChildren } from 'react';
import { Footer, Menu } from '../../components';

interface LayoutProps extends PropsWithChildren {
	isFooterVisible?: boolean;
}

export const Layout = ({ isFooterVisible = true, children }: LayoutProps) => {
	return (
		<>
			<Menu />
			{children}
			{isFooterVisible && <Footer />}
		</>
	);
};
