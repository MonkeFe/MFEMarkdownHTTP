# CPU
La **CPU** è il componente principale di un computer, responsabile dell'esecuzione delle istruzioni dei programmi. La CPU è composta da uno o più **core** (nuclei o processori), ciascuno dei quali è in grado di eseguire istruzioni in modo indipendente. Ogni core è costituito da diverse unità funzionali, tra cui:
- **Unità di Controllo (CU)**: responsabile della gestione e dell'interpretazione delle istruzioni del programma.
- **Unità di Calcolo (ALU)**: responsabile dell'esecuzione delle operazioni aritmetiche e logiche.
- **Registri**: memorie interne alla CPU utilizzate per l'archiviazione temporanea dei dati e delle istruzioni.
    - **Instruction Register (IR)**: contiene l'istruzione corrente in esecuzione.
    - **Memory Address Register (MAR)**: contiene l'indirizzo di memoria dell'istruzione o dei dati da leggere o scrivere.
    - **Memory Data Register (MDR)**: contiene i dati letti o da scrivere in memoria.
    - **Program Counter (PC)**: contiene l'indirizzo di memoria dell'istruzione successiva da eseguire.
    - **Condition Codes**: registri utilizzati per memorizzare informazioni sullo stato delle operazioni aritmetiche e logiche.
- **Unità di Memoria Cache**: memorie veloci utilizzate per l'archiviazione temporanea dei dati e delle istruzioni più frequentemente utilizzati.
## Operazioni Fondamentali
- `fetch(address)`
    - Imposta `address` in `MAR`
    - Decodifica `MAR`
    - Copia in `MDR` il contenuto della cella decodificata
- `store(address, value)`
    - Imposta `address` in `MAR`
    - Importa `value` in `MDR`
    - Decodifica `MAR`
    - Copia all'indirizzo decodificato il contenuto di `MDR`


La CPU comunica con gli altri componenti del computer, come la memoria RAM e i dispositivi di input/output, attraverso il **bus di sistema**. Il bus di sistema è un canale di comunicazione che consente lo scambio di dati e istruzioni tra la CPU e gli altri componenti del computer.