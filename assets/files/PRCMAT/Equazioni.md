Per risolvere un'equazione è necessario trovare la forma:
$$ax=b$$
In modo da poter successivamente ottenere la $x$ divenendo entrambi i membri per $a$:
$$\frac{ax}{a}=\frac{b}{a}$$
Ne risultano *tre* casi:
- Indeterminate
	- $10x=10x$
- Determinate
	- $5x=2$
- Impossibili
	- $\nexists x\in R$
## Regole Fondamentali
- *Somma e Differenza della stessa quantità ad entrambi i membri non modificano l'equazione*
- *Moltiplicazione e Divisione della stessa quantità, diversa da 0, ad entrambi i membri non modificano l'equazione*
## Condizioni di Esistenza
- *Se una funzione $f(x)$ è a denominatore di una frazione, quest'ultima non può assumere valore uguale a 0* 
$$\frac{1}{f(x)}, f(x)\neq 0$$
- *Se una funzione $f(x)$ è argomento di una radice con indice pari, quest'ultima non può assumere valore minore di 0*
$$\sqrt[n]{f(x)}, n=2k, f(x)\geq 0$$
- *Se una funzione $f(x)$ è argomento di un logaritmo, quest'ultima non può assumere valore minore o uguale a 0
$$\log_{a}{f(x)}, f(x)>0$$
- *Se una funzione $f(x)$ è base di un esponenziale, quest'ultima deve essere maggiore di 0*
$$f(x)^{g(x)}, f(x)>0$$
## Scomposizione Polinomiale
Sia $P(x)$ un polinomio e $x^*$ un suo zero, allora posso scomporre $P(x)$ come:
$$P(x)=(x-x^*)Q(x),\quad deg(Q)<deg(P)$$
## Divisione tra Polinomi
Dato il polinomio $t^3-1$, come è possibile scomporlo?
Individuiamo uno zero del polinomio:
$$t*=1\to(1)^3-1=0$$
Potendo così scrivere $t^3-1=(t-1)T(x)$, dove $T(x)$:
$$T(x)=\frac{t^3-1}{t-1}$$
### Divisione in colonna
| $t^3\setminus\setminus-1$      | $t-1$     |
| ------------------------------ | --------- |
| $-(t^3-t^2\setminus\setminus)$ | $t^2+t+1$ |
| $\setminus t^2\setminus-1$     |           |
| $-(t-1)$                       |           |
Il polinomio è dunque scomponibile nel modo seguente:
$$t^3-1=(t-1)(t^2+t+1)$$
### Progressione in campo immaginario
È possibile progredire la scomposizione ulteriormente utilizzando l'unita immaginaria $i$:
$$t^3-1=(t-1)(t^2+t+1)=(t-1)\left(t-\left(\frac{-1+i\sqrt{3}}{2}\right)\right)\left(t-\left(\frac{-1-i\sqrt{3}}{2}\right)\right)$$
### Esercizi/Esempi
- [[ES12092024.01]]
- [[ES12092024.02]]