"use strict";(self.webpackChunklamasat=self.webpackChunklamasat||[]).push([[413],{4413:(Y,g,c)=>{c.r(g),c.d(g,{GroupModule:()=>U});var l=c(8583),d=c(4655),a=c(3679),h=c(8939),Z=c(8259),m=c.n(Z),e=c(7716),u=c(8603),_=c(627),f=c(9724);function b(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",21),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit;return e.oxw().remove(s.id)}),e._UZ(1,"img",22),e.qZA()}}function x(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",16),e.YNc(1,b,2,0,"div",17),e.TgZ(2,"div",18),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw().nav(i.id)}),e.TgZ(3,"h1",19),e._uU(4),e.qZA(),e.TgZ(5,"h5",20),e._uU(6),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=n.$implicit,r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.removeCheck),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij("Orders Count: ",t.order_count,"")}}function C(o,n){1&o&&e._UZ(0,"img",24)}function T(o,n){if(1&o&&(e.ynx(0),e.YNc(1,C,1,0,"img",23),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.loading)}}function O(o,n){1&o&&(e._UZ(0,"img",25),e._uU(1," Save "))}function G(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",27),e.TgZ(2,"span",28),e._uU(3),e.qZA(),e.qZA(),e.BQk()),2&o){const t=e.oxw().message;e.xp6(3),e.hij(" ",t," ")}}function M(o,n){if(1&o&&e.YNc(0,G,4,1,"ng-container",26),2&o){const t=n.control;e.Q6J("ngIf",t.hasError(n.validation)&&(t.dirty||t.touched))}}const A=function(o,n){return{"is-invalid":o,"is-valid":n}},k=function(o){return{validation:"required",message:"Name is required",control:o}},q=function(o){return{validation:"maxlength",message:"Name is must be at most 8 charcters",control:o}};let w=(()=>{class o{constructor(t,r,s,i,p){this._modalService=t,this._group=r,this._router=s,this._fb=i,this._swalService=p,this.groups=[],this.loading=!1,this.removeCheck=!1}ngOnInit(){this.fetchData(),this.initForm()}fetchData(){this.fetchGroups()}fetchGroups(){this._group.getAllGroupesNew().subscribe(t=>{this.groups=t.data.slice()})}initForm(){this.groupGroup=this._fb.group({name:[null,[a.kI.required,a.kI.maxLength(8)]]})}Submit(t){console.log(this.groupGroup),this.groupGroup.valid&&(this.loading=!0,this._group.addGroup(t).pipe((0,h.x)(()=>this.loading=!1)).subscribe(()=>{this.fetchGroups(),this.closeModal(),this._swalService.success("your group has been created successfuly")},r=>this._swalService.error("",r.error.message.data)))}remove(t){m().fire({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then(r=>{r.isConfirmed?this._group.removeGroup(t).subscribe(s=>{m().fire("Deleted!","Your imaginary file has been deleted.","success"),this.fetchGroups()}):r.dismiss===m().DismissReason.cancel&&m().fire("Cancelled","Your imaginary file is safe :)","error")})}Show(t){this.groupGroup.reset(),this.modalRef=this._modalService.open(t,{size:"md",modalClass:"mymodal",hideCloseButton:!1,centered:!1,backdrop:!0,animation:!0,keyboard:!1,closeOnOutsideClick:!0,backdropClass:"modal-backdrop"})}closeModal(){this._modalService.close(this.modalRef)}nav(t){this._router.navigate(["group/find",t])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.gk),e.Y36(_.l),e.Y36(d.F0),e.Y36(a.qu),e.Y36(f.J))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-group-main"]],decls:32,vars:17,consts:[[1,"container"],[1,"d-flex","flex-row-reverse"],[1,"btn","btn-success","mb-3","btn-add",3,"click"],[1,"btn","btn-danger","mb-3","btn-add","me-3",3,"disabled","click"],[1,"row"],["class","col-md-6 mt-4","style","position: relative;",4,"ngFor","ngForOf"],["groupModal",""],["action"," ",3,"formGroup","ngSubmit"],["type","text","formControlName","name",1,"form-control",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"col-md-6"],["type","button",1,"btn","btn-danger","w-100",3,"click"],["type","submit",1,"btn","btn-success","w-100"],[4,"ngIf","ngIfElse"],["elseTemplate",""],["formError",""],[1,"col-md-6","mt-4",2,"position","relative"],["class","deletd-section cursor-pointer","style","position: absolute;right: 0;top: 0;z-index: 1;",3,"click",4,"ngIf"],[1,"card","p-3","cursor-pointer",3,"click"],[1,"fw-bold"],[1,"text-primary"],[1,"deletd-section","cursor-pointer",2,"position","absolute","right","0","top","0","z-index","1",3,"click"],["src","assets/action-data/close.svg","alt","","width","20",2,"cursor","pointer"],["width","30","src","assets/Spinner-1s-257px.svg","alt","",4,"ngIf"],["width","30","src","assets/Spinner-1s-257px.svg","alt",""],["src","assets/action-data/save.svg","width","20"],[4,"ngIf"],[1,"fv-plugins-message-container"],["role","alert",1,"text-danger"]],template:function(t,r){if(1&t){const s=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"section"),e.TgZ(2,"div",1),e.TgZ(3,"button",2),e.NdJ("click",function(){e.CHM(s);const p=e.MAs(10);return r.Show(p)}),e._uU(4,"+ Add New Group"),e.qZA(),e.TgZ(5,"button",3),e.NdJ("click",function(){return r.removeCheck=!r.removeCheck}),e._uU(6,"- Remove Group"),e.qZA(),e.qZA(),e.TgZ(7,"div",4),e.YNc(8,x,7,3,"div",5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"modal",null,6),e.TgZ(11,"modal-header"),e._uU(12," Group Modal "),e.qZA(),e.TgZ(13,"modal-content"),e.TgZ(14,"form",7),e.NdJ("ngSubmit",function(){return r.Submit(r.groupGroup.value)}),e.TgZ(15,"label"),e._uU(16,"Name"),e.qZA(),e._UZ(17,"input",8),e.GkF(18,9),e.GkF(19,9),e._UZ(20,"br"),e.TgZ(21,"div",4),e.TgZ(22,"div",10),e.TgZ(23,"button",11),e.NdJ("click",function(){return r.closeModal()}),e._uU(24,"X Cancel"),e.qZA(),e.qZA(),e.TgZ(25,"div",10),e.TgZ(26,"button",12),e.YNc(27,T,2,1,"ng-container",13),e.YNc(28,O,2,0,"ng-template",null,14,e.W1O),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(30,M,1,1,"ng-template",null,15,e.W1O)}if(2&t){const s=e.MAs(29),i=e.MAs(31);e.xp6(5),e.Q6J("disabled",0==r.groups.length),e.xp6(3),e.Q6J("ngForOf",r.groups),e.xp6(6),e.Q6J("formGroup",r.groupGroup),e.xp6(3),e.Q6J("ngClass",e.WLB(10,A,r.groupGroup.controls.name.invalid,r.groupGroup.controls.name.valid)),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(13,k,r.groupGroup.controls.name)),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(15,q,r.groupGroup.controls.name)),e.xp6(8),e.Q6J("ngIf",r.loading)("ngIfElse",s)}},directives:[l.sg,u.zS,u.Rb,u.Ef,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,l.mk,l.tP,l.O5],styles:["section[_ngcontent-%COMP%]{margin-left:12rem;margin-top:6rem}.card[_ngcontent-%COMP%]{box-shadow:-1px 2px 6px;border-radius:25px}.vl[_ngcontent-%COMP%]{border-left:2px solid;height:35px}.spinner[_ngcontent-%COMP%]{position:absolute;left:50%;right:50%;top:50%;z-index:1000}[_nghost-%COMP%]     a{text-decoration:none!important}"]}),o})();var v=c(4256);function S(o,n){1&o&&e._UZ(0,"img",6)}const y=function(o,n){return[o,n]};function J(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",7),e.TgZ(1,"div",8),e.TgZ(2,"div",4),e.TgZ(3,"div",9),e.TgZ(4,"input",10),e.NdJ("click",function(s){const p=e.CHM(t).$implicit;return e.oxw().selectOrder(p,s.target.checked)}),e.qZA(),e.qZA(),e.TgZ(5,"div",11),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw().nav(i.id)}),e.TgZ(6,"div",4),e.TgZ(7,"div",12),e.TgZ(8,"h1",13),e._uU(9),e.qZA(),e.TgZ(10,"p"),e._uU(11,"Product: "),e.TgZ(12,"span"),e._uU(13),e.qZA(),e.qZA(),e.TgZ(14,"p"),e._uU(15,"Customer: "),e.TgZ(16,"span"),e._uU(17),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",14),e._UZ(19,"apx-chart",15),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=n.$implicit,r=e.oxw();e.xp6(9),e.Oqu(t.name),e.xp6(4),e.Oqu(t.product.name),e.xp6(4),e.Oqu(t.customer.name),e.xp6(2),e.Q6J("fill",r.chartOptions.fill)("series",e.WLB(8,y,t.percent,100-t.percent))("chart",r.chartOptions.chart)("labels",r.chartOptions.labels)("responsive",r.chartOptions.responsive)}}const N=[{path:"all",component:w},{path:"find/:groupId",component:(()=>{class o{constructor(t,r,s,i){this._activatedRoute=t,this._groupService=r,this._router=s,this._SwalService=i,this.orders=[],this.orderSelected=[],this.loading=!1,this.initChart()}ngOnInit(){this.subscripeParams()}initChart(){this.chartOptions={fill:{colors:["#198754","#F3F3F3"]},chart:{width:150,type:"pie"},labels:["Completed","Not Completed"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}subscripeParams(){this._activatedRoute.params.subscribe(t=>{this.groupId=+t.groupId,this.fetchOrderGroups()})}fetchOrderGroups(){this._groupService.infoGroup(this.groupId).subscribe(t=>{this.orders=t.data.order.slice(),this.orders.forEach(r=>r.percent=Math.floor(101*Math.random()))})}selectOrder(t,r){r?this.orderSelected.push(t.id):this.orderSelected.find((s,i)=>{t.id==s&&this.orderSelected.splice(i,1)})}deleteOrders(){this.loading=!0,this._groupService.removeOrdersFromGroup({order_ids:this.orderSelected,group_id:this.groupId}).pipe((0,h.x)(()=>this.loading=!1)).subscribe(()=>{this.fetchOrderGroups(),this._SwalService.success("your selected orders have been removed")},r=>this._SwalService.error("",r.error.message.data))}nav(t){this._router.navigate(["order/find",t])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.gz),e.Y36(_.l),e.Y36(d.F0),e.Y36(f.J))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-group-order"]],decls:8,vars:3,consts:[[1,"container"],[1,"d-flex","flex-row-reverse"],[1,"btn","btn-danger","mb-3","btn-delete","p-2",3,"disabled","click"],["width","30","src","assets/Spinner-1s-257px.svg","alt","",4,"ngIf"],[1,"row"],["class","col-md-6 mt-4",4,"ngFor","ngForOf"],["width","30","src","assets/Spinner-1s-257px.svg","alt",""],[1,"col-md-6","mt-4"],[1,"card","p-3"],[1,"col-md-2","form-col-check"],["type","checkbox","id","is_charge","name","is_charge","value","yes",1,"form-check-input",3,"click"],[1,"col-md-10","bl-black","cursor-pointer",3,"click"],[1,"col-md-5"],[1,"fw-bold"],[1,"col-md-7","mt-4"],[3,"fill","series","chart","labels","responsive"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"section"),e.TgZ(2,"div",1),e.TgZ(3,"button",2),e.NdJ("click",function(){return r.deleteOrders()}),e._uU(4,"Remove Orders "),e.YNc(5,S,1,0,"img",3),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e.YNc(7,J,20,11,"div",5),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("disabled",0==r.orders.length||0==r.orderSelected.length),e.xp6(2),e.Q6J("ngIf",r.loading),e.xp6(2),e.Q6J("ngForOf",r.orders))},directives:[l.O5,l.sg,v.x],styles:["section[_ngcontent-%COMP%]{margin-left:12rem;margin-top:6rem}.card[_ngcontent-%COMP%]{box-shadow:-1px 2px 6px;border-radius:25px}.vl[_ngcontent-%COMP%]{border-left:2px solid;height:35px}.spinner[_ngcontent-%COMP%]{position:absolute;left:50%;right:50%;top:50%;z-index:1000}#chart[_ngcontent-%COMP%]{max-width:380px;margin:35px auto;padding:0}[_nghost-%COMP%]     .apexcharts-legend, [_nghost-%COMP%]     .apexcharts-datalabels{display:none!important}.form-col-check[_ngcontent-%COMP%]{position:relative}.form-col-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{font-size:25px;position:absolute;top:30%;left:30%}.bl-black[_ngcontent-%COMP%]{border-left:1px solid black}span[_ngcontent-%COMP%]{font-weight:bold}"]}),o})()}];let F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.Bz.forChild(N)],d.Bz]}),o})(),U=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.ez,F,v.X,a.u5,a.UX,u.zk]]}),o})()}}]);