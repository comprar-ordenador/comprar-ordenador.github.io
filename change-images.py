from os import walk
from os.path import join

footer2 = '''
    <script>
        document.getElementById('ok-cookies').addEventListener("click", function(){
            a = document.getElementById('cookie-consent-banner')
            setTimeout(() => {
                a.remove()
            }, 2000);
        }, false);

        document.getElementById('no-cookies').addEventListener("click", function(){
            a = window.history
            setTimeout(() => {
                a.back()
            }, 2000);
        }, false);
    </script>
'''

footer = '''
    <script>
        document.getElementById('ok-cookies').addEventListener("click", function(){
            a = document.getElementById('cookie-consent-banner')
            setTimeout(() => {
                a.remove()
            }, 2000);
        }, false);

        document.getElementById('no-cookies').addEventListener("click", function(){
            a = window.history
            setTimeout(() => {
                a.back()
            }, 2000);
        }, false);
    </script>
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