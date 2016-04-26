function FuncClick(input)
{
	//var input = "21039011355270815902800015640072016042422410000220160424234800011006003000000300100100000003500060010000000000201604241043F8";
	//var input = document.getElementById("result").innerHTML;
	//alert(input);
	
	if (input.length != 124) { return false; }
	hid = document.getElementById("inputbox");
	hid.style.display='none';
	
	TicketID=document.getElementById("TicketID");
	TicketID.innerHTML = input.substr(0,13);
	BookID=document.getElementById("BookID");
	BookID.innerHTML = input.substr(13,8);
	Dates=document.getElementById("Dates");
	Dates.innerHTML = FuncDates(input.substr(31,8));	
	TrainID=document.getElementById("TrainID");
	TrainID.innerHTML = Number(input.substr(21,7));

	StartID=document.getElementById("StartID");
	StartID.innerHTML = FuncStation(input.substr(28,3));
	StartTime=document.getElementById("StartTime");
	StartTime.innerHTML = FuncTimes(input.substr(31,14));


	ArriveID=document.getElementById("ArriveID");
	ArriveID.innerHTML = FuncStation(input.substr(45,3));
	ArriveTime=document.getElementById("ArriveTime");
	ArriveTime.innerHTML = FuncTimes(input.substr(48,14));


	CarID=document.getElementById("CarID");
	CarID.innerHTML = Number(input.substr(76,2))+"車";
	SeatID=document.getElementById("SeatID");
	SeatID.innerHTML = FuncSeat(input.substr(79,5));

	Price=document.getElementById("Price");
	Price.innerHTML = "NT$" + Number(input.substr(89,5));

	Ways=document.getElementById("Ways");
	Ways.innerHTML = FuncWays(input.substr(70,1));
	
	$(".main").show();
	
}

function FuncSeat(a)  //座位數字轉換
{
	
	seat = Number(a.substr(0,2));
	seatNum = Number(a.substr(4,1));

	var seatEng="unknow";
	switch(seatNum)
	{
	case 1:seatEng = "A"; break;
	case 2:seatEng = "B"; break;
	case 3:seatEng = "C"; break;
	case 4:seatEng = "D"; break;
	case 5:seatEng = "E"; break;
	case 6:seatEng = "F"; break;
	}
	return seat + seatEng ;
}


function FuncStation(a) //站名數字轉換
{
   a=Number(a)
   
   //台北<br><eng>TAIPEI</eng>
	switch(a)
	{
	case 1:return "南港<br><eng>NANGANG</eng>";
	case 2:return "台北<br><eng>TAIPEI</eng>";
	case 3:return "板橋<br><eng>BANQIAO</eng>";
	case 4:return "桃園<br><eng>TAOYUAN</eng>";
	case 5:return "新竹<br><eng>HSINCHU</eng>";
	case 6:return "苗栗<br><eng>MIAOLI</eng>";
	case 7:return "台中<br><eng>TAICHING</eng>";
	case 8:return "彰化<br><eng>CHANGHUA</eng>";
	case 9:return "雲林<br><eng>YUNLIN</eng>";
	case 10:return "嘉義<br><eng>CHIAYI</eng>";
	case 11:return "台南<br><eng>TAINAN</eng>";
	case 12:return "左營<br><eng>ZUOYING</eng>";
	}
}

function FuncTimes(a) //時間格式轉換
{

	hh = a.substr(8,2);
	mm = a.substr(10,2);
	
	return hh + ":" + mm;
}

function FuncDates(a) //日期格式轉換
{
	yy = a.substr(0,4);
	mm = a.substr(4,2);
	dd = a.substr(6,2); 
	return yy + "/" + mm + "/" + dd;
}

function FuncWays(a)
{
	a=Number(a);
	switch(a)
	{
		case 1:return "單程票";
		case 2:return "去程票";
		case 3:return "回程票";
	}
	
	
}

