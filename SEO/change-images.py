from os import walk
from os.path import join

footer = '''
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/resenas/">Reseñas</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/acer-predator-helios-300-PH315-54/">Acer predator helios 300</a>
                            <a class="dropdown-item" href="/asus-rog-g513IC-HN004/">Asus ROG g513IC</a>
                            <a class="dropdown-item" href="/ASUS-Vivo-AiO-V272UAK-BA052D/">ASUS Vivo AiO</a>
                            <a class="dropdown-item" href="/comprar-vibox-vii-34-pc-gaming/">Vibox VII 34</a>
                            <a class="dropdown-item" href="/dell-alienware-m15-R6/">Dell Alienware m15</a>
                            <a class="dropdown-item" href="/hp-victus-16-e053ns/">HP Victus 16</a>
                            <a class="dropdown-item" href="/KUU-A5/">KUU A5</a>
                            <a class="dropdown-item" href="/Lenovo-IdeaCentre-AIO-3/">Lenovo IdeaCentre AiO 3</a>
                            <a class="dropdown-item" href="/Lenovo-IdeaPad-5/">Lenovo IdeaPad 5</a>
                            <a class="dropdown-item" href="/LG-Gram-14Z90P/">LG Gram 14Z90P</a>
                            <a class="dropdown-item" href="/macbook-pro-chip-m1/">MacBook Pro Chip M1 Pro</a>
                            <a class="dropdown-item" href="/microsoft-surface-laptop-4/">Microsoft surface Laptop 4</a>
                            <a class="dropdown-item" href="/msi-bravo-15-B5DD-012XES/">MSI Bravo 15</a>
                            <a class="dropdown-item" href="/vant-moove-3-14/">Vant Moove3-14</a>
                        </div>
                    </li>
'''

footer2 = '''
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Reseñas</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/acer-predator-helios-300-PH315-54/">Acer predator helios 300</a>
                            <a class="dropdown-item" href="/asus-rog-g513IC-HN004/">Asus ROG g513IC</a>
                            <a class="dropdown-item" href="/ASUS-Vivo-AiO-V272UAK-BA052D/">ASUS Vivo AiO</a>
                            <a class="dropdown-item" href="/comprar-vibox-vii-34-pc-gaming/">Vibox VII 34</a>
                            <a class="dropdown-item" href="/dell-alienware-m15-R6/">Dell Alienware m15</a>
                            <a class="dropdown-item" href="/hp-victus-16-e053ns/">HP Victus 16</a>
                            <a class="dropdown-item" href="/KUU-A5/">KUU A5</a>
                            <a class="dropdown-item" href="/Lenovo-IdeaCentre-AIO-3/">Lenovo IdeaCentre AiO 3</a>
                            <a class="dropdown-item" href="/Lenovo-IdeaPad-5/">Lenovo IdeaPad 5</a>
                            <a class="dropdown-item" href="/LG-Gram-14Z90P/">LG Gram 14Z90P</a>
                            <a class="dropdown-item" href="/macbook-pro-chip-m1/">MacBook Pro Chip M1 Pro</a>
                            <a class="dropdown-item" href="/microsoft-surface-laptop-4/">Microsoft surface Laptop 4</a>
                            <a class="dropdown-item" href="/msi-bravo-15-B5DD-012XES/">MSI Bravo 15</a>
                            <a class="dropdown-item" href="/vant-moove-3-14/">Vant Moove3-14</a>
                        </div>
                    </li>
'''


directory = "C:\\Users\\Hugo\\Desktop\\JS-HTML-CSS\\informatica.team\\"
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