const sheetId = '1RZJanKfSEW_oiM5nnDiTvAJyjo-40qpOWNqk7j-Ef-0';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const Company = 'Company';
const Banks = 'Banks';
const marketed="marketed";
const Users = 'Users';
const Numbers = 'Users';
let query = encodeURIComponent('Select *');
let urlCompany = `${base}&sheet=${Company}&tq=${query}`;
let urlBanks = `${base}&sheet=${Banks}&tq=${query}`;
let urlmarketed = `${base}&sheet=${marketed}&tq=${query}`;
let urlNumbers= `${base}&sheet=${Users}&tq=${query}`;
let urlUsers = `${base}&sheet=${Users}&tq=${query}`;
let dataCompany = [];
let dataBanks = [];
let datamarketed = [];
let DataUsers = [];
let DataNumbers=[];
document.addEventListener('DOMContentLoaded', init)
function init() {
  ConvertMode();
  LoadUser();
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
    }
  }
    loadCompany();
    loadBanks();
    loadMarketed();
    LoadNumers();
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
  })
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



  function loadMarketedInput(){
    let marketedBrowsers= document.getElementById("marketedBrowsers");
    let A_myDropdown3
    for (let index = 0; index < datamarketed.length; index++) {
      A_myDropdown3=document.createElement("option");
      A_myDropdown3.id="my2_" + index;
      A_myDropdown3.value=datamarketed[index].Marketed;
      A_myDropdown3.style.textAlign="center";
      marketedBrowsers.appendChild(A_myDropdown3);
    }
    }

function loadBanksInput(){
let BankBrowsers= document.getElementById("BankBrowsers");
let A_myDropdown3
for (let index = 0; index < dataBanks.length; index++) {
  A_myDropdown3=document.createElement("option");
  A_myDropdown3.id="my2_" + index;
  A_myDropdown3.value=dataBanks[index].Bank;
  A_myDropdown3.style.textAlign="center";
  BankBrowsers.appendChild(A_myDropdown3);
}
}




function LoadDataSignIn(){
  for (let index = 0; index < data3.length; index++) {
    if(localStorage.getItem("Main_Id")==data3[index].Main_no){document.getElementById("BranchMain").value=data3[index].Main_Name;return}
  }
}


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
  document.getElementById("Moon1").style.display="inline-block";
  document.getElementById("Sun1").style.display="none";
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
  document.getElementById("Sun1").style.display="inline-block";
  document.getElementById("Moon1").style.display="none";
  document.querySelector(':root').style.setProperty('--FColor', "#141e30"); 
  document.querySelector(':root').style.setProperty('--EColor', "#243b55");
  document.querySelector(':root').style.setProperty('--loginColor', "#00000080"); 
  document.querySelector(':root').style.setProperty('--FontColor', "white"); 
  document.querySelector(':root').style.setProperty('--Font2Color', "#d3f6f8"); 
  document.querySelector(':root').style.setProperty('--Font3Color', "black"); 
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
        if(NumberE== DataNumbers[index].Number){
          return true;
        }
      }
        return false ;
    }
  function IsfoundBank(BankN){
      for (let index = 0; index < dataBanks.length; index++) {
        if(BankN==dataBanks[index].Bank){
          return true;
        }
      }
        return false ;
    }
  function IsfoundMarket(Market){
      for (let index = 0; index < datamarketed.length; index++) {
        if(Market==datamarketed[index].Marketed){
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
  "".toUpperCase
  let NumberStr=document.getElementById("Number").value
  document.getElementById("CompanyName").value=FoundName(NumberStr)
}

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
    // location.reload();
  }
}
function IstrueDataInform(){
  let marketed=document.getElementById("marketed");
  let Phone=document.getElementById("Phone");
  let Bank=document.getElementById("Bank");
  let COD=document.getElementById("COD");
  let State=document.getElementById("State");
  let DATE=document.getElementById("DATE");
  let Customer=document.getElementById("Customer");
  let Number=document.getElementById("Number");
  let Method=document.getElementById("Method");
  let Amount=document.getElementById("Amount");
  let Weight=document.getElementById("Weight");
  if(DATE.value==""){DATE.style.border="2px solid #ff0000";return false}else{DATE.style.border="none";}
  if(marketed.value==""){marketed.style.border="2px solid #ff0000";return false}else{marketed.style.border="none";}
  if(IsfoundMarket(marketed.value)==false){marketed.style.border="2px solid #ff0000";return false}else{marketed.style.border="none";}
  if(Customer.value==""){Customer.style.border="2px solid #ff0000";return false}else{Customer.style.border="none";}
  if(Phone.value==""){Phone.style.border="2px solid #ff0000";return false}else{Phone.style.border="none";}
  if(Number.value==""){Number.style.border="2px solid #ff0000";return false}else{Number.style.border="none";}
  if(IsfoundNumber(Number.value)==true) {Number.style.border="2px solid #ff0000";return false}else{Number.style.border="none";}
  if(Method.value==""){Method.style.border="2px solid #ff0000";  return false}else{Method.style.border="none";}
  if(Bank.value==""){Bank.style.border="2px solid #ff0000";  return false}else{Bank.style.border="none";}
  if(IsfoundBank(Bank.value)==false){Bank.style.border="2px solid #ff0000";  return false}else{Bank.style.border="none";}
  if(Amount.value==""){Amount.style.border="2px solid #ff0000";return false}else{Amount.style.border="none";}
  if(COD.value==""){COD.style.border="2px solid #ff0000";return false}else{COD.style.border="none";}
  if(Weight.value==""){Weight.style.border="2px solid #ff0000";return false}else{Weight.style.border="none";}
  if(State.value==""){State.style.border="2px solid #ff0000";return false}else{State.style.border="none";}
  return true
}

function onsubmitForm(){
  if(IstrueDataInform()===true){
  let MainForm=document.getElementById("MainForm");
  let Employee_Index=localStorage.getItem("Employee_Index");
  var w = window.open('', 'form_target', 'width=600, height=400');
  MainForm.target = 'form_target';
  MainForm.action='https://script.google.com/macros/s/AKfycbwV-PRuCzkUCOsJIIrncm7ul6Vl1_wOYb80lWgRqrMxupRCUU7X4jV5ShFgWkwHWc9X/exec'
  MainForm.submit();
  if (MainForm.onsubmit()==true){
    const myTimeout = setTimeout(function(){ 
      LoadUser();
      const myTimeout1 = setTimeout(function(){ 
                w.close();
                clearTimeout(myTimeout)
                clearTimeout(myTimeout1)
                location.reload();
    }, 1000);}, 4000);
  }}
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
  localStorage.removeItem("Employee_Index")
  document.getElementById("loginPage").style.display="flex";
  document.getElementById("MainPage").style.display="none";
}
