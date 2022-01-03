from os import walk
from os.path import join

directory = input("Enter the directory:  ")
for p, d, f in walk(directory):
    if ".git" not in p and 'imgs' not in p:
        for file in f:
            try:
                text = open(join(p, file), 'r', encoding='utf-8').read()
                text = text.replace("/ordenadores-para-negocios.webp", "/ordenadores-para-negocios.webp")
                text = text.replace("/ordenadores-para-oficinas.webp", "/ordenadores-para-oficinas.webp")
                open(join(p, file), 'w', encoding='utf-8').write(text)
            except:
                pass

print("DONE")