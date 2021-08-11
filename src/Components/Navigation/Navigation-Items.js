import NavigationItem from "./Navigation-item"

const NavigationItems = () => {
    return (
        <ul className="nav navbar-nav navbar-right">
            {/* <NavigationItem link={"#fonmm"} name="FONMM" /> */}
            <NavigationItem link={"/tma#our-models"} name="Our Models" />
            <NavigationItem link={"/tma#fitness"} name="Fitness" />
            <NavigationItem link={"/tma#workshop"} name="Workshop" />
            <NavigationItem link={"/tma#benefits"} name="Benefits" />
            <NavigationItem link={"/tma#faq"} name="FAQ" />
            <NavigationItem link={"/tma#applications"} name="Applications" />
            <NavigationItem link={"/tma#sponsors"} name="Sponsors" />
            <NavigationItem link={"/tma#contact"} name="Contact" />
        </ul>
    )
}

export default NavigationItems;