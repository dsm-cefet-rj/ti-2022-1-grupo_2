import './Accordion.css'
import Table from './Table';

export default function Accordion() {
    return (
        <>
            <details>
                <summary>Geladeira</summary>
                <Table />
            </details>
            <details>
                <summary>Armário</summary>
                <Table />
            </details>
            <details>
                <summary>Suplementos</summary>
                <Table />
            </details>
            <details>
                <summary>Remédios</summary>
                <Table />
            </details>

        </>
    )
}