import Link from 'next/link'

import styles from './event-item.module.css'

interface EventItemProps {
	id: string
	title: string
	location: string
	date: string
	image: string
	description: string
}
const EventItem: React.FC<EventItemProps> = ({
	id,
	image,
	title,
	date,
	location,
	description
}) => {
	return (
		<li className={styles.item}>
			<img src={image} alt={title} />
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2 className={styles.title}>{title}</h2>
					<div className={styles.date}>
						<time>{date}</time>
					</div>
					<div className={styles.location}>
						<address>{location}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Link href={`/events/${id}`} className={styles.link}>
						Show Details
					</Link>
				</div>
			</div>
		</li>
	)
}

export default EventItem
