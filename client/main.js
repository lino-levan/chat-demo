var socket = io();

document.getElementById("send").onclick = ()=>{
  socket.emit("chat", document.getElementById("chatbox").value)
  document.getElementById("chatbox").value="";
}

socket.on("chat", (msg)=>{
  let chatlog = document.getElementById("chat");
  let li = document.createElement("p");
  li.innerText = msg;
  chatlog.appendChild(li);
})
