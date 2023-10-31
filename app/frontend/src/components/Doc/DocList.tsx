import { Doc } from "./Doc";

import styles from "./Doc.module.css";

export type DocModel = {
    text: string;
    value: string;
};

const DOCS: DocModel[] = [
    {
        text: "2020.07.01_ENCAMINA_RGPD_Política de seguridad usuarios herramientas laborales",
        value: "https://ste5jpmbwowqvuu.blob.core.windows.net/original/2020.07.01_ENCAMINA_RGPD_Política de seguridad usuarios herramientas laborales.pdf"
    },
    {
        text: "2020.11.18_ENCAMINA_RGPD_Texto informativo para empleados",
        value: "https://ste5jpmbwowqvuu.blob.core.windows.net/original/2020.11.18_ENCAMINA_RGPD_Texto informativo para empleados.pdf"
    },
    {
        text: "Familia Martinez - ejemplo de transformación digital gracias al Big Data",
        value: "https://ste5jpmbwowqvuu.blob.core.windows.net/original/Familia Martinez - ejemplo de transformación digital gracias al Big Data.pdf"
    },
    {
        text: "Florida Universitària revoluciona su sistema de comunicación con Microsoft 365",
        value: "https://ste5jpmbwowqvuu.blob.core.windows.net/original/Florida Universitària revoluciona su sistema de comunicación con Microsoft 365.pdf"
    },
    {
        text: "Gobierno de Nueva Gales del Sur-Apostar por la gamificación para impulsar la productividad",
        value: "https://ste5jpmbwowqvuu.blob.core.windows.net/original/Gobierno de Nueva Gales del Sur-Apostar por la gamificación para impulsar la productividad.pdf"
    },
    {
        text: "Manual Bienvenida ENCAMINA",
        value: "https://ste5jpmbwowqvuu.blob.core.windows.net/original/Manual Bienvenida ENCAMINA.pdf"
    },
    {
        text: "Manual del Buddy",
        value: "https://ste5jpmbwowqvuu.blob.core.windows.net/original/Manual del Buddy.pdf"
    },
    {
        text: "Microsoft impulsa las relaciones digitales de IKEA con ayuda de la Inteligencia Artificial",
        value: "https://ste5jpmbwowqvuu.blob.core.windows.net/original/Microsoft impulsa las relaciones digitales de IKEA con ayuda de la Inteligencia Artificial.pdf"
    },
    {
        text: "PUBLICARME, una plataforma de IA que permite el acceso a miles de documentos históricos",
        value: "https://ste5jpmbwowqvuu.blob.core.windows.net/original/PUBLICARME, una plataforma de IA que permite el acceso a miles de documentos históricos.pdf"
    }
];

interface Props {
    onDocClicked: (value: string) => void;
}

export const DocList = ({ onDocClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {DOCS.map((x, i) => (
                <li key={i}>
                    <Doc text={x.text} value={x.value} onClick={onDocClicked} />
                </li>
            ))}
        </ul>
    );
};
