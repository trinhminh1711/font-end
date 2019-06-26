	function start3() 
{
	var x1 = parseInt(document.getElementById("value1").value);
	var x2 = parseInt(document.getElementById("value2").value);
	var pick=document.getElementById("select");
	var change = pick.options[pick.selectedIndex].value;//lấy giá trị ở ô input
		if(change==='plus')
	{
		document.getElementById("result2").innerHTML = x1+x2;
	}
	 	else if(change==='minus')
	{
		document.getElementById("result2").innerHTML = x1-x2;
	}
	 	else if(change==='multi')
	{
		document.getElementById("result2").innerHTML = x1*x2;
	}
		 else if (change==='share') 
	{
	document.getElementById("result2").innerHTML = x1/x2;
	}
}

	function reset2()
	{
	document.getElementById("value1").value=null;
	document.getElementById("value2").value=null;
	document.getElementById("result2").innerHTML=null;
	}