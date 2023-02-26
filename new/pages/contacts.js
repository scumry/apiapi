const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const pageContacts = `
${head('Контакты')}
<body>
    ${header}
    <h1>Контакты</h1>
    <ul>
        <li>Диана - +79821410622</li>
        <li>Александра - +7983416223</li>
        <li>Даниил - +7983414141</li>
    </ul>
    ${footer}
</body>
</html>
`
module.exports = pageContacts;