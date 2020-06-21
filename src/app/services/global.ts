import { HttpHeaders } from '@angular/common/http';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const global = {
    url: 'http://api-rest-blog.com.devel/',             //URL DE LA API
    auth: {             //JSON PARA HEADER DE AUTORIZACION
        headers: new HttpHeaders({
          'Authorization': localStorage.getItem('token')  
        })
    },
    options: {    //OPCIONES DEL EDITOR DE TEXTO
      toolbar:['bold', 'italic', 'link', 'numberedList', 'indent', 'blockQuote']
    },
    editor: ClassicEditor   //EDITOR DE TEXTO CLASICO
}