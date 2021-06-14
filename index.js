// Adds the navigation link text on side-panel
document.querySelectorAll("div.contact_link").forEach(element => {
    element.addEventListener("mouseover", (e) => {
        let contact_link_text = e.currentTarget.querySelector("p.contact_link_name");
        contact_link_text.mouseIsOver = true;
        setTimeout( function() {
            contact_link_text.style.display = 
                contact_link_text.mouseIsOver ? "inline-block" : "none";
        }
        ,90);
    });

    element.addEventListener("mouseout", (e) => {
        let contact_link_text = e.currentTarget.querySelector("p.contact_link_name");
        contact_link_text.mouseIsOver = false;
        setTimeout( function() {
            contact_link_text.style.display = 
                contact_link_text.mouseIsOver ? "inline-block" : "none";
        }
        ,0);
    });
});