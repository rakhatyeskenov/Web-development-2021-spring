def powerUp(a, n):
    if n == 0:
        return 1
    res = powerUp(a * a, n // 2)
    if n % 2:
        res *= a
    return res

arr = list(map(float, input().split(" ")))
print(powerUp(float(arr[0]), int(arr[1])))



