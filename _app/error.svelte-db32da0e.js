import{S as w,i as y,s as z,e as d,t as v,c as E,a as b,h as R,d as m,g as n,R as P,j,k as N,l as q,m as S,L as C}from"./chunks/vendor-6d995ebd.js";function H(r){let l,t=r[1].frame+"",a;return{c(){l=d("pre"),a=v(t)},l(f){l=E(f,"PRE",{});var s=b(l);a=R(s,t),s.forEach(m)},m(f,s){n(f,l,s),P(l,a)},p(f,s){s&2&&t!==(t=f[1].frame+"")&&j(a,t)},d(f){f&&m(l)}}}function L(r){let l,t=r[1].stack+"",a;return{c(){l=d("pre"),a=v(t)},l(f){l=E(f,"PRE",{});var s=b(l);a=R(s,t),s.forEach(m)},m(f,s){n(f,l,s),P(l,a)},p(f,s){s&2&&t!==(t=f[1].stack+"")&&j(a,t)},d(f){f&&m(l)}}}function A(r){let l,t,a,f,s=r[1].message+"",c,k,u,p,i=r[1].frame&&H(r),o=r[1].stack&&L(r);return{c(){l=d("h1"),t=v(r[0]),a=N(),f=d("pre"),c=v(s),k=N(),i&&i.c(),u=N(),o&&o.c(),p=q()},l(e){l=E(e,"H1",{});var _=b(l);t=R(_,r[0]),_.forEach(m),a=S(e),f=E(e,"PRE",{});var h=b(f);c=R(h,s),h.forEach(m),k=S(e),i&&i.l(e),u=S(e),o&&o.l(e),p=q()},m(e,_){n(e,l,_),P(l,t),n(e,a,_),n(e,f,_),P(f,c),n(e,k,_),i&&i.m(e,_),n(e,u,_),o&&o.m(e,_),n(e,p,_)},p(e,[_]){_&1&&j(t,e[0]),_&2&&s!==(s=e[1].message+"")&&j(c,s),e[1].frame?i?i.p(e,_):(i=H(e),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=L(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:C,o:C,d(e){e&&m(l),e&&m(a),e&&m(f),e&&m(k),i&&i.d(e),e&&m(u),o&&o.d(e),e&&m(p)}}}function F({error:r,status:l}){return{props:{error:r,status:l}}}function B(r,l,t){let{status:a}=l,{error:f}=l;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,f=s.error)},[a,f]}class G extends w{constructor(l){super();y(this,l,B,A,z,{status:0,error:1})}}export{G as default,F as load};
