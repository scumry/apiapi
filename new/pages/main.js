const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const main = `
${head('Главная страница')}
<body>
    ${header}
    <main>
        <div>
            <h1>О чём сайт?</h1>
            <p> *текст* </p>
        </div>
        <div class="hz">
            <img src="./img/img.jpg"">
            <span>изображение</span>
        </div>
    </main>
    ${footer}
</body>
</html>
`
module.exports = main