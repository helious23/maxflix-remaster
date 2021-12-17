(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{129:function(e,n,t){"use strict";t.r(n);var i,r,c,a,o,s,d,l,b,j,h,u,m,p,g,v,O,f,x,w,y,k,_,z,I,R,C,L,S,H,F,K,W,M,B,q,E,P,Q,T,V,Y,D,X,A,G,J,U,N,Z,$,ee,ne,te,ie,re,ce,ae,oe,se,de,le,be,je,he,ue,me,pe,ge,ve,Oe,fe,xe,we,ye,ke,_e,ze,Ie,Re,Ce,Le=t(0),Se=t.n(Le),He=t(47),Fe=t.n(He),Ke=t(30),We=t(4),Me=t(36),Be=t(17),qe=t(46),Ee=t(94),Pe="/",Qe="/tv",Te="/search",Ve="/movies/:movieId",Ye="/tv/:tvId",De="search/:keywordId",Xe=t(7),Ae=t(10),Ge=t.n(Ae),Je=t(19),Ue=t(5),Ne=t(24),Ze="83e4562556a8e370915aa2a360e7d4db",$e="https://api.themoviedb.org/3",en=function(){return fetch("".concat($e,"/movie/now_playing?api_key=").concat(Ze,"&language=ko-KR&page=1&region=KR")).then((function(e){return e.json()}))},nn=function(){return fetch("".concat($e,"/movie/top_rated?api_key=").concat(Ze,"&language=ko-KR&page=1&region=KR")).then((function(e){return e.json()}))},tn=function(e){return fetch("".concat($e,"/movie/").concat(e,"?api_key=").concat(Ze,"&language=ko-KR&append_to_response=KR")).then((function(e){return e.json()}))},rn=function(){return fetch("".concat($e,"/tv/popular?api_key=").concat(Ze,"&language=ko-KR&page=1&region=KR")).then((function(e){return e.json()}))},cn=function(){return fetch("".concat($e,"/tv/top_rated?api_key=").concat(Ze,"&language=ko-KR&page=1&region=KR")).then((function(e){return e.json()}))},an="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",on=t(135),sn=t(137),dn=t(136),ln=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"original";return"https://image.tmdb.org/t/p/".concat(n,"/").concat(e)},bn=t(25),jn=Object(Ke.b)({key:"movieDetail",default:!1}),hn=t(1),un=We.c.div(i||(i=Object(Ue.a)(["\n  background-color: black;\n"]))),mn=Object(We.c)(on.a.div)(r||(r=Object(Ue.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),pn=We.c.div(c||(c=Object(Ue.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 4rem;\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),\n    url(",");\n  background-size: cover;\n"])),(function(e){return e.bgPhoto})),gn=We.c.h2(a||(a=Object(Ue.a)(["\n  font-size: 5rem;\n  margin-bottom: 2rem;\n"]))),vn=We.c.p(o||(o=Object(Ue.a)(["\n  font-size: 1.5rem;\n  width: 50%;\n"]))),On=We.c.div(s||(s=Object(Ue.a)(["\n  position: relative;\n  top: -9.3rem;\n  margin-bottom: 15rem;\n"]))),fn=We.c.div(d||(d=Object(Ue.a)(["\n  margin-bottom: 2rem;\n  margin-left: 4rem;\n  font-size: 1.5rem;\n"]))),xn=Object(We.c)(on.a.div)(l||(l=Object(Ue.a)(["\n  height: 80%;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.3;\n  position: absolute;\n  right: 1rem;\n  top: 7rem;\n  background-color: rgba(0, 0, 0, 1);\n"]))),wn=Object(We.c)(on.a.div)(b||(b=Object(Ue.a)(["\n  display: grid;\n  gap: 0.5rem;\n  grid-template-columns: repeat(6, 1fr);\n  position: absolute;\n  width: 100%;\n  padding: 0 4rem;\n"]))),yn=Object(We.c)(on.a.div)(j||(j=Object(Ue.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  cursor: pointer;\n  &:first-child {\n    transform-origin: center left;\n  }\n  &:last-child {\n    transform-origin: center right;\n  }\n"]))),kn=Object(We.c)(on.a.img)(h||(h=Object(Ue.a)(["\n  border-radius: 0.5rem;\n  width: 100%;\n"]))),_n=Object(We.c)(on.a.div)(u||(u=Object(Ue.a)(["\n  background-color: ",";\n  opacity: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.5);\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n  padding: 1rem;\n"])),(function(e){return e.theme.black.darker})),zn=Object(We.c)(on.a.div)(m||(m=Object(Ue.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),In=Object(We.c)(on.a.div)(p||(p=Object(Ue.a)(["\n  position: absolute;\n  border-radius: 1rem;\n  overflow: hidden;\n  width: 40vw;\n  height: 90vh;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: ",";\n"])),(function(e){return e.theme.black.lighter})),Rn=We.c.div(g||(g=Object(Ue.a)(["\n  width: 100%;\n  height: 35%;\n  background-size: cover;\n  background-position: center center;\n"]))),Cn=We.c.div(v||(v=Object(Ue.a)(["\n  color: ",";\n  position: relative;\n  top: -5.5rem;\n  padding: 1.5rem 1.5rem 0 1.5rem;\n"])),(function(e){return e.theme.white.lighter})),Ln=We.c.div(O||(O=Object(Ue.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n"]))),Sn=We.c.h3(f||(f=Object(Ue.a)(["\n  font-size: 2rem;\n  width: 60%;\n"]))),Hn=We.c.div(x||(x=Object(Ue.a)(["\n  width: 40%;\n"]))),Fn=We.c.div(w||(w=Object(Ue.a)(["\n  padding-top: ",";\n  display: grid;\n  height: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"])),(function(e){return e.tagline?"1.5rem":"2rem"})),Kn=We.c.div(y||(y=Object(Ue.a)(["\n  border-radius: 1rem;\n  height: 30rem;\n  background-position: center;\n  background-size: cover;\n"]))),Wn=We.c.div(k||(k=Object(Ue.a)(["\n  padding: 1.5rem;\n"]))),Mn=We.c.div(_||(_=Object(Ue.a)([""]))),Bn=We.c.div(z||(z=Object(Ue.a)(["\n  width: 3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),qn={hidden:function(e){return{x:e?-window.innerWidth:window.innerWidth}},visible:{x:0},exit:function(e){return{x:e?window.innerWidth:-window.innerWidth}}},En={normal:{scale:1},hover:{scale:1.5,y:-50,transition:{delay:.3,duration:.2,type:"tween"}}},Pn={hover:{borderBottomLeftRadius:0,borderBottomRightRadius:0,transition:{delay:.3,duration:.2,type:"tween"}}},Qn={hover:{opacity:1,transition:{delay:.3,duration:.1,type:"tween"}}},Tn=function(){var e=Object(Be.f)(),n=Object(Be.h)(Ye),t=Object(sn.a)().scrollY,i=Object(Ne.useQuery)(["tv","popular"],rn),r=i.data,c=i.isLoading,a=Object(Ne.useQuery)(["tv","top-rated"],cn),o=a.data,s=a.isLoading,d=Object(Ne.useQuery)(["tv",null===n||void 0===n?void 0:n.params.tvId],Object(Je.a)(Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n&&(t=null===n||void 0===n?void 0:n.params.tvId,fetch("".concat($e,"/tv/").concat(t,"?api_key=").concat(Ze,"&language=ko-KR&append_to_response=KR")).then((function(e){return e.json()}))));case 1:case"end":return e.stop()}var t}),e)}))),{enabled:!1,refetchOnWindowFocus:!1}),l=d.data,b=d.isLoading,j=d.refetch;Object(Le.useEffect)((function(){(null===n||void 0===n?void 0:n.params.tvId)&&j()}),[null===n||void 0===n?void 0:n.params.tvId,j]);var h=Object(Le.useState)(0),u=Object(Xe.a)(h,2),m=u[0],p=u[1],g=Object(Le.useState)(0),v=Object(Xe.a)(g,2),O=v[0],f=v[1],x=Object(Le.useState)(!1),w=Object(Xe.a)(x,2),y=w[0],k=w[1],_=Object(Le.useState)(!1),z=Object(Xe.a)(_,2),I=z[0],R=z[1],C=Object(Ke.d)(jn),L=function(){return k((function(e){return!e}))},S=function(n){e.push("/tv/".concat(n)),setTimeout((function(){return C(!0)}),500)};return Object(hn.jsx)(un,{children:c&&s?Object(hn.jsx)(mn,{children:"Loading..."}):Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsxs)(pn,{bgPhoto:ln((null===r||void 0===r?void 0:r.results[0].backdrop_path)||""),children:[Object(hn.jsx)(gn,{children:null===r||void 0===r?void 0:r.results[0].name}),Object(hn.jsx)(vn,{children:null===r||void 0===r?void 0:r.results[0].overview})]}),Object(hn.jsxs)(On,{children:[Object(hn.jsx)(fn,{children:"Popular TV"}),Object(hn.jsx)(dn.a,{onExitComplete:L,initial:!1,children:Object(hn.jsx)(wn,{custom:I,variants:qn,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===r||void 0===r?void 0:r.results.slice(1).slice(6*m,6*m+6).map((function(e){return Object(hn.jsxs)(yn,{layoutId:e.id+"",variants:En,whileHover:"hover",initial:"normal",transition:{type:"tween"},onClick:function(){return S(e.id)},children:[Object(hn.jsx)(kn,{variants:Pn,src:ln(e.backdrop_path,"w500")}),Object(hn.jsxs)(_n,{variants:Qn,children:[Object(hn.jsx)(Mn,{children:e.name}),Object(hn.jsxs)(Bn,{children:[Object(hn.jsx)(bn.a,{icon:["fas","star"],size:"xs",color:"orange"}),Object(hn.jsx)("div",{children:e.vote_average})]})]})]},e.id)}))},m)}),Object(hn.jsx)(xn,{whileHover:{opacity:1},onClick:function(){if(r){if(y)return;R(!1),L();var e=r.results.length-1,n=Math.floor(e/6)-1;p((function(e){return e===n?0:e+1}))}},children:Object(hn.jsx)(bn.a,{icon:["fas","chevron-right"],size:"2x"})})]}),Object(hn.jsxs)(On,{children:[Object(hn.jsx)(fn,{children:"Top Rated"}),Object(hn.jsx)(dn.a,{onExitComplete:L,initial:!1,children:Object(hn.jsx)(wn,{custom:I,variants:qn,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===o||void 0===o?void 0:o.results.slice(6*O,6*O+6).map((function(e){return Object(hn.jsxs)(yn,{layoutId:e.id+"",variants:En,whileHover:"hover",initial:"normal",transition:{type:"tween"},onClick:function(){return S(e.id)},children:[Object(hn.jsx)(kn,{variants:Pn,src:e.backdrop_path?ln(e.backdrop_path,"w500"):an}),Object(hn.jsxs)(_n,{variants:Qn,children:[Object(hn.jsx)(Mn,{children:e.name}),Object(hn.jsxs)(Bn,{children:[Object(hn.jsx)(bn.a,{icon:["fas","star"],size:"xs",color:"orange"}),Object(hn.jsx)("div",{children:e.vote_average})]})]})]},e.id)}))},O)}),Object(hn.jsx)(xn,{whileHover:{opacity:1},onClick:function(){if(o){if(y)return;R(!1),L();var e=o.results.length-1,n=Math.floor(e/6)-1;f((function(e){return e===n?0:e+1}))}},children:Object(hn.jsx)(bn.a,{icon:["fas","chevron-right"],size:"2x"})})]}),Object(hn.jsx)(dn.a,{children:b?Object(hn.jsx)(mn,{children:"Loading..."}):n&&Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsx)(zn,{onClick:function(){e.push(Qe),C(!1)},animate:{opacity:1},exit:{opacity:0}}),Object(hn.jsx)(In,{style:{top:t.get()+50},layoutId:n.params.tvId,children:l&&Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsx)(Rn,{style:{backgroundImage:"linear-gradient(transparent, black), url(".concat(l.backdrop_path?ln(l.backdrop_path):an,")")}}),Object(hn.jsxs)(Cn,{children:[Object(hn.jsxs)(Ln,{children:[Object(hn.jsx)(Sn,{children:l.name}),Object(hn.jsx)(Hn,{children:l.tagline})]}),Object(hn.jsxs)(Fn,{tagline:Boolean(l.tagline),children:[Object(hn.jsx)(Kn,{style:{backgroundImage:"url(".concat(ln(l.poster_path),")")}}),Object(hn.jsxs)(Wn,{children:[Object(hn.jsx)("div",{children:l.overview}),Object(hn.jsx)("a",{href:"".concat(l.homepage),target:"_blank",rel:"noreferrer",children:l.homepage}),Object(hn.jsxs)("div",{children:["\uc7a5\ub974 :"," ",l.genres.map((function(e){return Object(hn.jsxs)("span",{children:[e.name," "]})}))]}),Object(hn.jsxs)("div",{children:["\uccab \ubc29\uc601 \uc77c\uc790 : ",l.first_air_date]}),Object(hn.jsxs)("div",{children:["\ubc29\uc601 \uc2dc\uac04 :"," ",l.episode_run_time.map((function(e){return Object(hn.jsxs)("span",{children:[e," \ubd84"]})}))]})]})]})]})]})})]})})]})})},Vn=We.c.div(I||(I=Object(Ue.a)(["\n  background-color: black;\n"]))),Yn=Object(We.c)(on.a.div)(R||(R=Object(Ue.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Dn=We.c.div(C||(C=Object(Ue.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 4rem;\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),\n    url(",");\n  background-size: cover;\n"])),(function(e){return e.bgPhoto})),Xn=We.c.h2(L||(L=Object(Ue.a)(["\n  font-size: 5rem;\n  margin-bottom: 2rem;\n"]))),An=We.c.p(S||(S=Object(Ue.a)(["\n  font-size: 1.5rem;\n  width: 50%;\n"]))),Gn=We.c.div(H||(H=Object(Ue.a)(["\n  position: relative;\n  top: -9.3rem;\n  margin-bottom: 15rem;\n"]))),Jn=We.c.div(F||(F=Object(Ue.a)(["\n  margin-bottom: 2rem;\n  margin-left: 4rem;\n  font-size: 1.5rem;\n"]))),Un=Object(We.c)(on.a.div)(K||(K=Object(Ue.a)(["\n  height: 80%;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.3;\n  position: absolute;\n  right: 1rem;\n  top: 7rem;\n  background-color: rgba(0, 0, 0, 1);\n"]))),Nn=Object(We.c)(on.a.div)(W||(W=Object(Ue.a)(["\n  display: grid;\n  gap: 0.5rem;\n  grid-template-columns: repeat(6, 1fr);\n  position: absolute;\n  width: 100%;\n  padding: 0 4rem;\n"]))),Zn=Object(We.c)(on.a.div)(M||(M=Object(Ue.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  cursor: pointer;\n  &:first-child {\n    transform-origin: center left;\n  }\n  &:last-child {\n    transform-origin: center right;\n  }\n"]))),$n=Object(We.c)(on.a.img)(B||(B=Object(Ue.a)(["\n  border-radius: 0.5rem;\n  width: 100%;\n"]))),et=Object(We.c)(on.a.div)(q||(q=Object(Ue.a)(["\n  background-color: ",";\n  opacity: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.5);\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n  padding: 1rem;\n"])),(function(e){return e.theme.black.darker})),nt=Object(We.c)(on.a.div)(E||(E=Object(Ue.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),tt=Object(We.c)(on.a.div)(P||(P=Object(Ue.a)(["\n  position: absolute;\n  border-radius: 1rem;\n  overflow: hidden;\n  width: 40vw;\n  height: 90vh;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: ",";\n"])),(function(e){return e.theme.black.lighter})),it=We.c.div(Q||(Q=Object(Ue.a)(["\n  width: 100%;\n  height: 35%;\n  background-size: cover;\n  background-position: center center;\n"]))),rt=We.c.div(T||(T=Object(Ue.a)(["\n  color: ",";\n  position: relative;\n  top: -5.5rem;\n  padding: 1.5rem 1.5rem 0 1.5rem;\n"])),(function(e){return e.theme.white.lighter})),ct=We.c.div(V||(V=Object(Ue.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n"]))),at=We.c.h3(Y||(Y=Object(Ue.a)(["\n  font-size: 2rem;\n  width: 60%;\n"]))),ot=We.c.div(D||(D=Object(Ue.a)(["\n  width: 40%;\n"]))),st=We.c.div(X||(X=Object(Ue.a)(["\n  padding-top: ",";\n  display: grid;\n  height: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"])),(function(e){return e.tagline?"1.5rem":"2rem"})),dt=We.c.div(A||(A=Object(Ue.a)(["\n  border-radius: 1rem;\n  height: 30rem;\n  background-position: center;\n  background-size: cover;\n"]))),lt=We.c.div(G||(G=Object(Ue.a)(["\n  padding: 1.5rem;\n"]))),bt=We.c.div(J||(J=Object(Ue.a)([""]))),jt=We.c.div(U||(U=Object(Ue.a)(["\n  width: 3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),ht={hidden:function(e){return{x:e?-window.innerWidth:window.innerWidth}},visible:{x:0},exit:function(e){return{x:e?window.innerWidth:-window.innerWidth}}},ut={normal:{scale:1},hover:{scale:1.5,y:-50,transition:{delay:.3,duration:.2,type:"tween"}}},mt={hover:{borderBottomLeftRadius:0,borderBottomRightRadius:0,transition:{delay:.3,duration:.2,type:"tween"}}},pt={hover:{opacity:1,transition:{delay:.3,duration:.1,type:"tween"}}},gt=function(){var e=Object(Be.f)(),n=Object(Be.g)(),t=Object(Be.h)(Ve),i=Object(sn.a)().scrollY,r=new URLSearchParams(n.search).get("keyword"),c=Object(Ne.useQuery)(["movies",r],Object(Je.a)(Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r&&(n=r,fetch("".concat($e,"/search/movie?api_key=").concat(Ze,"&language=ko-KR&query=").concat(n,"&page=1&region=KR")).then((function(e){return e.json()}))));case 1:case"end":return e.stop()}var n}),e)})))),a=c.data,o=c.isLoading,s=Object(Ne.useQuery)(["tv",r],Object(Je.a)(Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r&&(n=r,fetch("".concat($e,"/search/tv?api_key=").concat(Ze,"&language=ko-KR&query=").concat(n,"&page=1&region=KR")).then((function(e){return e.json()}))));case 1:case"end":return e.stop()}var n}),e)})))),d=s.data,l=s.isLoading,b=Object(Ne.useQuery)(["movies",null===t||void 0===t?void 0:t.params.movieId],Object(Je.a)(Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t&&tn(null===t||void 0===t?void 0:t.params.movieId));case 1:case"end":return e.stop()}}),e)}))),{enabled:!1,refetchOnWindowFocus:!1}),j=b.data,h=b.isLoading,u=b.refetch;Object(Le.useEffect)((function(){(null===t||void 0===t?void 0:t.params.movieId)&&u()}),[null===t||void 0===t?void 0:t.params.movieId,u]);var m=Object(Le.useState)(0),p=Object(Xe.a)(m,2),g=p[0],v=p[1],O=Object(Le.useState)(0),f=Object(Xe.a)(O,2),x=f[0],w=f[1],y=Object(Le.useState)(!1),k=Object(Xe.a)(y,2),_=k[0],z=k[1],I=Object(Le.useState)(!1),R=Object(Xe.a)(I,2),C=R[0],L=R[1],S=Object(Ke.d)(jn),H=function(){return z((function(e){return!e}))},F=function(n){e.push("/movies/".concat(n)),setTimeout((function(){return S(!0)}),500)};return console.log(a),Object(hn.jsx)(Vn,{children:o&&l?Object(hn.jsx)(Yn,{children:"Loading..."}):a||d?Object(hn.jsxs)(hn.Fragment,{children:[a&&a.total_results>0&&Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsxs)(Dn,{bgPhoto:ln((null===a||void 0===a?void 0:a.results[0].backdrop_path)||""),children:[Object(hn.jsx)(Xn,{children:null===a||void 0===a?void 0:a.results[0].title}),Object(hn.jsx)(An,{children:null===a||void 0===a?void 0:a.results[0].overview})]}),Object(hn.jsxs)(Gn,{children:[Object(hn.jsxs)(Jn,{children:[r," \uc601\ud654"]}),Object(hn.jsx)(dn.a,{onExitComplete:H,initial:!1,children:Object(hn.jsx)(Nn,{custom:C,variants:ht,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===a||void 0===a?void 0:a.results.slice(6*g,6*g+6).map((function(e){return Object(hn.jsxs)(Zn,{layoutId:e.id+"",variants:ut,whileHover:"hover",initial:"normal",transition:{type:"tween"},onClick:function(){return F(e.id)},children:[Object(hn.jsx)($n,{variants:mt,src:ln(e.backdrop_path,"w500")}),Object(hn.jsxs)(et,{variants:pt,children:[Object(hn.jsx)(bt,{children:e.title}),Object(hn.jsxs)(jt,{children:[Object(hn.jsx)(bn.a,{icon:["fas","star"],size:"xs",color:"orange"}),Object(hn.jsx)("div",{children:e.vote_average})]})]})]},e.id)}))},g)}),Object(hn.jsx)(Un,{whileHover:{opacity:1},onClick:function(){if(a){if(_)return;L(!1),H();var e=a.results.length-1,n=Math.floor(e/6)-1;v((function(e){return e===n?0:e+1}))}},children:Object(hn.jsx)(bn.a,{icon:["fas","chevron-right"],size:"2x"})})]})]}),d&&d.total_results>0&&Object(hn.jsx)(hn.Fragment,{children:Object(hn.jsxs)(Gn,{children:[Object(hn.jsxs)(Jn,{children:[r," TV \uc2dc\ub9ac\uc988"]}),Object(hn.jsx)(dn.a,{onExitComplete:H,initial:!1,children:Object(hn.jsx)(Nn,{custom:C,variants:ht,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===d||void 0===d?void 0:d.results.slice(6*x,6*x+6).map((function(e){return Object(hn.jsxs)(Zn,{layoutId:e.id+"",variants:ut,whileHover:"hover",initial:"normal",transition:{type:"tween"},onClick:function(){return F(e.id)},children:[Object(hn.jsx)($n,{variants:mt,src:e.backdrop_path?ln(e.backdrop_path,"w500"):an}),Object(hn.jsxs)(et,{variants:pt,children:[Object(hn.jsx)(bt,{children:e.name}),Object(hn.jsxs)(jt,{children:[Object(hn.jsx)(bn.a,{icon:["fas","star"],size:"xs",color:"orange"}),Object(hn.jsx)("div",{children:e.vote_average})]})]})]},e.id)}))},x)}),Object(hn.jsx)(Un,{whileHover:{opacity:1},onClick:function(){if(d){if(_)return;L(!1),H();var e=d.results.length-1,n=Math.floor(e/6)-1;w((function(e){return e===n?0:e+1}))}},children:Object(hn.jsx)(bn.a,{icon:["fas","chevron-right"],size:"2x"})})]})}),Object(hn.jsx)(dn.a,{children:h?Object(hn.jsx)(Yn,{children:"Loading..."}):t&&Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsx)(nt,{onClick:function(){e.push(Pe),S(!1)},animate:{opacity:1},exit:{opacity:0}}),Object(hn.jsx)(tt,{style:{top:i.get()+50},layoutId:t.params.movieId,children:j&&Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsx)(it,{style:{backgroundImage:"linear-gradient(transparent, black), url(".concat(j.backdrop_path?ln(j.backdrop_path):an,")")}}),Object(hn.jsxs)(rt,{children:[Object(hn.jsxs)(ct,{children:[Object(hn.jsx)(at,{children:j.title}),Object(hn.jsx)(ot,{children:j.tagline})]}),Object(hn.jsxs)(st,{tagline:Boolean(j.tagline),children:[Object(hn.jsx)(dt,{style:{backgroundImage:"url(".concat(ln(j.poster_path),")")}}),Object(hn.jsxs)(lt,{children:[Object(hn.jsx)("div",{children:j.overview}),Object(hn.jsx)("a",{href:"".concat(j.homepage),target:"_blank",rel:"noreferrer",children:j.homepage}),Object(hn.jsxs)("div",{children:["\uc7a5\ub974 :"," ",j.genres.map((function(e){return Object(hn.jsxs)("span",{children:[e.name," "]})}))]}),Object(hn.jsxs)("div",{children:["\uac1c\ubd09 \uc77c\uc790 : ",j.release_date]}),Object(hn.jsxs)("div",{children:["\uc0c1\uc601 \uc2dc\uac04 : ",j.runtime," \ubd84"]}),Object(hn.jsxs)("div",{children:["\uac1c\ubd09 \uc5ec\ubd80 : ",j.status]})]})]})]})]})})]})})]}):Object(hn.jsxs)(hn.Fragment,{children:[console.log("123"),Object(hn.jsx)("div",{children:"\uac80\uc0c9 \uacb0\uacfc\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"})]})})},vt=We.c.div(N||(N=Object(Ue.a)(["\n  background-color: black;\n"]))),Ot=Object(We.c)(on.a.div)(Z||(Z=Object(Ue.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ft=We.c.div($||($=Object(Ue.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 4rem;\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),\n    url(",");\n  background-size: cover;\n"])),(function(e){return e.bgPhoto})),xt=We.c.h2(ee||(ee=Object(Ue.a)(["\n  font-size: 5rem;\n  margin-bottom: 2rem;\n"]))),wt=We.c.p(ne||(ne=Object(Ue.a)(["\n  font-size: 1.5rem;\n  width: 50%;\n"]))),yt=We.c.div(te||(te=Object(Ue.a)(["\n  position: relative;\n  top: -9.3rem;\n  margin-bottom: 15rem;\n"]))),kt=We.c.div(ie||(ie=Object(Ue.a)(["\n  margin-bottom: 2rem;\n  margin-left: 4rem;\n  font-size: 1.5rem;\n"]))),_t=Object(We.c)(on.a.div)(re||(re=Object(Ue.a)(["\n  height: 80%;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.3;\n  position: absolute;\n  right: 1rem;\n  top: 7rem;\n  background-color: rgba(0, 0, 0, 1);\n"]))),zt=Object(We.c)(on.a.div)(ce||(ce=Object(Ue.a)(["\n  display: grid;\n  gap: 0.5rem;\n  grid-template-columns: repeat(6, 1fr);\n  position: absolute;\n  width: 100%;\n  padding: 0 4rem;\n"]))),It=Object(We.c)(on.a.div)(ae||(ae=Object(Ue.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  cursor: pointer;\n  &:first-child {\n    transform-origin: center left;\n  }\n  &:last-child {\n    transform-origin: center right;\n  }\n"]))),Rt=Object(We.c)(on.a.img)(oe||(oe=Object(Ue.a)(["\n  border-radius: 0.5rem;\n  width: 100%;\n"]))),Ct=Object(We.c)(on.a.div)(se||(se=Object(Ue.a)(["\n  background-color: ",";\n  opacity: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.5);\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n  padding: 1rem;\n"])),(function(e){return e.theme.black.darker})),Lt=Object(We.c)(on.a.div)(de||(de=Object(Ue.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),St=Object(We.c)(on.a.div)(le||(le=Object(Ue.a)(["\n  position: absolute;\n  border-radius: 1rem;\n  overflow: hidden;\n  width: 40vw;\n  height: 90vh;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: ",";\n"])),(function(e){return e.theme.black.lighter})),Ht=We.c.div(be||(be=Object(Ue.a)(["\n  width: 100%;\n  height: 35%;\n  background-size: cover;\n  background-position: center center;\n"]))),Ft=We.c.div(je||(je=Object(Ue.a)(["\n  color: ",";\n  position: relative;\n  top: -5.5rem;\n  padding: 1.5rem 1.5rem 0 1.5rem;\n"])),(function(e){return e.theme.white.lighter})),Kt=We.c.div(he||(he=Object(Ue.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n"]))),Wt=We.c.h3(ue||(ue=Object(Ue.a)(["\n  font-size: 2rem;\n  width: 60%;\n"]))),Mt=We.c.div(me||(me=Object(Ue.a)(["\n  width: 40%;\n"]))),Bt=We.c.div(pe||(pe=Object(Ue.a)(["\n  padding-top: ",";\n  display: grid;\n  height: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"])),(function(e){return e.tagline?"1.5rem":"2rem"})),qt=We.c.div(ge||(ge=Object(Ue.a)(["\n  border-radius: 1rem;\n  height: 30rem;\n  background-position: center;\n  background-size: cover;\n"]))),Et=We.c.div(ve||(ve=Object(Ue.a)(["\n  padding: 1.5rem;\n"]))),Pt=We.c.div(Oe||(Oe=Object(Ue.a)([""]))),Qt=We.c.div(fe||(fe=Object(Ue.a)(["\n  width: 3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Tt={hidden:function(e){return{x:e?-window.innerWidth:window.innerWidth}},visible:{x:0},exit:function(e){return{x:e?window.innerWidth:-window.innerWidth}}},Vt={normal:{scale:1},hover:{scale:1.5,y:-50,transition:{delay:.3,duration:.2,type:"tween"}}},Yt={hover:{borderBottomLeftRadius:0,borderBottomRightRadius:0,transition:{delay:.3,duration:.2,type:"tween"}}},Dt={hover:{opacity:1,transition:{delay:.3,duration:.1,type:"tween"}}},Xt=function(){var e=Object(Be.f)(),n=Object(Be.h)(Ve),t=Object(sn.a)().scrollY,i=Object(Ne.useQuery)(["movies","nowPlaying"],en),r=i.data,c=i.isLoading,a=Object(Ne.useQuery)(["movies","topRated"],nn),o=a.data,s=a.isLoading,d=Object(Ne.useQuery)(["movies",null===n||void 0===n?void 0:n.params.movieId],Object(Je.a)(Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n&&tn(null===n||void 0===n?void 0:n.params.movieId));case 1:case"end":return e.stop()}}),e)}))),{enabled:!1,refetchOnWindowFocus:!1}),l=d.data,b=d.isLoading,j=d.refetch;Object(Le.useEffect)((function(){(null===n||void 0===n?void 0:n.params.movieId)&&j()}),[null===n||void 0===n?void 0:n.params.movieId,j]);var h=Object(Le.useState)(0),u=Object(Xe.a)(h,2),m=u[0],p=u[1],g=Object(Le.useState)(0),v=Object(Xe.a)(g,2),O=v[0],f=v[1],x=Object(Le.useState)(!1),w=Object(Xe.a)(x,2),y=w[0],k=w[1],_=Object(Le.useState)(!1),z=Object(Xe.a)(_,2),I=z[0],R=z[1],C=Object(Ke.d)(jn),L=function(){return k((function(e){return!e}))},S=function(n){e.push("/movies/".concat(n)),setTimeout((function(){return C(!0)}),500)};return Object(hn.jsx)(vt,{children:c&&s?Object(hn.jsx)(Ot,{children:"Loading..."}):Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsxs)(ft,{bgPhoto:ln((null===r||void 0===r?void 0:r.results[0].backdrop_path)||""),children:[Object(hn.jsx)(xt,{children:null===r||void 0===r?void 0:r.results[0].title}),Object(hn.jsx)(wt,{children:null===r||void 0===r?void 0:r.results[0].overview})]}),Object(hn.jsxs)(yt,{children:[Object(hn.jsx)(kt,{children:"\uc0c1\uc601 \uc911\uc778 \uc601\ud654"}),Object(hn.jsx)(dn.a,{onExitComplete:L,initial:!1,children:Object(hn.jsx)(zt,{custom:I,variants:Tt,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===r||void 0===r?void 0:r.results.slice(1).slice(6*m,6*m+6).map((function(e){return Object(hn.jsxs)(It,{layoutId:e.id+"",variants:Vt,whileHover:"hover",initial:"normal",transition:{type:"tween"},onClick:function(){return S(e.id)},children:[Object(hn.jsx)(Rt,{variants:Yt,src:ln(e.backdrop_path,"w500")}),Object(hn.jsxs)(Ct,{variants:Dt,children:[Object(hn.jsx)(Pt,{children:e.title}),Object(hn.jsxs)(Qt,{children:[Object(hn.jsx)(bn.a,{icon:["fas","star"],size:"xs",color:"orange"}),Object(hn.jsx)("div",{children:e.vote_average})]})]})]},e.id)}))},m)}),Object(hn.jsx)(_t,{whileHover:{opacity:1},onClick:function(){if(r){if(y)return;R(!1),L();var e=r.results.length-1,n=Math.floor(e/6)-1;p((function(e){return e===n?0:e+1}))}},children:Object(hn.jsx)(bn.a,{icon:["fas","chevron-right"],size:"2x"})})]}),Object(hn.jsxs)(yt,{children:[Object(hn.jsx)(kt,{children:"\ud3c9\uc810 \ub192\uc740 \uc21c"}),Object(hn.jsx)(dn.a,{onExitComplete:L,initial:!1,children:Object(hn.jsx)(zt,{custom:I,variants:Tt,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===o||void 0===o?void 0:o.results.slice(6*O,6*O+6).map((function(e){return Object(hn.jsxs)(It,{layoutId:e.id+"",variants:Vt,whileHover:"hover",initial:"normal",transition:{type:"tween"},onClick:function(){return S(e.id)},children:[Object(hn.jsx)(Rt,{variants:Yt,src:e.backdrop_path?ln(e.backdrop_path,"w500"):an}),Object(hn.jsxs)(Ct,{variants:Dt,children:[Object(hn.jsx)(Pt,{children:e.title}),Object(hn.jsxs)(Qt,{children:[Object(hn.jsx)(bn.a,{icon:["fas","star"],size:"xs",color:"orange"}),Object(hn.jsx)("div",{children:e.vote_average})]})]})]},e.id)}))},O)}),Object(hn.jsx)(_t,{whileHover:{opacity:1},onClick:function(){if(o){if(y)return;R(!1),L();var e=o.results.length-1,n=Math.floor(e/6)-1;f((function(e){return e===n?0:e+1}))}},children:Object(hn.jsx)(bn.a,{icon:["fas","chevron-right"],size:"2x"})})]}),Object(hn.jsx)(dn.a,{children:b?Object(hn.jsx)(Ot,{children:"Loading..."}):n&&Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsx)(Lt,{onClick:function(){e.push(Pe),C(!1)},animate:{opacity:1},exit:{opacity:0}}),Object(hn.jsx)(St,{style:{top:t.get()+50},layoutId:n.params.movieId,children:l&&Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsx)(Ht,{style:{backgroundImage:"linear-gradient(transparent, black), url(".concat(l.backdrop_path?ln(l.backdrop_path):an,")")}}),Object(hn.jsxs)(Ft,{children:[Object(hn.jsxs)(Kt,{children:[Object(hn.jsx)(Wt,{children:l.title}),Object(hn.jsx)(Mt,{children:l.tagline})]}),Object(hn.jsxs)(Bt,{tagline:Boolean(l.tagline),children:[Object(hn.jsx)(qt,{style:{backgroundImage:"url(".concat(ln(l.poster_path),")")}}),Object(hn.jsxs)(Et,{children:[Object(hn.jsx)("div",{children:l.overview}),Object(hn.jsx)("a",{href:"".concat(l.homepage),target:"_blank",rel:"noreferrer",children:l.homepage}),Object(hn.jsxs)("div",{children:["\uc7a5\ub974 :"," ",l.genres.map((function(e){return Object(hn.jsxs)("span",{children:[e.name," "]})}))]}),Object(hn.jsxs)("div",{children:["\uac1c\ubd09 \uc77c\uc790 : ",l.release_date]}),Object(hn.jsxs)("div",{children:["\uc0c1\uc601 \uc2dc\uac04 : ",l.runtime," \ubd84"]}),Object(hn.jsxs)("div",{children:["\uac1c\ubd09 \uc5ec\ubd80 : ",l.status]})]})]})]})]})})]})})]})})},At=t(13),Gt=t(93),Jt=t(138),Ut=Object(We.c)(on.a.nav)(xe||(xe=Object(Ue.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  font-size: 1rem;\n  padding: 1.5rem 4rem;\n  color: white;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));\n"]))),Nt=We.c.div(we||(we=Object(Ue.a)(["\n  display: flex;\n  align-items: center;\n"]))),Zt=Object(We.c)(on.a.svg)(ye||(ye=Object(Ue.a)(["\n  margin-right: 3rem;\n  width: 5.7rem;\n  height: 1.6rem;\n  fill: ",";\n  path {\n    stroke-width: 0.5rem;\n    stroke: white;\n  }\n"])),(function(e){return e.theme.red})),$t=We.c.ul(ke||(ke=Object(Ue.a)(["\n  display: flex;\n  align-items: center;\n"]))),ei=We.c.li(_e||(_e=Object(Ue.a)(["\n  margin-right: 20px;\n  color: ",";\n  transition: color 0.3s ease-in-out;\n  position: relative;\n  &:hover {\n    color: ",";\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])),(function(e){return e.theme.white.darker}),(function(e){return e.theme.white.lighter})),ni=We.c.form(ze||(ze=Object(Ue.a)(["\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  svg {\n    height: 25px;\n  }\n"]))),ti=Object(We.c)(on.a.span)(Ie||(Ie=Object(Ue.a)(["\n  position: absolute;\n  width: 0.4rem;\n  height: 0.4rem;\n  border-radius: 50%;\n  bottom: -0.8rem;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: ",";\n"])),(function(e){return e.theme.red})),ii=Object(We.c)(on.a.input)(Re||(Re=Object(Ue.a)(["\n  transform-origin: right center;\n  width: 16.5rem;\n  position: absolute;\n  right: 0;\n  padding: 0.7rem 1rem;\n  padding-left: 3rem;\n  z-index: -1;\n  color: white;\n  background-color: transparent;\n  border: 1px solid ",";\n  outline: none;\n  background-color: black;\n"])),(function(e){return e.theme.white.lighter})),ri={normal:{fill:"rgba(255, 255, 255, 0)"},active:{fill:"rgb(229, 16, 19)",pathLength:[0,1,0]}},ci={top:{backgroundColor:"rgba(0,0,0,0)"},scroll:{backgroundColor:"rgba(0,0,0,1)"}},ai=function(){var e=Object(Le.useState)(!1),n=Object(Xe.a)(e,2),t=n[0],i=n[1],r=Object(Be.h)(Pe),c=Object(Be.h)(Qe),a=Object(Jt.a)(),o=Object(Jt.a)(),s=Object(sn.a)().scrollY,d=Object(Gt.a)(),l=d.register,b=d.setValue,j=(d.formState,d.handleSubmit),h=d.setFocus;Object(Le.useEffect)((function(){s.onChange((function(){s.get()>80?o.start("scroll"):o.start("top")}))}),[s,o]);var u=Object(Be.f)();return Object(hn.jsxs)(Ut,{variants:ci,animate:o,initial:"top",children:[Object(hn.jsxs)(Nt,{children:[Object(hn.jsx)(Me.b,{to:Pe,children:Object(hn.jsx)(Zt,{xmlns:"http://www.w3.org/2000/svg",width:"1024",height:"276.742",viewBox:"0 0 1024 276.742",children:Object(hn.jsx)(on.a.path,{variants:ri,initial:"normal",animate:"active",transition:{default:{duration:3},fill:{duration:1,delay:.5}},d:"M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"})})}),Object(hn.jsxs)($t,{children:[Object(hn.jsx)(ei,{children:Object(hn.jsx)(dn.a,{children:Object(hn.jsxs)(Me.b,{to:Pe,children:["Home ",(null===r||void 0===r?void 0:r.isExact)&&Object(hn.jsx)(ti,{layoutId:"circle"})]})})}),Object(hn.jsx)(ei,{children:Object(hn.jsx)(dn.a,{children:Object(hn.jsxs)(Me.b,{to:Qe,children:["TV Shows ",c&&Object(hn.jsx)(ti,{layoutId:"circle"})]})})})]})]}),Object(hn.jsx)(Nt,{children:Object(hn.jsxs)(ni,{onSubmit:j((function(e){var n=e.keyword;u.push("/search?keyword=".concat(n)),b("keyword","")})),children:[Object(hn.jsx)(on.a.svg,{onClick:function(){t?a.start({scaleX:0}):a.start({scaleX:1}),i((function(e){return!e})),h("keyword")},animate:{x:t?-225:0},transition:{type:"linear"},fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(hn.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),Object(hn.jsx)(ii,Object(At.a)(Object(At.a)({},l("keyword",{required:"\uac80\uc0c9\uc5b4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4",minLength:{value:2,message:"\ub450 \uae00\uc790 \uc774\uc0c1 \uc785\ub825\ud558\uc138\uc694"}})),{},{animate:a,initial:{scaleX:0},transition:{type:"linear"},placeholder:"\uc601\ud654 \ub610\ub294 TV \ud504\ub85c\uadf8\ub7a8\uc744 \uac80\uc0c9\ud558\uc138\uc694"}))]})})]})},oi=Object(We.b)(Ce||(Ce=Object(Ue.a)(["\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Poor Story', 'Source Sans Pro', sans-serif;\n  color:",";\n  line-height: 1.2;\n  background-color: black;\n  overflow: ",";\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.white.darker}),(function(e){return e.detail?"hidden":"auto"}));qe.b.add(Ee.a);var si=function(){var e=Object(Ke.c)(jn);return Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsx)(oi,{detail:e}),Object(hn.jsxs)(Me.a,{children:[Object(hn.jsx)(ai,{}),Object(hn.jsxs)(Be.c,{children:[Object(hn.jsx)(Be.a,{path:[Qe,Ye],children:Object(hn.jsx)(Tn,{})}),Object(hn.jsx)(Be.a,{path:[Te,De],children:Object(hn.jsx)(gt,{})}),Object(hn.jsx)(Be.a,{path:[Pe,Ve],children:Object(hn.jsx)(Xt,{})})]})]})]})},di=new Ne.QueryClient;Fe.a.render(Object(hn.jsx)(Se.a.StrictMode,{children:Object(hn.jsx)(Ke.a,{children:Object(hn.jsx)(Ne.QueryClientProvider,{client:di,children:Object(hn.jsx)(We.a,{theme:{red:"#E51013",black:{veryDark:"#141414",darker:"#181818",lighter:"#2f2f2f"},white:{lighter:"#fff",darker:"#e5e5e5"}},children:Object(hn.jsx)(si,{})})})})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.55ddafc6.chunk.js.map