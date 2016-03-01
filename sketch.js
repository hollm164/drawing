//Your Drawing

function setup(){
  createCanvas(1200,950);
  background("lightblue");

  drawMountains();
  drawIgloo();
  drawIce();
  drawBird();

}

function drawMountains(){
  noStroke(0);
  fill("#a96f6f");
  triangle(750,350,1400,350,1130,220);

  fill("#804c4c");
  triangle(750,350,1100,350,870,210);

  fill("#a05f5f");
  triangle(500,350,1100,350,725,180);

  fill("rosybrown");
  triangle(850,350,1150,350,990,200);

  fill("#804c4c");
  triangle(300,350,800,350,550,190);

  fill("#a96f6f");
  triangle(400,350,800,350,650,170);

  fill("rosybrown");
  triangle(600,350,830,350,250,150);

  fill("#a05f5f");
  triangle(-50,350,500,350,35,200);

  fill("rosybrown");
  triangle(10,350,500,350,110,150);

}

function drawIgloo(){
  stroke("lightsteelblue");
  strokeWeight(2);
  fill("aliceblue");
  ellipse(950,350,225,225);

  stroke("#93aed2");
  strokeWeight(4);
  fill("lightsteelblue");
  rect(920,305,60,60,15);

}

function drawIce(){
  noStroke(0);
  fill("aliceblue");
  rect(0,350,1200,700);

}

function drawBird(){
  fill("darksalmon");
  triangle(260,80,300,80,250,40);
  triangle(340,80,300,80,350,40);
  triangle(300,40,280,80,320,80);
  ellipse(300,600,550,500);

  stroke("indianred");
  strokeWeight(3);
  line(100,768,100,570);
  line(500,768,500,570);

  fill("indianred");
  noStroke(0);
  ellipse(300,300,435,435);

  stroke(" #b6722f");
  strokeWeight(3);
  fill("sandybrown");
  triangle(0,300,300,100,300,500);

  stroke("peru");
  line(3,300,300,300);

  fill("darksalmon");
  noStroke(0);
  ellipse(300,300,430,430);

//birds eye
  fill("white");
  ellipse(300,300,350,350);

  fill("teal");
  ellipse(300,300,220,220);

  fill("cadetblue");
  ellipse(300,300,200,200);

  fill("black");
  ellipse(300,300,100,100);

  fill("whitesmoke");
  rect(230,230,50,50,20);
  rect(260,290,25,25,8);

//birds feet
  stroke("slategrey");
  fill("lightslategrey");
  ellipse(170,840,60,60);
  ellipse(250,850,60,60);
  ellipse(210,850,60,60);
  ellipse(430,840,60,60);
  ellipse(350,850,60,60);
  ellipse(390,850,60,60);

  }
