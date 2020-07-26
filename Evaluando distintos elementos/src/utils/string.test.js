import { saluda, getId, despide } from './string.js';

describe('Pruebas de strings', () => {

    const saludo = saluda('Juan');
    const id = getId();
    const saludodespide = despide();

    test('Probando la funcion saluda', () => {
        /* toMatch nos ayuda a evaluar si existen los caracteres */
        expect(saludo).toMatch('Hola soy')
    })
    test('Probando la funcion getId', () => {
        /* Tambien es posible evaluar expresiones regulares 
        -/\d/ valida si existe algun digito */
        expect(id).toMatch(/\d{2}-\d{3}/);
        /* {2} numero de veces que se repite el digito */
    })
    test('Probando la funcion despide', () => {
        expect(saludodespide).not.toMatch('Adios');
        /* El not niega la funcion toMatch */
    })
})