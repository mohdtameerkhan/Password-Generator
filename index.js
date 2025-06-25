let btn = document.querySelector('button')
let textarea = document.querySelector('#randompas')
let copy = document.querySelector('#copysec')





let caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alpha = 'abcdefghiklmnopqrstuvwxyz';
let numb = '1234567890';
let sym = '!@#$%^&*?/[]()'
let allcarac = caps + alpha + numb + sym;

length = 8
btn.addEventListener('click',passGene)

function passGene(){
  let pass = ''
  pass += caps[Math.floor(Math.random()*caps.length)]
  pass += alpha[Math.floor(Math.random()*alpha.length)]
  pass += numb[Math.floor(Math.random()*numb.length)]
  pass += sym[Math.floor(Math.random()*sym.length)]

  while(length > pass.length)
    {
      pass += allcarac[Math.floor(Math.random()*allcarac.length)]
    }
    
    textarea.value = pass
  
}

copy.addEventListener('click',()=>
  {
    textarea.select();
    
  }
)



  
