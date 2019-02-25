let dau=1
let pos=1
let b1=""
let b2=""
function ac() {
    dau=1
    pos=1
    b1=""
    b2=""
    hienthi.value=""
}
function a0() {
    if(pos==1)  b1=b1+"0"
    else  b2=b2+"0"
    hienthi.value=hienthi.value+"0"
}
function a1() {
    if(pos==1)  b1=b1+"1"
     else b2=b2+"1"
    hienthi.value=hienthi.value+"1"
}
function a2() {
    if(pos==1)  b1=b1+"2"
    else b2=b2+"2"
    hienthi.value=hienthi.value+"2"
}
function a3() {
    if(pos==1) b1=b1+"3"
    else  b2=b2+"3"
    hienthi.value=hienthi.value+"3"
}
function a4() {
    if(pos==1) b1=b1+"4"
    else  b2=b2+"4"
    hienthi.value=hienthi.value+"4"
}
function a5() {
    if(pos==1)  b1=b1+"5"
    else  b2=b2+"5"
    hienthi.value=hienthi.value+"5"
}
function a6() {
    if(pos==1) b1=b1+"6"
    else b2=b2+"6"
    hienthi.value=hienthi.value+"6"
}
function a7() {
    if(pos==1) b1=b1+"7"
    else b2=b2+"7"
    hienthi.value=hienthi.value+"7"
}
function a8() {
    if(pos==1) b1=b1+"8"
    else b2=b2+"8"
    hienthi.value=hienthi.value+"8"
}
function a9() {
    if(pos==1) b1=b1+"9"
    else b2=b2+"9"
    hienthi.value=hienthi.value+"9"
}
function cong() {
    pos=2;
    dau=1;
    hienthi.value=hienthi.value+"+"
}
function tru() {
    pos=2;
    dau=2;
    hienthi.value=hienthi.value+"-"
}
function nhan() {
    pos=2;
    dau=3;
    hienthi.value=hienthi.value+"x"
}
function chia() {
    pos=2;
    dau=4;
    hienthi.value=hienthi.value+"/"
}
function bang() {
    if(dau==1) {hienthi.value=parseFloat(b1)+parseFloat(b2);b1=parseFloat(b1)+parseFloat(b2);pos=1;dau=1;b2=""}
    else if (dau==2) {hienthi.value=parseFloat(b1)-parseFloat(b2);b1=parseFloat(b1)-parseFloat(b2);pos=1;dau=1;b2=""}
    else if (dau==3) {hienthi.value=parseFloat(b1)*parseFloat(b2);b1=parseFloat(b1)*parseFloat(b2);pos=1;dau=1;b2=""}
    else if (dau==4) {hienthi.value=parseFloat(b1)/parseFloat(b2);b1=parseFloat(b1)/parseFloat(b2);pos=1;dau=1;b2=""}
    }