"use strict";(self.webpackChunkhoney_beer_app=self.webpackChunkhoney_beer_app||[]).push([[663],{2663:(P,u,c)=>{c.r(u),c.d(u,{ProductsModule:()=>C});var s=c(4755),e=c(7179),i=c(727),t=c(5206),p=c(3157),a=c(6834);let l=(()=>{class o{constructor(r,n){this.router=r,this.productController=n,this.product=new a.x}redirectToProduct(r){this.router.navigateByUrl(`app/products/${r.productId}`),this.productController.setProduct(r)}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(e.F0),t.Y36(p.E))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-card"]],inputs:{product:"product"},decls:7,vars:2,consts:[[1,"link-product-card",3,"click"],[1,"product-container"],["src","./assets/images/honey-beer-logo.png","alt",""]],template:function(r,n){1&r&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return n.redirectToProduct(n.product)}),t.TgZ(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"h1"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA()()()),2&r&&(t.xp6(4),t.Oqu(n.product.name),t.xp6(2),t.Oqu(n.product.description))},styles:[".link-product-card[_ngcontent-%COMP%]{text-decoration:none;color:#000;background-color:transparent;height:100%}.link-product-card[_ngcontent-%COMP%] > .product-container[_ngcontent-%COMP%]{height:100%;padding:20px 10px;border:1px solid rgb(235,235,235);display:flex;flex-direction:column;align-items:center;background-color:#ffffffb3;border-radius:15px;box-shadow:0 10px 15px #00000040}.link-product-card[_ngcontent-%COMP%] > .product-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{object-fit:contain;max-width:80%}"]}),o})();function m(o,d){1&o&&t._UZ(0,"app-product-card",2),2&o&&t.Q6J("product",d.$implicit)}const g=[{path:"",children:[{path:"",component:(()=>{class o{constructor(r){this.productController=r,this.subs=new i.w0,this.products=[],this.subs.add(this.productController.loadAllProducts().subscribe(n=>this.products=n,n=>alert(n.error.detail)))}ngOnDestroy(){this.subs.unsubscribe()}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(p.E))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:2,vars:1,consts:[[1,"products"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0),t.YNc(1,m,1,1,"app-product-card",1),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngForOf",n.products))},dependencies:[s.sg,l],styles:[".products[_ngcontent-%COMP%]{display:grid;width:100%;gap:20px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));padding:50px}"]}),o})()},{path:":id",loadChildren:()=>c.e(926).then(c.bind(c,4926)).then(o=>o.ProductModule)}]}];let h=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[e.Bz.forChild(g),e.Bz]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,h]}),o})()}}]);