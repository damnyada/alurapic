import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {

    fotos: Object[] = [];
	
	constructor(http: Http) {
		http
		.get('v1/fotos')				// rxjs - http get
		// .map(res => {				// convert data to json (it could also be text using res.text())
		// 	return res.json();
		// })
		.map(res => res.json())			// using arrow function
		.subscribe(fotos => {			// observable string, subscribe to access data
			this.fotos = fotos;
			console.log(this.fotos);
		}, erro => console.log(erro));	//catch error
    }
    
}