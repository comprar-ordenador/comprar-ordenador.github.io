from os import walk
from os.path import join

meta_keywords = '''
    <meta name="keywords" content="{}">
'''

meta_keywords2 = '''
    <meta property="og:locale" content="es_ES" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="★ ϑrdenadores ★ | La Mejor Tienda Para Comprar Tu Ordenador en 2022" />
	<meta property="og:description" content="✅Ofertas, modelos, reseñas, vocabulario... Todo lo que quieras saber sobre tu ordenador lo tienes en nuestra web ➤ ➤ ¡No compres tu Laptop o PC hasta conocer nuestra opinión ;)!" />
	<meta property="og:url" content="https://comprar-ordenador.github.io/" />
	<meta property="og:site_name" content="ϑrdenadores" />
	<meta property="article:modified_time" content="2022-01-10T11:55:43+00:00" />
	<meta property="og:image" content="https://comprar-ordenador.github.io/complements/imgs/comprar-ordenadores.webp" />
	<meta property="og:image:width" content="471" />
	<meta property="og:image:height" content="340" />
'''

nav_marcas = '''
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Marcas</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/...">...</a>
                        </div>
                    </li>
'''

nav_marcas2 = '''
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Marcas</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/lenovo">Lenovo</a>
                            <a class="dropdown-item" href="/msi">MSI</a>
                            <a class="dropdown-item" href="/dell">Dell</a>
                            <a class="dropdown-item" href="/acer">Acer</a>
                            <a class="dropdown-item" href="/asus">Asus</a>
                            <a class="dropdown-item" href="/microsoft">Microsoft</a>
                            <a class="dropdown-item" href="/apple">Apple</a>
                            <a class="dropdown-item" href="/hp">HP</a>
                            <a class="dropdown-item" href="/alienware">Alienware</a>
                        </div>
                    </li>
'''

nav_so = '''
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Sistemas Operativos</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/...">...</a>
                        </div>
                    </li>
'''

nav_so2 = '''
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Sistemas Operativos</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/sin-os">Sin Sistema Operativo</a>
                            <a class="dropdown-item" href="/windows">Windows</a>
                            <a class="dropdown-item" href="/linux">Linux</a>
                            <a class="dropdown-item" href="/macos">MacOS</a>
                            <a class="dropdown-item" href="/chromeos">Chrome OS</a>
                            <a class="dropdown-item" href="/freebsd">FreeBSD</a>
                        </div>
                    </li>
'''

nav_componentes = '''
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/componentes-de-un-ordenador-y-sus-funciones">Componentes y sus funciones</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/...">...</a>
                        </div>
                    </li>
'''

nav_componentes2 = '''
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/vocabulario">Vocabulario</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/vocabulario">Todos</a>
                            <a class="dropdown-item" href="/...">...</a>
                        </div>
                    </li>
'''

directory = input("Enter the directory:  ")
for p, d, f in walk(directory):
    if ".git" not in p and 'imgs' not in p and 'C:\\Users\\Hugo\\Desktop\\JS-HTML-CSS\\informatica.team\\SEO' != p:
        for file in f:
            try:
                text = open(join(p, file), 'r', encoding='utf-8').read()
                text = text.replace(meta_keywords, meta_keywords2)
                text = text.replace(nav_marcas, nav_marcas2)
                text = text.replace(nav_so, nav_so2)
                text = text.replace(nav_componentes, nav_componentes2)
                open(join(p, file), 'w', encoding='utf-8').write(text)
            except:
                print(join(p, file))

print("DONE")