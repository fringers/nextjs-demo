import {getAllIds, getImageById} from "../../lib/gallery";

export default function Image({image}) {
    return (
        <div>image: {image.id}</div>
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
