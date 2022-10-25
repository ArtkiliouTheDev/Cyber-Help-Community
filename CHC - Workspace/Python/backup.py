x = 0
while 1 == 1:
    def backup(file):
        y = str(x)
        k = str(file).split(".", 1)[0]
        l = "." + str(file).split(".", 1)[1]
        i = str(k + " - backup_" + y + l)
        g = open(file, "r")
        f = open(i, "x")
        f.write(g.read())
        g.close()
        f.close()
    b = str(input("FILE :  "))
    backup(b)
    x = x + 1
