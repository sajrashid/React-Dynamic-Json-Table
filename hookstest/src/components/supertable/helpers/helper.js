import DOMPurify from 'dompurify';
import _ from 'lodash'

function templateLiteral(template, context = {}) {
    return template.replace(/\$\{\s*(.+?)\s*\}/g, (match, p1) => {
        const value = _.get(context, p1, '')
        return value === null ? '' : value
    });
}
const helper = {

    createMarkupLiteral(key, str, replaceValue) {
        const result = templateLiteral(str, {
            [key]: replaceValue
        });
        var clean = DOMPurify.sanitize(result);
        return { __html: clean }
    },

    createMarkup(html) {
        var clean = DOMPurify.sanitize(html);
        return { __html: clean }
    },

}

export default helper