async function cercaMeteo() {
    const citta = document.getElementById("citta").value;

    try {
        const response = await fetch(`http://localhost:8080/meteo/${citta}`);

        const data = await response.json();

        // controlla se il backend ha restituito errore
        if (!response.ok) {
            document.getElementById("risultato").innerHTML =
                `<p style="color:red">Errore: ${data.errore || data.message || "Richiesta fallita, verifica l'input inserito"}</p>`;
            return;
        }

        document.getElementById("risultato").innerHTML = `
            <h2>${data.citta}</h2>
            <p>Temperatura: ${data.temperatura}°C</p>
            <p>Vento: ${data.vento} km/h</p>
            <p>${data.descrizione}</p>
        `;

    } catch (err) {
        document.getElementById("risultato").innerHTML =
            `<p style="color:red">Errore di rete</p>`;
    }
}