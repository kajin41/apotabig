from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/max')
def max():
    return render_template('max.html')

@app.route('/aiden')
def aiden():
    return render_template('aiden.html')

@app.route('/max/clue1')
def clue1():
    return render_template('clue1.html')

@app.route('/max/clue2')
@app.route('/max/clue3')
@app.route('/max/clue4')
@app.route('/max/clue5')
@app.route('/max/clue6')
def syc():
    return "It's not that easy find the next person"

@app.route('/max/thetwelfth')
def clue2():
    return render_template('clue2.html')

@app.route('/max/madness')
def clue3():
    return render_template('clue3.html')

@app.route('/max/pandamonium')
def clue4():
    return render_template('clue4.html')

@app.route('/max/TheImpossibleGirl')
def clue5():
    return render_template('clue5.html')

@app.route('/max/LoveDreams')
def clue6():
    return render_template('clue6.html')





if __name__ == '__main__':
    app.run()
