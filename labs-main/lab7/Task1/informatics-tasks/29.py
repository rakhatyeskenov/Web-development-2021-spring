arr = list(map(int, input().split(" ")))
arr2 = []
for i in range(len(arr)):
    if i % 2 == 0:
        arr2.append(arr[i])
print(" ".join(input().split()[::2]))
