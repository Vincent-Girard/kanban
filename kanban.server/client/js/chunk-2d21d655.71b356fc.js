(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d655"],{d0b5:function(t,e,c){"use strict";c.r(e);var s=c("7a23");const a=Object(s["I"])("data-v-3037c978");Object(s["u"])("data-v-3037c978");const i={class:"container-fluid BoardDetailsPage"},n={class:"row"},r={class:"col"},o={class:"text-white text-center"},l={class:"form-row justify-content-center"},b={class:"col-3"},d=Object(s["h"])("div",{class:"col-1"},[Object(s["h"])("button",{type:"submit",class:"btn btn-success"}," + ")],-1),j={class:"row justify-content-center"};Object(s["s"])();const O=a((t,e,c,a,O,p)=>{const u=Object(s["y"])("ListComponent");return Object(s["r"])(),Object(s["e"])("div",i,[Object(s["h"])("div",n,[Object(s["h"])("div",r,[Object(s["h"])("h1",o,Object(s["B"])(a.board.title),1),Object(s["h"])("form",{action:"form-inline border justify-content-center align-items-center",onSubmit:e[2]||(e[2]=Object(s["H"])((...t)=>a.createList&&a.createList(...t),["prevent"]))},[Object(s["h"])("div",l,[Object(s["h"])("div",b,[Object(s["G"])(Object(s["h"])("input",{type:"text",name:"title",id:"title","onUpdate:modelValue":e[1]||(e[1]=t=>a.state.newList.title=t),class:"form-control d-flex",placeholder:"Create list...","aria-describedby":"title"},null,512),[[s["D"],a.state.newList.title]])]),d])],32)])]),Object(s["h"])("div",j,[(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["x"])(a.state.lists,t=>(Object(s["r"])(),Object(s["e"])(u,{key:t.id,"list-props":t},null,8,["list-props"]))),128))])])});var p=c("6c02"),u=c("8a4e"),w=c("617f"),h=c("83fc"),m=c("5fb1"),v={name:"BoardDetailsPage",setup(){const t=Object(p["c"])(),e=Object(s["v"])({lists:Object(s["c"])(()=>h["a"].lists),newList:{title:"",board:t.params.id}});return Object(s["p"])(async()=>{try{await w["a"].getOne(t.params.id)}catch(e){u["a"].log(e)}try{await m["a"].getLists(t.params.id)}catch(e){u["a"].log(e)}}),{state:e,board:Object(s["c"])(()=>h["a"].activeBoard),async createList(){try{console.log("this is your new list",e.newList),await m["a"].createList(e.newList,t.params.id),e.newList.title=""}catch(c){u["a"].error(c)}}}}};v.render=O,v.__scopeId="data-v-3037c978";e["default"]=v}}]);