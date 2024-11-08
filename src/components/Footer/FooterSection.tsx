const FooterSection = ({ name, content }: {name: string, content: string[]}) => {
    return <div className='text-sm font-extralight space-y-4 text-neutral-200'>
        <p className="text-white">{name}</p>
        <hr className="my-2" />
        {
            content.map((item, idx) => {
                return <p key={idx}>{item}</p>
            })
        }
    </div>
}

export default FooterSection;
