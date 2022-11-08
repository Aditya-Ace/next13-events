const DUMMY_EVENTS = [
	{
		id: 'e1',
		title: 'Programming for everyone',
		description:
			'In this two-day course, you will learn how to program in Python!',
		location: 'Somewhere in Germany',
		date: '2021-05-12',
		image: 'images/coding-event.jpg',
		isFeatured: false
	},
	{
		id: 'e2',
		title: 'Cricket World Cup',
		description:
			"The Cricket World Cup is a One Day International cricket tournament contested by the men's national teams of the members of the International Cricket Council (ICC).",
		location: 'India',
		date: '2021-10-10',
		image: 'images/cricket-event.jpg',
		isFeatured: true
	},
	{
		id: 'e3',
		title: 'Music Festival',
		description:
			'A music festival is a community event oriented towards live performances of singing and instrument playing that is often presented with a theme such as musical genre',
		location: 'Somewhere in Alaska',
		date: '2021-08-10',
		image: 'images/music-event.jpg',
		isFeatured: true
	},
	{
		id: 'e4',
		title: 'Trading Event',
		description:
			'A trading event is a community event oriented towards live training of trading in buying and selling of stocks and shares. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		location: 'Somewhere in New York',
		date: '2021-09-10',
		image: 'images/trading-event.jpg',
		isFeatured: true
	}
]

export const getFeaturedEvents = () => {
	return DUMMY_EVENTS.filter((event) => event.isFeatured)
}

export const getAllEvents = () => {
	return DUMMY_EVENTS
}

export const getFilteredEvents = (dateFilter: {
	year: number
	month: number
}) => {
	const { year, month } = dateFilter
	let filteredEvents = DUMMY_EVENTS.filter((event) => {
		const eventDate = new Date(event.date)
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		)
	})
	return filteredEvents
}

export const getEventById = (id: string) => {
	return DUMMY_EVENTS.find((event) => event.id === id)
}
