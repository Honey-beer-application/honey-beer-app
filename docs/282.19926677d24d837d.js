"use strict";(self.webpackChunkhoney_beer_app=self.webpackChunkhoney_beer_app||[]).push([[282],{8282:(M,l,r)=>{r.r(l),r.d(l,{OurStoresModule:()=>f});var i=r(4755),s=r(7179),a=r(8407),d=r(727),n=r(5206),p=r(3144);let g=(()=>{class t{constructor(o){this.httpClient=o}loadAllLocations(){return this.httpClient.get("https://localhost:7165/api/Location")}}return t.\u0275fac=function(o){return new(o||t)(n.LFG(p.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),u=(()=>{class t{constructor(o){this.locationService=o}loadAllLocations(){return this.locationService.loadAllLocations()}}return t.\u0275fac=function(o){return new(o||t)(n.LFG(g))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function h(t,e){if(1&t&&(n.TgZ(0,"li")(1,"h3"),n._uU(2),n.qZA(),n.TgZ(3,"div")(4,"p"),n._uU(5),n.qZA(),n.TgZ(6,"p"),n._uU(7),n.qZA()()()),2&t){const o=e.$implicit;n.xp6(2),n.hij("Location: ",o.locationName,""),n.xp6(3),n.hij("e-mail: ",o.email,""),n.xp6(2),n.hij("phone: ",o.phone,"")}}const C=[{path:"",component:(()=>{class t{constructor(o){this.locationController=o,this.subs=new d.w0,this.locations=[],this.subs.add(this.locationController.loadAllLocations().subscribe(c=>{this.locations=c}))}ngAfterViewInit(){this.map=a.map("map",{center:[44.8,20.46],zoom:13}),a.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map)}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(u))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-our-stores"]],decls:8,vars:1,consts:[[1,"ourStores"],[4,"ngFor","ngForOf"],["id","map"]],template:function(o,c){1&o&&(n.TgZ(0,"div",0)(1,"div")(2,"h1"),n._uU(3,"Where we are"),n.qZA(),n.TgZ(4,"div")(5,"ul"),n.YNc(6,h,8,3,"li",1),n.qZA()()(),n._UZ(7,"div",2),n.qZA()),2&o&&(n.xp6(6),n.Q6J("ngForOf",c.locations))},dependencies:[i.sg],styles:[".ourStores[_ngcontent-%COMP%]{display:flex;height:100%;padding:50px;gap:20px}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{width:50%;display:flex;flex-direction:column}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child > h1[_ngcontent-%COMP%]{margin-bottom:50px;text-align:start;font-family:Freizeit120;font-size:2vw;padding-left:50px}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child > div[_ngcontent-%COMP%]{display:block;overflow:auto;border:3px solid #d6ac60;background-color:#ffd689;padding:5px}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child > div[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px;max-height:600px}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child > div[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{height:100%;padding:20px 10px;border:5px solid rgb(235,235,235);display:flex;flex-direction:column;background-color:#fff;border-radius:15px;gap:10px}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child > div[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{font-size:20px}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child > div[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child > div[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin-inline:20px;font-size:15px}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{width:50%}@media only screen and (max-width: 800px){.ourStores[_ngcontent-%COMP%]{padding:20px 0 0;flex-direction:column}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{width:100%}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child > h1[_ngcontent-%COMP%]{font-size:30px;padding-left:0}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child > div[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{max-height:300px}.ourStores[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{width:100%;height:50%}}"]}),t})()}];let O=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[i.ez,s.Bz.forChild(C),s.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[i.ez,O]}),t})()}}]);