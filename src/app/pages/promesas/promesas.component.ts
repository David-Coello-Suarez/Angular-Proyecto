import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuario => {
      console.log(usuario)
    });

    // const promesas = new Promise( (resolve, reject)=>{
    //   if(true){
    //     resolve('Hola mundo');
    //   }else{
    //     reject('Algo salió mal')
    //   }
    // } );

    // promesas.then((mensaje)=>{
    //   console.log(mensaje)
    // }).catch(error=> console.log('Error en mi promesa ', error))
  }

  getUsuarios(){

    return new Promise( resolve => {

      fetch('https://reqres.in/api/users')
      .then( res => res.json() )
      .then( body => resolve(body.data) );

    } )
    
  }

}
