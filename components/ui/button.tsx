import Link from 'next/link'

interface IButtonProps {
	link: string
	className: string
	children: React.ReactNode
}

const Button: React.FC<IButtonProps> = ({ link, className, children }) => {
	return (
		<Link href={link} className={className}>
			{children}
		</Link>
	)
}

export default Button
