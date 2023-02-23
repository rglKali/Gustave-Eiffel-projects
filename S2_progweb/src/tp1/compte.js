import './styles.css'
import Exercise from "../utils/exercise";


const TP1 = () => {
    return (
        <div className="TP1">
            <h1 className="Header">Compte-rendu de TP1. Tertilov Vadim!</h1>
            <Exercise>
                <h2>Exercice 0: On sort un papier et un crayon</h2>
                <p>"Voilà, c'est fait!"</p>
            </Exercise>
            <Exercise>
                <h2>Exercice 1: On commence tranquillement !</h2>
                <p>1. mkdir progweb </p>
                <p>2. cd progweb </p>
                <p>3. mkdir tp1 </p>
                <p>4. cd tp1 </p>
                <p>5. notepad compte-rendu-tp1.txt</p>
            </Exercise>
            <Exercise>
                <h2>Exercice 2: Document HTML de base</h2>
                <p>Il n'y a pas de tag 'meta charset'</p>
                <Exercise>
                    <h3>À quoi servent les tags h1, h2 et h3 ?</h3>
                    <p>h1 : est généralement utilisé pour le titre principal de la page, il doit y avoir un seul titre h1 par page, car il décrit l'objet de la page.</p>
                    <p>h2 : est généralement utilisé pour les titres de sections importantes, qui viennent après le titre principal (h1).</p>
                <p>h3 : est généralement utilisé pour les sous-titres des sections importantes, qui viennent après le titre de section (h2).</p>
                </Exercise>
                <Exercise>
                    <h3>À quoi sert le tag p ?</h3>
                    <p>Le tag p en HTML sert à définir un paragraphe de texte. Il permet de structurer et de formater du texte en groupes de phrases cohérentes. Les navigateurs web interprètent ce tag en ajoutant automatiquement un certain nombre de marges et d'espacements pour séparer les paragraphes les uns des autres. Les paragraphes sont souvent utilisés pour présenter du contenu de longueur variable, comme du texte descriptif, des commentaires ou des sections de contenu distinctes.</p>
                </Exercise>
            </Exercise>
            <Exercise>
                <h2>Exercise 3: Uniform Resource Locator</h2>
                <Exercise>
                    <h3>Ouvrez un navigateur Web et allez à <a href="http://www.w3.org/standards/">l'URL suivante:</a></h3>
                    <p>Le nom de la machine est 'www.w3.org'</p>
                    <p>Le nom de domaine est 'w3.org'</p>
                </Exercise>
                <Exercise>
                    <h3>Si l'on exécute 'nslookup w3.org'</h3>
                    <p>La première ligne de la réponse correspond à l'adresse IP associée au nom de domaine "w3.org"</p>
                    <p>La deuxième ligne de la réponse correspond au nom de l'autorité de noms de domaine (DNS) qui a fourni la réponse</p>
                </Exercise>
                <Exercise>
                    <h3>Dans le navigateur Web, dans la barre contenant l'URL, remplacez le nom de la machine par son adresse IP pour vérifier que cela fonctionne toujours. À votre avis, pourquoi utilise-t-on des noms pour les machines plutôt que des adresses IP ?</h3>
                    <p>Nous utilisons des noms au lieu d'adresses IP car ils sont plus proches de la parole humaine, ce qui les rend plus faciles à analyser ou à retenir. </p>
                </Exercise>
                <Exercise>
                    <h3>Exécutez la commande tracert sur cette adresse IP. Qu'affiche cette commande ? Comment s'appelle le réseau sur lequel est connectée l'université (ou votre domicile) ? Quels sont les autres réseaux qui sont traversés ?</h3>
                    <p>La commande "tracert" (ou "traceroute" sur certains systèmes d'exploitation) affiche le chemin que les paquets de données parcourent de votre ordinateur à une adresse IP spécifique. La sortie de cette commande affiche le nombre de sauts et le temps de transit de chaque étape du parcours, ainsi que les adresses IP des différents routeurs et équipements traversés. Cette information peut être utile pour diagnostiquer des problèmes de connectivité réseau et pour comprendre les différentes étapes par lesquelles les données voyageent sur le réseau.</p>
                    <p>unn-195-181-162-189.cdn77.com [195.181.162.189]</p>
                    <p>vl203.mia-eq1-core-1.cdn77.com [185.156.45.244], vl211.mia-eq1-edge-1.cdn77.com [185.229.188.71], cloudflare-mia.cdn77.com [45.134.215.15], etc.</p>
                </Exercise>
                <Exercise>
                    <h3>On cherche maintenant à voir l'ancienne version du cours</h3>
                    <p>Si vous essayez d'accéder à la page en remplaçant le nom d'hôte "forax.github.io" par l'adresse IP trouvée précédemment, cela pourrait fonctionner si le serveur Web est configuré pour accepter les connexions directes à partir de cette adresse IP. Cependant, cela peut également ne pas fonctionner si les configurations du serveur sont configurées pour n'accepter les connexions qu'à partir de noms d'hôtes valides.</p>
                    <p>Si vous remplacez "forax.github.io" par "vincentjuge1987.github.io" au début de l'URL, vous allez accéder à un site différent qui peut ne pas avoir de lien avec le site "forax.github.io". Cela dépend du contenu hébergé sur le serveur associé à ce nom d'hôte. Les noms d'hôtes sont uniques, ils permettent d'identifier un site web particulier sur Internet. Il est important de noter que si le nom d'hôte n'est pas reconnu par le système de noms de domaine (DNS), vous ne serez pas en mesure de consulter le site Web associé.</p>
                </Exercise>
            </Exercise>
            <Exercise>
                <h2>Exercice 4: Service HTTP</h2>
                <Exercise>
                    <h3>Quel est le port TCP correspondant au protocole HTTP ?</h3>
                    <p>Le port TCP correspondant au protocole HTTP est le port 80.</p>
                </Exercise>
                <Exercise>
                    <h3>Quel est le header (l'en-tête, en français) de la réponse ?</h3>
                    <p>L'en-tête (header) de la réponse comporte des informations sur la requête HTTP et sur la réponse HTTP elle-même. Il comprend plusieurs lignes de métadonnées qui peuvent inclure: </p>
                        <ul>
                            <li>Les informations sur la version HTTP utilisée</li>
                            <li>Le statut de la réponse HTTP (200 OK, 404 Not Found, etc.)</li>
                            <li>Les informations sur le type de contenu renvoyé (html, image, etc.)</li>
                            <li>La taille du contenu renvoyé</li>
                            <li>Et d'autres informations en fonction de la requête et de la configuration du serveur.</li>
                        </ul>
                </Exercise>
                <Exercise>
                    <h3>À quoi correspondent les 3 valeurs sur la première ligne de l'en-tête ?</h3>
                    <p>La première ligne de l'en-tête correspond aux informations sur la version HTTP utilisée, le statut de la réponse HTTP et un court message décrivant le statut. Par exemple, "HTTP/1.1 200 OK" signifie que la requête HTTP a réussi et que la réponse utilise la version 1.1 de HTTP.</p>
                </Exercise>
                <Exercise>
                    <h3>Quel est le nom du serveur Web ?</h3>
                    <p>Le nom du serveur Web dépend de la configuration du serveur qui gère la requête HTTP. Ce nom peut être indiqué dans l'en-tête "Server" ou ne pas être présent.</p>
                </Exercise>
                <Exercise>
                    <h3>À quoi correspond la valeur de Content-Type ?</h3>
                    <p>La valeur de Content-Type décrit le type de contenu renvoyé dans la réponse HTTP. Par exemple, "text/html" signifie que le contenu renvoyé est une page HTML.</p>
                </Exercise>
                <Exercise>
                    <h3>À quoi correspond la valeur de Content-Length ?</h3>
                    <p>La valeur de Content-Length décrit la taille du contenu renvoyé dans la réponse HTTP en octets. Cela permet au navigateur web de savoir combien de données à télécharger pour afficher correctement le contenu.</p>
                </Exercise>
                <Exercise>
                    <h3>À quoi correspond la valeur de Location ?</h3>
                    <p>La valeur de Location correspond à une adresse URL qui indique au client (navigateur web, requête HTTP, etc.) où trouver la ressource demandée. Si une réponse HTTP contient un en-tête "Location", cela signifie généralement que la ressource demandée n'est pas disponible à l'adresse actuelle et que le client doit suivre la redirection pour accéder à la ressource.</p>
                </Exercise>
                <Exercise>
                    <h3>Que se passe-t-il lorsque je lance la commande wget monge.univ-mlv.fr/index.html ? Expliquer la signification des lignes qui apparaissent sur la ligne de commande.</h3>
                    <p>Lorsque vous lancez la commande wget monge.univ-mlv.fr/index.html, le programme wget envoie une requête HTTP pour obtenir le fichier HTML nommé "index.html" sur le serveur à l'adresse monge.univ-mlv.fr.</p>
                    <p>Les lignes qui apparaissent sur la ligne de commande affichent des informations sur le processus de téléchargement, telles que la progression du téléchargement, la vitesse de téléchargement, la taille du fichier, etc. Ces informations peuvent aider à comprendre comment le téléchargement est en train de se dérouler et s'il y a des problèmes de connexion, de temps d'attente, etc. Si le téléchargement réussit, le fichier HTML "index.html" sera enregistré sur votre ordinateur local.</p>
                </Exercise>
            </Exercise>
        </div>
    )
}

export default TP1;
