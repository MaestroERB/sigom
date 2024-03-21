
let elementoH1 = document.querySelector("h1");
elementoH1.innerText = "Novo título com innerText";
let elementoA = document.querySelector("a");
elementoA.innerText = "https://uol.com.br";
let elementoUL = document.querySelector("ul");
elementoUL.innerHTML = `
        
                <ul>
                        <li>Elemento de lista JS 01</li>
                        <li>Elemento de lista JS 02</li>
                        <li>Elemento de lista JS 03</li>
                </ul>
        `;
let elementoOL = document.querySelector("ol");
elementoOL.innerHTML = `
        
                <ol>
                        <li>Elemento de lista JS 01</li>
                        <li>Elemento de lista JS 02</li>
                        <li>Elemento de lista JS 03</li>
                </ol>
        `;
