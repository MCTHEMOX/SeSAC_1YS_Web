const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// 클라이언트 소켓이 연결이 되면 콜백 함수가 실행된다.
// socket : 클라이언트 소켓과 연결 되고 새로 생성된 소켓과 통신
// socket.id 를 넣어주면 클라이언트마다 다른 소켓의 아이디를 보여줌
io.on('connection', (socket) => {
  //   console.log('Server Socket Connected', socket.id);
  console.log('Server Socket Connected');

  socket.emit('welcome', { msg: 'welcome' });

  socket.on('response', (str) => {
    console.log(str);
  });

  socket.on('hello', (str) => {
    console.log(str);
    socket.emit('hello2', '안녕하세요');
  });
  socket.on('study', (str) => {
    console.log(str);
    socket.emit('study2', '공부하자');
  });
  socket.on('bye', (str) => {
    console.log(str);
    socket.emit('study2', '잘가~');
  });

  socket.on('disconnect', () => {
    console.log('Server Socket Disconnected'); // 브라우저 종료하면 disconnected 나옴
  });
});

http.listen(8000, () => {
  console.log('서버포트 : ', 8000);
});
