import numpy as np
from flask import Flask, render_template, url_for, request, jsonify, make_response


app = Flask(__name__, template_folder='../frontend', static_folder='../frontend')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/rate', methods=['GET', 'POST'])
def rate():
    message = None
    if request.method == 'POST':
        datafromjs = request.form['mydata']
        result = "return this"
        resp = make_response('{"response": ' + result + '}')
        resp.headers['Content-Type'] = "application/json"
        return resp


def intersect(P0, P1):
    """P0 and P1 are NxD arrays defining N lines.
    D is the dimension of the space. This function
    returns the least squares intersection of the N
    lines from the system given by eq. 13 in
    http://cal.cs.illinois.edu/~johannes/research/LS_line_intersect.pdf.
    """
    # generate all line direction vectors
    n = (P1 - P0) / np.linalg.norm(P1 - P0, axis=1)[:, np.newaxis]  # normalized

    # generate the array of all projectors
    projs = np.eye(n.shape[1]) - n[:, :, np.newaxis] * n[:, np.newaxis]  # I - n*n.T
    # see fig. 1

    # generate R matrix and q vector
    R = projs.sum(axis=0)
    q = (projs @ P0[:, :, np.newaxis]).sum(axis=0)

    # solve the least squares problem for the
    # intersection point p: Rp = q
    p = np.linalg.lstsq(R, q, rcond=None)[0]

    return p


if __name__ == "__main__":
    app.run(debug=True)
