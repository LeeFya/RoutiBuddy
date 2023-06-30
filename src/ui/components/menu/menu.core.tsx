import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Images } from '../../../assets';
import { MenuHelper } from './menu.helper';
import { menuShards } from './shards';

export const Menu = () => {
	const { transition, variants } = MenuHelper();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<AnimatePresence initial={false}>
			<motion.section
				variants={variants}
				transition={transition}
				animate={isOpen ? 'open' : 'closed'}
				className={clsx('fixed z-10 mx-auto flex h-screen w-full max-w-xl flex-col px-[30] backdrop-blur-md')}
			>
				{!isOpen && (
					<img
						draggable={false}
						onClick={() => setIsOpen((val) => !val)}
						className="relative left-[calc(100%-100px)] top-full w-min cursor-pointer"
						src={Images.bookmark}
						alt="menu"
					/>
				)}
				<div className="mx-[25px] flex h-full flex-col items-end">
					<menuShards.ContentsShard />
					{isOpen && (
						<img
							draggable={false}
							onClick={() => setIsOpen((val) => !val)}
							className="mr-[11px] w-min cursor-pointer"
							src={Images.bookmark}
							alt="menu"
						/>
					)}
				</div>
			</motion.section>
		</AnimatePresence>
	);
};
