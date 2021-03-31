from math import ceil, sqrt

def perfectSquares(l, r) :
	number = ceil(sqrt(l));
	n2 = number * number;
	number = (number * 2) + 1;

	while ((n2 >= l and n2 <= r)) :
		print(n2, end= " ");
		n2 = n2 + number;
		number += 2;

a = int(input())
b = int(input())
perfectSquares(a, b);
