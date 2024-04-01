
/* <!-- --------------------------------------------ACCORDION JS---------------------------------------------- --> */

const accordionItems = document.querySelectorAll('.accordion-box');

accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-description');

    title.addEventListener('click', () => {
        for (i = 0; i < accordionItems.length; i++) {
            if (accordionItems[i] == item) {
                // toggle the accordion item
                item.classList.toggle('active');

            }
            else {
                accordionItems[i].classList.remove('active');
            }
        }
    });
});
document.querySelector(".accordion-title").click();


/* <!------------------------------------TABS CONATENT-------------------------------------> */

let tabButtons = document.querySelectorAll(".buttonlinks");

for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
        let tabName = this.dataset.tab;
        let tabContent = document.getElementById(tabName);
        let allTabContent = document.querySelectorAll(".btncontent");
        let allTabButtons = document.querySelectorAll(".buttonlinks");

        for (let j = 0; j < allTabContent.length; j++) {
            allTabContent[j].style.display = "none";
        }

        for (let k = 0; k < allTabButtons.length; k++) {
            allTabButtons[k].classList.remove("active");
        }
        tabContent.style.display = "block";
        this.classList.add("active");
    });
}
document.querySelector(".buttonlinks").click();


/* <!-- --------------------------------------------Navigation JS---------------------------------------------- --> */

let btn = document.querySelector(".nav-button");
btn.addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("btntoggle");
})
