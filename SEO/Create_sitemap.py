from os import walk
from os.path import join
import re

text = '<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="//barbacoas.online/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl"?>\n<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

directory = 'C:\\Users\\Hugo\\Desktop\\JS-HTML-CSS\\informatica.team\\'
for p, d, f in walk(directory):
    if ".git" not in p and 'imgs' not in p and 'C:\\Users\\Hugo\\Desktop\\JS-HTML-CSS\\informatica.team\\SEO' != p:
        for file in f:
            try:
                if file.endswith('.html'):
                    file_text = open(join(p, file), 'r', encoding='utf-8').read()
                    file_text = re.sub('<!--.*?-->', '', file_text, flags=re.DOTALL)
                    url_text = "\t<url>\n\t\t<loc>" + join(p, file).replace("/", "\\").replace("C:\\Users\\Hugo\\Desktop\\JS-HTML-CSS\\informatica.team\\", "https://comprar-ordenador.github.io/").replace("\\", "/") + "</loc>\n\t\t<lastmod>" + "2022-05-05T19:20:00+00:00" + "</lastmod>\n"
                    imgs = re.findall(r'<img.*?src="(.*?)".*?alt="(.*?)"', file_text)
                    for img in imgs:
                        url_text += "\t\t<image:image>\n\t\t\t<image:loc>" + "https://comprar-ordenador.github.io/" + img[0].replace("./", "") + "</image:loc>\n\t\t\t<image:title>" + img[1] + "</image:title>\n\t\t</image:image>\n"
                    url_text += "\t</url>\n"
                    text += url_text
            except:
                print(join(p, file))

text += '\n</urlset>'
open('C:\\Users\\Hugo\\Desktop\\JS-HTML-CSS\\informatica.team\\sitemap.xml', 'w', encoding="utf-8").write(text)
