import { useEffect } from "react";

const useActiveSection = (sections: {name: string, section: string}[], setActiveTab: any) => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          setActiveTab(id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section.section);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup khi component unmount
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections, setActiveTab]);
};

export default useActiveSection;
