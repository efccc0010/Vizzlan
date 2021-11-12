import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.scss']
})
export class SubirImagenComponent implements OnInit {

  // public previsualizacion: string;
  // public archivos: any = []
  // public loading: boolean

  constructor(/*private sanitizer: DomSanitizer, private rest: RestService*/ ) { }

  ngOnInit(): void {
  }

  // capturarFile(event): any {
  //   const archivoCapturado = event.target.files[0]
  //   this.extraerBase64(archivoCapturado).then((imagen: any) => {
  //     this.previsualizacion = imagen.base;
  //     console.log(imagen);
  //   })
  //   this.archivos.push(archivoCapturado);
  //   //console.log(event.target.files);
  // }

  // extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
  //   try {
  //     const unsafeImg = window.URL.createObjectURL($event);
  //     const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
  //     const reader = new FileReader();
  //     reader.readAsDataURL($event);
  //     reader.onload = () => {
  //       resolve({
  //         base: reader.result
  //       });
  //     };
  //     reader.onerror = error => {
  //       resolve({

  //         base: null
  //       });
  //     };
  //   } catch (e) {
  //     return null;
  //   }
  // })

  // clearImage(): any {
  //   this.previsualizacion = '';
  //   this.archivos = [];
  // }


  // subirArchivo(): any {
  //   try {
  //     this.loading = true;
  //     const formularioDeDatos = new FormData();
  //     this.archivos.forEach(archivo => {
  //       formularioDeDatos.append('files', archivo)
  //     })

  //     this.rest.post('http://localhost:4200/SubirImagen'), formularioDeDatos)
  //       .subscribe(res => {
  //         this.loading = false;
  //         console.log('Respuesta del servidor', res);

  //       }, () => {
  //         this.loading = false;
  //         alert('Error');
  //       })
  //   } catch (e) {
  //     this.loading = false;
  //     console.log('ERROR', e);
  //   }
  // }

}
