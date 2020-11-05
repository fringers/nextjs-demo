import {getAllIds, getImageById} from "../../lib/gallery";

export default function Image({image}) {
    return (
        <>
            <p>
                Opis zdjęcia: {image.description}
            </p>

            <p>
                <img src={image.src} alt="" style={{maxWidth: '80%'}}/>
            </p>
        </>
    )
}

export async function getStaticPaths() {
    const ids = getAllIds()
    return {
        paths: ids.map(id => {
            return {
                params: {
                    id
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const image = getImageById(params.id)
    return {
        props: {
            image
        }
    }
}
