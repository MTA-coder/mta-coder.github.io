"use strict";(self.webpackChunklamasat=self.webpackChunklamasat||[]).push([[592],{4260:(p,s,n)=>{n.d(s,{b:()=>h});var o=n(205),c=n(5304),u=n(3927);class i extends u.s{constructor(e){super(e,"employee/branch")}readBranch(){return this.readEntities(void 0,"/all")}createBranch(e){return this.createEntity(e,"/create")}updateBranch(e,t){return this.updateQueryEntity(t,"/update/"+e)}deleteBranch(e){return this.deleteEntity(e,void 0,"/delete")}infoBranch(e){return this.readEntity(e,"/find")}}var a=n(7716),d=n(1841);let h=(()=>{class r{constructor(t){this.branchActions=new i(t)}getAllBranches(){return this.branchActions.readBranch().pipe((0,c.K)(t=>(0,o._)(t)))}addBranch(t){return this.branchActions.createBranch(t)}updateBranch(t,m){return this.branchActions.updateBranch(t,m)}removeBranch(t){return this.branchActions.deleteBranch(t)}infoBranch(t){return this.branchActions.infoBranch(t)}}return r.\u0275fac=function(t){return new(t||r)(a.LFG(d.eN))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},221:(p,s,n)=>{n.d(s,{H:()=>h});var o=n(205),c=n(5304),u=n(3927);class i extends u.s{constructor(e){super(e,"management/category")}readCategory(){return this.readEntities(void 0,"/all")}createCategory(e){return this.createEntity(e,"/create")}deleteCategory(e){return this.deleteEntity(e,void 0,"/delete")}updateCategory(e,t){return this.updateQueryEntity(t,"/update/"+e)}infoCategory(e){return this.readEntity(e,"/find")}}var a=n(7716),d=n(1841);let h=(()=>{class r{constructor(t){this.categoryActions=new i(t)}getAllCategories(){return this.categoryActions.readCategory().pipe((0,c.K)(t=>(0,o._)(t)))}createCategory(t){return this.categoryActions.createCategory(t)}removeCat(t){return this.categoryActions.deleteCategory(t)}infoCat(t){return this.categoryActions.infoCategory(t)}updateCategory(t,m){return this.categoryActions.updateCategory(t,m)}}return r.\u0275fac=function(t){return new(t||r)(a.LFG(d.eN))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},9357:(p,s,n)=>{n.d(s,{v:()=>h});var o=n(205),c=n(5304),u=n(3927);class i extends u.s{constructor(e){super(e,"customer")}readCustomer(){return this.readEntities(void 0,"/all")}createCustomer(e){return this.createEntity(e,"/create")}findCustomer(e){return this.readEntity(e,"/find")}updateCustomer(e,t){return this.updateQueryEntity(t,"/update/"+e)}deleteCustomer(e){return this.deleteEntity(e,void 0,"/delete")}}var a=n(7716),d=n(1841);let h=(()=>{class r{constructor(t){this.customerRequests=new i(t)}getAllCustomers(){return this.customerRequests.readCustomer().pipe((0,c.K)(t=>(0,o._)(t)))}addCustomer(t){return this.customerRequests.createCustomer(t)}getDetailsCustomer(t){return this.customerRequests.findCustomer(t)}removeCustomer(t){return this.customerRequests.deleteCustomer(t)}updateCustomerInformation(t,m){return this.customerRequests.updateCustomer(t,m)}}return r.\u0275fac=function(t){return new(t||r)(a.LFG(d.eN))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},7749:(p,s,n)=>{n.d(s,{n:()=>h});var o=n(205),c=n(5304),u=n(3927);class i extends u.s{constructor(e){super(e,"employee/department")}readDepartment(){return this.readEntities(void 0,"/all")}createDept(e){return this.createEntity(e,"/create")}updateDept(e,t){return this.updateQueryEntity(t,"/update/"+e)}removeDept(e){return this.deleteEntity(e,void 0,"/delete")}infoDept(e){return this.readEntity(e,"/find")}}var a=n(7716),d=n(1841);let h=(()=>{class r{constructor(t){this.departmentActions=new i(t)}getAllDepartments(){return this.departmentActions.readDepartment().pipe((0,c.K)(t=>(0,o._)(t)))}createDept(t){return this.departmentActions.createDept(t)}updateDepartment(t,m){return this.departmentActions.updateDept(t,m)}removeDept(t){return this.departmentActions.removeDept(t)}infoDepartment(t){return this.departmentActions.infoDept(t)}}return r.\u0275fac=function(t){return new(t||r)(a.LFG(d.eN))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);