n = int(input())
a = list(map(int, input().split(" ")))

for i in range(2, n - 1):
    if (a[i - 1] > 0 and a[i] > 0) or (a[i] < 0 and a[i + 1] < 0):
        print("YES")
        break
    else:
        print("NO")
        break