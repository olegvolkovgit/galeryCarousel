var btn_prev = document.querySelector('#galery, .buttons, .prev');
var btn_next = document.querySelector('#galery, .buttons, .next');

var images = document.querySelectorAll('photos,img');
var i=2;

btn_next.onclick = function()
{
 images[i].style.display='none';
 i++;

if (i>=images.lenght)
{
	i=0;
}
 images[i].style.display='block';
}

btn_prev.onclick = function()
{
 images[i].style.display='none';
 i--;

if (i<0)
{
	i=images.lenght -1;
}
 images[i].style.display='block';
}