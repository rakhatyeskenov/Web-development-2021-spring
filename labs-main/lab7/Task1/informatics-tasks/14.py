x = int(input())
d = int(input())
cnt = 0
s = str(x)
find = str(d)

for i in s:
    if (find == i):
        cnt+=1

print(cnt)
