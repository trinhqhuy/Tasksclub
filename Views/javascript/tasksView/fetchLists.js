let buttonValue;//clicked
let listName;//clicked
let color;
let iconsend;
let sendIDTask;//openNavInfoTask
let sendIDList
let urlTask
let urlTasked
let sideNavBtn;
let sideBarRight;
let sideBarHtml;
let tokencheck = getCookie("token");
let icon = ["pencil", "folder", "book", "bookmark", "sunset", "moon", "heart", "flag", "bell", "tag", "eye", "bag", "camera", "lock", "key", "pin", "clock", "alarm", "gift", "lightbulb", "cart"]
let colorItems = ["red", "green", "blue", "teal", "yellow", "pink"]
Array.prototype.random = function (length) {
  return this[Math.floor((Math.random()*length))];
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

async function getLists() {
  let url = `http://localhost:4000/alllists/${tokencheck}`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderLists() {
  let lists = await getLists();
  let html = ``;
  let idLists = 0;
  lists.forEach((list) => {
    let htmlSegment = `
        <button name="btnList" class="btn list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 mx-2 me-2 mt-2 mb-3 btnList" value="${list.id}" onclick="clicked(this, '${list.name}','${list.color}', '${list.icon}');closeNav()">
        <div class="iconList" id="${list.color}">
        <i class="bi bi-${list.icon}-fill">
        </i>
        </div>
                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">${list.name}</h6>
                    </div>
                </div>
            </button>`;
    html += htmlSegment;
    idLists += list.id;
  });
  let userLists = document.querySelector(".userLists");
  userLists.innerHTML = html;
}
renderLists();
const intervalLists = setInterval(() => {
  renderLists();
}, 2000);
// addList modal
var modal = document.getElementById('modal')
modal.innerHTML = `<!---model add task--->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
  <!--css-->
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Thêm danh sách</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label fs-7 fw-bolder text-dark">Icon</label>
            <ul class="d-flex flex-row list-icon me-3" id="list-icon">
            
            </ul>
          </div>
          <div class="mb-3">
            <label  class="col-form-label fs-7 fw-bolder text-dark">Nội dung</label>
            <textarea class="form-control" id="message-list"></textarea>
            <small class="alertValueList red_color"></small>
          </div>
        </form>
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn button-blur" data-bs-dismiss="modal">Đóng</button>
        <button type="button" class="btn button-blur1" onclick="addList()">Thêm</button>
      </div>
    </div>
  </div>
</div>`
function addIconSelected(model) {
  if(model == 1) {
    let listIcon1 = document.querySelector('.list-icon')
icon.forEach(function(item){
  listIcon1.innerHTML += `<li>
  <input type="radio" id="${item}" class="list-icon-input" name="icon-radio" value="${item}"/>
  <label for="${item}" class="list-icon-label"><i class="bi bi-${item}-fill fw-bolder list-icon"></i></label>
  </li>`
});
  }else if (model == 2){
    let listIcon2 = document.getElementById('editModelList')
icon.forEach(function(item){
  listIcon2.innerHTML += `<li>
  <input type="radio" id="${item}" name="icon-radio" value="${item}"/>
  <label for="${item}"><i class="bi bi-${item}-fill fw-bolder"></i></label>
  </li>`
});
  }

}
modal.addEventListener('hidden.bs.modal', function (event) {
  let listIconid = document.getElementById('list-icon')
  listIconid.innerHTML = ''
})

//sidebar click function
function clicked(btnId, nameList, colorname, iconpack) {
  let sideLoad = document.querySelector(".content_container");
  color = colorname
  iconsend = iconpack
  listName = nameList;
  buttonValue = btnId.value;
  sideLoad.innerHTML = ` 
<!-- Top Nav -->
            <nav id="top-navbar" class="navbar top-navbar pt-4 pb-4 justify-content-beween">
                <div class="namegroup d-flex flex-row align-items-center">
                <div class="iconList" id="${color}">
                <i class="bi bi-${iconsend}-fill">
                </i>
                </div>
                        <div class="name px-2">${listName}</div>
                        <div class="dropdown">
                                <button class="btn dropbtn"><i class="bi bi-three-dots"></i></button>
                                <div class="dropdown-content">
                                    <button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="" onclick="addIconSelected('2')"><i class="bi bi-pencil pe-2"></i> Sửa</button>
                                    <button class="btn"><i class="bi bi-trash3 pe-2"></i> Xóa</button>
                                    <button class="btn"><i class="bi bi-person-plus"></i> Thêm thành viên</button>
                                </div>
                        </div>
                </div>
                <button id="sideNavBtn" onclick="openNavInfoGroup(${buttonValue})" class="btn mx-2"><i class="bi bi-layout-sidebar-inset-reverse"></i></button>
            </nav>
            <!--End Top Nav -->
            <div class="content">
                <!--nav-title-->
                <div class="d-flex flex-row">
                    <span class="form-label fs-6 fw-bolder text-dark mt-5 mb-5 mx-5">Chưa hoàn thành - <span class="numLengthUnfinish"></span></span>
                </div>
                <!---unfinish-->
                <div class="all_task mx-5 me-5">
                    <form class="unfinish" action=""></form>
                </div>
                <!---finished-->
                <div class="d-flex flex-row">
                    <span class="form-label fs-6 fw-bolder text-dark mt-5 mb-5 mx-5">Đã hoàn thành - <span class="numLengthFinished"></span></span>
                </div>
                <div class="all_task mx-5 me-5">
                    <form class="finished" action=""></form>
                </div>
            </div>
            
            <a id="addBtn" href="#" class="float" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="${listName}"><i class="bi bi-plus"></i>
              <span class="tooltiptext">Thêm công việc</span>
            </a>
   
<!---model add task--->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
      <!--css-->
        <div class="modal-content ">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Thêm công việc</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label fs-7 fw-bolder text-dark">Danh sách</label>
                <input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly id="recipient-name">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label fs-7 fw-bolder text-dark">Nội dung</label>
                <textarea class="form-control" id="message-text"></textarea>
                <small class="alertValue red_color"></small>
              </div>
            </form>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn button-blur" data-bs-dismiss="modal">Đóng</button>
            <button type="button" class="btn button-blur1" onclick="addTask('${buttonValue}')">Thêm</button>
          </div>
        </div>
      </div>
    </div>`;
    //editList model
var modal1 = document.getElementById('modal1')
modal1.innerHTML = `<!---model add task--->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
  <!--css-->
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sửa danh sách</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label fs-7 fw-bolder text-dark">Icon</label>
            <ul class="d-flex flex-row me-3 list-icon" id="editModelList">
            
            </ul>
          </div>
          <div class="mb-3">
            <label  class="col-form-label fs-7 fw-bolder text-dark">Nội dung</label>
            <textarea class="form-control" id="message-list">${listName}</textarea>
            <small class="alertValueList red_color"></small>
          </div>
        </form>
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn button-blur" data-bs-dismiss="modal">Đóng</button>
        <button type="button" class="btn button-blur1" onclick="editList()">Lưu</button>
      </div>
    </div>
  </div>
</div>`

    // bootstrap model
  var exampleModal = document.getElementById("exampleModal");
  exampleModal.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute("data-bs-whatever");
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    //   var modalTitle = exampleModal.querySelector('.modal-title')
    var modalBodyInput = exampleModal.querySelector(".modal-body input");

    //   modalTitle.textContent = recipient
    modalBodyInput.value = recipient;
  });
  
   //parse value
  async function getTasksUnfinish() {
    urlTask = `http://localhost:4000/taskunfinish/${tokencheck}/${buttonValue}`;

    try {
      let res = await fetch(urlTask);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function getTasksFinished() {
    urlTasked = `http://localhost:4000/taskfinished/${tokencheck}/${buttonValue}`;

    try {
      let res = await fetch(urlTasked);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function renderTasksUnfinish() {
    let tasks = await getTasksUnfinish();
    let html = "";
    let actionUnFinish = document.querySelector(".unfinish");
    let formLabelUnFinish = document.querySelector(".numLengthUnfinish");
    if (tasks == null) {
      formLabelUnFinish.innerHTML = 0;
      html = `
      <div class="emptyView">
      <div class="d-flex flex-col-auto justify-content-center">
      <img src="../Views/assets/image_views/everyone.png">
      </div>
      <div class="d-flex flex-col-auto justify-content-center">
      <h6>Hãy thêm nhiệm vụ</h6>
      </div>
      </div>`;
      actionUnFinish.innerHTML = html;
    } else {
      formLabelUnFinish.innerHTML = tasks.length;
      tasks.forEach((task) => {
        html += `
  <div class="text_tasks form-control-lg form-control-style form-control-style1 mt-2 mb-2 me-5 mx-5">
        <div class="tasks_bar  d-flex align-items-center justify-content-between">
          <button type="button" onclick="finish('${task.id}');animationButton(this.id)" id="${task.id}" class="btn icon btn-finish" data-bs-toggle="tooltip" title="Hoàn thành">
            <i class="bi bi-circle blue_color icon-unlock"></i>
            <i class="bi bi-check-circle-fill blue_color icon-lock"></i>
          </button>
          <span class="me-auto">${task.content}</span>
         
          <button type="button" onclick="deleteTask('${task.id}');animationButton(${task.id})" class="btn icon">
            <i class="bi bi-trash blue_color icon-unlock"></i>
            <i class="bi bi-trash-fill blue_color icon-lock"></i>
          </button>
          <button type="button" onclick="star('${task.id}');animationButton(${task.id})" class="btn icon">
            <i class="bi bi-star blue_color icon-unlock"></i>
            <i class="bi bi-star-fill blue_color icon-lock"></i>
          </button>
          <button class="btn icon">
          <i class="bi bi-tag blue_color icon-unlock"></i>
          <i class="bi bi-tag-fill blue_color icon-lock"></i>
          </button>
          <button class="btn icon" type="button" onclick="openNavInfoTask('${task.id}')"><i class="bi bi-info-circle blue_color icon-unlock"></i>
          <i class="bi bi-info-circle-fill blue_color icon-lock"></i></button>
          
        </div>
  </div>`;
      });
      actionUnFinish.innerHTML = html;
    }
  }
  async function renderTasksFinished() {
    let tasks = await getTasksFinished();
    let formLabelFinished = document.querySelector(".numLengthFinished");
    let actionFinished = document.querySelector(".finished");
    let html = "";
    if (tasks == null) {
      formLabelFinished.innerHTML = 0;
      html = ``
      actionFinished.innerHTML = html;
    } else {
      formLabelFinished.innerHTML = tasks.length;
      
      tasks.forEach((task) => {
        html += `
                    <div class="text_tasks form-control-lg form-control-style form-control-style1 mt-2 mb-2 me-5 mx-5">
                    <div class="tasks_bar  d-flex align-items-center justify-content-between">
                        <button type="button" onclick="reUnfinish('${task.id}');animationButton(this.id)" id="${task.id}" class="btn icon" data-bs-toggle="tooltip" title="Hoàn thành">
                            <i class="bi bi-check-circle-fill blue_color icon-unlock"></i>
                            <i class="bi bi-circle blue_color icon-lock"></i>
                        </button>
                        <span class="me-auto text-decoration-line-through">${task.content}</span>
            
                        <button type="button" onclick="deleteTask('${task.id}');animationButton(${task.id})" class="btn icon">
                            <i class="bi bi-trash blue_color icon-unlock"></i>
                            <i class="bi bi-trash-fill blue_color icon-lock"></i>
                        </button>
                        <button type="button" onclick="star('${task.id}');animationButton(${task.id})" class="btn icon">
                            <i class="bi bi-star blue_color icon-unlock"></i>
                            <i class="bi bi-star-fill blue_color icon-lock"></i>
                        </button>
                        <button class="btn icon">
                        <i class="bi bi-tag blue_color icon-unlock"></i>
                        <i class="bi bi-tag-fill blue_color icon-lock"></i>
                        </button>
                        <button class="btn icon" type="button" onclick="openNavInfoTask('${task.id}')"><i class="bi bi-info-circle blue_color icon-unlock"></i>
                        <i class="bi bi-info-circle-fill blue_color icon-lock"></i></button>
            
                    </div>
                </div>`;
      });
      actionFinished.innerHTML = html;
    }
  }
  
  renderTasksUnfinish();
  renderTasksFinished();
  setInterval(() => {
    renderTasksUnfinish();
    renderTasksFinished();
  }, 1000);
}
function openNavInfoGroup(idlists) {
  sendIDList = idlists
  document.getElementById("sideBarRight").style.width = "330px";
  document.getElementById("content").style.marginRight = "330px";
  document.getElementById("addBtn").style.marginRight = "330px";
  sideNavBtn = document.getElementById("sideNavBtn");
  sideNavBtn.addEventListener("click", function () {
    closeNav();
  });
  async function getInfoGroup() {
    let url = `http://localhost:4000/infolist/${tokencheck}/${sendIDList}`;
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function renderInfoGroup() {
    let infos = await getInfoGroup();
    if (infos == null) {
      sideBarRight = document.getElementById("sideBarRight");
      sideBarRight.innerHTML = '';
    } else {
      infos.forEach((info) => {
        sideBarHtml = `
            <div class="sidenavTitle align-items-center">
                  <h5>Thông tin nhóm</h5>
            </div>
                <div class="slideItems align-items-center">
                  <span class="titleItems">Thành viên nhóm</span>
                  <p class="pt-3 pb-2 border-bottom"><i class="bi bi-people-fill"></i>  ${info.icon} thành viên</p>
                  <p class="pt-2 managerMembers"><i class="bi bi-gear-fill"></i>  Quản lý thành viên</p>
                </div>
                <div class="slideItems align-items-center">
                    <span class="titleMembers">Nhiệm vụ</span>
                    <p class="pt-3 pb-2 border-bottom"><i class="bi bi-people-fill"></i>   ${info.icon} nhiệm vụ</p>
                    <p class="pt-3 pb-2 border-bottom managerMembers"><i class="bi bi-list-check"></i>  2 đã hoàn thành</p>
                    <p class="pt-3 pb-2 border-bottom managerMembers"><i class="bi bi-list-ul"></i>  2 chưa hoàn thành</p>
                    <p class="pt-3 pb-2 managerMembers"><i class="bi bi-list-stars"></i>  2 đánh dấu</p>
                </div>
              <div class="btnItems align-items-center">
                  <button class="btn sideBtn">Rời nhóm</button>
              </div>`
      });
      sideBarRight = document.getElementById("sideBarRight");
      sideBarRight.innerHTML = sideBarHtml
    }
  }
 
  renderInfoGroup()
  setInterval(() => {
    renderInfoGroup();
  }, 20000);
}
function openNavInfoTask(idtask) {
  sendIDTask = idtask;
  document.getElementById("sideBarRight1").style.width = "330px";
  document.getElementById("content").style.marginRight = "330px";
  document.getElementById("addBtn").style.marginRight = "330px";
  sideNavBtn = document.getElementById("sideNavBtn");
  sideNavBtn.addEventListener("click", function () {
    closeNav();
  });
  async function getInfoTask() {
    let url = `http://localhost:4000/infotask/${tokencheck}/${sendIDTask}`;
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function renderInfoTask() {
    let infos = await getInfoTask();
    if (infos == null) {
      sideBarRight = document.getElementById("sideBarRight1");
      sideBarRight.innerHTML = '';
    } else {
      let status;
      let star;
      infos.forEach((info) => {
        status = info.finish == 1 ? 'Hoàn thành' :'Chưa hoàn thành'
        star = info.star == 1 ? 'Đã đánh dấu' : 'Chưa đánh dấu'
        sideBarHtml = `
        <div class="sidenavTitle align-items-center">
          <h5>Thông tin công việc</h5>
       </div>
        <div class="slideItems align-items-center">
          <span class="titleItems">Ngày tạo</span>
          <p class="pt-3 pb-2 border-bottom"><i class="bi bi-tags-fill iconBlue"></i> Tên công việc: ${info.content}<span></span></p>
          <p class="pt-3 pb-2 border-bottom"><i class="bi bi-view-list iconRed"></i> Danh sách: ${info.namelist}</p>
          <p class="pt-3 pb-2 border-bottom"><i class="bi bi-calendar-plus-fill iconGreen"></i> Ngày thêm:${info.date_add}</p>
          <p class="pt-3 pb-2"><i class="bi bi-calendar-check-fill iconGreen"></i> Ngày thực hiện:${info.date_add}</p>
        </div>
        <div class="slideItems align-items-center">
            <span class="titleMembers">Trạng thái</span>
            <p class="pt-3 pb-2 border-bottom"><i class="bi bi-exclamation-circle-fill iconBlue"></i> Tình trạng: ${status}</p>
            <p class="pt-3 pb-2"><i class="bi bi-star-fill iconRed"></i> Đánh dấu: ${star}</p>
          
        </div>
        `;
      });
      sideBarRight = document.getElementById("sideBarRight1");
      sideBarRight.innerHTML = sideBarHtml;
    }
  }
 
  renderInfoTask()
  setInterval(() => {
    renderInfoTask();
  }, 6000);
}
function closeNav() {
  document.getElementById("sideBarRight").style.width = "0px";
  document.getElementById("sideBarRight1").style.width = "0px";
  document.getElementById("content").style.marginRight = "0px";
  document.getElementById("addBtn").style.marginRight = "0px";
  sideNavBtn = document.getElementById("sideNavBtn");
  sideNavBtn.addEventListener("click", function () {
    openNavInfoGroup(sendIDList);
    
  });
}
function addTask(idList) {
  var valueInput = document.getElementById('message-text').value
  var alertValue = document.querySelector('.alertValue')
  if (valueInput === '') {
    alertValue.innerHTML = 'Nội dung đang trống'
  }else{
    alertValue.innerHTML = ''
    // console.log(tokencheck)
    var url = "http://localhost:4000/addtask"
    var data = {
      tokensession: tokencheck,
      idlist: idList,
      content: valueInput,
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json; charset=UTF-8"
      }
      })
      .then((respose) => respose.json())
      .then((data) => {
        document.getElementById('message-text').value = ''
      })
      .catch((data) => {
          console.error("Error:", 
          data.message)
      })
  
  }
}
function animationButton(id) {
  const theButton = document.getElementById(`${id}`);
  theButton.innerHTML = `<div class="spinner-border text-primary spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
setTimeout(returnValue, 6000);
function returnValue() {
  theButton.innerHTML = ` <i class="bi bi-check-circle-fill blue_color icon-unlock"></i>
  <i class="bi bi-circle blue_color icon-lock"></i>` 
}
}
function finish(id) {
    let url = `http://localhost:4000/taskupdate/${tokencheck}/${id}/1`;
    try {
      return fetch(url);
    } catch (error) {
      console.log(error);
    }
}

function reUnfinish(id) {
    let url = `http://localhost:4000/taskupdate/${tokencheck}/${id}/0`;
    try {
      return fetch(url);
    } catch (error) {
      console.log(error);
    }
}
function deleteTask(id) {
    let url = `http://localhost:4000/taskupdate/${tokencheck}/${id}/5`;
    try {
      return fetch(url);
    } catch (error) {
      console.log(error);
    }
}
function star(id) {
  let url = `http://localhost:4000/taskupdate/${tokencheck}/${id}/4`;
    try {
      return fetch(url);
    } catch (error) {
      console.log(error);
    }
}
function unStar(id) {
  let url = `http://localhost:4000/taskupdate/${tokencheck}/${id}/3`;
    try {
      return fetch(url);
    } catch (error) {
      console.log(error);
    }
}
function addList() {
  var icon = document.getElementsByName('icon-radio')
  var choosecolor = colorItems[Math.floor(Math.random() * colorItems.length)];
  var valueIcon = ''
  var valueInput = document.getElementById('message-list').value
  var alertValue = document.querySelector('.alertValueList')
  for(i = 0; i < icon.length; i++) {
    if(icon[i].checked) {
      valueIcon = icon[i].value;
    }
  }
  if (valueInput === '' || valueIcon == '') {
    alertValue.innerHTML = 'Bạn chưa chọn icon hoặc nội dung đang trống'
  }else{
    alertValue.innerHTML = ''
    var url = "http://localhost:4000/addlist"
    var data = {
      tokensession: tokencheck,
      content: valueInput,
      icon: valueIcon,
      color: choosecolor
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json; charset=UTF-8"
      }
      })
      .then((respose) => respose.json())
      .then((data) => {
        document.getElementById('message-list').value = ''
      })
      .catch((data) => {
          console.error("Error:", 
          data.message)
      })
  
  }
}