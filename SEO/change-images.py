from os import walk
from os.path import join

old_nav = '''

'''
new_nav = '''

'''

directory = input("Enter the directory:  ")
for p, d, f in walk(directory):
    if ".git" not in p and 'imgs' not in p:
        for file in f:
            try:
                text = open(join(p, file), 'r', encoding='utf-8').read()
                text = text.replace(old_nav, new_nav)
                open(join(p, file), 'w', encoding='utf-8').write(text)
            except:
                pass

print("DONE")