La logica studia il valore di *verità* di *proposizioni*, si basano spesso sul concetto di [[Insiemi]].
Connettivi logici:
- $\exists$ , almeno un elemento che soddisfa una certa proposizione
	- $\exists x: x\quad primo$
	- $\nexists x: x\quad primo, 20\leq x \leq 22$
- $\land$ , and logico
- $\lor$ , or logico *inclusivo*
- $\oplus$ , or logico *esclusivo*
- $\implies$ , implicazione (se...allora)
	- Protasi (prima parte della condizione)
	- Apodosi (seconda parte della condizione)
	- Se la protasi è vera ma l'apodosi è falsa, l'implicazione è falsa.
- $\iff$ , coimplicazione (se e solo se...allora)
	- Protasi (prima parte della condizione)
	- Apodosi (seconda parte della condizione)
Date due proposizioni $p$ e $q$:
### AND
| $p$ | $q$ | $p\land q$ |
| --- | --- | ---------- |
| F   | F   | F          |
| F   | V   | F          |
| V   | F   | F          |
| V   | V   | V          |
### OR
| $p$ | $q$ | $p\lor q$ |
| --- | --- | --------- |
| F   | F   | F         |
| F   | V   | V         |
| V   | F   | V         |
| V   | V   | V         |
### XOR
| $p$ | $q$ | $p\oplus q$ |
| --- | --- | ----------- |
| F   | F   | F           |
| F   | V   | V           |
| V   | F   | V           |
| V   | V   | F           |
### Implicazione
| $p$ | $q$ | $p\implies q$ |
| --- | --- | --------- |
| F   | F   | V         |
| F   | V   | V         |
| V   | F   | F         |
| V   | V   | V         |
### Coimplicazione
| $p$ | $q$ | $p\iff q$ |
| --- | --- | --------- |
| F   | F   | V         |
| F   | V   | F         |
| V   | F   | F         |
| V   | V   | V         |
### Negazione
| $p$ | $\neg p$ |
| --- | -------- |
| F   | V        |
| V   | F        |
# Leggi di De Morgan
$$\neg(A\land B) = \neg A \lor \neg B$$
$$\neg(A\lor B) = \neg A \land \neg B$$
### Esercizi/Esempi
- [[ES11092024.03]]
- [[ES11092024.04]]