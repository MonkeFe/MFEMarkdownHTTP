# Linguaggio di Programmazione

Un linguaggio di programmazione è un linguaggio formale, ossia un insieme di regole sintattiche e semantiche, che permette di scrivere programmi, ovvero sequenze di istruzioni che vengono eseguite da un computer per svolgere determinate operazioni.
## Procedurali/Imperativi
I linguaggi procedurali sono basati su procedure, ovvero sequenze di istruzioni che vengono eseguite in modo sequenziale. Questi linguaggi sono orientati alla soluzione di problemi, e sono basati su un modello di calcolo che prevede l'esecuzione di istruzioni in modo sequenziale, con la possibilità di utilizzare strutture di controllo come cicli, condizioni o ricorsioni.
```c
int main() {
    printf("Hello, World!");
    return 0;
}
```
Nel caso di ricorsione:
```c
int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
```
## Compilazione
I linguaggi di programmazione possono essere compilati o interpretati. I linguaggi compilati vengono tradotti in codice macchina, che può essere eseguito direttamente dal processore. I linguaggi interpretati vengono eseguiti da un interprete, che legge il codice sorgente e lo esegue istruzione per istruzione.
### Compilatori
I compilatori sono programmi che traducono il codice sorgente di un programma scritto in un linguaggio di programmazione in codice macchina, che può essere eseguito direttamente dal processore. I compilatori sono utilizzati per tradurre il codice sorgente in un file eseguibile, che può essere eseguito su un computer senza la necessità di avere il compilatore installato.
```bash
gcc -o hello hello.c
```
### Debugging
Il debugging è il processo di individuazione e correzione degli errori presenti in un programma. Gli errori possono essere di diversi tipi, come errori di sintassi, errori di logica, errori di esecuzione, ecc. Il debugging è un'attività fondamentale nello sviluppo di software, in quanto permette di individuare e correggere gli errori presenti in un programma.
```bash
gcc -g -o hello hello.c
gdb hello
```
