import styles from './event-item.module.css'
import Button from '../ui/button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

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
						<DateIcon />
						<time>{date}</time>
					</div>
					<div className={styles.location}>
						<AddressIcon />
						<address>{location}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Button link={`/events/${id}`} className={styles.link}>
						<span>Show Details</span>
						<span className={styles.button__arrowIcon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	)
}

export default EventItem
