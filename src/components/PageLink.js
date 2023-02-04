export default function PageLink({ href, text, childClass }) {
    return (
        <li>
            <a href={href} className={childClass}>{text}</a>
        </li>
    )
}