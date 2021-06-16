// Adds the navigation link text on side-panel
document.querySelectorAll("div.contact_link").forEach((element, index) => {

    let mo = false;

    element.addEventListener("mouseover", (e) => {
        element.style.width = "18vh";
        let contact_link_text = e.currentTarget.querySelector("p.contact_link_name");
        contact_link_text.mouseIsOver = true;
        this.mo = true;

        setTimeout( function() {
            contact_link_text.style.display = 
                contact_link_text.mouseIsOver ? "inline-block" : "none";
        }
        ,90);
    });

    element.addEventListener("mouseout", (e) => {
        element.style.width = "7vh";
        let contact_link_text = e.currentTarget.querySelector("p.contact_link_name");
        contact_link_text.mouseIsOver = false;
        this.mo = false;

        setTimeout( function() {
            contact_link_text.style.display = 
                contact_link_text.mouseIsOver ? "inline-block" : "none";
        }
        ,0);
    });

    // Adds random wiggles to each link
    setTimeout((e, index) => {
        setTimeout( function(e) {
            e.style.width = this.mo ? e.style.width :"12vh";
        }
        ,index*200, e);

        setTimeout( function(e) {
            e.style.width = this.mo ? e.style.width :"7vh";
        }
        ,index*200 + 100, e);

    }, 1500, element, index); //Binds to function.

});

document.querySelectorAll("h4.project_link").forEach((element)=> {
    element.addEventListener('click', (e) => {
        e.currentTarget.querySelector("a").click();
    });
});