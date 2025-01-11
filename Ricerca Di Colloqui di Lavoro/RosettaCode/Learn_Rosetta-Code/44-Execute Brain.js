function brain(prog) {
  var output = "";
  var code; // formatted code
  var ip = 0; // current instruction within code
  var nest = 0; // current bracket nesting (for Out button)
  var ahead = []; // locations of matching brackets

  var data = [0]; // data array (mod by +, -)
  var dp = 0; // index into data (mod by <, >)

  var inp = 0; // current input character (fetch with ,)
  var quit = 0;
  var commands = {
    ">": function () {
      if (++dp >= data.length) data[dp] = 0;
    },
    "<": function () {
      if (--dp < 0) quit++;
    },
    "+": function () {
      ++data[dp];
    },
    "-": function () {
      --data[dp];
    },
    "[": function () {
      if (!data[dp]) ip = ahead[ip];
      else ++nest;
    },
    "]": function () {
      if (data[dp]) ip = ahead[ip];
      else --nest;
    },
    ",": function () {
      var c = document.getElementById("input").value.charCodeAt(inp++);
      data[dp] = isNaN(c) ? 0 : c; // EOF: other options are -1 or no change
    },
    ".": function () {
      output += String.fromCharCode(data[dp]);
      /*var s = document.getElementById("output").innerHTML)
               + String.fromCharCode(data[dp]);
              s = s.replace(/\n/g,"<br>").replace(/ /g,"&amp;nbsp;");
              document.getElementById("output").innerHTML = s;*/
    },
  };

  let ar = prog.split("");
  var st = [],
    back,
    error = -1;
  for (ip = 0; ip < ar.length; ip++) {
    switch (ar[ip]) {
      case "[":
        st.push(ip);
        break;
      case "]":
        if (st.length == 0) error = ip;
        back = st.pop();
        ahead[ip] = back;
        ahead[back] = ip;
        break;
    }
  }

  for (ip = 0; ip < ar.length; ip++) {
    if (commands.hasOwnProperty(ar[ip])) commands[ar[ip]]();
  }

  return output;
}
