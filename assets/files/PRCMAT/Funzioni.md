Una relazione che associa *ad ogni* elemento del Dominio *un* elemento del Codominio, entrambi [[Insiemi]].
Ogni elemento del dominio deve avere *una e una sola* immagine, dunque un elemento del dominio non può avere più di una immagine.
## Immagine
$Im[f]=\{y\in Cod: y=f(x)\}$
Esiste una mappa $f$ che porta gli elementi all'insieme Immagine.
## Controimmagine
$Im^{-1}[f]=\{x\in Dom:y=f(x)\land x=f^{-1}(y)\}$
## Grafico
$Graf[f]=\{(x,y)\in R^2\}$
Lo spazio essendo bidimensionale viene indicato con $R^2$ poiché entrambi gli assi corrispondono all'insieme $R$.
## Proprietà
- Una funzione si dice __INIETTIVA__ se ogni elemento dell'Immagine di $f$ è immagine di *uno ed uno solo* elemento del Dominio.
- Una funzione si dice __SURIETTIVA__ se *ogni* elemento del Codominio è immagine di un elemento del Dominio.
- Una funzione si dice __BIETTIVA/BIUNIVOCA__ se è sia iniettiva che suriettiva.
## Test delle Rette Verticali
Il Test delle rette verticali ci permette di verificare data una curva se quest'ultima è una *funzione*.
Se tracciando delle rette verticali sul grafico e quest'ultime incontrano più di una volta la curva, allora la curva non è una funzione, poiché è presente una o più $x$ che ha associata più di una $y$.
## Test delle Rette Orizzontali
Il test delle rette orizzontali ci permette di verificare data una funzione se quest'ultima è *iniettiva*.
Se tracciando delle rette orizzontali sul grafico e quest'ultime incontrano più di una volta la funzione, allora la funzione non è iniettiva perché è presente una o più $y$ che è immagine di più di una $x$.
## Monotonia
Siano $x_1,x_2\in Dom[f]$
Se $\forall x_1<x_2\implies\begin{cases}f(x_1)<f(x_2)\quad f\text{ crescente}\\ f(x_1)>f(x_2)\quad f\text{ decrescente}\end{cases}$
Nel caso in cui $f(x_1)\leq f(x_2)$ la funzione si dice *non decrescente*
Nel caso in cui $f(x_1)\geq f(x_2)$ la funzione si dice *non crescente*
## Simmetrie
- Se la funzione è simmetrica rispetto all'asse $y$ si dice __PARI__
	- $f(x)$ pari $\iff f(x)=f(-x)$
```desmos-graph
y=\abs(x)|orange|
```
- Se la funzione è simmetrica rispetto *all'origine degli assi* si dice __DISPARI__
	- $f(x)$ dispari $\iff f(-x)=-f(x)$

```desmos-graph
x=1/y|orange|
```
## Funzioni Inverse
Data una funzione $f$ *iniettiva*, è possibile calcolare la sua inversa considerando la funzione $g$ con grafico simmetrico ad $f$ rispetto alla retta bisettrice $y=x$. Nel caso in cui la funzione non sia *iniettiva*, è possibile ridimensionare l'insieme delle $x$ considerando uno dei sottoinsiemi che rendono la funzione *iniettiva*.
$$f(x)=e^x$$
$$g(x)=\log_{e}{x}$$
```desmos-graph
y=x|white|dashed|
y=e^x|orange|
y=\log_{e}{x}
```
$$f(x)=cos(x)$$
$$g(x)=arccos(x)$$
```desmos-graph
y=x|white|dashed|
y=\arccos(x)|
y=\cos(x)|dashed|
y=\cos(x)|0<=x<=\pi|orange|
```
## Leggi di Potenze
### Leggi Esponenziali
$(a^n)(a^m) = a^{n+m}$
$\frac{a^n}{a^m}=a^{n-m}$
$(a^n)^m=a^{nm}$
$(a^n)(b^n)=(ab)^n$
### Radice Ennesima
$\sqrt[n]{x^m}=x^{\frac{m}{n}}$
$\sqrt[n]{xy}=\sqrt[n]{x}\sqrt[n]{y}$
$\sqrt[n]{a}\sqrt[m]{b}=\sqrt[nm]{a^mb^n}$
Il grafico delle funzioni con radice hanno Dominio diverso in base all'indice della radice:
- Se è *pari*, allora il Dominio è $R^+\cup\{0\}$
- Se è *dispari*, allora il Dominio è $R$
## Funzioni Fondamentali
- [[Retta]], Polinomio di Grado 1
- [[TeoremaBinomio|Potenze Ennesime]] di Binomi
- [[Esponenziale]], funzione trascendente
- [[Logaritmo]], funzione trascendente
## Prodotti notevoli
#### Quadrato di binomio
$(a+b)^2 = a^2 + 2ab + b^2$
#### Differenza di quadrati
$a^2 - b^2 = (a+b)(a-b)$
#### Cubo di binomio
$(a+b)^3 = a^3 + 3a^2b + 3ab^2 +b3$
#### Quadrato trinomio
$(a+b+c)^2 = a^2 + b^2 +c^2 + 2ab + 2bc + 2ca$
#### Differenza di cubi
$(a^3-b^3) = (a-b)(a^2+ab+b^2)$
### Esercizi/Esempi
- [[ES11092024.05]]