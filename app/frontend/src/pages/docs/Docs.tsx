import styles from "./Docs.module.css";

import { DocList } from "../../components/Doc";

const Docs = () => {
    const onDocClicked = (value: string) => {
        window.open(value, "_blank");
    };

    return (
        <div className={styles.container}>
            <div className={styles.chatRoot}>
                <div className={styles.chatContainer}>
                    <div className={styles.chatEmptyState}>
                        <DocList onDocClicked={onDocClicked} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Docs;
