/* import {string, object, number, setLocale} from 'yup';
import {ptForm} from 'yup-locale-pt';

setLocale(ptForm)

export let projetoSchema = object().shape(
    {
        id: number(),
        nome: string().required().max(20),
        quantidade: string().required().max(6),
        dataDeValidade: string().required().max(10),
        comentarios: string().required().max(300)

    }
)
 */