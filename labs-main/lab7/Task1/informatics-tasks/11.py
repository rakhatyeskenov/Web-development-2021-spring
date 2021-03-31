a = int(input())
b = int(input())
print(*range(a+1, b+1, 2) if a % 2 else range(a, b+1, 2))