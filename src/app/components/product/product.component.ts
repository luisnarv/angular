import { Component, Input, inject } from '@angular/core';
import { Producto } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { DetailComponent } from '../detail/detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  http = inject(HttpClient);

  //una lista de productos que se inicializa  vacio
  Product: Producto[] = [];

  //       titulo tipo de dato
  @Input() title: string = "";

  // se inicializa nuestro componente pero no se le pasan valores es valido, pero no es considerado
  // como buenas practicas
  // @Input() product!: Producto ;
  //esto tambien es valido y es considerado como buenas practicas  
  @Input() product: Producto ={
    title:"",
    price:0,
    images: [],
    category:" ",
    description:" ",
    id:0,
  } ;
 
  constructor(private router: Router) {}
  trackByFn(index: number, item: any): number {
    return item.id; // Devuelve un identificador único para cada elemento
  }
  Detail(id: number){
    const productosFiltrados = this.Product.filter((producto) =>
    producto.id == id);
    this.router.navigate(['/product',id],{ state: { productosFiltrados } });
  }


  ngOnInit() {
    this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.Product = data.slice(0,10);
      })
  }


}