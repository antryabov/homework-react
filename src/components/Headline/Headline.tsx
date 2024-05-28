import { HeadlineProps } from './Headline.props';

function Headline({ children, className }: HeadlineProps) {
	return <h2 className={className}>{children}</h2>;
}

export default Headline;
