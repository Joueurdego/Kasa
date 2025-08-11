import { useParams } from 'react-router-dom';
import useLogement from '../hooks/useLogement';
import CollapseItem from '../Components/Collapsetem';

export default function Logement() {
    const { id } = useParams();
    const { data, loading, error } = useLogement(id);

    if (loading) return <p>Chargement</p>;
    if (error) return <p>Erreur lors du chargement.</p>;
    if (!data) return null;

    return (
        <>
            <div>
                <h2>{data.title}</h2>
                <p>{data.location}</p>
                <div>
                    {data.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>

            </div>
            <div>
                <CollapseItem title="Description" content={data.description} />
                <CollapseItem
                    title="Équipements"
                    content={
                        <ul>
                            {data.equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
            <aside>
                <div>
                    <p>{data.host.name}</p>
                    <img src={data.host.picture} alt={"Photo de" + data.host.name} />
                </div>
                <div></div>
            </aside>

        </>
    );
}