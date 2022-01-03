from os import walk
from os.path import join

old_nav = '''
        <nav style="position: fixed; width: 100%;" class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top" role="navigation">
            <a class="navbar-brand" href="/"><img style="width: 60px;" src="complements/imgs/comprar-ordenadores.webp" alt="comprar-ordenadores"> ϑrdenadores</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Inicio</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Modelos</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/portatiles/">Portátiles</a>
                            <a class="dropdown-item" href="/de-sobremesa/">De Sobremesa</a>
                            <a class="dropdown-item" href="/pc-gaming/">Gaming</a>
                            <a class="dropdown-item" href="/para-oficina/">Para Oficinas</a>
                            <a class="dropdown-item" href="/para-negocios/">Para Negocios</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Marcas</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/...">...</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/resenas/">Reseñas</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/reseñas/">...</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/componentes-de-un-ordenador-y-sus-funciones">Componentes y sus funciones</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/...">...</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
'''
new_nav = '''
        <nav style="position: fixed; width: 100%;" class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top" role="navigation">
            <a class="navbar-brand" href="/"><img style="width: 60px;" src="complements/imgs/comprar-ordenadores.webp" alt="comprar-ordenadores"> ϑrdenadores</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Inicio</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Modelos</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/portatiles/">Portátiles</a>
                            <a class="dropdown-item" href="/de-sobremesa/">De Sobremesa</a>
                            <a class="dropdown-item" href="/pc-gaming/">Gaming</a>
                            <a class="dropdown-item" href="/para-oficina/">Para Oficinas</a>
                            <a class="dropdown-item" href="/para-negocios/">Para Negocios</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Marcas</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/...">...</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/resenas/">Reseñas</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/reseñas/">...</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/componentes-de-un-ordenador-y-sus-funciones">Componentes y sus funciones</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/...">...</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
'''

directory = input("Enter the directory:  ")
for p, d, f in walk(directory):
    if ".git" not in p and 'imgs' not in p:
        for file in f:
            try:
                text = open(join(p, file), 'r', encoding='utf-8').read()
                text = text.replace(old_nav, new_nav)
                # text = text.replace("comprar-ordenadores.webp", "comprar-ordenadores.webp")
                open(join(p, file), 'w', encoding='utf-8').write(text)
            except:
                pass

print("DONE")