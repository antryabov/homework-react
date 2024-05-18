import styles from './SectionBlock.module.css';

function SectionBlock({ children, className }) {
	return <section className={className}>{children}</section>;
}

export default SectionBlock;
