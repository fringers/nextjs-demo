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
                {Object.entries(images).map((image: [id: string, value: Image]) => {
                    return (
                        <div key={image[0]}>
                            <img src={image[1].src} alt={image[1].description} className="thumbnail"/>
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
