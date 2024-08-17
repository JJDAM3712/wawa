import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const BotonAtras = () => {
    const router = useRouter();

    const handleAtras = () => {
        router.back();
    }
    return (
        <div className="SpaceBtn">
            <button className="back" onClick={handleAtras}>
                <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
                Atras
            </button>
        </div>
    )
}