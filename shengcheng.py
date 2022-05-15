import scLib,json,random
with open('./teachers.txt','r') as f:s=f.read()
tl=scLib.getteacherlist(s)
# print(tl)
tl2,dic=tl[:],{}
for i in tl:
    while True:
        r=random.randint(1,100)
        # r2=random.randint(1,100)
        if i!=(r%len(tl2)):
            dic[i]=tl2[r%len(tl2)]
            del tl2[r%len(tl2)]
            break
with open('./finished.json','w')as f:json.dump(dic,f,indent=4)