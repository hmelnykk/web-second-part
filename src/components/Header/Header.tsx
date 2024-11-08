import Button from "../Buttons/Button";

const Header = () => {
    return <div className="relative">
        <header className="fixed w-full bg-primary flex py-4">
            <div className="container mx-auto flex justify-around">
                <div className="flex items-center gap-6">
                    <p className="text-4xl font-black">KARABAS</p>
                    <p className="text-sm font-light">LIFE GOES ON!</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button name="Home" href="/" />
                    <Button name="Catalog" href="/catalog" />
                    <Button name="Cart" href="/cart" />
                </div>
            </div>
        </header>
    </div>
}

export default Header;
