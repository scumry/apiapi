const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const aboutme = `
${head('Обо мне')}
<body>
    ${header}
    <h1>Обо мне</h1>
    <p>Меня зовут Диана, мне 18 лет</p>
    ${footer}
</body>
</html>
`
module.exports = aboutme;