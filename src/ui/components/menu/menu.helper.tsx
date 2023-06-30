import { Transition, Variants } from 'framer-motion';

interface MenuHelperProps {
	variants: Variants;
	transition: Transition;
}

export const MenuHelper = (): MenuHelperProps => {
	const variants = {
		open: { top: 0 },
		closed: { top: '-100%' },
	};

	const transition = {
		duration: 0.15,
		type: 'tween',
	};

	return { variants, transition };
};
