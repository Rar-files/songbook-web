import Link from 'next/link'

const Logo = () => {
    return (
        <Link href={`/`}>
            <div className={`text-xl flex flex-row items-center`}>
                <span
                    id="logo"
                    className={`icon-[mdi--book-open-blank-variant] m-1`}
                />
                <span>Spiewnik</span>
            </div>
        </Link>
    )
}

export default Logo
