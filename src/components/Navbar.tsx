
type ToggleProps = {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar = ({ toggle, setToggle }: ToggleProps = { toggle: false, setToggle: () => { } }) => {
    return (
        <nav className="w-full h-[60px] flex justify-between items-center ">
            <div>
                <h1 className={toggle ? "text-white" : "text-black"}>Social Media Dashboard</h1>
                <p className=
                    {toggle ? "" : "color:hsl(228, 12%, 44%)"}>Total Followers: 23,004</p>
            </div>

            <div className=".navbar_toggle_container flex justify-between items-center gap-3">
                <span className={toggle ? "font-bold text-white" : ".active_darkmode_span"}>Dark Mode</span>
                <label htmlFor="switch" className="switch" >
                    <input type="checkbox" id="switch" />
                    <span className={toggle ? "slider round" : "slider round lightmode_slider"} onClick={() => setToggle(!toggle)}></span>
                </label>
            </div>

        </nav>
    )
}
export default Navbar