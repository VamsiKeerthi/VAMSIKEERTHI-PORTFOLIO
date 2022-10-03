const s=document.querySelector('.span-d')

x=`<h2 class="heading">Hi, I'm Vamsi</h2>
<p class="description">I'm a creative developer from India.</p>
<p class="description">I use HTML, CSS and Javascript to create high-end interactive experiences.</p>
<p class="description">These days my time is spent designing, prototyping, and coding.</p>
<p class="description">Out of the work you'll find me dreaming of photography, playing video games.</p>`

z=`<h1 class="effect1">About</h1>`

s.addEventListener('mouseenter',(e)=>{
    s.innerHTML=x;
    document.querySelector('.container2').style.background='#5463FF';
    document.querySelector('.container5').style.background='#FF207E';
    document.querySelector('.container4').style.background='#FFC900';
})

s.addEventListener('mouseleave',(e)=>{
    s.innerHTML=z;
    document.querySelector('.container2').style.background='#FF207E';
    document.querySelector('.container5').style.background='#FF6600';
    document.querySelector('.container4').style.background='#5463FF';
})

const a=document.querySelector('.span-d1')

y=`
<div class="container11">
    <ul id="projects">
        <a href="https://vamsikeerthi.github.io/Fandom-NFT-Marketplace/" target="_blank"><li class="p11">Fandom, the NFT marketplace</li></a>
    </ul>
</div>`

a.addEventListener('mouseenter',(e)=>{
    a.innerHTML=y;
    document.querySelector('.container7').style.background='#1089FF';
    document.querySelector('.container6').style.background='#FF6600';
    document.querySelector('.container8').style.borderBottomColor='#FF207E';
    document.querySelector('.container9').style.borderBottomColor='#FFC900';
})

q=`<h1 class="effect2">Myprojects</h1>`

a.addEventListener('mouseleave',(e)=>{
    a.innerHTML=q;
    document.querySelector('.container7').style.background='#FFC900';
    document.querySelector('.container6').style.background='#AA14F0';
    document.querySelector('.container8').style.borderBottomColor='#FF6600';
    document.querySelector('.container9').style.borderBottomColor='#1089FF';
})