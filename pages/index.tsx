import Link from 'next/link'
import {getAllImages, Image} from "../lib/gallery";

export default function Home({ images }) {
    return (
        <div>
            <h1>Witamy na nasze stronie!</h1>

            <p>
                <Link href="/about"><a>O projekcie</a></Link>
            </p>

            <div>
                {images.map((image: Image) => {
                    return (
                        <div key={image.id}>
                            <img
                                src={image.src}
                                alt={image.description}
                                className="thumbnail"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const images = getAllImages()
    return {
        props: {
            images
        }
    }
}
