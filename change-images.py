from os import walk
from os.path import join

footer = '''
<body style="background-color: #343A40;">
'''

footer2 = '''
<body style="background-color: #343A40;">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9MP88W"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
'''


directory = "C:\\Users\\Hugo\\Desktop\\JS-HTML-CSS\\informatica.team\\"
for p, d, f in walk(directory):
    if ".git" not in p and 'imgs' not in p and 'C:\\Users\\Hugo\\Desktop\\JS-HTML-CSS\\informatica.team\\SEO' != p:
        for file in f:
            try:
                if file.endswith(".html"):
                    text = open(join(p, file), 'r', encoding='utf-8').read()
                    text = text.replace(footer, footer2)
                    open(join(p, file), 'w', encoding='utf-8').write(text)
            except:
                print(join(p, file))

print("DONE")