import Exercise from "../utils/Exercise";
import CodeSample from "../utils/CodeSample";
import "./styles.css"

const TP2 = () => {
    return (
        <div className="TP2">
            <h1 className="Header">Compte-rendu de TP2. Tertilov Vadim!</h1>
            <Exercise>
                <h2>Exercice 1: Document de base, le retour!</h2>
                <p>Les tags HTML commencent par une balise ouvrante &lt;foo&gt; et finissent par une balise fermante &lt;/foo&gt;.</p>
                <p>Pour mettre en <strong>gras</strong>, on utilise le tag &lt;strong&gt; et pour mettre en <em>italique</em>, on utilise le tag &lt;em&gt;.</p>
                <p>Pour mettre un mot à la fois en <strong>gras</strong> et en <em>italique</em>, on peut utiliser le tag &lt;strong&gt; dans le tag &lt;em&gt; ou vice versa.</p>
                <ol>
                    <li>Pour que les questions soient automatiquement numérotées, on utilise le tag &lt;ol&gt; pour une liste ordonnée et &lt;li&gt; pour chaque élément de la liste.</li>
                    <li>J'ai écrit "Compte-rendu de TP 2" dans l'en-tête pour donner un titre global au document et dans le corps pour rappeler le titre en cours de traitement.</li>
                    <li><a className="Url" href="https://www.w3schools.com/react/default.asp" target='_blank'>Cours de programmation web</a></li>
                </ol>
                <Exercise>
                    <h3>Arbre des différents tags correspondant au compte rendu</h3>
                    <img src="https://math.univ-lyon1.fr/irem/Formation_ISN/formation_html_css/exo_liens/liens_images/arbre1.png" alt="Arbre des différents tags correspondant au compte rendu"/>
                </Exercise>
            </Exercise>
            <Exercise>
                <h2>Exercice 2 : Les listes et les tables</h2>
                <Exercise>
                    <h3>Une liste numérotée</h3>
                    <ol>
                        <li>maths</li>
                        <li>physique</li>
                        <li>français</li>
                    </ol>
                </Exercise>
                <Exercise>
                    <h3>Une liste pas numérotée</h3>
                    <ul>
                        <li>maths</li>
                        <li>physique</li>
                        <li>français</li>
                    </ul>
                </Exercise>
                <Exercise>
                    <h3>La table de multiplication</h3>
                    <table className="Table">
                        <tr className="Row">
                            <th className="MainCell"></th>
                            <th className="MainCell">1</th>
                            <th className="MainCell">2</th>
                            <th className="MainCell">3</th>
                            <th className="MainCell">4</th>
                        </tr>
                        <tr className="Row">
                            <th className="MainCell">1</th>
                            <td className="Cell">1</td>
                            <td className="Cell">2</td>
                            <td className="Cell">3</td>
                            <td className="Cell">4</td>
                        </tr>
                        <tr className="Row">
                            <th className="MainCell">2</th>
                            <td className="Cell">2</td>
                            <td className="Cell">4</td>
                            <td className="Cell">6</td>
                            <td className="Cell">8</td>
                        </tr>
                        <tr className="Row">
                            <th className="MainCell">3</th>
                            <td className="Cell">3</td>
                            <td className="Cell">6</td>
                            <td className="Cell">9</td>
                            <td className="Cell">12</td>
                        </tr>
                        <tr className="Row">
                            <th className="MainCell">4</th>
                            <td className="Cell">4</td>
                            <td className="Cell">8</td>
                            <td className="Cell">12</td>
                            <td className="Cell">16</td>
                        </tr>
                    </table>
                </Exercise>
                <Exercise>
                    <h3>On souhaite ajouter une case faisant 2 colonnes et une case faisant deux lignes dans une nouvelle table.</h3>
                    <p>Pour ajouter une case faisant 2 colonnes ou 2 lignes dans une table HTML5, il est possible d'utiliser les attributs colspan et rowspan.</p>

                    <p>L'attribut colspan permet de spécifier le nombre de colonnes qu'une cellule doit occuper horizontalement, tandis que l'attribut rowspan permet de spécifier le nombre de lignes qu'une cellule doit occuper verticalement.</p>

                    <p>Par exemple, pour créer une cellule qui occupe deux colonnes, on peut utiliser l'attribut colspan="2" sur la cellule en question, comme ceci:</p>

                    <CodeSample language='HTML' code='<td colSpan="2">Contenu de la cellule qui occupe deux colonnes</td>'/>

                    <p>De même, pour créer une cellule qui occupe deux lignes, on peut utiliser l'attribut rowspan="2", comme ceci:</p>

                    <CodeSample language='HTML' code='<td rowSpan="2">Contenu de la cellule qui occupe deux lignes</td>'/>

                    <p>Pour trouver cette information dans la spécification HTML5, j'ai consulté la documentation de la balise td sur le site web du W3C (World Wide Web Consortium). Cette documentation décrit les différents attributs qui peuvent être utilisés avec les balises td et th, y compris colspan et rowspan.</p>

                    <p>Voici le lien vers la documentation en question: https://www.w3.org/TR/html52/tabular-data.html#the-td-element</p>
                </Exercise>
            </Exercise>
        </div>
    );
}

export default TP2;