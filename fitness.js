
/*curser*/
function addAnimation(){

  let page=document.querySelector("#add");
  let curser=document.querySelector("#curser");
  let home=document.querySelector('#home')
  /*curcle animation*/
  page.addEventListener('mouseenter',function(){
  gsap.to(curser,{
    scale:1,
    opacity:1,
  });
  });
  page.addEventListener('mouseleave',function(){
    gsap.to(curser,{
      scale:0,
      opacity:0,
    });
  });
  page.addEventListener('mousemove',function(move){
    gsap.to(curser,{
      left:move.x-70,
      top:move.y-80,
    });
  });

/*scroll top btn*/
  let scrollTop=document.querySelector('.goTop');
  page.addEventListener('mouseenter',function(){
scrollTop.style.opacity='1'
  });

  home.addEventListener('mouseenter',function(){
    scrollTop.style.opacity='0'
      });

}
addAnimation()
/*text coming from buttom to up animation home page*/
function homepageAnimation(){
gsap.from("#home h1 ",{
  y:100,
  opacity:0,
  delay:0.9,
  duration:0.9,
  stagger:0.5,
});
gsap.from(".hero-mini-box p ",{
  y:100,
  opacity:0,
  delay:0.9,
  duration:0.9,
  stagger:0.5,
});
gsap.from(".hero-mini-box i ",{
  y:100,
  opacity:0,
  delay:0.9,
  duration:0.9,
  stagger:0.5,
});
}
homepageAnimation()
/*navbar*/


let nav=document.querySelector('#nav');
let open=document.querySelector('#open');
let close=document.querySelector('#close');

open.addEventListener('click',()=>{
  nav.classList.add('nav-active');
})
close.addEventListener('click',()=>{
  nav.classList.remove('nav-active');
})


