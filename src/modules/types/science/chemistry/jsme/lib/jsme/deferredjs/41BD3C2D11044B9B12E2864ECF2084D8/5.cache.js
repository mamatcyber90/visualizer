$wnd.jsme.runAsyncCallback5('r(212,200,{});function XO(){XO=s;YO=new $o("dragend",new ZO)}function $O(a){a.a.cancelBubble=!0;cn(a.a)}function ZO(){}r(213,212,{},ZO);_.Rc=function(){$O(this)};_.Uc=function(){return YO};var YO;function aP(){aP=s;bP=new $o("dragenter",new cP)}function cP(){}r(214,212,{},cP);_.Rc=function(){$O(this)};_.Uc=function(){return bP};var bP;function dP(){dP=s;eP=new $o("dragover",new fP)}function fP(){}r(215,212,{},fP);_.Rc=function(){$O(this)};_.Uc=function(){return eP};var eP;\nfunction gP(){gP=s;hP=new $o("drop",new iP)}function iP(){}r(216,212,{},iP);_.Rc=function(a){var b,c,d,e;this.a.cancelBubble=!0;cn(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;jP(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(vg),a.a.b.a.a.f.pb[Qg]=null!=b?b:l)};_.Uc=function(){return hP};var hP;function kP(a,b,c){zq(!a.mb?a.mb=new Oq(a):a.mb,c,b)}\nfunction lP(){this.pb=Zm("file");this.pb[id]="gwt-FileUpload"}r(332,313,Fh,lP);_.ld=function(a){Jt(this,a)};function mP(a){var b=bn(Gd);AH(kg,zH(b));this.pb=b;this.b=new fJ(this.pb);this.pb[id]="gwt-HTML";eJ(this.b,a,!0);nJ(this)}r(336,337,Fh,mP);function nP(){iw();var a=bn("textarea");!ks&&(ks=new js);!is&&(is=new hs);this.pb=a;this.pb[id]="gwt-TextArea"}r(376,377,Fh,nP);\nfunction oP(a,b){var c,d;c=bn(Lg);d=bn(ug);d[Dc]=a.a.a;d.style[Rg]=a.b.a;var e=(ms(),ns(d));c.appendChild(e);ls(a.d,c);Vt(a,b,d)}function pP(){Pu.call(this);this.a=(Su(),Zu);this.b=($u(),cv);this.e[Yc]=Za;this.e[Xc]=Za}r(385,329,Ph,pP);_.Gd=function(a){var b;b=an(a.pb);(a=Zt(this,a))&&this.d.removeChild(an(b));return a};\nfunction qP(a){try{a.w=!1;var b,c,d;d=a.hb;c=a.ab;d||(a.pb.style[Sg]=ke,a.ab=!1,a.Td());b=a.pb;b.style[te]=0+(ao(),yf);b.style[Cg]=$a;PK(a,Vi(Dn($doc)+(Cn()-Wm(a.pb,kf)>>1),0),Vi(En($doc)+(Bn()-Wm(a.pb,jf)>>1),0));d||((a.ab=c)?(a.pb.style[md]=Qf,a.pb.style[Sg]=Tg,wi(a.gb,200)):a.pb.style[Sg]=Tg)}finally{a.w=!0}}function rP(a){a.i=(new aK(a.j)).nc.Ie();Ft(a.i,new sP(a),(fp(),fp(),gp));a.d=F(vw,q,39,[a.i])}\nfunction wP(){jL();var a,b,c,d,e;GL.call(this,(YL(),ZL),null,!0);this.Cg();this.db=!0;a=new mP(this.k);this.f=new nP;this.f.pb.style[Wg]=bb;tt(this.f,bb);this.Ag();aL(this,"400px");e=new pP;e.pb.style[je]=bb;e.e[Yc]=10;c=(Su(),Tu);e.a=c;oP(e,a);oP(e,this.f);this.e=new gv;this.e.e[Yc]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],dv(this.e,a);oP(e,this.e);oL(this,e);jK(this,!1);this.Bg()}r(632,633,AG,wP);_.Ag=function(){rP(this)};\n_.Bg=function(){var a=this.f;a.pb.readOnly=!0;var b=wt(a.pb)+"-readonly";st(a.td(),b,!0)};_.Cg=function(){iK(this.I.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i=null;_.j="Close";_.k="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function sP(a){this.a=a}r(635,1,{},sP);_.Xc=function(){qL(this.a,!1)};_.a=null;function xP(a){this.a=a}r(636,1,{},xP);\n_.Dc=function(){Bt(this.a.f.pb,!0);Av(this.a.f.pb);var a=this.a.f,b;b=Xm(a.pb,Qg).length;if(0<b&&a.kb){if(0>b)throw new ND("Length must be a positive integer. Length: "+b);if(b>Xm(a.pb,Qg).length)throw new ND("From Index: 0  To Index: "+b+"  Text Length: "+Xm(a.pb,Qg).length);var a=a.pb,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function yP(a){rP(a);a.a=(new aK(a.b)).nc.Ie();Ft(a.a,new zP(a),(fp(),fp(),gp));a.d=F(vw,q,39,[a.a,a.i])}function AP(a){a.j="Cancel";a.k="Paste the text to import into the text area below.";a.b="Accept";iK(a.I.b,"Paste")}function BP(a){jL();wP.call(this);this.c=a}r(638,632,AG,BP);_.Ag=function(){yP(this)};_.Bg=function(){tt(this.f,"150px")};_.Cg=function(){AP(this)};_.Td=function(){FL(this);Lm((Im(),Jm),new CP(this))};_.a=null;_.b=null;_.c=null;\nfunction DP(a){jL();BP.call(this,a)}r(637,638,AG,DP);_.Ag=function(){var a;yP(this);a=new lP;Ft(a,new EP(this),(NH(),NH(),OH));this.d=F(vw,q,39,[this.a,a,this.i])};_.Bg=function(){tt(this.f,"150px");var a=new FP(this),b=this.f;kP(b,new GP,(aP(),aP(),bP));kP(b,new HP,(XO(),XO(),YO));kP(b,new IP,(dP(),dP(),eP));kP(b,new JP(a),(gP(),gP(),hP))};_.Cg=function(){AP(this);this.k+=" Or drag and drop a file on it."};function EP(a){this.a=a}r(639,1,{},EP);\n_.Wc=function(a){var b,c;b=new FileReader;a=(c=a.a.srcElement,c.files[0]);KP(b,new LP(this));b.readAsText(a)};_.a=null;function LP(a){this.a=a}r(640,1,{},LP);_.Dg=function(a){gz();hw(this.a.a.f,a)};_.a=null;r(643,1,{});r(642,643,{});_.b=null;_.c=1;_.d=-1;function FP(a){this.a=a;this.b=new MP(this);this.c=this.d=1}r(641,642,{},FP);_.a=null;function MP(a){this.a=a}r(644,1,{},MP);_.Dg=function(a){this.a.a.f.pb[Qg]=null!=a?a:l};_.a=null;function zP(a){this.a=a}r(648,1,{},zP);\n_.Xc=function(){if(this.a.c){var a=this.a.c,b;b=new dz(a.a,0,Xm(this.a.f.pb,Qg));CC(a.a.a,b.a)}qL(this.a,!1)};_.a=null;function CP(a){this.a=a}r(649,1,{},CP);_.Dc=function(){Bt(this.a.f.pb,!0);Av(this.a.f.pb)};_.a=null;r(650,1,xh);_.Oc=function(){var a,b;a=new NP(this.a);void 0!=$wnd.FileReader?b=new DP(a):b=new BP(a);cL(b);qP(b)};function NP(a){this.a=a}r(651,1,{},NP);_.a=null;r(652,1,xh);\n_.Oc=function(){var a;a=new wP;var b=this.a,c;hw(a.f,b);b=(c=RD(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);tt(a.f,20*(10>b?b:10)+yf);Lm((Im(),Jm),new xP(a));cL(a);qP(a)};function KP(a,b){a.onload=function(a){b.Dg(a.target.result)}}function jP(a,b){a.onloadend=function(a){b.Dg(a.target.result)}}function JP(a){this.a=a}r(657,1,{},JP);_.a=null;function GP(){}r(658,1,{},GP);function HP(){}r(659,1,{},HP);function IP(){}r(660,1,{},IP);X(643);X(642);X(657);X(658);X(659);X(660);X(212);X(214);X(213);X(215);X(216);X(632);\nX(638);X(637);X(651);X(635);X(636);X(648);X(649);X(639);X(640);X(641);X(644);X(336);X(385);X(376);X(332);x(tG)(5);\n//@ sourceURL=5.js\n')
