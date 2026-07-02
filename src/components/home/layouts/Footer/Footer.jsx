import Container from "@/components/ui/Container";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import footerData from "./footerData";

const Footer = () => {

    return (

        <footer className="bg-amber-950 text-white">

            <Container>

                <div className="grid gap-16 py-20 lg:grid-cols-5">

                    <div className="lg:col-span-2">

                        <FooterBrand />

                    </div>

                    <FooterLinks
                        title="Quick Links"
                        links={footerData.quickLinks}
                    />

                    <FooterLinks
                        title="Scriptures"
                        links={footerData.scriptures}
                    />

                    <FooterLinks
                        title="Resources"
                        links={footerData.resources}
                    />

                </div>

                <div
                    className="
                        border-t
                        border-neutral-800
                        py-8
                        text-center
                        text-neutral-500
                    "
                >

                    © 2026 Adhyatmik Kathayein.
                    All Rights Reserved.

                </div>

            </Container>

        </footer>

    );

};

export default Footer;