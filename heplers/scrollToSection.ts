const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

export default scrollToSection;