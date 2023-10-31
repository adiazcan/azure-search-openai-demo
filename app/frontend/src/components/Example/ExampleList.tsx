import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "¿Puedo instalar un software personal en el ordenador de la empresa?",
        value: "¿Puedo instalar un software personal en el ordenador de la empresa?"
    },
    {
        text: "¿Cuáles son los principios corporativos?",
        value: "¿Cuáles son los principios corporativos?"
    },
    {
        text: "¿Quién estuvo en la presentación del proyecto PUBLICARME?",
        value: "¿Quién estuvo en la presentación del proyecto PUBLICARME?"
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
