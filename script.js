function selectRoom(name, price, img) {
    localStorage.setItem("roomName", name);
    localStorage.setItem("roomPrice", price);
    localStorage.setItem("roomImg", img);
  
    window.location.href = "book.html";
  }
