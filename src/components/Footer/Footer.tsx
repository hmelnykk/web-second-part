import FooterSection from "./FooterSection";

const sections = [
    {
        name: 'CONTACTS',
        content: [
            'Any questions, suggestions?',
            'Warning! The processing of appeals is carried out via form at karabas.com/en/help',
            'GO2SHOW SPÓŁKA Z O. O. NIP: 6751768934, Numer KRS 0000987419 REGON: 522850125 ul. GĘSIA, 8/205, KRAKÓW, kod 31-535 sale.region@karabas.com t. 590-55-55',
        ]
    },
    {
        name: 'EVENTS',
        content: [
            'Concerts',
            'Theatres',
            'Children',
            'Stand-up',
            'Clubs',
            'Others',
        ],
    },
    {
        name: 'SERVICES',
        content: [
            'Martial law',
            'Gift ticket',
            'List of cancelled and rescheduled events',
            'Dispute resolving service',
        ],
    },
    {
        name: 'ABOUT US',
        content: [
            'Organizers',
            'Logo for posters',
            'Who we are',
            'Purchasing policy',
        ],
    },
]

const Footer = () => {
    return <div className="relative">
        <footer className="w-full bg-footer text-white flex py-4">
            <div className="container mx-auto grid grid-cols-4 gap-8">
                {
                    sections.map((el, idx) => {
                        return <FooterSection name={el.name} content={el.content} />;
                    })
                }
            </div>
        </footer>
    </div>
}

export default Footer;
