def getteacherlist(teachers):
    tlist,tm=[],''
    if teachers[-1]!='\n':
        teachers=teachers+'\n'
    for i in teachers:
        if i=='\n':
            tlist.append(tm)
            tm=''
        else:
            tm=tm+i
    return tlist