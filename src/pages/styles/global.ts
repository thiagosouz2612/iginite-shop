// Vinculando componente do arquivo index.ts chamado globalCss
import { globalCss } from ".";

export const globalStyles = globalCss({

    //Todos os elementos da pagina como objetos
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    body: {
        backgroundColor: '$gray900',
        color: '$gray100',
        
        '-webkit-font-smoothing': 'antialiased',
    },

    'boby, input, textarea, button, footer, h1, span, p': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
})