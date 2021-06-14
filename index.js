// Adds the navigation link text on side-panel
document.querySelectorAll("div.contact_link").forEach(element => {
    element.addEventListener("mouseover", (e) => {
        let contact_link_text = e.currentTarget.querySelector("p.contact_link_name");
        setTimeout( function() {
            contact_link_text.style.display="inline-block";
        }
        ,70);
    });

    element.addEventListener("mouseout", (e) => {
        let contact_link_text = e.currentTarget.querySelector("p.contact_link_name");
        setTimeout( function() {
            contact_link_text.style.display="none";
        }
        ,70);
    });
});