n = int(input())
arr = list(map(int, input().split(" ")))
cnt = 0
for i in arr:
    if i % 2 == 0:
        print(i)
