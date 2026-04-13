### Frontend

Frontend minimale sviluppato senza framework.

Tecnologie:
- HTML
- CSS
- JavaScript (fetch API)

Funzionamento:
- input per inserire la città
- bottone per avviare la ricerca
- chiamata HTTP al backend
- visualizzazione dei dati ricevuti

Esempio funzione JavaScript:

- invia richiesta a:
  http://localhost:8080/meteo/{citta}
- riceve JSON
- aggiorna il DOM con i dati

Gestione errori:
- controllo response.ok
- gestione campo errore restituito dal backend
- fallback con messaggio generico

- ## Avvio del progetto
### Frontend

1. Aprire il file index.html nel browser
2. Oppure usare Live Server su VS Code

---

## Esempio di utilizzo

Input:
Milano

Output:
- Temperatura: 22.5°C
- Vento: 10 km/h
- Descrizione: Cielo sereno

- ## Gestione errori
Il frontend intercetta:
- errori HTTP
- risposta non valida
- campi undefined

- ## Possibili miglioramenti

- UI più avanzata (CSS, icone meteo)
- storico ricerche
- supporto geolocalizzazione
- integrazione con framework frontend (Angular, React)
