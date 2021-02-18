let cnv,ctx;
let r1=200,r2=200,m1=40,m2=40,a1=Math.PI/2,a2=Math.PI/2,v1=0,v2=0,g=0.98;
let path=[];
document.addEventListener("DOMContentLoaded",()=>{
	var cnv=document.createElement("canvas");
	cnv.width=800;
	cnv.height=600;
	document.body.appendChild(cnv);
	cnv.style.position="absolute";
	cnv.style.top="0px";
	cnv.style.left="0px";
	ctx=cnv.getContext("2d");
	ctx.fillStyle="#bbbbbb";
	ctx.lineWidth=2;
	ctx.lineCap="round";
	requestAnimationFrame(draw);
},false);
function draw(){
	ctx.clearRect(0,0,800,600);
	ctx.translate(400,50);
	let aa1=(-g*(2*m1+m2)*Math.sin(a1)-m2*g*Math.sin(a1-2*a2)-2*Math.sin(a1-a2)*m2*(v2*v2*r2+v1*v1*r1*Math.cos(a1-a2)))/(r1*(2*m1+m2-m2*Math.cos(2*a1-2*a2)));
	let aa2=(2*Math.sin(a1-a2)*(v1*v1*r1*(m1+m2)+g*(m1+m2)*Math.cos(a1)+v2*v2*r2*m2*Math.cos(a1-a2)))/(r2*(2*m1+m2-m2*Math.cos(2*a1-2*a2)));
	let x1=r1*Math.sin(a1);
	let y1=r1*Math.cos(a1);
	let x2=x1+r2*Math.sin(a2);
	let y2=y1+r2*Math.cos(a2);
	path.push([x2,y2])
	ctx.strokeStyle="#a8a8e3";
	ctx.beginPath();
	path.forEach((e,i)=>{
		if (i==0){
			ctx.moveTo(e[0],e[1]);
		}
		else{
			ctx.lineTo(e[0],e[1]);
		}
	});
	ctx.stroke();
	ctx.strokeStyle="#232323";
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(x1,y1,m1/2,0,Math.PI*2,false);
	ctx.arc(x2,y2,m2/2,0,Math.PI*2,false);
	ctx.fill();
	v1+=aa1;
	v2+=aa2;
	a1+=v1;
	a2+=v2;
	v1*=0.999;
	v2*=0.999;
	ctx.translate(-400,-50);
	requestAnimationFrame(draw);
}
