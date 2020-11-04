import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1>Witamy w naszej!</h1>

            <Link href="/about"><a>O projekcie</a></Link>
        </div>
    )
}
