
async function getUsers() {
    let url = 'http://localhost:4000/alltasks/0';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="alert alert-primary" role="alert">
                            
                            <h5>${user.content}</h5>
                            
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.col-8');
    container.innerHTML = html;
}

const interval = setInterval(() => {
    renderUsers();
  }, 7000);