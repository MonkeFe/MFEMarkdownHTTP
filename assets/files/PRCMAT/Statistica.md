# Probabilità
## Principio Fondamentale
Si realizzano $k$ esperimenti; il primo ha $n_1$ possibili esiti, il secondo ha $n_2$ possibili esiti e il $k$-esimo ha $n_k$ possibili esiti.
Se sequenza distinte dei $k$ esperimenti producono esiti finali differenti, si ha che i $k$ hanno in tutto $n_1\cdot n_2\quad...\quad n_k$.
## Spazio Campionario
Si considera un esperimento il cui risultato *non* è noto a priori, ma ipotizziamo di conoscere tutti i possibili esiti.
L'insieme degli esiti è lo *Spazio Campionario*: $S$.
## Eventi
I sottoinsiemi di *S* vengono chiamati *eventi*: un evento si verifica se si verifica uno dei suoi esiti.
A partire da 2 (o più) eventi $E$ ed $F$ si può costruire un nuovo evento $E\cup F$.
Se $E\subset F\implies$ il verificarsi di $E\implies$ il verificarsi di $F$, dunque: $E\subseteq F\implies P(E)\leq P(F)$
La probabilità del complementare di un evento è calcolabile secondo la seguente formula: $P(E^c)=1-P(E)$
## Assiomi della Probabilità
1. $P(S)=1$
	1. La Probabilità dello Spazio Campionario è 1 (ovvero il massimo), poiché esso contiene tutti i possibili esiti
2. $\forall E\quad 0\leq P(E)\leq1,\quad P: E\to[0;1]$
	1. Ogni evento ha probabilità compresa tra 0 e 1, dunque la funzione $P$ è una funzione che mappa un evento in un intervallo compreso tra 0 e 1
3. Se $E_n$ è una *successione* di $n$ eventi a due a due disgiunti (ovvero tali che $E_i\cap E_j=\emptyset\quad \forall i\neq j$), allora: $$P(\cup_{i=1}^{n}E_i)=\sum_{i=1}^{n}P(E_i)$$
## Unione di Eventi Generici
Dati due generici eventi $E$ ed $F$:
- $P(E\cup F)=P(E)+P(F)-P(E\cap F)$
Dati tre generici eventi $E$, $F$ e $G$:
- $P(E\cup F\cup G)=P(E)+P(F)+P(G)-P(E\cap F)-P(E\cap G)-P(F\cap G)+P(E\cap F\cap G)$
# Calcolo Combinatorio
## Permutazioni
Permettono di calcolare la quantità di possibili disposizioni di $n$ elementi attraverso l'operazione di [[Fattoriale]].
Nel caso in cui *non* ci siano ripetizioni la formula è:$$\#=n!$$
Nel caso in cui *ci siano* ripetizioni la formula è: $$\#=\frac{n!}{r_1!\cdot r_2!\cdot r_k!}$$
## Disposizioni
Permettono di calcolare i modi in cui è possibile ordinare $n$ elementi se gli spazi considerati sono $k<n$
Nel caso in cui *non* ci siano ripetizioni la formula è: $$\#=\frac{n!}{(n-k)!}$$
Nel caso in cui *ci siano* ripetizioni la formula è: $$\#=n^k$$
## Combinazioni
Permettono di calcolare i modi in cui è possibile combinare (senza considerarne l'ordine) $n$ elementi se gli spazi considerati sono $k<n$
Nel caso in cui *non* ci siano ripetizioni la formula è: $$\#=\frac{n!}{k!(n-k)!}$$
Nel caso in cui *ci siano* ripetizioni la formula è: $$\#=\frac{(n+k-1)!}{k!(n-1)!}$$
Grazie al coefficiente binomiale è possibile calcolare il Binomio di Newton secondo il [[TeoremaBinomio|Teorema del Binomio]].
### Esercizi/Esempi
- [[ES13092024.01]]