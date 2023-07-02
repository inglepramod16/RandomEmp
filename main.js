let employee =[
    {
        id:'1232323',
        firstName:'Emp_One',
        lastName:'one_last',
        email:'text@gmail.com',
        companyName:'xyz.pvt.ltd'
    },
     {
        id:'2565639',
        firstName:'Emp_Two',
        lastName:'one_last',
        email:'text@gmail.com',
        companyName:'xyz.pvt.ltd'
    },
     {
        id:'11693345',
        firstName:'Emp_Three',
        lastName:'one_last',
        email:'text@gmail.com',
        companyName:'xyz.pvt.ltd'
    },
     {
        id:'1231569',
        firstName:'Emp_four',
        lastName:'one_last',
        email:'texddjfiet@gmail.com',
        companyName:'sasaddasadsadxyz.pvt.ltd'
    },
      {
        id:'123121569',
        firstName:'Emp_five',
        lastName:'one_last',
        email:'tessssxt@gmail.com',
        companyName:'sasadadxyz.pvt.ltd'
    }
]
const id=(x)=>{
    return document.getElementById(x)
}
const emp_id =id("emp_id")
const firstName =id("emp_first_name")
const lastName =id("emp_last_name")
const email =id("emp_email")
const companyName =id("emp_company_name")
const viewbtn =id("view_btn")
function randomEmp(){
    const randomEmpIndex=Math.floor(Math.random() * employee.length)
   emp_id.innerText=employee[randomEmpIndex].id
   firstName.innerText=employee[randomEmpIndex].firstName
   lastName.innerText=employee[randomEmpIndex].lastName
   email.innerText=employee[randomEmpIndex].email
   companyName.innerText=employee[randomEmpIndex].companyName
}
viewbtn.addEventListener('click',randomEmp)
