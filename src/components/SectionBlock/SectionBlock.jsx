import './SectionBlock.css';

function SectionBlock({ children, className }) {
	return <section className={className}>{children}</section>;
}

export default SectionBlock;
