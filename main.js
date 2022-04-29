window.addEventListener('scroll', scrollFunc, true);

resume = document.getElementById('resume');
height = window.innerHeight;

function scrollFunc(e) {
  if (window.scrollY > 2.4 * height) {
    document.head.appendChild(styleSheet);
  }
}

var styles = `

.meter{
    display: block !important;
}
    @keyframes html5 {
  from {
    width: 0;
    background-color: #fe6786;
    border-radius: 0;
  }
  to {
    width: 75%;
    background-color: #9acd32;
    border-radius: 2vmin;
  }
}

@keyframes js {
  from {
    width: 0;
    background-color: #fe6786;
    border-radius: 0;
  }
  to {
    width: 80%;
    background-color: #5e7f1c;
    border-radius: 2vmin;
  }
}

@keyframes css {
  from {
    width: 0;
    background-color: #fe6786;
    border-radius: 0;
  }

  to {
    width: 60%;
    background-color: #bfff3e;
    border-radius: 2vmin;
  }
}

@keyframes python {
  from {
    width: 0;
    background-color: #fe6786;
    border-radius: 0;
  }

  to {
    width: 30%;
    background-color: #ffd200;
    border-radius: 2vmin;
  }
}

.meterd{
  display: block !important;
}

@keyframes html5d {
from {
  width: 0;
  background-color: #fe6786;
  border-radius: 0;
}
to {
  width: 15vw;
  background-color: #9acd32;
  border-radius: 1vmin;
}
}

@keyframes jsd {
from {
  width: 0;
  background-color: #fe6786;
  border-radius: 0;
}
to {
  width: 20vw;
  background-color: #5e7f1c;
  border-radius: 1vmin;
}
}

@keyframes cssd {
from {
  width: 0;
  background-color: #fe6786;
  border-radius: 0;
}

to {
  width: 15vw;
  background-color: #bfff3e;
  border-radius: 1vmin;
}
}

@keyframes pythond {
from {
  width: 0;
  background-color: #fe6786;
  border-radius: 0;
}

to {
  width: 10vma;
  background-color: #ffd200;
  border-radius: 1vmin;
}
}

`;

var styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
