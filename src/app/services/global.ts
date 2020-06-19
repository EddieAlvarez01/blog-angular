import { HttpHeaders } from '@angular/common/http';

export const global = {
    url: 'http://api-rest-blog.com.devel/',             //URL DE LA API
    headers: (auth: boolean, accept: boolean) => {          //DEVUELVE UNA CABECERA DE UNA REQUEST EN BASE A PARAMETROS
        let header = new HttpHeaders();
        if(auth){
            header.set('Authorization', 'token');           //SE AGREGA A LAS CABECERAS EL TOKEN DE AUTORIZACION DE UN USUARIO LOGEADO
        }
        if(accept){
            header.set('Accept', 'application/json');       /*SE AGREGA A LAS CABECERAS UN ACCEPT PARA DEVOLVER ERRORES EN CASO DE QUE
                                                             FALLEN LAS VALIDACIONES DE LARAVEL*/
        }
        return header;
    }
}