function FuncClick(input)
{
	//var input = "21039011355270815902800015640072016042422410000220160424234800011006003000000300100100000003500060010000000000201604241043F8";
	//var input = document.getElementById("result").innerHTML;
	//alert(input);
	
	if (input.length != 124) { return false; }
	
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
	Price.innerHTML = Number(input.substr(89,5));

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
	switch(a)
	{
	case 1:return "南港";
	case 2:return "台北";
	case 3:return "板橋";
	case 4:return "桃園";
	case 5:return "新竹";
	case 6:return "苗栗";
	case 7:return "台中";
	case 8:return "彰化";
	case 9:return "雲林";
	case 10:return "嘉義";
	case 11:return "台南";
	case 12:return "左營";
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

