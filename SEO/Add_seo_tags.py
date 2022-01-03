from tkinter import *
from tkinter.filedialog import askopenfilename
import pandas as pd

def select_seo_origin(entry):
    file = askopenfilename(filetypes=(('Excel Files', '*.xlsx'), ))
    entry.delete(0, END)
    entry.insert(0, file)

def select_html_file(entry):
    file = askopenfilename(filetypes=(('HTML Files', '*.html *.htm'), ))
    entry.delete(0, END)
    entry.insert(0, file)

def execute():
    origin = tags_origin.get()
    dst = file_dst.get()
    keyword = key_expresion.get()
    book = pd.read_excel(origin, sheet_name=None)['keywords'].values.tolist()
    useful_words = []
    for word in book:
        correct = True
        for w in keyword.split(","):
            if not w in word[0]:
                correct = False
        if correct:
            useful_words.append(word[0])
    open(dst, 'w', encoding='utf-8').write(open(dst, 'r', encoding='utf-8').read().replace("{}", ','.join(useful_words)))

window = Tk()

tags_origin = Entry(window, font="Calibri 32", bg="chartreuse")
tags_origin.grid(row=0, column=0)
Button(window, font="Calibri 25", text="Select SEO origin", command=lambda: select_seo_origin(tags_origin)).grid(row=0, column=1)

file_dst = Entry(window, font="Calibri 32", bg="chartreuse")
file_dst.grid(row=1, column=0)
Button(window, font="Calibri 25", text="Select the HTML file", command=lambda: select_html_file(file_dst)).grid(row=1, column=1)

key_expresion = Entry(window, font="Calibri 32", bg="chartreuse")
key_expresion.grid(row=2, column=0, columnspan=2)

Button(window, font="Calibri 25", text="Execute", command=lambda: execute()).grid(row=3, column=0, columnspan=2)

window.mainloop()