import styles from "./Doc.module.css";

interface Props {
    text: string;
    value: string;
    onClick: (value: string) => void;
}

export const Doc = ({ text, value, onClick }: Props) => {
    return (
        <div className={styles.example} onClick={() => onClick(value)}>
            <p className={styles.exampleText}>{text}</p>
        </div>
    );
};
