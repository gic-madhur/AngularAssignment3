  CarList2 = [
      {
        "car_id":1,"name":"Audi","path":"Audi.png","car_count":0
      },
      {
        "car_id":2,"name":"Mbenz","path":"MBenz.png","car_count":0
      },
      {
        "car_id":3,"name":"BMW","path":"BMW.png","car_count":0
      },
      {
        "car_id":4,"name":"RangeRover","path":"RangeRover.png","car_count":0
      },
      {
        "car_id":5,"name":"RollsRoyece","path":"RollsRoyece.png","car_count":0
      }
  ];

  var CurrentImageId=1;
  var imagedis   = document.getElementById("currentImage");
  var ClickCount = document.getElementById("currentClick");

  function DisplayImage(){

    var xce = CarList2.find(xc=>xc.car_id == CurrentImageId);    
    imagedis.src = xce.path; 
    ClickCount.textContent = `${xce.car_count}`;

  }

  function IncrementClickCount(){

    var xce = CarList2.find(xc=>xc.car_id == CurrentImageId);
    xce.car_count = xce.car_count + 1;   
    ClickCount.textContent = `${xce.car_count}`;

  }
  
    document.getElementById("incrementCount").addEventListener('click',function(){ IncrementClickCount()});

    var pded = document.getElementById("car1");
    pded.addEventListener('click',function(){ CurrentImageId=1; DisplayImage() });

    var pded2 = document.getElementById("car2");
    pded2.addEventListener('click',function(){ CurrentImageId=2; DisplayImage()  });

    var pded3 = document.getElementById("car3");
    pded3.addEventListener('click',function(){ CurrentImageId=3; DisplayImage()  });

    var pded = document.getElementById("car4");
    pded.addEventListener('click',function(){ CurrentImageId=4; DisplayImage()   });

    var pded2 = document.getElementById("car5");
    pded2.addEventListener('click',function(){ CurrentImageId=5; DisplayImage()  });



    
   
    

