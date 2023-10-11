const sheetId = '1RZJanKfSEW_oiM5nnDiTvAJyjo-40qpOWNqk7j-Ef-0';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
let query = encodeURIComponent('Select *');
const Company = 'Company';
let urlCompany = `${base}&sheet=${Company}&tq=${query}`;
let dataCompany = [];
const Banks = 'Banks';
let urlBanks = `${base}&sheet=${Banks}&tq=${query}`;
let dataBanks = [];
const marketed="marketed";
let urlmarketed = `${base}&sheet=${marketed}&tq=${query}`;
let datamarketed = [];
const Users = 'Users';
let urlUsers = `${base}&sheet=${Users}&tq=${query}`;
let DataUsers = [];
const Numbers = 'DataNumbers';
let urlNumbers= `${base}&sheet=${Numbers}&tq=${query}`;
let DataNumbers=[];
const Customers = 'Customers';
let urlCustomers = `${base}&sheet=${Customers}&tq=${query}`;
let DataCustomers=[];

document.addEventListener('DOMContentLoaded', init)
function init() {
  ConvertMode();
  LoadUser();
  let Ti =new Date().getTime().valueOf();
  let Ti1 =new Date().getTimezoneOffset().valueOf()
  let Ti2 =Ti1*60*1000 * -1 + Ti
  document.getElementById("Day1").value =GetDayName(new Date(Ti2-3*60*1000).getUTCDay());
  document.getElementById("Time1").valueAsDate =new Date(Ti2);
  document.getElementById("DATE1").valueAsDate =new Date(Ti2);
  document.getElementById("ImgHD").src="https://drive.google.com/uc?export=view&id=1QLZhYDa-7QPePU0lLGbc-NppD4sWev9u"
  if (typeof(Storage) !== "undefined") {
    if( localStorage.getItem("PassWord")!==null){
      document.getElementById("User_PassWord").value=localStorage.getItem("PassWord");
    }
    if( localStorage.getItem("Employee_Index")!==null){
      document.getElementById("loginPage").style.display="none";
      document.getElementById("MainPage").style.display="flex";
      let Employee_ID=document.getElementById("Employee_ID")
      Employee_ID.value =localStorage.getItem("Employee_Index");
      document.getElementById("Employee_Name").value=localStorage.getItem("User_Name");
      document.getElementById("COD").disabled=true; 
      switch (localStorage.getItem("AcForm")) {
        case "CustForm":
          ChangeMode2();
        break;
        case "MainForm1":
          ChangeMode("1");
        break;
        case "MainForm2":
          ChangeMode("2");
        break;
      }
    }
  }
    loadCompany();
    loadBanks();
    loadMarketed();
    LoadNumers();
    LoadCustomers();
}
function ChangeMode2(){
localStorage.setItem("AcForm","CustForm");
document.getElementById("MainForm").style.display="none";
document.getElementById("CustForm").style.display="flex";
let MainPage=document.getElementById("MainPage");
MainPage.style.height="64%";
MainPage.style.top="41%";
document.getElementById("Employee_ID1").value =localStorage.getItem("Employee_Index");
document.getElementById("Employee_Name1").value=localStorage.getItem("User_Name");
}

function ChangeMode(Va){
  document.getElementById("CustForm").style.display="none";
  let MainForm=document.getElementById("MainForm");
  MainForm.style.display="flex";
  let selectT=document.getElementById("selectT");
  localStorage.setItem("SelectValue",Va);
  let DivBut=document.getElementById("DivBut");
  let MainPage=document.getElementById("MainPage");
  let Three_Div1_1=document.getElementById("Three_Div1_1");
  let Three_Div1_2=document.getElementById("Three_Div1_2");
  let Div1=document.getElementById("Div1");
  let Div2=document.getElementById("Div2");
  let Div3=document.getElementById("Div3");
  let Div4=document.getElementById("Div4");
  let Ti =new Date().getTime().valueOf();
  let Ti1 =new Date().getTimezoneOffset().valueOf()
  let Ti2 =Ti1*60*1000 * -1 + Ti
  if( Va=="1"){
    MainForm.reset()
    localStorage.setItem("AcForm","MainForm1");
    for (let index = 0; index < 4; index++) {
    Three_Div1_1.children.item(index).style.display="flex"
    }
    Three_Div1_1.children.item(4).style.marginTop="0";
   Three_Div1_1.children.item(5).style.display="flex";
    Three_Div1_1.children.item(6).style.display="flex";
   Three_Div1_1.parentElement.style.flexDirection="row";
    Three_Div1_1.className="Three_Div1";
    Three_Div1_2.style.height="100%";
    Three_Div1_2.className="Three_Div1";
    MainPage.style.top="53%";
    DivBut.style.marginTop="0px";
    MainPage.style.height="88%";
     Div1.style.display="flex";
     Div2.style.display="flex";
     Div3.style.display="flex";
     Div4.style.display="flex";
  }else{
    localStorage.setItem("AcForm","MainForm2");
    for (let index = 0; index < 4; index++) {
     Three_Div1_1.children.item(index).style.display="none"
    }
    Three_Div1_1.children.item(4).style.marginTop="-3%";
   Three_Div1_1.children.item(5).style.display="none";
    Three_Div1_1.children.item(6).style.display="none";
   Three_Div1_1.parentElement.style.flexDirection="column-reverse";
    Three_Div1_1.className="ModeX";
    Three_Div1_2.style.height="74%";
    Three_Div1_2.className="ModeX";
    MainPage.style.top="44%";
    DivBut.style.marginTop="1%";
    MainPage.style.height="70%";
    Div1.style.display="none";
    Div2.style.display="none";
    Div3.style.display="none";
    Div4.style.display="none";
  }
  document.getElementById("Day1").value =GetDayName(new Date(Ti2).getDay());
  document.getElementById("Time1").valueAsDate =new Date(Ti2);
  document.getElementById("DATE1").valueAsDate =new Date(Ti2);
  document.getElementById("Employee_ID").value =localStorage.getItem("Employee_Index");
  document.getElementById("Employee_Name").value=localStorage.getItem("User_Name");
}

function GetDayName(key){
  switch (key) {
    case 0:
    return "الاحد";
    case 1:
    return "الاثنين";
    case 2:
    return "الثلاثاء";
    case 3:
    return "الاربعاء";
    case 4:
    return "الخميس";
    case 5:
    return "الجمعة";
    case 6:
    return "السبت";
  }
}
function SelectPi(){
  let Method =document.getElementById("Method");
  let COD =document.getElementById("COD");
  if(Method.value=="مدفوع"){
    COD.className="MethodCC1";
    COD.disabled=true;
  }else{
    COD.disabled=false;
    COD.className="";
  }
}

function LoadUser(){
  DataUsers=[];
  fetch(urlUsers)
  .then(res => res.text())
  .then(rep => {
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      const colzUser = [];
      jsonData.table.cols.forEach((heading) => {
          if (heading.label) {
              let columnUser = heading.label;
              colzUser.push(columnUser);
          }
      })
      jsonData.table.rows.forEach((rowData) => {
          const rowUser = {};
          colzUser.forEach((ele, ind) => {
              rowUser[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
          })
          DataUsers.push(rowUser);
      })
  })
}

function LoadNumers(){
  DataNumbers=[];
  fetch(urlNumbers)
  .then(res => res.text())
  .then(rep => {
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      const colzNumbers = [];
      jsonData.table.cols.forEach((heading) => {
          if (heading.label) {
              let columnNumbers = heading.label;
              colzNumbers.push(columnNumbers);
          }
      })
      jsonData.table.rows.forEach((rowData) => {
          const rowUNumbers = {};
          colzNumbers.forEach((ele, ind) => {
            rowUNumbers[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
          })
          DataNumbers.push(rowUNumbers);
      })
      loadNumber2sInput();
  })
}

function loadNumber2sInput(){
    let Customer= document.getElementById("ListS");
    let A_myDropdown3
    for (let index = 0; index < DataNumbers.length; index++) {
      if(DataNumbers[index].DataNum!=""){
        A_myDropdown3=document.createElement("option");
        A_myDropdown3.id="NUM2_" + index;
        A_myDropdown3.value=DataNumbers[index].Number;
        A_myDropdown3.style.textAlign="center";
        Customer.appendChild(A_myDropdown3);
      }
    }
  }

function loadCompany(){
  dataCompany = [];
  fetch(urlCompany)
  .then(res => res.text())
  .then(rep => {
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      const colz = [];
      jsonData.table.cols.forEach((heading) => {
          if (heading.label) {
              let columnBranches = heading.label;
              colz.push(columnBranches);
          }
      })
      jsonData.table.rows.forEach((rowData) => {
          const row = {};
          colz.forEach((ele, ind) => {
              row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
          })
          dataCompany.push(row);
      })
  })
}
function loadBanks(){
  dataBanks = [];
  fetch(urlBanks)
  .then(res => res.text())
  .then(rep => {
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      const colz2 = [];
      jsonData.table.cols.forEach((heading) => {
          if (heading.label) {
              let column2 = heading.label;
              colz2.push(column2);
          }
      })
      jsonData.table.rows.forEach((rowData) => {
          const row2 = {};
          colz2.forEach((ele, ind) => {
              row2[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
          })
          dataBanks.push(row2);
      })
      loadBanksInput();
  })
}
function loadMarketed(){
  datamarketed = [];
  fetch(urlmarketed)
  .then(res => res.text())
  .then(rep => {
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      const colz3 = [];
      jsonData.table.cols.forEach((heading) => {
          if (heading.label) {
              let column3 = heading.label;
              colz3.push(column3);
          }
      })
      jsonData.table.rows.forEach((rowData) => {
          const row3 = {};
          colz3.forEach((ele, ind) => {
              row3[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
          })
          datamarketed.push(row3);
      })
      loadMarketedInput();
  })
}

function LoadCustomers(){
  DataCustomers = [];
  fetch(urlCustomers)
  .then(res => res.text())
  .then(rep => {
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      const colz3 = [];
      jsonData.table.cols.forEach((heading) => {
          if (heading.label) {
              let column3 = heading.label;
              colz3.push(column3);
          }
      })
      jsonData.table.rows.forEach((rowData) => {
          const row3 = {};
          colz3.forEach((ele, ind) => {
              row3[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
          })
          DataCustomers.push(row3);
      })
      loadCustomersInput();
  })
}
  function loadCustomersInput(){
    let Customer= document.getElementById("listCus");
    let PhoneList=document.getElementById("PhoneList");
    let A_myDropdown3
    for (let index = 0; index < DataCustomers.length; index++) {
      if(DataCustomers[index].Num!=""){
        A_myDropdown3=document.createElement("option");
        A_myDropdown3.id="Cust_" + index;
        A_myDropdown3.value=DataCustomers[index].NameCus;
        A_myDropdown3.style.textAlign="center";
        Customer.appendChild(A_myDropdown3);
        A_myDropdown3=document.createElement("option");
        A_myDropdown3.id="Phone_" + index;
        A_myDropdown3.value=DataCustomers[index].PhoneCus;
        A_myDropdown3.style.textAlign="center";
        PhoneList.appendChild(A_myDropdown3);
      }
    }
  }
  function loadMarketedInput(){
    let marketedBrowsers= document.getElementById("marketedBrowsers");
    let A_myDropdown3
    for (let index = 0; index < datamarketed.length; index++) {
      if(datamarketed[index].Num!=""){
      A_myDropdown3=document.createElement("option");
      A_myDropdown3.id="my2_" + index;
      A_myDropdown3.value=datamarketed[index].Marketed;
      A_myDropdown3.style.textAlign="center";
      marketedBrowsers.appendChild(A_myDropdown3);
     }
    }
  }

function loadBanksInput(){
let BankBrowsers= document.getElementById("BankBrowsers");
let BankBrowsers1= document.getElementById("BankBrowsers1");
let A_myDropdown3
for (let index = 0; index < dataBanks.length; index++) {
  A_myDropdown3=document.createElement("option");
  A_myDropdown3.id="my2_" + index;
  A_myDropdown3.value=dataBanks[index].Bank;
  A_myDropdown3.style.textAlign="center";
  BankBrowsers.appendChild(A_myDropdown3);
  A_myDropdown3=document.createElement("option");
  A_myDropdown3.id="my2_" + index;
  A_myDropdown3.value=dataBanks[index].Bank;
  A_myDropdown3.style.textAlign="center";
  BankBrowsers1.appendChild(A_myDropdown3);
}
}

function LoadDataSignIn(){
  for (let index = 0; index < data3.length; index++) {
    if(localStorage.getItem("Main_Id")==data3[index].Main_no){document.getElementById("BranchMain").value=data3[index].Main_Name;return}
  }
}

function IsfoundUser(){
  let User_PassWord= document.getElementById("User_PassWord");
  let error_User_ID= document.getElementById("error_User_ID");
    for (let index = 0; index < DataUsers.length; index++) {
      if(User_PassWord.value==DataUsers[index].PassWord){
        localStorage.setItem("Employee_Index", index);
        return true;
      }
    }
      error_User_ID.className="fa fa-warning";
      return false ;
  }
  function IsfoundNumber(NumberE){
      for (let index = 0; index < DataNumbers.length; index++) {
        if(NumberE==DataNumbers[index].Number){
          return true;
        }
      }
        return false ;
    }

  function FoundName(NumberE){
    for (let index = 0; index < dataCompany.length; index++) {
      if(NumberE.charAt(0)==dataCompany[index].CompanyCode){ 
        return dataCompany[index].CompanyName;
      }
      if(NumberE.slice(0, 2).toUpperCase()==dataCompany[index].CompanyCode){ 
        return dataCompany[index].CompanyName;
      }
      if(NumberE.slice(0, 3).toUpperCase()==dataCompany[index].CompanyCode){ 
        return dataCompany[index].CompanyName;
      }
    }
      return "" ;
  }


function ChangeNumbers(){
  let NumberStr=document.getElementById("number").value
  document.getElementById("CompanyName").value=FoundName(NumberStr)
}

function CustomerIstrue(Val){
  for (let index = 0; index < DataCustomers.length; index++) {
    if(Val==DataCustomers[index].NameCus) {
      return true;
    }
  }
  return false ;
}

function CalculateB(){
  let Customer=document.getElementById("Customer");
  let BalanceC=document.getElementById("BalanceC");
  let Phone=document.getElementById("Phone");
  let Bank=document.getElementById("Bank");
  for (let index = 0; index < DataCustomers.length; index++) {
    if(Customer.value==DataCustomers[index].NameCus) {
      BalanceC.value=DataCustomers[index].BalanceCus;
      Phone.value=DataCustomers[index].PhoneCus;
      Bank.value=DataCustomers[index].BankCus;
      return;
    }
  }
  BalanceC.value="";
  Phone.value="";
  Bank.value="";
  BalanceC.value=0;
}

function FindPhone(){
  let Customer=document.getElementById("Customer");
  let BalanceC=document.getElementById("BalanceC");
  let Phone=document.getElementById("Phone");
  let Bank=document.getElementById("Bank");
  for (let index = 0; index < DataCustomers.length; index++) {
    if(Phone.value==DataCustomers[index].PhoneCus) {
      Customer.value=DataCustomers[index].NameCus;
      BalanceC.value=DataCustomers[index].BalanceCus;
      Bank.value=DataCustomers[index].BankCus;
      return;
    }
  }
  BalanceC.value="";
  Customer.value="";
  Bank.value="";
  BalanceC.value=0;
}

function IsmarketedTrue(marketer){
  for (let index = 0; index < datamarketed.length; index++) {
    if(marketer==datamarketed[index].Marketed){
      return true;
    }
  }
  return false;
}

function hideNumber(){
  document.getElementById("Lnumber").style.display="none";
  document.getElementById("number").style.display="none";
  document.getElementById("number").value="";
  document.getElementById("Lnumber2").style.display="block";
  document.getElementById("Number2").style.display="block";
  document.getElementById("Icon1").style.display="block";
  document.getElementById("Icon2").style.display="none";
}

function ShowNumber(){
  document.getElementById("Lnumber").style.display="block";
  document.getElementById("number").style.display="block";
  document.getElementById("Lnumber2").style.display="none";
  document.getElementById("Number2").style.display="none";
  document.getElementById("Number2").value="";
  document.getElementById("Icon1").style.display="none";
  document.getElementById("Icon2").style.display="block";
}
function IstrueDataInform(){
  let marketed=document.getElementById("marketed");
  let Phone=document.getElementById("Phone");
  let Bank=document.getElementById("Bank");
  let State=document.getElementById("State");
  let DATE=document.getElementById("DATE1");
  let Customer=document.getElementById("Customer");
  let number=document.getElementById("number");
  let Number2=document.getElementById("Number2");
  let Method=document.getElementById("Method");
  let Amount=document.getElementById("Amount");
  let Weight=document.getElementById("Weight");
  if(localStorage.getItem("SelectValue")=="1"){
    if(number.value==0){
      if( Number2.value=="") {Number2.style.border="2px solid #ff0000";return false}else{Number2.style.border="none";}
      if(IsfoundNumber(Number2.value)!=true) {Number2.style.border="2px solid #ff0000";return false}else{Number2.style.border="none";}
      number.value=0;Customer.value=""; Phone.value=""; Method.value="";Bank.value=""; Amount.value=""; COD.value=""; Weight.value="";    State.value="";
      return true
    }else{
      if(DATE.value==""){DATE.style.border="2px solid #ff0000";return false}else{DATE.style.border="none";}
      if(Customer.value==""){Customer.style.border="2px solid #ff0000";return false}else{Customer.style.border="none";}
      if(CustomerIstrue(Customer.value)==false){Customer.style.border="2px solid #ff0000";return false}else{Customer.style.border="none";}
      if(marketed.value==""){marketed.style.border="2px solid #ff0000";return false}else{marketed.style.border="none";}
      if(IsmarketedTrue(marketed.value)==false){marketed.style.border="2px solid #ff0000";return false}else{marketed.style.border="none";}
      if(Phone.value==""){Phone.style.border="2px solid #ff0000";return false}else{Phone.style.border="none";}
      if(number.value==""){number.style.border="2px solid #ff0000";return false}else{number.style.border="none";}
      if(IsfoundNumber(number.value)==true) {number.style.border="2px solid #ff0000";return false}else{number.style.border="none";}
      if( Number2.value!="") {Number2.style.border="2px solid #ff0000";return false}else{Number2.style.border="none";}
      if(Method.value==""){Method.style.border="2px solid #ff0000";  return false}else{Method.style.border="none";}
      if(Bank.value==""){Bank.style.border="2px solid #ff0000";  return false}else{Bank.style.border="none";}
      if(Amount.value==""){Amount.style.border="2px solid #ff0000";return false}else{Amount.style.border="none";}
      if(Weight.value==""){Weight.style.border="2px solid #ff0000";return false}else{Weight.style.border="none";}
      if(State.value==""){State.style.border="2px solid #ff0000";return false}else{State.style.border="none";}
      return true
    }
  }else{
    if(Customer.value==""){Customer.style.border="2px solid #ff0000";return false}else{Customer.style.border="none";}
    if(Amount.value==""){Amount.style.border="2px solid #ff0000";return false}else{Amount.style.border="none";}
    return true
  }
}

function onsubmitForm(){
  if(IstrueDataInform()===true){
    let Amount=document.getElementById("Amount");
    let Method=document.getElementById("Method");
    if(Method.value=="آجل"){
      Amount.value= Amount.value * -1
    }else{
      Amount.value= Math.abs(Amount.value) 
    }
    if(localStorage.getItem("SelectValue")!="1"){
      Method.value="آجل"
    }
  let MainForm=document.getElementById("MainForm");
  var w = window.open('', 'form_target', 'width=600, height=400');
  MainForm.target = 'form_target';
  MainForm.action='https://script.google.com/macros/s/AKfycbwV-PRuCzkUCOsJIIrncm7ul6Vl1_wOYb80lWgRqrMxupRCUU7X4jV5ShFgWkwHWc9X/exec'
  MainForm.submit();
  if (MainForm.onsubmit()==true){
    const myTimeout = setTimeout(function(){ 
      LoadUser();
                w.close();
                clearTimeout(myTimeout)
                location.reload();
    }, 5000);
  }}
} 

// ******************CustForm
function IdPhoneTrue(){
  let Phone=document.getElementById("PhoneCus");
  for (let index = 0; index < DataCustomers.length; index++) {
    if(Phone.value==DataCustomers[index].PhoneCus) {
      return true;
    }
  }
  return false;
}
function IstrueDataInform1(){
  if(DataUsers[localStorage.getItem("Employee_Index")].AddCustomer=="yes"){
  let NameCus=document.getElementById("NameCus");
  let PhoneCus=document.getElementById("PhoneCus");
  let FirstBalance=document.getElementById("FirstBalance");
      if(NameCus.value==""){NameCus.style.border="2px solid #ff0000";return false}else{NameCus.style.border="none";}
      if(PhoneCus.value==""){PhoneCus.style.border="2px solid #ff0000";return false}else{PhoneCus.style.border="none";}
      if(IdPhoneTrue(PhoneCus.value)==true){PhoneCus.style.border="2px solid #ff0000";return false}else{PhoneCus.style.border="none";}
    if(FirstBalance.value==""){FirstBalance.style.border="2px solid #ff0000";return false}else{FirstBalance.style.border="none";}
       return true
  }
}

function onsubmitForm1(){

  if(IstrueDataInform1()===true){
  let CustForm=document.getElementById("CustForm");
  var w = window.open('', 'form_target', 'width=600, height=400');
  CustForm.target = 'form_target';
  CustForm.action='https://script.google.com/macros/s/AKfycbwV-PRuCzkUCOsJIIrncm7ul6Vl1_wOYb80lWgRqrMxupRCUU7X4jV5ShFgWkwHWc9X/exec'
  CustForm.submit();
  if (CustForm.onsubmit()==true){
    const myTimeout = setTimeout(function(){ 
      LoadUser();
                w.close();
                clearTimeout(myTimeout)
                location.reload();
    }, 5000);
  }}

} 

// ******************Login

function Istrue(){
  let User_PassWord= document.getElementById("User_PassWord");
  let error_User_ID= document.getElementById("error_User_ID");
  if(User_PassWord.value===""){ error_User_ID.className="fa fa-warning"; return false;}else{ error_User_ID.className="" }
  if(IsfoundUser()===false){return false}else{error_User_ID.className=""}
  return true;
}

function Sign_In(){
  if (Istrue()===true){
    let Employee_Index = localStorage.getItem("Employee_Index");
    localStorage.setItem("User_Name", DataUsers[Employee_Index].UserName);
    localStorage.setItem("PassWord",DataUsers[Employee_Index].PassWord);
    document.getElementById("loginPage").style.display="none";
    document.getElementById("MainPage").style.display="flex";
    location.reload();
  }
}

function ShowPassword(){
  let User_PassWord= document.getElementById("User_PassWord");
  let Eye_Password= document.getElementById("Eye_Password");
  if (Eye_Password.className=="fa fa-eye"){
    User_PassWord.type="text";
    Eye_Password.className="fa fa-eye-slash";
  }else{
    User_PassWord.type="password";
    Eye_Password.className="fa fa-eye";
  }
}

function OpenUsers(){
  localStorage.removeItem("Employee_Index");
  localStorage.removeItem("AcForm");
  document.getElementById("loginPage").style.display="flex";
  document.getElementById("MainPage").style.display="none";
}
// ******************Mode
function ConvertMode(){
  if (localStorage.getItem("FColor")==1){
    ConvertModeToSun();
  }else{
    ConvertModeToMoon();
  }
 }

function ConvertModeToSun(){
  localStorage.setItem("FColor", 1);
  document.getElementById("Moon").style.display="inline-block";
  document.getElementById("Sun").style.display="none";
  document.querySelector(':root').style.setProperty('--FColor', "wheat"); 
  document.querySelector(':root').style.setProperty('--EColor', "white");
  document.querySelector(':root').style.setProperty('--loginColor', "whitesmoke"); 
  document.querySelector(':root').style.setProperty('--FontColor', "#f2a20b"); 
  document.querySelector(':root').style.setProperty('--Font2Color', "#a53333"); 
  document.querySelector(':root').style.setProperty('--Font3Color', "#a53333"); 
} 
function ConvertModeToMoon(){
  localStorage.setItem("FColor", 2);
  document.getElementById("Sun").style.display="inline-block";
  document.getElementById("Moon").style.display="none";
  document.querySelector(':root').style.setProperty('--FColor', "#141e30"); 
  document.querySelector(':root').style.setProperty('--EColor', "#243b55");
  document.querySelector(':root').style.setProperty('--loginColor', "#00000080"); 
  document.querySelector(':root').style.setProperty('--FontColor', "white"); 
  document.querySelector(':root').style.setProperty('--Font2Color', "#d3f6f8"); 
  document.querySelector(':root').style.setProperty('--Font3Color', "black"); 
}  
