export const useGenerateDates = () => {
	function getDaySuffix(day: number) {
		if (day >= 11 && day <= 13) {
			return 'th';
		}

		switch (day % 10) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th';
		}
	}

	const date = new Date();

	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	const daySuffix = getDaySuffix(day);

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const monthName = monthNames[monthIndex];

	const formattedDate = `${day}${daySuffix} ${monthName} ${year}`;

	return formattedDate;
};
