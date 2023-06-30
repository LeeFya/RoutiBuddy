import { useState } from 'react';
import { Images } from '../../../assets';
import { Button, Layout } from '../../components';
import { dailyScreenShards } from './shards';
import { NewTask } from '../../components';

export const ForTheDay = () => {
	const [isPencilMenuOpen, setIsPencilMenuOpen] = useState<boolean>(false);

	return (
		<>
			{isPencilMenuOpen ? (
				<NewTask screenType="daily" setMenuVisibilityState={setIsPencilMenuOpen} />
			) : (
				<Layout>
					<div className="flex w-screen flex-col bg-blue-200">
						<div className="mt-auto h-[97%] rounded-t-full bg-blue-100 shadow-inset">
							<div className="mx-10">
								<section className="mt-24 sm:mt-40">
									<img src={Images.weekSchedule} alt="Week Schedule" className="mb-5 h-8" />
									<dailyScreenShards.WeekDaysShard />
								</section>

								<section className="mt-6 gap-2 text-center">
									<dailyScreenShards.DailyTasksShard />

									<div className="mt-4">
										<p className="font-bold">Need help creating a schedule?</p>
										<Button buttonType="secondary" label="Talk To Us" onClick={() => undefined} />
									</div>
								</section>
							</div>

							<section className="flex justify-end">
								<img
									className="cursor-pointer"
									onClick={() => setIsPencilMenuOpen(true)}
									src={Images.pencil}
									alt="penciL"
								/>
							</section>
						</div>
					</div>
				</Layout>
			)}
		</>
	);
};
