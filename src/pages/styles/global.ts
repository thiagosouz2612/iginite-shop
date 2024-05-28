// Vinculando componente do arquivo index.ts chamado globalCss
import { globalCss } from ".";

export const globalStyles = globalCss({

    //Todos os elementos da pagina como objetos
    '*': {
        margin: 0,
        padding: 0,
    },
    body: {
        backgroundColor: '$gray900',
        color: '$gray100',
        
        '-webkit-font-smoothing': 'antialiased',
    },

    'boby, input, textarea, button, footer': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
})