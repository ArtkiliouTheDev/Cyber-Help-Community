from pynput import keyboard
from pynput.keyboard import Controller
from pynput.keyboard import Listener
from playsound import playsound

keyboard = Controller()

def on_press(key):
    print("Key pressed : {0}".format(key))
    if("{0}".format(key) == "<insérez votre touche>"):
        print("Playing : mon_son.mp3")
        playsound('<insérez votre PATH>')
        print("Played mon_son.mp3")


with Listener(on_press=on_press) as listener:
    listener.join()
