"use strict"
//Translation list
//Selecting the HTML elements
document.querySelector("#German");
const title = document.querySelector("#title");
const about = document.querySelector("#about");
const germanRecipes = document.querySelector("#german-recipes");
const otherRecipes = document.querySelector("#other-recipes");
const foodSearch = document.querySelector(".search-field");
const searchbtn = document.querySelector("#searchbtn");
const mainText = document.querySelector("#main-text");
//Currywurst
const m1info = document.querySelector("#m1-info");
const cookTime1 = document.querySelector("#time-one");
const cookTime2 = document.querySelector("#time-two");
const cookTime3 = document.querySelector("#time-three");
const ing = document.querySelectorAll("#ingredients");
const oil1 = document.querySelector("#m1-oil");
const oil2 = document.querySelector("#m2-oil");
const m1ketchup = document.querySelector("#m1-ketchup");
const m1onion = document.querySelector("#m1-onion");
const m1garlic = document.querySelector("#m1-garlic");
const m1paprika = document.querySelector("#m1-paprika");
const m1wsauce = document.querySelector("#m1-wsauce");
const m1curryp = document.querySelector("#m1-curryp");
const m1salt = document.querySelector("#m1-salt");
const m1bp = document.querySelector("#m1-bp");
const m1cp = document.querySelector("#m1-cp");
const m1paste = document.querySelector("#m1-paste");
const m1fries = document.querySelector("#m1-fries");
const instr = document.querySelectorAll(".instructions");
const curry = document.querySelector("#curry");
const wurst = document.querySelector("#wurst");
const m1s1 = document.querySelector("#m1s1");
const m1s2 = document.querySelector("#m1s2");
const m1s3 = document.querySelector("#m1s3");
const m1s4 = document.querySelector("#m1s4");
const m1s5 = document.querySelector("#m1s5");
const m1s6 = document.querySelector("#m1s6");
//Schnitzel
const m2info = document.querySelector("#m2-info");
const m2pork = document.querySelector("#m2-pork");
const m2salt = document.querySelector("#m2-salt");
const m2bp = document.querySelector("#m2-bp");
const m2panko = document.querySelector("#m2-panko");
const m2flour = document.querySelector("#m2-flour");
const m2eggs = document.querySelector("#m2-eggs");
const m2oil = document.querySelector("#m2-oil");
const m2fries = document.querySelector("#m2-fries");
const m2s1 = document.querySelector("#m2s1");
const m2s2 = document.querySelector("#m2s2");
const m2s3 = document.querySelector("#m2s3");
const m2s4 = document.querySelector("#m2s4");
const m2s5 = document.querySelector("#m2s5");
//Spaetzle
const m3info = document.querySelector("#m3-info");
const m3eggs = document.querySelector("#m3-eggs");
const m3salt = document.querySelector("#m3-salt");
const m3flour = document.querySelector("#m3-flour");
const m3milk = document.querySelector("#m3-milk");
const m3s1 = document.querySelector("#m3s1");
const m3s2 = document.querySelector("#m3s2");
const m3s3 = document.querySelector("#m3s3");
const m3s4 = document.querySelector("#m3s4");
//Newsletter
const sub = document.querySelector("#sub");
const subText = document.querySelector("#sub-text");
const yourEmail = document.querySelector("#email");
const subBtn = document.querySelector("#sub-btn");
const TnC = document.querySelector("#TnC");


//Clicking the German flag will switch the website to German
document.querySelector("#German").onclick = function (){
    title.innerText = "einfache deutsche Gerichte";
    about.innerText = "Über mich";
    germanRecipes.innerText = "deutsche Rezepte";
    otherRecipes.innerText = "andere Rezepte";
    foodSearch.placeholder = 'Essen suchen';
    searchbtn.innerText = "suchen";
    mainText.innerText = "Im heutigen Blog, werde ich euch beliebte deutsche Gerichte vorstellen. Sie sind schnell, einfach und lecker! Sie sind auch perfekt, um Erinnerungen zu wecken. Das erste Gericht ist: ";
//CurryWurst
    m1info.innerText = "Currywurst wurde 1949 erfunden, fünf Jahre nach dem Ende des Zweiten Weltskriegs, von einer Frau mit dem Namen Herta Heuwer. Das Gericht wurde damals aus einer Kombination von Ketchup (dass sie im Gegenzug von den Britischen Soldaten für die Spirituosen bekommen hat), Worcestershire Soße und Curry Pulver, welches auf die gegrillte Bratwurst gestreut wurde! Der Grund dafuer war, dass man, während des kalten Kriegs, den Geschmack von der Essen verbessern wollte. Auch heute noch ist es eines der meist gegessenen Street Foods in Deutschland!";
    cookTime1.innerText = "Zubereitungszeit: 20 Minuten";
    cookTime2.innerText = "Zubereitungszeit: 30 Minuten";
    cookTime3.innerText = "Zubereitungszeit: 15 Minuten";
    ing.innerText = "Zutaten:";
    ing.forEach(ing => ing.innerText = "Zutaten:"); //Translates all ids with #ingredients stored in ing
    oil1.innerText = "1 EL Pflanzenöl";
    oil2.innerText = "Pflanzenöl";
    m1ketchup.innerText = "1 Tasse Tomatenketchup";
    m1onion.innerText = "1 Zwiebeln, gewürfelt";
    m1garlic.innerText = "2 Knoblauchzehen, gehackt";
    m1paprika.innerText = "2 EL Paprika";
    m1wsauce.innerText = "2 EL Worcestershire soße";
    m1curryp.innerText = "1 1/2 EL Currypulver";
    m1salt.innerText = "1 EL Salz";
    m1bp.innerText = "1/8 TL schwarzer Pfeffer";
    m1cp.innerText = "1/4 TL Cayennepfeffer (Optional)";
    m1paste.innerText = "1 EL Tomatenmark";
    m1fries.innerText = "Pommes";
    instr.forEach(instr => instr.innerText = "Anleitung:");
    curry.innerText = "Das Curry:";
    wurst.innerText = "Die Wurst:";
    m1s1.innerText = "Geben Sie 1 EL Pflanzenöl in einen kleinen Topf und warten Sie, bis sich das Öl erhitzt hat. Wenn das Öl fertig ist, reduzieren Sie es auf mittlere Hitze und kochen Sie die Zwiebelwürfel. Die Zwiebelwürfel dürfen nicht braun werden.";
    m1s2.innerText = "Geben Sie den gehackten Knoblauch hinzu und kochen Sie für eine weitere Minute.";
    m1s3.innerText = "Dann folgen alle anderen Zutaten außer die Bratwürste und Pommes. Kochen Sie weitere 30 Sekunden, bevor Sie es 15 Minuten köcheln lassen und gelegentlich umrühren. Fügen Sie Wasser hinzu, wenn Sie es bevorzugen, dass die Sauce weniger dick ist. Fertig ist die Soße.";
    m1s4.innerText = "Wenn die Würste nicht vorgekocht sind, kochen Sie diese zuerst in Wasser.";
    m1s5.innerText = "Als nächstes entscheiden Sie, ob Sie die Würste grillen oder in der Pfanne braten möchten. (Bratwürste werden normalerweise gegrillt.) Stellen Sie sicher, dass sie gekocht werden, bis die Außenhaut knusprig braun ist!";
    m1s6.innerText = "Im Ganzen oder in mundgerechte Stücke geschnitten mit Pommes Frites an der Seite servieren. Vergessen Sie nicht, es mit der gekochten Currysauce zu glasieren, die mit zusätzlichem Currypulver bestreut ist!";
//Schnitzel
    m2info.innerText = "In anderen Ländern gibt es viele Variationen dieses Gerichts, aber in Deutschland sind die Schnitzel hauptsächlich Schweine- oder Hähnchenschnitzel. Typischerweise knochenlose Fleischkoteletts. Natürlich wäre es kein Schnitzel, wenn das Fleisch nicht zart gemacht, komplett paniert und anschließend frittiert wurde. Das Wort Schnitzel kommt vom deutschen Verb „schneiden“, welches „schneiden/in Scheiben schneiden“ bedeutet, also geschnittenes Fleisch. Sie werden auch mit Pommes Frites oder Gekochte Kartoffeln als Beilage serviert. Für die folgenden Zutaten verwende ich Schweinefleisch.";
    m2pork.innerText = "Schweinesteaks oder Koteletts ohne Knochen";
    m2salt.innerText = "4 TL Salz (oder nach Geschmack)";
    m2bp.innerText = "4 TL schwarzer Pfeffer (oder nach Geschmack)";
    m2panko.innerText = "2 Tassen Panko Semmelbrösel";
    m2flour.innerText = "1/2 Tasse Allzweckmehl";
    m2eggs.innerText = "3 Eier, geschlagen";
    m2oil.innerText = "Pflanzenöl";
    m2fries.innerText = "Gekochte Kartoffeln/Pommes Frites (Optional)";
    m2s1.innerText = "Gießen Sie das Pflanzenöl auf hoher Flamme in eine beschichtete Bratpfanne. Je größer die Pfanne, desto mehr Schnitzel können Sie hineingeben. Es sollte genug Öl vorhanden sein, damit die Schnitzel darin schwimmen können.";
    m2s2.innerText = "Während Sie darauf warten, dass das Öl heiß wird, legen Sie die Schweinesteaks zwischen zwei Lagen Plastikfolie und klopfen Sie sie mit der flachen Seite eines Fleischklopfers, bis sie nur noch 1/4 Zoll dick sind. Beide Seiten leicht mit Salz und frisch gemahlenem schwarzem Pfeffer würzen.";
    m2s3.innerText = "Mehl, geschlagene Eier und Semmelbrösel in 3 separate flache Schüsseln geben. Tauchen Sie nun die Schweinesteaks von beiden Seiten zuerst in das Mehl, dann die Eier, dann die Panko-Semmelbrösel und achten Sie darauf, dass sie rundum und in jeder Phase gleichmäßig bedeckt sind. Überschüssige Krümel vorsichtig abschütteln. Sofort braten. Sie sollten brutzeln, sobald sie in der Pfanne sind. Wenn es zu schnell bräunt, bedeutet dies, dass das Öl zu heiß ist. Reduzieren und kontrollieren Sie die Hitze nach Bedarf.";
    m2s4.innerText = "Frittieren, bis die aktuelle Seite goldbraun ist, bevor das Fleisch umgedreht wird, um die andere Seite zu garen.";
    m2s5.innerText = "Nehmen Sie zum Schluss einen Teller heraus und legen Sie ihn mit Küchenpapier aus, um das überschüssige Öl aufzusaugen, bevor Sie das Schnitzel (und eine Beilage, wenn Sie möchten) servieren.";
//Spaetzle
    m3info.innerText = "Dies ist Deutschlands berühmtes Eiernudelgericht aus der Region Baden-Württemberg im Südwesten Deutschlands, auch bekannt als Schwabenland oder Schwaben. Das schwäbische Wort „Spätzle“ kommt angeblich daher, dass die Nudeln, wenn sie von Hand oder mit dem Löffel zubereitet wurden, einem Sperlingsnest ähnelten. Was diese Pasta von anderen unterscheidet, ist, dass Spätzle während des Kochens frisch zubereitet werden, anstatt getrocknet und für später aufbewahrt zu werden. Spätzle werden nicht nur in Deutschland genossen, sondern auch in anderen mitteleuropäischen Ländern wie Österreich, Schweiz, Ungarn usw. Die Nudeln werden in der Regel als Beilage zu Fleisch (z. B. Schnitzel) und Soße serviert oder zu Suppen hinzugefügt. Für dieses Rezept wird es eine Beilage sein.";
    m3eggs.innerText = "4 Eier";
    m3salt.innerText = "1 TL Salz";
    m3flour.innerText = "2 Tassen Allzweckmehl";
    m3milk.innerText = "1/2 Tasse Milch oder Wasser";
    m3s1.innerText = "In einer Schüssel Mehl, Eier und Salz vermischen und dabei langsam Milch/Wasser hineingießen. Der Teig sollte weder zu dünn noch zu dick sein, sonst hast du später Probleme mit deinem Spätzle-Maker. Rühren Sie, bis der Teig klumpenfrei und glatt genug ist, dass er langsam vom Löffel tropft. Sie können auch Ihren elektrischen Mixer verwenden.";
    m3s2.innerText = "Lassen Sie den Teig 5-10 Minuten ruhen. Fangen Sie an, Wasser bei starker Hitze in einem großen Topf zu kochen. Salz ins Wasser geben.";
    m3s3.innerText = "Geben Sie nun portionsweise den Spätzle-Teig auf Ihren Spätzle-Maker/Sieb und schaben Sie den Teig durch das kochende Wasser.";
    m3s4.innerText = "Übertragen Sie die gekochten Spätzle auf das Sieb, damit überschüssiges Wasser abtropfen kann, bevor Sie sie in einer Schüssel servieren. Wenn Sie Käsespätzle möchten, geben Sie geriebenen Käse über die Spätzle.";
//Newsletter
    sub.innerText = "Abonnieren Sie für weitere leckere Rezepte!";
    subText.innerText = "Receive updates through your inbox everytime I upload new recipes!";
    subText.style.fontStyle = 'italic';
    yourEmail.placeholder = "Ihre E-mail";
    subBtn.innerText = "Abonnieren";
    TnC.innerText = "Ich stimme zu, E-Mail-Updates und Werbeaktionen zu erhalten (Sie können den Dienst jederzeit deabonnieren).";
}

//Clicking the UK flag will switch the website to English
document.querySelector("#English").onclick = function (){
    title.innerText = "Easy German Dishes";
    about.innerText = "About";
    germanRecipes.innerText = "German Recipes";
    otherRecipes.innerText = "Other Recipes";
    foodSearch.placeholder = 'Food search';
    searchbtn.innerText = "Search";
    mainText.innerText = "In today's blog, I'll be sharing with everyone the different types of popular German dishes that can easily be made at home in YOUR kitchen! These meals are quick, simple and delicious! It's perfect for reminiscing that time when you were in Germany. Let's go ahead with our first meal:";
//Currywurst
    m1info.innerText = "Currywurst was innovated in 1949, 5 years after the end of WWII by a lady called Herta Heuwer. Back then, the dish was actually made by combining ketchup (that she got in return by trading spirits to the British soldiers), Worcestershire sauce and curry powder sprinkled on top of grilled sausage! The purpose was to combat the low quality food during the Cold War by enhancing its taste. Even now, it is still one of the top most eaten street food in Germany!";
    cookTime1.innerText = "Total Cook time: 20 mins";
    cookTime2.innerText = "Total Cook time: 30 mins";
    cookTime3.innerText = "Total Cook time: 15 mins";
    ing.forEach(ing => ing.innerText = "Ingredients:"); //Translates all ids with #ingredients stored in ing
    oil1.innerText = "1 tbsp vegetable oil";
    oil2.innerText = "Vegetable oil";
    m1ketchup.innerText = "1 cup of tomato ketchup";
    m1onion.innerText = "1 onion, diced";
    m1garlic.innerText = "2 cloves garlic, minced";
    m1paprika.innerText = "2 tbsp paprika";
    m1wsauce.innerText = "2 tbsp Worcestershire sauce";
    m1curryp.innerText = "1 1/2 tbsp curry powder";
    m1salt.innerText = "1 tbsp salt";
    m1bp.innerText = "1/8 tsp freshly ground black pepper";
    m1cp.innerText = "1/4 tsp Cayenne Pepper (Optional)";
    m1paste.innerText = "1 tbsp tomato paste";
    m1fries.innerText = "Pommes";
    instr.forEach(instr => instr.innerText = "Instructions:");
    curry.innerText = "The Curry:";
    wurst.innerText = "The Wurst:";
    m1s1.innerText = "Add the 1tbsp of vegetable oil in a small saucepan and wait for the oil to heat up. When the oil is ready, lower it to medium heat and cook the diced onions, don't cook to the point it becomes brown.";
    m1s2.innerText = "Add the minced garlic and cook for another minute.";
    m1s3.innerText = "Then, follow up with all the other ingredients apart from the Bratwursts and French fries. Cook for a further 30 seconds before leaving it to simmer for 15 minutes, stirring occasionally. Add water if you prefer the sauce to be less thick. That's the sauce done.";
    m1s4.innerText = "If the Bratwursts are not pre-cooked, simmer it in water first.";
    m1s5.innerText = "Next, decide if you want to grill or pan-fry them. (Bratwursts are usually grilled.) Make sure they are cooked until the outer skin is crispy brown!";
    m1s6.innerText = "Serve it as a whole or cut up into bite-size pieces with French fries on the side. Don't forget to glaze it with the cooked curry sauce, sprinkled with extra curry powder!";
//Schnitzel
    m2info.innerText = "There are many variations of this dish in other countries but in Germany, the Schnitzels are mainly pork or chicken. Typically boneless meat cutlets. Of course, it would not be Schnitzel without the meat being tenderised, completely breaded and then deep-fried. The word Schnitzel comes from the German verb 'schneiden' which means 'to cut/slice', in other words, sliced meat. They are also served with french fries or boiled potatoes on the side. For the ingredients below, I'll be using pork.";
    m2pork.innerText = "Boneless pork steaks or chops";
    m2salt.innerText = "4 tsp salt (or to taste)";
    m2bp.innerText = "4 tsp freshly ground black pepper (or to taste)";
    m2panko.innerText = "2 cups panko bread crumbs";
    m2flour.innerText = "1/2 cup all-purpose flour";
    m2eggs.innerText = "3 eggs, beaten";
    m2oil.innerText = "Vegetable oil";
    m2fries.innerText = "Boiled potatoes/French fries (Optional)";
    m2s1.innerText = "Pour the vegetable oil into a non-stick frying pan on high flame. The bigger the pan, the more Schnitzels you can place in. There should be enough oil for the Schnitzel to swim in it";
    m2s2.innerText = "While waiting for the oil to heat up, place the pork steaks between two sheets of plastic wrap and pound them until they are just 1/4 inch thick with the flat side of a meat tenderizer. Lightly season both sides with salt and freshly ground black pepper.";
    m2s3.innerText = "Put the flour, beaten eggs, and breadcrumbs in 3 separate shallow bowls. Now dip both sides of the pork steaks in the flour first, next the eggs, then the panko breadcrumbs, making sure it's coated all around and equally in every stage. Gently shake off the excess crumbs. Fry immediately. They should sizzle once they're in the pan. If it's browning too quickly, it means the oil is too hot. Reduce and control the heat as needed.";
    m2s4.innerText = "Fry until the current side is golden brown before flipping the meat to cook the other side.";
    m2s5.innerText = "Finally, take out a plate and line it with paper towels to help soak up the excessive oil before serving the Schnitzel (and a side dish, if you like).";
//Spaetzle
    m3info.innerText = "This is Germany's renowned egg noodle dish from the Baden-Württemberg region of southwest Germany, also known as Schwabenland or Swabia. It is said that the Swabian word 'Spätzle' comes from the fact that when the noodles were made by hand or with a spoon, it resembled a sparrow's nest. Spatz meaning sparrow in German. What separates this pasta from others is that Spätzle is made fresh during the time of cooking, rather than dried and stored for later. Spätzle is not only enjoyed in Germany but also in other Central European countries such as Austria, Switzerland, Hungary, etc. The pasta is generally served on the side with meat (for example: Schnitzel) and sauce or added to soups. For this recipe, it'll be a side dish.";
    m3eggs.innerText = "4 eggs";
    m3salt.innerText = "1 tsp salt";
    m3flour.innerText = "2 cups all-purpose flour";
    m3milk.innerText = "1/2 cup milk or water";
    m3s1.innerText = "In a bowl, whisk together the flour, eggs, and salt while pouring milk/water in slowly. The batter should neither be too thin nor too thick or you will struggle with your Spätzle maker later on. Stir until the batter is lump-free and smooth enough that it drips off the spoon slowly. You can also use your electric mixer.";
    m3s2.innerText = "Let the batter sit for 5-10 min. Start boiling water over high heat in a large pot. Add salt to the water.";
    m3s3.innerText = "Now, spoon portions of the Spätzle batter onto your Spätzle maker/colander and scrape the batter through into the boiling water. The Spätzle will float to the surface once they are done.";
    m3s4.innerText = "Transfer the cooked Spätzle onto the colander to let excess water drip off before serving it in a bowl. Add grated cheese over the Spätzle if you want Käsespätzle.";
//Newsletter
    sub.innerText = "Subscribe for more delicious recipes";
    subText.innerText = "Receive updates through your inbox everytime I upload new recipes!";
    subText.style.fontStyle = "italic";
    yourEmail.placeholder = "Your Email";
    subBtn.innerText = "Subscribe";
    TnC.innerText = "I agree to receive email updates and promotions. (You can unsubscribe at anytime.)";
}
//Translation list ends
