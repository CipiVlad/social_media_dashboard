type ToggleProps = {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar = ({ toggle, setToggle }: ToggleProps = { toggle: false, setToggle: () => { } }) => {
    return (
        <nav className="w-full h-[60px] flex justify-between items-center px-8">
            <div>
                <h1 className={toggle ? "text-white" : "text-black"}>Social Media Dashboard</h1>
                <p className=
                    {toggle ? "" : "text-black"}>Total Followers: 23,004</p>
            </div>
            <div className=".navbar_toggle_container">
                <span className={toggle ? "font-bold text-white" : "font-bold"}>Dark Mode</span>
                {/* <ToggleSwitch /> */}
                <label htmlFor="switch" className="switch">
                    <input type="checkbox" id="switch" />
                    <span className="slider round" onClick={() => setToggle(!toggle)}></span>
                </label>
            </div>
        </nav>
    )
}
export default Navbar