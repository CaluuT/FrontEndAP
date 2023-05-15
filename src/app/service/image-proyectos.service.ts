import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ImageProyectosService {
  url: string = "";
  constructor(private storage: Storage){}

  uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen-proyectos/`+ name)
    uploadBytes(imgRef, file)
    .then(Response => {this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagen-proyectos')
    list(imagesRef)
    .then(async Response =>{
      for(let item of Response.items){
        this.url = await getDownloadURL(item);
        console.log("URL:" + this.url)
      }
    })
    .catch(error => console.log(error))
  }
}
