import EventItem from './event-item'

import styles from './event-list.module.css'

interface EventListProps {
	events: any[]
}

const EventList: React.FC<EventListProps> = (props) => {
	const { events } = props

	return (
		<ul className={styles.list}>
			{events.map((event) => (
				<EventItem
					key={event.id}
					id={event.id}
					title={event.title}
					location={event.location}
					date={event.date}
					image={event.image}
					description={event.description}
				/>
			))}
		</ul>
	)
}

export default EventList
