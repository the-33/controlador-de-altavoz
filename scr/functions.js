var shuffle = false;
var repeat = 0;

function sendOnePause()
{
  fetch('http://192.168.1.201/httpapi.asp?command=setPlayerCmd:onepause');
  if(document.getElementById('onepause').innerHTML == '<i class="fa fa-play"></i>')
  {
    document.getElementById('onepause').innerHTML = '<i class="fa fa-pause"></i>';
  }
  else
  {
    document.getElementById('onepause').innerHTML = '<i class="fa fa-play"></i>';
  }
}

function sendNext()
{
  fetch('http://192.168.1.201/httpapi.asp?command=setPlayerCmd:next');
}

function sendPrev()
{
  fetch('http://192.168.1.201/httpapi.asp?command=setPlayerCmd:prev');
}

function sendShuffle()
{
  if(shuffle == true)
  {
    shuffle = false;
    document.getElementById('shuffle').style.color = 'white';
  }
  else
  {
    shuffle = true;
    document.getElementById('shuffle').style.color = 'LimeGreen';
  }
  updateShuffleRepeat();
}

function sendRepeat()
{
  if(repeat == 0)
  {
    repeat = 1;
    document.getElementById('repeat').style.color = 'LimeGreen';
    document.getElementById('repeat').innerHTML = '<i class="fa fa-repeat"></i>';
  }
  else if (repeat == 1)
  {
    repeat = 2;
    document.getElementById('repeat').style.color = 'LimeGreen';
    document.getElementById('repeat').innerHTML = '<i class="fa fa-repeat"></i><sub class="uno">1</sub>';
  }
  else
  {
    repeat = 0;
    document.getElementById('repeat').style.color = 'white';
    document.getElementById('repeat').innerHTML = '<i class="fa fa-repeat"></i>';
  }
  updateShuffleRepeat();
}

function updateShuffleRepeat()
{
  if(shuffle == false && repeat == 1)
  {
    fetch('http://192.168.1.201/httpapi.asp?command=setPlayerCmd:loopmode:<0>');
  }
  else if(shuffle == false && repeat == 2)
  {
    fetch('http://192.168.1.201/httpapi.asp?command=setPlayerCmd:loopmode:<1>');
  }
  else if(shuffle == true && repeat == 1)
  {
    fetch('http://192.168.1.201/httpapi.asp?command=setPlayerCmd:loopmode:<2>');
  }
  else if(shuffle == true && repeat == 0)
  {
    fetch('http://192.168.1.201/httpapi.asp?command=setPlayerCmd:loopmode:<3>');
  }
  else if(shuffle == false && repeat == 0)
  {
    fetch('http://192.168.1.201/httpapi.asp?command=setPlayerCmd:loopmode:<4>');
  }
  else if(shuffle == false && repeat == 2)
  {
    fetch('http://192.168.1.201/httpapi.asp?command=setPlayerCmd:loopmode:<5>');
  }
}

document.getElementById('shuffle').addEventListener('mouseover', () =>
{
  if(shuffle == true)
  {
    document.getElementById('shuffle').style.color = 'LimeGreen';
  }
  else
  {
    document.getElementById('shuffle').style.color = 'white';
  }
});

document.getElementById('shuffle').addEventListener('mouseout', () =>
{
  if(shuffle == true)
  {
    document.getElementById('shuffle').style.color = 'DarkGreen';
  }
  else
  {
    document.getElementById('shuffle').style.color = 'grey';
  }
});

document.getElementById('repeat').addEventListener('mouseover', () =>
{
  if(repeat == 1 || repeat == 2)
  {
    document.getElementById('repeat').style.color = 'LimeGreen';
  }
  else
  {
    document.getElementById('repeat').style.color = 'white';
  }
});

document.getElementById('repeat').addEventListener('mouseout', () =>
{
  if(repeat == 1 || repeat == 2)
  {
    document.getElementById('repeat').style.color = 'DarkGreen';
  }
  else
  {
    document.getElementById('repeat').style.color = 'grey';
  }
});
