import FriesChair from './images/fries-chair.jpg'
function pageLoad() {
    const content = document.querySelector("#content");

    const contentHeader = document.createElement('h1');
    contentHeader.textContent = "Fig's Fat Fries";
    
    const contentText = document.createElement("p");
    contentText.innerHTML = 
        "Welcome to Fig's Fat Fries! We have the Fattiest Fries you have ever seen." +
        "<br>9/10 doctors say our fries are the fattiest, and our fries kill 99.9% of germs!";

    const friesChair = document.createElement('img');
    friesChair.src = FriesChair;
    friesChair.alt = "Fries Chair";
    friesChair.style = "width: 300px;";

    content.appendChild(contentHeader);
    content.appendChild(contentText);
    content.appendChild(friesChair)
}

export { pageLoad };