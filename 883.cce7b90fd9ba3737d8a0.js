"use strict";(self.webpackChunklamasat=self.webpackChunklamasat||[]).push([[883],{8313:($,O,r)=>{r.r(O),r.d(O,{ArchiveModule:()=>$t});var g=r(8583),T=r(4655),b=r(7238),l=r(3679),p=r(8939),e=r(7716),A=r(1238),F=r(7458),X=r(221),tt=r(9357);let et=(()=>{class s{convert12to24Hour(t){const[i,a]=t.split(" ");let[n,c]=i.split(":");"AM"==a?12==parseInt(n,10)&&(n="0"):parseInt(n,10)<12&&(n=(parseInt(n,10)+12).toString());let h="";return parseInt(n,10)<10&&(h="0"),h+=parseInt(n,10)+":"+c,h}convert24to12(t){var i="AM";let[a,n]=t.split(":");var c=+a;c>=12&&(12!=c&&(c-=12),i="PM");var h="";return c<=9&&(h="0"),h+c.toString()+":"+n+" "+i}diffTime(t,i){var[a,n]=t.split(":"),[c,h]=i.split(":");return 60*Math.abs(+a-+c)+Math.abs(+n-+h)}monthDiff(t,i){var a;return a=12*(i.getFullYear()-t.getFullYear()),a-=t.getMonth(),(a+=i.getMonth())<=0?0:a}getDays(t,i){for(var a=[""],n=0,c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],h=t;h<=i&&!(++n>7);)a.push(c[h.getDay()]),h.setDate(h.getDate()+1);return a.splice(0,1),a}formatDate(t,i){var a=new Date(t),n=""+(a.getMonth()+1),c=""+a.getDate(),h=a.getFullYear();if(i)var _="23",f="59",M="59";return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),i?[h,n,c].join("-")+" "+[_,f,M].join(":"):[h,n,c].join("-")}compareDates(t,i){return t.getFullYear()<i.getFullYear()||t.getFullYear()==i.getFullYear()&&t.getMonth()<i.getMonth()||t.getFullYear()==i.getFullYear()&&t.getMonth()==i.getMonth()&&t.getDate()<i.getDate()?-1:t.getFullYear()>i.getFullYear()||t.getFullYear()==i.getFullYear()&&t.getMonth()>i.getMonth()||t.getFullYear()==i.getFullYear()&&t.getMonth()==i.getMonth()&&t.getDate()>i.getDate()?1:0}getExtension(t){var i=t.split(".");return i[i.length-1]}isImg(t){switch(this.getExtension(t)){case"jpeg":case"jpg":case"png":return!0}return!1}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var y=r(8295),k=r(9983),Y=r(6627),P=r(1095),w=r(1494),C=r(3220),D=r(7441),u=r(2458),H=r(4885);function it(s,o){if(1&s&&(e.TgZ(0,"span",34),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.AsE(" (+",t.categorySelect.value.length-1," ",2===(null==t.categorySelect.value?null:t.categorySelect.value.length)?"other":"others",") ")}}function st(s,o){if(1&s&&(e.TgZ(0,"mat-option",35),e._uU(1),e.qZA()),2&s){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij("",t.name," ")}}function at(s,o){if(1&s&&(e.TgZ(0,"span",34),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.AsE(" (+",t.productSelect.value.length-1," ",2===(null==t.productSelect.value?null:t.productSelect.value.length)?"other":"others",") ")}}function nt(s,o){if(1&s&&(e.TgZ(0,"mat-option",36),e._uU(1),e.qZA()),2&s){const t=o.$implicit;e.Q6J("value",t.id)("data-name",t.name),e.xp6(1),e.hij("",t.name," ")}}function ot(s,o){if(1&s&&(e.TgZ(0,"span",34),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.AsE(" (+",t.customerSelect.value.length-1," ",2===(null==t.customerSelect.value?null:t.customerSelect.value.length)?"other":"others",") ")}}function rt(s,o){if(1&s&&(e.TgZ(0,"mat-option",35),e._uU(1),e.qZA()),2&s){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij("",t.name," ")}}function lt(s,o){if(1&s&&(e.TgZ(0,"mat-option",35),e._uU(1),e.qZA()),2&s){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.hij("",t," ")}}function ct(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"div",19),e.TgZ(1,"div",11),e.TgZ(2,"div",20),e.TgZ(3,"mat-form-field",4),e.TgZ(4,"mat-label"),e._uU(5,"Date Range"),e.qZA(),e.TgZ(6,"mat-date-range-input",21),e._UZ(7,"input",22),e._UZ(8,"input",23),e.qZA(),e._UZ(9,"mat-datepicker-toggle",24),e._UZ(10,"mat-date-range-picker",null,25),e.qZA(),e.qZA(),e.TgZ(12,"div",20),e.TgZ(13,"mat-form-field",4),e.TgZ(14,"mat-label"),e._uU(15,"Category"),e.qZA(),e.TgZ(16,"mat-select",26),e.TgZ(17,"mat-select-trigger"),e._uU(18),e.YNc(19,it,2,2,"span",27),e.qZA(),e.YNc(20,st,2,2,"mat-option",28),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",20),e.TgZ(22,"mat-form-field",4),e.TgZ(23,"mat-label"),e._uU(24,"Product"),e.qZA(),e.TgZ(25,"mat-select",29),e.TgZ(26,"mat-select-trigger"),e._uU(27),e.YNc(28,at,2,2,"span",27),e.qZA(),e.YNc(29,nt,2,3,"mat-option",30),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(30,"div",11),e.TgZ(31,"div",31),e.TgZ(32,"mat-form-field",4),e.TgZ(33,"mat-label"),e._uU(34,"Customer"),e.qZA(),e.TgZ(35,"mat-select",26),e.TgZ(36,"mat-select-trigger"),e._uU(37),e.YNc(38,ot,2,2,"span",27),e.qZA(),e.YNc(39,rt,2,2,"mat-option",28),e.qZA(),e.qZA(),e.qZA(),e.TgZ(40,"div",20),e.TgZ(41,"mat-form-field",4),e.TgZ(42,"mat-label"),e._uU(43,"Customer Type"),e.qZA(),e.TgZ(44,"mat-select",32),e.YNc(45,lt,2,2,"mat-option",28),e.qZA(),e.qZA(),e.qZA(),e.TgZ(46,"div",7),e.TgZ(47,"button",33),e.NdJ("click",function(){return e.CHM(t),e.oxw().filterOrders()}),e._uU(48," Get Data "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&s){const t=e.MAs(11),i=e.oxw();e.Q6J("formGroup",i.filterForm),e.xp6(6),e.Q6J("rangePicker",t),e.xp6(3),e.Q6J("for",t),e.xp6(7),e.Q6J("formControl",i.categorySelect),e.xp6(2),e.hij(" ",i.categorySelect.value?i.categorySelect.value[0]:""," "),e.xp6(1),e.Q6J("ngIf",(null==i.categorySelect.value?null:i.categorySelect.value.length)>1),e.xp6(1),e.Q6J("ngForOf",i.categories),e.xp6(5),e.Q6J("formControl",i.productSelect),e.xp6(2),e.hij(" ",i.productSelect.value?i.productSelect.value[0]:""," "),e.xp6(1),e.Q6J("ngIf",(null==i.productSelect.value?null:i.productSelect.value.length)>1),e.xp6(1),e.Q6J("ngForOf",i.products),e.xp6(6),e.Q6J("formControl",i.customerSelect),e.xp6(2),e.hij(" ",i.customerSelect.value?i.customerSelect.value[0]:""," "),e.xp6(1),e.Q6J("ngIf",(null==i.customerSelect.value?null:i.customerSelect.value.length)>1),e.xp6(1),e.Q6J("ngForOf",i.customers),e.xp6(6),e.Q6J("ngForOf",i.types)}}function ht(s,o){1&s&&(e.TgZ(0,"div",37),e._UZ(1,"mat-spinner"),e.qZA())}function pt(s,o){if(1&s&&(e.TgZ(0,"div",38),e.TgZ(1,"div",39),e.TgZ(2,"div",40),e._uU(3),e.qZA(),e.TgZ(4,"div",7),e._uU(5),e.qZA(),e.TgZ(6,"div",7),e._uU(7),e.qZA(),e.TgZ(8,"div",40),e._uU(9),e.qZA(),e.TgZ(10,"div",40),e._uU(11),e.qZA(),e.qZA(),e.qZA()),2&s){const t=o.$implicit,i=e.oxw();e.Q6J("@in",i.DataState),e.xp6(3),e.Oqu(t.number),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.customer.name),e.xp6(2),e.Oqu(t.product.category.name),e.xp6(2),e.Oqu(t.product.name)}}const ut=[{path:"all",component:(()=>{class s{constructor(t,i,a,n,c,h){this._fb=t,this._orderService=i,this._productService=a,this._categoryService=n,this._customerService=c,this._helperService=h,this.productSelect=new l.NI,this.categorySelect=new l.NI,this.customerSelect=new l.NI,this.toggleFilter=!1,this.loadingItems=!1,this.DataState="void",this.datasource=[],this.headers=["Number","Name","Customer","Category","Product"],this.types=["partner","big","small","direct","distribution"],this.sortedData=this.datasource.slice()}ngOnInit(){this.fetchData(),this.initialControls()}fetchData(){this.fetchOrders(),this.fetchCustomers(),this.fetchProducts(),this.fetchCategories()}fetchOrders(){this.loadingItems=!0;var t=new FormData;t.append("from_date",this._helperService.formatDate(new Date("2021-01-01"),!1)),t.append("to_date",this._helperService.formatDate(Date.now(),!1)),this._orderService.getOrdersPagination(t).pipe((0,p.x)(()=>this.loadingItems=!1)).subscribe(i=>{this.datasource=i.data.data,this.sortedData=this.datasource.slice()})}fetchCustomers(){this._customerService.getAllCustomers().subscribe(t=>this.customers=t.data.data)}fetchProducts(){this._productService.getAllProducts().subscribe(t=>this.products=t.data)}fetchCategories(){this._categoryService.getAllCategories().subscribe(t=>this.categories=t.data)}initialControls(){this.initFilterForm(),this.initSearchForm()}initFilterForm(){this.filterForm=this._fb.group({from_date:[Date.now(),l.kI.required],to_date:[Date.now(),l.kI.required],category_ids:[[],l.kI.nullValidator],product_ids:[[],l.kI.nullValidator],customer_ids:[[],l.kI.nullValidator],customer_type:[null,l.kI.nullValidator]})}initSearchForm(){this.searchForm=this._fb.group({serch_text:[null,l.kI.required]})}searchOrder(t){""!=t.value?(this.searchForm.patchValue({serch_text:t.value}),this.loadingItems=!0,this._orderService.getOrderSearched(this.searchForm.value).pipe((0,p.x)(()=>this.loadingItems=!1)).subscribe(i=>{this.datasource=i.data.data,this.sortedData=this.datasource.slice()})):this.fetchOrders()}filterOrders(){this.filterForm.patchValue({category_ids:this.categorySelect.value,product_ids:this.productSelect.value,customer_ids:this.customerSelect.value,from_date:this._helperService.formatDate(this.filterForm.controls.from_date.value,!1),to_date:this._helperService.formatDate(this.filterForm.controls.to_date.value,!1)}),this.loadingItems=!0,this._orderService.getOrdersPagination(this.filterForm.value).pipe((0,p.x)(()=>this.loadingItems=!1)).subscribe(t=>{this.datasource=t.data.data,this.sortedData=this.datasource.slice()})}sortData(t){const i=this.datasource.slice();this.sortedData=t.active&&""!==t.direction?i.sort((a,n)=>{const c="asc"===t.direction;switch(t.active){case"Number":return this.compare(a.Number,n.Number,c);case"Name":return this.compare(a.Name,n.Name,c);case"Customer":return this.compare(a.Customer,n.Customer,c);case"Category":return this.compare(a.Category,n.Category,c);case"Product":return this.compare(a.Product,n.Product,c);default:return 0}}):i}compare(t,i,a){return(t<i?-1:1)*(a?1:-1)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(l.qu),e.Y36(A.p),e.Y36(F.M),e.Y36(X.H),e.Y36(tt.v),e.Y36(et))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-archive-order"]],decls:32,vars:3,consts:[[1,"nav-title-header","fs-4","fw-bold","text-center"],[1,"container"],[1,"row","d-flex","align-items-baseline"],[1,"col-md-9"],["appearance","outline",1,"w-100"],["matInput","","placeholder","search..",3,"input"],["matSuffix",""],[1,"col-md-3"],["mat-raised-button","",1,"w-100",3,"click"],["class","card p-3","style","border-radius: 25px",3,"formGroup",4,"ngIf"],["matSort","",1,"mt-3",3,"matSortChange"],[1,"row"],["mat-sort-header","Number",1,"col-md-2","d-flex","justify-content-center",2,"text-align","center","font-weight","bold","font-size","17px"],["mat-sort-header","Name",1,"col-md-3","d-flex","justify-content-center",2,"text-align","center","font-weight","bold","font-size","17px"],["mat-sort-header","Customer",1,"col-md-3","d-flex","justify-content-center",2,"text-align","center","font-weight","bold","font-size","17px"],["mat-sort-header","Category",1,"col-md-2","d-flex","justify-content-center",2,"text-align","center","font-weight","bold","font-size","17px"],["mat-sort-header","Product",1,"col-md-2","d-flex","justify-content-center",2,"text-align","center","font-weight","bold","font-size","17px"],["class","spinner",4,"ngIf"],["class","card mt-3 p-3","style","border-radius: 20px; box-shadow: -1px 2px 6px 0px",4,"ngFor","ngForOf"],[1,"card","p-3",2,"border-radius","25px",3,"formGroup"],[1,"col-md-4"],[3,"rangePicker"],["matStartDate","","formControlName","from_date","placeholder","Start date"],["matEndDate","","formControlName","to_date","placeholder","End date"],["matSuffix","",3,"for"],["picker",""],["multiple","",3,"formControl"],["class","example-additional-selection",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["formArrayName","product_ids","multiple","",3,"formControl"],[3,"value","data-name",4,"ngFor","ngForOf"],[1,"col-md-5"],["formControlName","customer_type"],["type","submit","mat-raised-button","","color","primary",1,"w-100",3,"click"],[1,"example-additional-selection"],[3,"value"],[3,"value","data-name"],[1,"spinner"],[1,"card","mt-3","p-3",2,"border-radius","20px","box-shadow","-1px 2px 6px 0px"],[1,"row",2,"text-align","center","align-items","center"],[1,"col-md-2"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._uU(1,"Archive > Order"),e.qZA(),e.TgZ(2,"div",1),e.TgZ(3,"section"),e.TgZ(4,"div",2),e.TgZ(5,"div",3),e.TgZ(6,"mat-form-field",4),e.TgZ(7,"mat-label"),e._uU(8,"Search Order"),e.qZA(),e.TgZ(9,"input",5),e.NdJ("input",function(n){return i.searchOrder(n.target)}),e.qZA(),e.TgZ(10,"mat-icon",6),e._uU(11,"search"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div",7),e.TgZ(13,"button",8),e.NdJ("click",function(){return i.toggleFilter=!i.toggleFilter}),e._uU(14," Advance Search "),e.TgZ(15,"mat-icon",6),e._uU(16,"settings_input_component"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(17,ct,49,16,"div",9),e.TgZ(18,"div",10),e.NdJ("matSortChange",function(n){return i.sortData(n)}),e.TgZ(19,"div",11),e.TgZ(20,"div",12),e._uU(21," Number "),e.qZA(),e.TgZ(22,"div",13),e._uU(23," Name "),e.qZA(),e.TgZ(24,"div",14),e._uU(25," Customer "),e.qZA(),e.TgZ(26,"div",15),e._uU(27," Category "),e.qZA(),e.TgZ(28,"div",16),e._uU(29," Product "),e.qZA(),e.qZA(),e.YNc(30,ht,2,0,"div",17),e.YNc(31,pt,12,6,"div",18),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(17),e.Q6J("ngIf",i.toggleFilter),e.xp6(13),e.Q6J("ngIf",i.loadingItems),e.xp6(1),e.Q6J("ngForOf",i.sortedData))},directives:[y.KE,y.hX,k.Nt,Y.Hw,y.R9,P.lW,g.O5,w.YE,w.nU,g.sg,l.JL,l.sg,C.wx,C.zY,l.Fj,l.JJ,l.u,C.By,C.nW,C._g,D.gD,l.oH,D.$L,l.CE,u.ey,H.$g],styles:[".mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:10px}.example-additional-selection[_ngcontent-%COMP%]{opacity:.75;font-size:.75em}.spinner[_ngcontent-%COMP%]{position:absolute;left:50%;right:50%;top:50%;z-index:1000}.mat-sort-header-container[_ngcontent-%COMP%]{justify-content:center!important}"],data:{animation:[(0,b.X$)("in",[(0,b.SB)("in",(0,b.oB)({opacity:1,transform:"translateY(0)"})),(0,b.eR)("void=>*",[(0,b.oB)({opacity:0,transform:"translateY(100px)"}),(0,b.jt)(1e3)])])]}}),s})()}];let dt=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[T.Bz.forChild(ut)],T.Bz]}),s})();var d=r(6461);r(9490),r(6237),r(9765),r(6682),r(5257),r(6782),r(9761),r(9238),r(8345),r(521),r(946);const J=new e.OlP("mat-chips-default-options"),Ft={separatorKeyCodes:[d.K5]};let wt=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[u.rD,{provide:J,useValue:Ft}],imports:[[u.BQ]]}),s})();r(5319),r(1439),r(5917),r(2759);var I=r(625),z=r(6994);r(7636),r(3190),r(5435),r(8002),r(3342),r(1289);const Qt={provide:new e.OlP("mat-autocomplete-scroll-strategy"),deps:[I.aV],useFactory:function(s){return()=>s.scrollStrategies.reposition()}};let Kt=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[Qt],imports:[[I.U8,u.Ng,u.BQ,g.ez],z.ZD,u.Ng,u.BQ]}),s})(),$t=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[g.ez,dt,l.UX,l.u5,w.JX,y.lN,Y.Ps,k.c,P.ot,wt,C.FA,Kt,D.LD,H.Cq]]}),s})()},3927:($,O,r)=>{r.d(O,{s:()=>T});var g=r(1841);class T{constructor(l,p,e="http://lamasat.preneom.com"){this.http=l,this.entityname=p,this.baseURL=e,this.apiURL=`${this.baseURL}/${this.entityname}`}createEntity(l,p){return this.http.post(this.apiURL+p,l)}createEntityDownload(l,p){return this.http.post(this.apiURL+p,l,{responseType:"arraybuffer"})}readEntities(l,p){const e=new g.LE({fromObject:l});return this.http.get(this.apiURL+p,{params:e})}readEntity(l,p){const e=this.joinEntityUrl(l,p);return this.http.get(e)}updateEntity(l,p,e){const A=this.joinEntityUrl(l,e);return this.http.put(this.apiURL+A,p)}updateQueryEntity(l,p){return this.http.put(this.apiURL+p,l)}deleteEntity(l,p,e){const A=this.joinEntityUrl(l,e),F=new g.LE({fromObject:p});return this.http.delete(A,{params:F})}joinEntityUrl(l,p){return l?[this.apiURL+p,l].join("/"):[this.apiURL+p].join("/")}}}}]);