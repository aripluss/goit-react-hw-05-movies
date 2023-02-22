"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[693],{7693:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n,a=r(5861),u=r(9439),c=r(7757),i=r.n(c),s=r(2791),o=r(7689),p=r(5218),f=r(2690),d=r(1308),l=r(168),v=r(6444).ZP.ul(n||(n=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  & .review__card {\n    padding: 20px;\n    border: 1px solid #ffde59;\n    border-radius: 10px;\n  }\n"]))),h=r(184),m=function(){var e=(0,s.useState)([]),t=(0,u.Z)(e,2),r=t[0],n=t[1],c=(0,s.useState)(!1),l=(0,u.Z)(c,2),m=l[0],x=l[1],_=(0,s.useState)(null),g=(0,u.Z)(_,2),w=g[0],Z=g[1],b=(0,o.UO)().movieId;return(0,s.useEffect)((function(){(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,f.tx)(b);case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z(e.t0.message);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[b]),(0,s.useEffect)((function(){w&&(p.Am.error(w),Z(null))}),[w]),(0,h.jsxs)(h.Fragment,{children:[m&&(0,h.jsx)(d.aN,{}),!m&&!w&&!r.length&&(0,h.jsx)("p",{style:{textAlign:"center"},children:"No reviews yet"}),Boolean(r.length)&&(0,h.jsx)(v,{children:r.map((function(e){var t=e.author,r=e.content;return(0,h.jsxs)("li",{className:"review__card",children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("b",{children:"Author:"})," ",t]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("b",{children:"Content:"})," ",r]})]},t)}))}),(0,h.jsx)(p.x7,{})]})}},2690:function(e,t,r){r.d(t,{Dw:function(){return p},Hg:function(){return o},TP:function(){return f},tx:function(){return l},zv:function(){return d}});var n=r(5861),a=r(7757),u=r.n(a),c=r(1912),i=r(2679),s="dea82e5d25cc68048d98e1915bc0a2dc";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,n.Z)(u().mark((function e(){var t,r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:s},e.next=3,c.Z.get("/trending/movie/day",{params:t});case 3:return r=e.sent,n=r.data,a=n.results.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return{id:t,title:r,poster_path:v(n)}})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:s,query:t},e.next=3,c.Z.get("/search/movie",{params:r});case 3:return n=e.sent,a=n.data,i=a.results.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return{id:t,title:r,poster_path:v(n)}})),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,i,o,p,f,d,l,h,m,x;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:s},e.next=3,c.Z.get("/movie/".concat(t),{params:r});case 3:return n=e.sent,a=n.data,i=a.poster_path,o=a.title,p=a.tagline,f=a.adult,d=a.release_date,l=a.vote_average,h=a.overview,m=a.genres,x=a.production_countries,e.abrupt("return",{poster_path:v(i),title:o,tagline:p,adult:f,release_date:new Date(d).getFullYear(),vote_average:l.toFixed(1),overview:h,genres:m.map((function(e){return e.name})).join(", "),production_countries:x.map((function(e){return e.name})).join(", ")});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:s},e.next=3,c.Z.get("/movie/".concat(t,"/credits"),{params:r});case 3:return n=e.sent,a=n.data,i=a.cast.map((function(e){var t=e.profile_path,r=e.character,n=e.name;return{profile_path:v(t),character:r,name:n}})),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:s},e.next=3,c.Z.get("/movie/".concat(t,"/reviews"),{params:r});case 3:return n=e.sent,a=n.data,i=a.results.map((function(e){return{author:e.author,content:e.content}})),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){return e?"".concat("https://image.tmdb.org/t/p/original").concat(e):i}},2679:function(e,t,r){e.exports=r.p+"static/media/no-img.799a67e24e90aca44dd7.jpg"}}]);
//# sourceMappingURL=693.e5a465a7.chunk.js.map