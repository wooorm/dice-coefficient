var u=m(2),b=m(3);function m(e){if(typeof e!="number"||Number.isNaN(e)||e<1||e===Number.POSITIVE_INFINITY)throw new Error("`"+e+"` is not a valid argument for `n-gram`");return o;function o(t){var n=[],r,i;if(t==null||(i=t.slice?t:String(t),r=i.length-e+1,r<1))return n;for(;r--;)n[r]=i.slice(r,r+e);return n}}function p(e,o){for(var t=String(e).toLowerCase(),n=String(o).toLowerCase(),r=t.length===1?[t]:u(t),i=n.length===1?[n]:u(n),c=-1,l=0,g,v,a;++c<r.length;)for(g=r[c],a=-1;++a<i.length;)if(v=i[a],g===v){l++,i[a]="";break}return 2*l/(r.length+i.length)}var s=document.querySelectorAll("input"),d=s[0],h=s[1],w=document.querySelector("output");d.addEventListener("input",f);h.addEventListener("input",f);f();function f(){w.textContent=p(d.value,h.value)}