from os import walk
from os.path import join

footer = '''
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/vocabulario">Vocabulario</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/vocabulario">Todos</a>
                            <a class="dropdown-item" href="/...">...</a>
                        </div>
                    </li>
'''

footer2 = '''
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/vocabulario">Vocabulario</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/vocabulario/CPU">CPU</a>
                            <a class="dropdown-item" href="/vocabulario/GPU">GPU</a>
                            <a class="dropdown-item" href="/vocabulario/disco-duro">Disco Duro</a>
                            <a class="dropdown-item" href="/vocabulario/OS">OS</a>
                            <a class="dropdown-item" href="/vocabulario/RAM">RAM</a>
                            <a class="dropdown-item" href="/vocabulario/resolucion">Resolución</a>
                        </div>
                    </li>
'''


directory = input("Enter the directory:  ")
for p, d, f in walk(directory):
    if ".git" not in p and 'imgs' not in p and 'C:\\Users\\Hugo\\Desktop\\JS-HTML-CSS\\informatica.team\\SEO' != p:
        for file in f:
            try:
                text = open(join(p, file), 'r', encoding='utf-8').read()
                text = text.replace(footer, footer2)
                open(join(p, file), 'w', encoding='utf-8').write(text)
            except:
                print(join(p, file))

print("DONE")