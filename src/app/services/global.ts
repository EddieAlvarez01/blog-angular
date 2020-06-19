import { HttpHeaders } from '@angular/common/http';

export const global = {
    url: 'http://api-rest-blog.com.devel/',             //URL DE LA API
    auth: {             //JSON PARA HEADER DE AUTORIZACION
        headers: new HttpHeaders({
          'Authorization': localStorage.getItem('token')  
        })
    },
    options: {    //OPCIONES DEL EDITOR DE FROALA
      charCounterCount: true,
      toolbarButtons: ['bold', 'italic', 'underline', 'fontSize', 'fontFamily'],
      toolbarButtonsXS: ['bold', 'italic', 'underline', 'fontSize', 'fontFamily'],
      toolbarButtonsSM: ['bold', 'italic', 'underline', 'fontSize', 'fontFamily'],
      toolbarButtonsMD: ['bold', 'italic', 'underline', 'fontSize', 'fontFamily']
    } 
}