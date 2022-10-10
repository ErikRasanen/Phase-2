# Tyylien lisääminen React-sovellukseen

Sovelluksemme ulkoasu on tällä hetkellä hyvin vaatimaton. Katsotaan vielä tämän osan lopussa nopeasti kahta tapaa liittää tyylejä React-sovellukseen. Tapoja on useita, ja tulemme tarkastelemaan muita myöhemmin. Ensimmäisenä liitämme CSS:n sovellukseemme vanhan kansan tapaan yksittäisenä tiedostona.

Tehdään sovelluksen hakemistoon <i>src</i> tiedosto <i>index.css</i> ja liitetään se sovellukseen lisäämällä tiedostoon <i>index.js</i> seuraava import:

```js
import './index.css'
```

Lisätään seuraava sääntö tiedostoon <i>index.css</i>:

```css
h1 {
  color: green;
}
```

**Huom:** kun tiedostoon <i>index.js</i> lisätään sisältöä, React ei välttämättä havaitse muutosta automaattisesti, eli saatat joutua refreshaamaan selaimen, jotta näet muutokset! 

CSS-säännöt koostuvat valitsimesta eli <i>selektorista</i> ja määrittelystä eli <i>deklaraatiosta</i>. Valitsin määrittelee, mihin elementteihin sääntö kohdistuu. Valitsimena on nyt <i>h1</i> eli kaikki sovelluksessa käytetyt <i>h1</i>-otsikkotägit.

Määrittelyosa asettaa ominaisuuden _color_ eli fontin värin arvoksi vihreän (<i>green</i>).

Sääntö voi sisältää mielivaltaisen määrän määrittelyjä. Muutetaan edellistä siten, että tekstistä tulee kursivoitua eli fontin tyyliksi asetetaan <i>italic</i>:

```css
h1 {
  color: green;
  font-style: italic; 
}
```

Erilaisia selektoreja eli tapoja valita tyylien kohde on [lukuisia](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

Jos haluamme kohdistaa tyylejä esim. jokaiseen muistiinpanoon, voisimme käyttää selektoria <i>li</i>, sillä muistiinpanot ovat <i>li</i>-tagien sisällä:

```js
const Note = ({ note }) => {

  return (
    <li>
      {note.content} 
    </li>
  )
}
```

Lisätään tyylitiedostoon seuraava (koska osaamiseni tyylikkäiden web-sivujen tekemiseen on lähellä nollaa, nyt käytettävissä tyyleissä ei ole sinänsä mitään järkeä):

```css
li {
  color: grey;
  padding-top: 3px;
  font-size: 15px;
}
```

Tyylien kohdistaminen elementtityyppeihin on kuitenkin ongelmallista. Jos sovelluksessa on myös muita <i>li</i>-tageja, kaikki saavat samat tyylit.

Jos haluamme kohdistaa tyylit nimenomaan muistiinpanoihin, on parempi käyttää [class selectoreja](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors).

Normaalissa HTML:ssä luokat määritellään elementtien attribuutin <i>class</i> arvona:

```html
<li class="note">tekstiä</li>
```

Reactissa tulee kuitenkin classin sijaan käyttää attribuuttia [className](https://reactjs.org/docs/dom-elements.html#classname), joten muutetaan komponenttia <i>Note</i> seuraavasti:

```js
const Note = ({ note }) => {
  
  return (
    <li className='note'> // highlight-line
      {note.content} 
    </li>
  )
}
```

Luokkaselektori määritellään syntaksilla _.classname_ eli:

```css
.note {
  color: grey;
  padding-top: 5px;
  font-size: 15px;
}
```

Jos nyt lisäät sovellukseen muita li-elementtejä, ne eivät saa muistiinpanoille määriteltyjä tyylejä.

## Inline-tyylit

React mahdollistaa tyylien kirjoittamisen myös suoraan komponenttien koodin joukkoon niin sanoittuina [inline-tyyleinä](https://react-cn.github.io/react/tips/inline-styles.html).

Periaate inline-tyylien määrittelyssä on erittäin yksinkertainen. Mihin tahansa React-komponenttiin tai elementtiin voi liittää attribuutin [style](https://reactjs.org/docs/dom-elements.html#style), jolle annetaan arvoksi JavaScript-oliona määritelty joukko CSS-sääntöjä.

CSS-säännöt määritellään JavaScriptin avulla hieman eri tavalla kuin normaaleissa CSS-tiedostoissa. Jos haluamme asettaa jollekin elementille esimerkiksi vihreän, kursivoidun ja 16 pikselin korkuisen fontin, määrittely ilmaistaan CSS-syntaksilla seuraavasti:

```css
{
  color: green;
  font-style: italic;
  font-size: 16px;
}
```

Vastaava tyyli kirjoitetaan Reactin inline-tyylin määrittelevänä oliona seuraavasti:

```js
{
  color: 'green',
  fontStyle: 'italic',
  fontSize: 16
}
```

Jokainen CSS-sääntö on olion kenttä, joten ne erotetaan JavaScript-syntaksin mukaan pilkuilla. Pikseleinä ilmaistut numeroarvot voidaan määritellä kokonaislukuina. Merkittävin ero normaaliin CSS:ään on väliviivan sisältämien CSS-ominaisuuksien kirjoittaminen camelCase-muodossa.

Voimme nyt lisätä sovellukseemme alapalkin muodostavan komponentin <i>Footer</i> ja määritellä sille inline-tyylit seuraavasti:

```js
const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
    </div>
  )
}

const App = () => {
  // ...

  return (
    <div>
      <h1>Notes</h1>

      // ...  
      <Footer /> // highlight-line
    </div>
  )
}
```

Inline-tyyleillä on tiettyjä rajoituksia, esim. ns. pseudo-selektoreja ei ole mahdollisuutta käyttää (ainakaan helposti).

Inline-tyylit ja muutamat myöhemmin kurssilla katsomamme tavat lisätä tyylejä Reactiin ovat periaatteessa täysin vastoin vanhoja hyviä periaatteita, joiden mukaan web-sovellusten ulkoasujen määrittely eli CSS tulee erottaa sisällön (HTML) ja toiminnallisuuden (JavaScript) määrittelystä. Vanha koulukunta pyrkiikin siihen, että sovelluksen CSS, HTML ja JavaScript kirjoitetaan omiin tiedostoihinsa.

CSS:n, HTML:n ja JavaScriptin erottelu omiin tiedostoihinsa ei kuitenkaan ole välttämättä erityisen skaalautuva ratkaisu suurissa ohjelmistoissa. Reactissa onkin periaatteena jakaa sovelluksen koodi eri tiedostoihin noudattaen sovelluksen loogisia toiminnallisia kokonaisuuksia.

Toiminnallisen kokonaisuuden strukturointiyksikkö on React-komponentti, joka määrittelee niin sisällön rakenteen kuvaavan HTML:n, toiminnan määrittelevät JavaScript-funktiot kuin komponentin tyylinkin yhdessä paikassa siten, että komponenteista tulee mahdollisimman riippumattomia ja yleiskäyttöisiä.

## Ref
- [fullstackopen.com](https://fullstackopen.com/osa2/tyylien_lisaaminen_react_sovellukseen)
