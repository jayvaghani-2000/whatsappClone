const io = require("socket.io")(5000, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((i) => {
      const newRecipiets = recipients.filter((r) => r !== i);
      newRecipiets.push(id);
      socket.broadcast.to(i).emit("receive-message", {
        recipients: newRecipiets,
        sender: id,
        text,
      });
    });
  });
});
