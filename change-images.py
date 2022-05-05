from os import walk
from os.path import join

footer = '''
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M9MP88W');</script>
<!-- End Google Tag Manager -->
'''

footer2 = '''
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M9MP88W');</script>
    <!-- End Google Tag Manager -->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-HQQ968CNTT"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-HQQ968CNTT');
    </script>
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