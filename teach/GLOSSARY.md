# Web Development Glossary

*This glossary will grow as you learn. Terms are added here only after you understand them.*

## Terms

**HTML (HyperText Markup Language)**:
Ang standard language para gumawa ng web pages. Ito ang nagbibigay ng structure sa website — parang skeleton ng tao.
_Avoid_: Programming language (HTML ay markup language, hindi programming language)

**Tag**:
Ang building block ng HTML. May opening tag (`<tag>`) at closing tag (`</tag>`). Halimbawa: `<p>...</p>`, `<h1>...</h1>`.
_Avoid_: Elemento, marker

**Attribute**:
Karagdagang impormasyon sa isang HTML tag, na nasa loob ng opening tag. Halimbawa: `href` sa `<a>`, `src` sa `<img>`, `class` sa `<div>`.
_Avoid_: Property (property ang tawag sa CSS, attribute sa HTML)

**Block-level element**:
Isang HTML element na mag-isa sa linya at kumukuha ng full width. Halimbawa: `<div>`, `<p>`, `<h1>`, `<ul>`.
_Avoid_: Block element

**Inline element**:
Isang HTML element na sumasabay sa text at hindi nag-break ng linya. Halimbawa: `<span>`, `<a>`, `<strong>`, `<em>`.

**Semantic HTML**:
Paggamit ng HTML tags ayon sa kanilang kahulugan, hindi lang sa itsura. Halimbawa: `<header>` para sa header, `<nav>` para sa navigation, hindi `<div>` para sa lahat.
_Avoid_: Div soup (kapag puro `<div>` lang ang gamit)

**Self-closing tag**:
HTML tag na walang closing tag. Halimbawa: `<img>`, `<br>`, `<hr>`, `<input>`.

**DOCTYPE**:
Ang declaration sa unang linya ng HTML document (`<!DOCTYPE html>`) na nagsasabi sa browser na HTML5 ang gamit.

**CSS (Cascading Style Sheets)**:
Ang language na ginagamit para i-style ang HTML — colors, layout, typography, at responsive design.
_Avoid_: Programming language (CSS ay styling language, hindi programming language)

**Selector**:
Ang pattern sa CSS na ginagamit para pumili kung aling HTML elements ang iistiluhin. Halimbawa: `p`, `.class`, `#id`.

**Class (CSS)**:
Isang reusable selector na may prefix na `.` (dot). Halimbawa: `.highlight { }` ay nagta-target ng `class="highlight"`.

**ID (CSS)**:
Isang unique selector na may prefix na `#` (hash). Halimbawa: `#header { }` ay nagta-target ng `id="header"` (isa lang dapat per page).

**Box Model**:
Ang konsepto na ang bawat HTML element ay isang kahon na may apat na layers: content → padding → border → margin.

**Flexbox**:
Isang CSS layout module para sa 1-dimensional na arrangement ng elements (pahalang o patayo), na may auto-adjusting alignment at spacing.

**Grid (CSS Grid)**:
Isang CSS layout module para sa 2-dimensional na arrangement ng elements (rows at columns nang sabay).

**Media Query**:
Isang CSS feature na nag-iba ng styles depende sa screen size, resolution, o device characteristics. Ginagamit para sa responsive design.

**Responsive Design**:
Ang practice ng paggawa ng website na gumaganda at functional sa lahat ng screen sizes — phone, tablet, at desktop.

**JavaScript (JS)**:
Ang programming language ng web browsers. Ginagamit para sa interactivity, DOM manipulation, at API calls.
_Avoid_: Java (magkaiba sila!)

**Variable**:
Isang container para sa data sa JavaScript. Ginagamit ang `const` (hindi nagbabago) at `let` (pwedeng magbago).

**Function**:
Isang reusable block ng code sa JavaScript. Pwedeng gawin gamit ang `function` keyword o arrow function syntax (`=>`).

**DOM (Document Object Model)**:
Ang representation ng HTML document sa JavaScript. Gamit ito para baguhin ang content, style, at structure ng page programmatically.

**Event Listener**:
Isang function na naghihintay ng specific action ng user (like click, submit, keypress) at nagti-trigger ng code response.

**Arrow Function**:
Modern syntax para sa functions sa JavaScript: `const fn = (param) => { return result; }`. Mas maikli at mas malinis.

**Fetch API**:
Isang built-in JavaScript API para kumuha ng data mula sa external sources (APIs) gamit ang HTTP requests. Ginagamit kasama ng `async/await`.

**Git**:
Version control system na nagti-track ng changes sa code — parang save points sa video game. Pwedeng bumalik sa previous versions kung kinakailangan.

**GitHub**:
Cloud platform para mag-host ng Git repositories. Gamit ito para mag-backup ng code, mag-collaborate, at magpakita ng portfolio sa clients.

**Repository / Repo**:
Isang folder na tracked ng Git. Naglalaman ng lahat ng files at ang buong history ng changes.

**Commit**:
Isang save point sa Git. Bawat commit ay may unique ID at message na naglalarawan ng changes.

**Branch**:
Isang independent line of development sa Git. Gamit ito para magtrabaho sa bagong feature nang hindi naaapektuhan ang main code.

**Pull Request (PR)**:
Isang request sa GitHub para i-merge ang changes mula sa isang branch papunta sa main branch. Ginagamit para magpa-review ng code bago i-merge.

**Database**:
Isang organisadong koleksyon ng data. May tables, rows, at columns. Parang Excel spreadsheet pero mas powerful — kayang mag-handle ng milyon-milyong records at may relationships.

**SQL (Structured Query Language)**:
Ang language na ginagamit para makipag-usap sa databases. Main commands: SELECT (kumuha), INSERT (maglagay), UPDATE (magbago), DELETE (burahin).

**Table**:
Isang lalagyan sa database na may rows (records) at columns (attributes). Halimbawa: `users` table, `posts` table.

**Primary Key**:
Isang column na unique na nag-iidentify sa bawat row. Usually `id` na auto-increment. Halimbawa: `users.id`.

**Foreign Key**:
Isang column na nagli-link ng isang table sa primary key ng ibang table. Halimbawa: `posts.user_id` → `users.id`.

**JOIN**:
SQL operation para pagsamahin ang data mula sa dalawa o higit pang tables. INNER JOIN = may match lang, LEFT JOIN = lahat mula sa left table.

**Laravel**:
Ang pinakasikat na PHP framework para sa web development. May built-in na ORM (Eloquent), routing, authentication, at marami pang iba.

**Composer**:
Package manager ng PHP. Ginagamit para mag-install ng Laravel at iba pang PHP libraries. Parang npm para sa JavaScript.

**Artisan**:
Command-line tool ng Laravel. Ginagamit para gumawa ng controllers, models, migrations, at mag-run ng server. Command: `php artisan`.

**Route**:
Ang nagdi-determine kung anong code ang tatakbo kapag may nag-access ng specific URL. Halimbawa: `Route::get('/users', ...)`.

**Controller**:
PHP class na nag-o-organize ng related request handling logic. Halimbawa: `UserController` handles lahat ng user-related requests.

**Blade**:
Ang templating engine ng Laravel. Ginagamit para mag-render ng HTML na may dynamic data gamit ang `{{ $variable }}` syntax.

**HTTP Methods**:
GET (kumuha), POST (gumawa), PUT (mag-update), DELETE (burahin). Ang pundasyon ng REST APIs.

**Eloquent ORM (Object-Relational Mapping)**:
Ang built-in ORM ng Laravel na nagpapahintulot sa'yo na magtrabaho sa database gamit PHP objects. Halimbawa: `User::where('age', '>', 18)->get()`.

**Migration**:
Version control system para sa database schema sa Laravel. Naglalarawan ng table structure gamit PHP code na pwedeng i-rollback at i-version.

**Model**:
PHP class na kumakatawan sa isang database table sa Laravel. Halimbawa: `Post` model = `posts` table.

**CRUD (Create, Read, Update, Delete)**:
Ang apat na basic operations para sa persistent storage. Create = INSERT, Read = SELECT, Update = UPDATE, Delete = DELETE.

**Seeder**:
PHP class sa Laravel na ginagamit para maglagay ng test data sa database. Ginagamit kasama ng `php artisan db:seed`.
