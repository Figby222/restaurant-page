function main() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const contentHeader = document.createElement('h1');
    contentHeader.textContent = "Menu";

    const contentDiv = document.createElement("div");

    const ul = document.createElement("ul");

    const smallFries = document.createElement("li");
    smallFries.innerHTML = "$24,000 <strong>Small Fries<strong> <em>(5,000 cal)";

    const mediumFries = document.createElement("li");
    mediumFries.innerHTML = "$48,000 <strong>Medium Fries<strong> <em>(12,000 cal)";

    const largeFries = document.createElement("li");
    largeFries.innerHTML = "$100,000 <strong>Large Fries<strong> <em>(24,000 cal)";

    ul.appendChild(smallFries);
    ul.appendChild(mediumFries);
    ul.appendChild(largeFries);

    contentDiv.appendChild(ul);

    content.appendChild(contentHeader);
    content.appendChild(contentDiv);



}

export default main;