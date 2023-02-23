import os
from argparse import ArgumentParser


def main():
    parser = ArgumentParser()
    parser.add_argument('ind', type=str)
    args = parser.parse_args()
    ind = args.ind

    path = f'../tp{ind}'
    if not os.path.exists(path):
        os.mkdir(path)
        with open(path + '/compte.js', 'w') as file:
            file.write('import "./styles.css"\n\nconst TP' + ind + ' = () => {\n    return (\n        <div className="TP' + ind + '">\n\n        </div>\n    );\n}\n\nexport default TP' + ind + ';')
            file.close()
        open(path + '/styles.css', 'w').close()


if __name__ == '__main__':
    main()
