let harc=document.getElementById("harc");
let answer= document.getElementsByClassName("answer");
let slaq=document.getElementById("slaq");
let end=document.getElementById("end");
let harcer=new Array();
let start=document.getElementById("start");
let body=document.getElementById("all");
let ardyunq=document.getElementById("ardyunq");
let shahum=document.getElementsByClassName("shahum");
let andzernamxeli=document.getElementsByClassName("andzernamxeli");
let vercnel=document.getElementById("vercnel");
let sector=document.getElementById("gumar");

let hamarakalum= new Array();
for(let i=0;i<4;i++){
  hamarakalum[i]=answer[i].innerHTML;
}
let gumar=0;

// in the harcer Map the correct answer in the value will be in first element
let harc1 = new Map();
let harc2 = new Map();
let harc3 =new Map();
let harc4=new Map();
let harc5=new Map();
let harc6=new Map();
let harc7=new Map();
let harc8=new Map();
let harc9=new Map();
let harc10=new Map();
let harc11=new Map();
let harc12=new Map();
let harc13=new Map();
let harc14=new Map();
let harc15=new Map();
let harc16=new Map();
let harc17=new Map();
let harc18=new Map();
let harc19=new Map();
let harc20=new Map();
harc1.set( "5*5=",[25,18,0,12]);
harc2.set("16+32=",[48,52,63,55]);
harc3.set("9*6=",[54,36,45,72]);
harc4.set("72/8=",[9,7,6,5]);
harc5.set("32+48=",[80,99,23,15]);
harc6.set("115-32=",[83,65,72,98]);
harc7.set("Hayastani Mayraqaxaq@",["Yerevan","Gyumri","Alaverdi","Kapan"]);
harc8.set("Amenaerkar get@",["Nexos","Amazon","Kongo","Araqs"]);
harc9.set("qani amsva mej ka 30 ev avel or",[11,6,5,12]);
harc10.set("Vor azgn e arajin@ @ndunel Qritoneutyun@",["Hayer@","Huyner@","Hromeaciq","Babelonaciq"]);
harc11.set("Ashxarhum A tarov sksvox qani mayrcamaq ka",[5,4,3,2]);
harc12.set("Qani or uni nahanj tarin",[366,365,360,364]);
harc13.set("Qani erajisht ka kvintetum",[5,4,3,6]);
harc14.set("Qani qarakusi uni shaxmati taxtak@",[64,65,66,62]);
harc15.set("Qani achq uni sovorakan chanch@",[5,4,6,8]);
harc16.set("Qani votq uni xxunj@",[1,2,4,8]);
harc17.set("Vor jermatichanum e erum jur@ @st celsiusi",[100,110,120,95]);
harc18.set("Yerknayin marmin vorn amenamotn e gtnvum Erkragndin",["Lusin","Erknaqar","asup","arev"]);
harc19.set("Mendeleevi axyusakum inchpes e nshvum arcat@",["Ag","Au","Fe","H"])
harc20.set("Jri banadzev@",["H2O","H2SO4","H2O2","HCl"]);
harcer.push(harc1,harc2,harc3,harc4,harc5,harc6,harc7,harc8,harc9,harc10,harc11,harc12,harc13,harc14,harc15,harc16,harc17,harc18,harc19,harc20);
// console.log(harcer);


function avart(){
body.style.display="none";
sector.style.display="none";
vercnel.style.display="none";
ardyunq.style.display="flex";
ardyunq.innerHTML+= gumar+" dram";
}

function answer0(){
  for (let i=0;i<4;i++){
    answer[i].innerHTML=hamarakalum[i];
    answer[i].style.backgroundColor="aquamarine";
  }
}

function xarnel(array){
  let i=0;
  let xararr=new Array();
  let rand=new Set();
  let n=array.length;
  while(rand.size<n){
    for (let j=0;j<n;j++){
    let random=Math.floor( Math.random()*n);
      rand.add(random);
  }
}
rand.forEach(element => {
  xararr[i]=array[element];
  i++;
});
return xararr;
}


 function printanswers(array){
  let xarans=xarnel(array);
  for(let i=0;i<4;i++){
    answer[i].innerHTML+=xarans[i];
  }
}


function printquest(quest){
  harc.innerHTML=quest;
}

function millionare(map){
  map.forEach((value,key,map) => {
    printquest(key);
    printanswers(value);
  });
}
// }
// millionare(harc1);

function check(key,patasxan,simbol){
  for(let i=0;i<harcer.length;i++){
    if(harcer[i].has(key)){
    if(simbol+harcer[i].get(key)[0]==patasxan){
      return true;
    }
    else{
      return false;
    }
    
  }
  }
}
// console.log(check("5*5=",20));

let harcashar=xarnel(harcer);
let qayl=0;
let corrects=0;
let anschecker=false;
let trans=-46;
let late="translatey("+trans+"px)";
let gumarjam=0;
start.onclick=function(){
  start.style.display="none";
  body.style.display="flex";
  sector.style.display="flex";
  millionare(harcashar[0]);
}
// for (qayl<10){
for(let i=0;i<4;i++){
  answer[i].onclick=function(){
    if(!anschecker){
    anschecker=true;
    slaq.style.backgroundColor="green";
    if(check(harc.innerHTML,answer[i].innerHTML,hamarakalum[i])){
      for(let j=0;j<3;j++){
      if(shahum[9-qayl].innerHTML==andzernamxeli[j].innerHTML){
      gumar=andzernamxeli[j].innerHTML.slice(2);
      console.log(gumar);
      }
    }
    gumarjam=shahum[9-qayl].innerHTML.slice(2);
      answer[i].style.backgroundColor="green";
      corrects++;
      shahum[9-qayl].style.backgroundColor="green";
      for(let i=0;i<3;i++){
          if (shahum[9-qayl].innerHTML==andzernamxeli[i].innerHTML){
            shahum[9-qayl].style.backgroundColor="darkgreen";
          }
        }
        if(qayl==3){
          
          vercnel.style.opacity="1";
          vercnel.style.backgroundColor="green";
        }
      if(qayl>3){
        
        vercnel.style.transform=late;
        vercnel.style.backgroundColor="green";
        trans-=46;
        late="translatey("+trans+"px)";
      }
    }
    else{
      avart();
      answer[i].style.backgroundColor="red";
      shahum[9-qayl].style.backgroundColor="red";
      if(qayl>3){
        vercnel.style.transform=late;
        trans-=46;
        late="translatey("+trans+"px)";
        vercnel.style.backgroundColor="red";
      }
    }
  }
}
}
// while(qayl<9){
slaq.onclick=function(){
  if(anschecker){
qayl++;
answer0();
millionare(harcashar[qayl]);
if(qayl==9){
  slaq.style.display="none";
  end.style.backgroundColor="green";
  }
 
  anschecker=false;
slaq.style.backgroundColor="cadetblue";
}

 }



// }

end.onclick=function(){
if(qayl==9 && anschecker){
  body.style.display="none";
  ardyunq.style.display="flex";
  ardyunq.innerHTML+=corrects;
 }
}

vercnel.onclick=function(){
  gumar=gumarjam;
  avart();
}




