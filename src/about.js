function main() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const contentHeader = document.createElement('h1');
    contentHeader.textContent = "About";
    
    const contentText = document.createElement("p");
    contentText.innerHTML = 
        "We come from a background of fry lovers, and our passion for making fries dates" +
        "<br>back to the early 7,000s BC!";

    content.appendChild(contentHeader);
    content.appendChild(contentText);
}

export default main;