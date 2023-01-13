function store()
{
    var name=document.getElementById('name').value;
    var mail=document.getElementById('mail').value;
    var phone=document.getElementById('phone').value;
    var website=document.getElementById('website').value;
    var description=document.getElementById('description').value;
    sessionStorage.setItem('name',name);
    sessionStorage.setItem('mail',mail);
    sessionStorage.setItem('phone',phone);
    sessionStorage.setItem('website',website);
    sessionStorage.setItem('description',description);   
}

function Display()
{
    var id=document.getElementById('page2');
    let html=`
    <p class="received">We have received:</p>
    <table>
    
    <tr>
    <td><p class="received">Name:</p></td>
    <td><p  class="received";>${sessionStorage.getItem('name')}</p></td>
    </tr>
    <tr>
    <td><p class="received">Mail:</p></td>
    <td><p class="received">${sessionStorage.getItem('mail')}</p></td>
    </tr>
    <tr>
    <td><p class="received">Phone:</p></td>
    <td><p class="received">${sessionStorage.getItem('phone')}</p></td>
    </tr>
    <tr>
    <td><p class="received">Website:</p></td>
    <td><p class="received">${sessionStorage.getItem('website')}</p></td>
    </tr>
    <tr>
    <td><p class="received">Description:</p></td>
    <td><p class="received">${sessionStorage.getItem('description')}</p></td>
    </tr>
    </table>

    `;
    id.innerHTML=html;
}