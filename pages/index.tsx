import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list'

const EventHomePage = () => {
	const featuredEvents = getFeaturedEvents()
	return (
		<main>
			<EventList events={featuredEvents} />
		</main>
	)
}

export default EventHomePage
