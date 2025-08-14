function Calculator(){
    const salaryinput=document.getElementById('salaryin').value
    const taxpercentage=document.getElementById('Taxpercentage').value
    const dispsalary=document.getElementById('Salary')
    const disptax=document.getElementById('tax')
    const disptotalsal=document.getElementById('totalsal')
    const Tax=((taxpercentage/100)*salaryinput)
    Salary.innerText=`Salary without Tax:${salaryinput}`
    tax.innerText=`Tax amount per your Salary:${Tax}`
    totalsal.innerText=`Salary After Tax:${salaryinput-Tax} `

}


