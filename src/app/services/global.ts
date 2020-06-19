import { HttpHeaders } from '@angular/common/http';

export const global = {
    url: 'http://api-rest-blog.com.devel/',             //URL DE LA API
    auth: {             //JSON PARA HEADER DE AUTORIZACION
        headers: new HttpHeaders({
          'Authorization': localStorage.getItem('token')  
        })
    }
}