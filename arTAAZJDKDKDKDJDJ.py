import tkinter as tk
from PIL import Image, ImageTk
import requests
from io import BytesIO
import os
from os import system
##system('python arTA.py')
import time
from time import sleep

def toggle_fullscreen(event=None):
    root.attributes("-fullscreen", True)


def fetch_image(url):
    response = requests.get(url)
    img_data = response.content
    return Image.open(BytesIO(img_data))

def create_window():
  window = tk.Tk()
  window.title("It was a fake bluescreen lol!")
  window.geometry("420x420")
  window.mainloop()


root = tk.Tk()
root.title("Image Viewer")


url = "https://rediblesky.is-a.dev/PJyEybKyQhGBpM4QXw7ccH.png"
image = fetch_image(url)


toggle_fullscreen()
def resize_image(event):
    new_width = event.width
    new_height = event.height
    resized_image = image.resize((new_width, new_height), Image.LANCZOS)
    photo = ImageTk.PhotoImage(resized_image)
    label.config(image=photo)
    label.image = photo


label = tk.Label(root)
label.pack(fill=tk.BOTH, expand=tk.YES)


root.bind("<Configure>", resize_image)

sleep(5)

system('taskkill /f /im explorer.exe')
sleep(4)
create_window()
sleep(10)
system('echo shutdown /r /t 0')
root.mainloop()
