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


if __name__ == '__main__':
    app.run()
