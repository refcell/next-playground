import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

export default function Header() {
    return (
        <div>
            <Link prefetch href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link prefetch href="/about">
                <a style={linkStyle}>About</a>
            </Link>
            <Link prefetch href="/list-fc">
                <a style={linkStyle}>List as Functional Component</a>
            </Link>
            <Link prefetch href="/list-class">
                <a style={linkStyle}>List as a Class</a>
            </Link>
            <Link prefetch href="/dashboard">
                <a style={linkStyle}>Dashboard</a>
            </Link>
        </div>
    )
}