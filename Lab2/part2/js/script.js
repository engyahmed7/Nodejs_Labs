document.getElementById('fetchInfo').addEventListener('click', function () {
    console.log('clicked');
    let xhr = new XMLHttpRequest();
    let data;
    xhr.open('GET', '/clients.json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        data = JSON.parse(xhr.responseText);
        console.log(data);
  
        let div = document.getElementById('clientInfo');
        div.innerHTML = ''; 
  
        let table = document.createElement('table');
        table.classList.add('table', 'table-striped', 'table-hover', 'custom-table'); 
  
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.textContent = 'Name';
        tr.appendChild(th);
        th = document.createElement('th');
        th.textContent = 'Email';
        tr.appendChild(th);
        th = document.createElement('th');
        th.textContent = 'Mobile';
        tr.appendChild(th);
        th = document.createElement('th');
        th.textContent = 'Address';
        tr.appendChild(th);
        thead.appendChild(tr);
        table.appendChild(thead);
        
        let tbody = document.createElement('tbody');
        data.forEach((client, index) => {
          tr = document.createElement('tr');
         
          let td = document.createElement('td');
          td.textContent = client.name;
          tr.appendChild(td);
          td = document.createElement('td');
          td.textContent = client.email;
          tr.appendChild(td);
          td = document.createElement('td');
          td.textContent = client.mobile;
          tr.appendChild(td);
          td = document.createElement('td');
          td.textContent = client.address;
          tr.appendChild(td);
          tbody.appendChild(tr);
        });
        table.appendChild(tbody);
  
        div.appendChild(table); 
      }
    };
  
    xhr.send();
  });
  