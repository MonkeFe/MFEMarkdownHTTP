# Introduzione Analisi 1
## Sommatorie
Una sommatoria è una notazione matematica che permette di scrivere in modo compatto la somma di una sequenza di numeri. La sommatoria è indicata con il simbolo $\sum$ e si scrive come segue:
$$\sum_{k=1}^{n}{a_k}$$
### Somme di Sommatorie
$$\sum_{k=1}^{n}{a_k+b_k}=\sum_{k=1}^{n}{a_k}+\sum_{k=1}^{n}{b_k}$$
### Qual è la somma di $n$ numeri consecutivi?
$$\sum_{k=1}^{n}{k}=\frac{n(n+1)}{2}$$
Questo perchè:
$$\sum_{k=1}^{n}{k}=1+2+3+...+n$$
$$\sum_{k=1}^{n}{k}=n+(n-1)+(n-2)+...+1$$
$$\sum_{k=1}^{n}{k}=(1+n)+(2+(n-1))+(3+(n-2))+...+(n+1)$$
$$\sum_{k=1}^{n}{k}=\frac{n}{2}\left(n+1\right)$$
Dunque:
$$\sum_{k=1}^{n}{k}=\frac{n(n+1)}{2}$$
### Qual è la somma del reciproco del prodotto di due numeri consecutivi?
$$\sum_{k=1}^{n}{\frac{1}{k(k+1)}}=\frac{n}{n+1}$$
Questo perchè:
$$\sum_{k=1}^{n}{\frac{1}{k(k+1)}}=\frac{1}{1\cdot2}+\frac{1}{2\cdot3}+...+\frac{1}{n(n+1)}$$
$$\sum_{k=1}^{n}{\frac{1}{k(k+1)}}=\left(1-\frac{1}{2}\right)+\left(\frac{1}{2}-\frac{1}{3}\right)+...+\left(\frac{1}{n}-\frac{1}{n+1}\right)$$
$$\sum_{k=1}^{n}{\frac{1}{k(k+1)}}=\left(1-\cancel{\frac{1}{2}}\right)+\left(\cancel{\frac{1}{2}}-\cancel{\frac{1}{3}}\right)+...+\left(\cancel{\frac{1}{n}}-\frac{1}{n+1}\right)=1-\frac{1}{n+1}$$
Dunque:
$$\sum_{k=1}^{n}{\frac{1}{k(k+1)}}=\frac{n}{n+1}$$
### Se q è un numero reale diverso da 1, qual è la somma di una progressione geometrica?
$$\sum_{k=0}^{n}{q^k}=\frac{1-q^{n+1}}{1-q}$$
Questo perchè:
$$\sum_{k=0}^{n}{q^k}=1+q+q^2+...+q^n$$
$$(1-q)\sum_{k=0}^{n}{q^k}=1-q^{n+1}$$
$$\sum_{k=0}^{n}{q^k}-q\sum_{k=0}^{n}{q^k}=1-q^{n+1}$$
$$(1+q+q^2+...+q^n)-(q+q^2+...+q^{n+1})=1-q^{n+1}$$
Dunque:
$$\sum_{k=0}^{n}{q^k}=\frac{1-q^{n+1}}{1-q}$$