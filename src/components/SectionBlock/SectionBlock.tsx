import { SeactionBlockProps } from './SeactionBlock.props';

function SectionBlock({ children, className }: SeactionBlockProps) {
	return <section className={className}>{children}</section>;
}

export default SectionBlock;
