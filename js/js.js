/**
 * Created by Administrator on 16-5-29.
 */
var liNode=document.querySelectorAll('#shoes .shoesList li');
var liiNode=document.querySelectorAll('#women .womenList1 li');
var liNode3=document.querySelectorAll('#women .womenList2 li');
var liNode4=document.querySelectorAll('#men .menList1 li');
var liNode5=document.querySelectorAll('#men .menList2 li');
//鼠标移至竖标签时展开
for(var i=0;i<liNode.length;i++)
{
    liNode[i].index=i;
    liNode[i].onmouseenter=function() {
        if (this.className == "current") {
            return;//跳出for循环
        }
        var curPos=this.index;
        var oldPos;
        for(var j=0;j<liNode.length;j++){
            if(liNode[j].className=="current"){
                oldPos=j;
                break;
            }
        }
        liNode[curPos].style.width="798px";
        liNode[curPos].style.marginTop="0px";
        liNode[curPos].className="current";

        liNode[oldPos].style.width="48px";
        liNode[oldPos].style.marginTop="-1px";
        liNode[oldPos].className="";
        console.log(oldPos,curPos);
    }
}

//女鞋阴影效果
for(var i=0; i<liiNode.length;i++){
    liiNode[i].onmouseenter=function(){
        this.querySelector('#women .womenList1 .listHover').style.display="block";
        this.querySelector('#women .womenList1 .linkFav').style.display="block";
    }
    liiNode[i].onmouseleave=function(){
        this.querySelector('#women .womenList1 .listHover').style.display="none";
        this.querySelector('#women .womenList1 .linkFav').style.display="none";
    }
}
//女鞋边框效果
for(var i=0; i<liNode3.length;i++){
    liNode3[i].onmouseenter=function(){
        this.querySelector('#women .womenList2 .linkBorder1').style.display="block";
    }
    liNode3[i].onmouseleave=function(){
        this.querySelector('#women .womenList2 .linkBorder1').style.display="none";
    }
}
//男鞋阴影效果
for(var i=0; i<liNode4.length;i++){
    liNode4[i].onmouseenter=function(){
        this.querySelector('#men .menList1 .listHover').style.display="block";
        this.querySelector('#men .menList1 .linkFav').style.display="block";
    }
    liNode4[i].onmouseleave=function(){
        this.querySelector('#men .menList1 .listHover').style.display="none";
        this.querySelector('#men .menList1 .linkFav').style.display="none";
    }
}
//男鞋边框效果
for(var i=0; i<liNode5.length;i++){
    liNode5[i].onmouseenter=function(){
        this.querySelector('#men .menList2 .linkBorder1').style.display="block";
    }
    liNode5[i].onmouseleave=function(){
        this.querySelector('#men .menList2 .linkBorder1').style.display="none";
    }
}



