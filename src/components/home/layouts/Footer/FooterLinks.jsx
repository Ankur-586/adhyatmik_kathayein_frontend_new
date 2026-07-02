const FooterLinks = ({ title, links }) => {
    return (

        <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
                {title}
            </h3>

            <ul className="space-y-3">

                {links.map((link) => (

                    <li key={link}>

                        <a
                            href="#"
                            className="text-neutral-400 hover:text-white transition"
                        >
                            {link}
                        </a>

                    </li>

                ))}

            </ul>

        </div>

    );
};

export default FooterLinks;