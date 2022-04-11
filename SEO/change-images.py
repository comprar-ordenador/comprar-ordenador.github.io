from os import walk
from os.path import join

footer = '''
    <footer>
        <ul class="footer-ul">
            <li><label>👉</label><a style="color: white;" href="/ordenadores/"><u>MEJORES OFERTAS</u> de ordenadores</a></li><br>
            <li><label>👉</label><a style="color: white;" href="/reseñas/">Reseñas</li><br>
            <li><label>👉</label><a style="color: white;" href="/cursos-programacion/">Cursos de programación gratis</a></li><br>
            <li><label>👉</label><a style="color: white;" href="/cursos-informatica/">Cursos de informática gratis</a></li><br>
        </ul>
    </footer>
'''

footer2 = '''
    <footer>
        <ul class="footer-ul">
            <li><label>👉</label><a style="color: white;" href="/" target="blank"><u>Reseñas y mejores ofertas</u> de ordenadores</a></li><br>
            <li><label>👉</label><a style="color: white;" href="https://www.youtube.com/c/informaticodigo" target="blank">Tutoriales de programación e informática gratis</a></li><br>
            <li><label>👉</label><a style="color: white;" href="/vocabulario/" target="blank">Vocabulario informático</li><br>
        </ul>
    </footer>
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