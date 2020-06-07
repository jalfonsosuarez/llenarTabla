import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface Artista {
  nombre: string;
  urlWiki: string;
  urlFoto: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'videosYoutube';

  videoUrl = 'https://www.youtube.com/embed/fJ9rUzIMcZQ';


  artistas: Artista[] = [];
  public formulario: FormGroup;
  public nombreArtista: string;
  public wikiArtista: string;
  public urlArtita: string;


  constructor(
    private fb: FormBuilder
  ) {
    this.crearFormulario();
  }

  ngOnInit() {
    this.limpiarValores();
  }

  limpiarValores() {
    this.formulario.setValue({
      nombreArtista: '',
      wikiArtista: '',
      urlArtista: '',
    });
  }

  crearFormulario() {
    this.formulario = this.fb.group(
      {
        nombreArtista:  ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)] ],
        wikiArtista:    [''],
        urlArtista:     [''],
      },
    );
  }

  validarCampo( campo: string ) {
    return this.formulario.get( campo )?.invalid && this.formulario.get( campo )?.touched;
  }

  guardar() {

    const artista: Artista = {
      nombre: this.formulario.value.nombreArtista,
      urlFoto: this.formulario.value.urlArtista,
      urlWiki: this.formulario.value.wikiArtista,
    };

    this.artistas.push( artista );
    this.limpiarValores();

  }

  eliminar( index: number ) {
    this.artistas.splice( index, 1);
  }


}
