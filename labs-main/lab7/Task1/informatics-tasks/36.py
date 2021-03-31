def findMin4(a, b, c, d):
    arr = [a, b, c, d]
    arr.sort()
    print(arr[0])


arr = list(map(int, input().split(" ")))
findMin4(arr[0], arr[1],arr[2], arr[3])