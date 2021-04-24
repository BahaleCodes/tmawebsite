import NavigationItem from "./Navigation-item"

const NavigationItems = () => {
    return (
        <ul className="nav navbar-nav navbar-right">
            <NavigationItem link={"#home"} name="Home" />
            <NavigationItem link={"#our-models"} name="Our Models" />
            <NavigationItem link={"#fitness"} name="Fitness" />
            <NavigationItem link={"#workshop"} name="Workshop" />
            <NavigationItem link={"#benefits"} name="Benefits" />
            <NavigationItem link={"#faq"} name="FAQ" />
            <NavigationItem link={"#applications"} name="Applications" />
            <NavigationItem link={"#sponsors"} name="Sponsors" />
            <NavigationItem link={"#contact"} name="Contact" />
        </ul>
    )
}

export default NavigationItems;