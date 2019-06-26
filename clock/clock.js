  var k ='minhdeptrai';
  function startclock()
{ 
  if(k=='minhdeptrai')
    {
    h = parseInt(document.getElementById("hour").value);
    m = parseInt(document.getElementById("min").value);
    s = parseInt(document.getElementById("second").value);//lấy giá trị của 3 giá trị
    }
  if(h>=0)
  {
              s--;
              if(s<0)// Thuật toán giảm dần thời gian
                {   
                m=m-1;
                s=59;
                }
              if(m<0)
                {
                  h=h-1;
                  m=59;
                }
              if(h<0)
                {
                  window.alert("hết giờ!!");
                }
                      if(s<10)
                      {
                        if(m<10)
                        {
                          document.getElementById("start").innerHTML= h +":" +"0"+ m + ":" + "0"+s;
                        }
                        else
                        {
                          document.getElementById("start").innerHTML= h +":" + m + ":" + "0"+s;
                        }
                      }
                      else
                        {
                          if(m<10)
                          {
                             document.getElementById("start").innerHTML= h +":" +"0"+ m + ":" +s;
                          }
                          else
                          {
                              document.getElementById("start").innerHTML= h +":" + m + ":" +s;
                          }
                        }
                        //in ra kết quả
  timeout = setTimeout(startclock,1000);
  }
                      else
                        {
                        clearTimeout(timeout);
                        document.getElementById("start").innerHTML= "0" +"0"  +":" + "0"+"0" + ":" +"0"+"0"; 
                        }
  k=1;
}
  function stopclock()

  {
  clearTimeout(timeout);// dừng đồng hồ
  }

  function check()
  {
    var a = document.getElementById("hour").value;
    var b = document.getElementById("min").value;
    var c = document.getElementById("second").value;
          if(a<0||b<0||c<0||(Math.floor(a)/a)!=1||(Math.floor(b)/b)!=1||(Math.floor(c)/c)!=1)// kiểm tra số nguyên dương
          {
            window.alert("Bạn đã nhập sai , vui lòng nhập lại");
          }
          else
          {
            h=a;
            m=b;
            s=c;
           startclock();
          }
  }

  function reset()
  {
    stopclock();
    k='minhdeptrai';
    startclock();
    //reset về số liệu ban đầu
  }

  function resetall()
  {
  document.getElementById("hour").value =null;
  document.getElementById("min").value =null;
  document.getElementById("second").value =null;
  stopclock();
  document.getElementById("start").innerHTML= "0" +"0"  +":" + "0"+"0" + ":" +"0"+"0";
  //reset về 00:00:00
  }
