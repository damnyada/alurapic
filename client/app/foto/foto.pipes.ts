import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})

// Autocomplete works better if all variables are typed
// VSCode shows all the functions associated to strings if it knows that a variable is a string, for example

// transform receives two arguments, a list that must be filtered and the filter criteria
// fotos as a FotoComponent list, so VSCode can suggest its properties when we use "foto."
// return all the fotos whose title includes what was typed
// PipeTransform is an interface imported to validate transform syntax and avoid mistakes

export class FiltroPorTitulo implements PipeTransform {
    transform(fotos: FotoComponent[], digitado: string) {
        digitado = digitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
    }
}