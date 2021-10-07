window.addEventListener('scroll', scrollFunc, true);

resume = document.getElementById('resume');

function scrollFunc(e) {
  if (window.scrollY > 1100) {
    document.head.appendChild(styleSheet);
  }
}

var styles = `
    @keyframes html5 {
  from {
    width: 0;
    background-color: #fe6786;
    border-radius: 0;
  }
  to {
    width: 75%;
    background-color: #9acd32;
    border-radius: 10px;
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
    border-radius: 10px;
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
    border-radius: 10px;
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
    border-radius: 10px;
  }
}
`;

var styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
