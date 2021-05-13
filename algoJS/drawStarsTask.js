function drawStars(num) {
  for (let i = num; i > 0; i--) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

drawStars(5);