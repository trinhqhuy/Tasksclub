<!-- Side-Nav -->
<div class="sidebar d-flex justify-content-start flex-wrap flex-column" id="sidebar">
    <div class="d-flex align-items-center title_header">
        <span class="title_header_item me-4">Công việc</span>
        <div class="button">
        <button id="addListBtn" class="btn btn-circle mx-1 float1" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever=""><i class="bi bi-folder-plus"></i>
        <span class="tooltiptext1">Thêm danh sách</span>
    </button>
    
    <button class="btn btn-circle mx-1 float2"><i class="bi bi-bell"></i>
        <span class="tooltiptext2">Thông báo</span>
    </button>
    <button class="btn btn-circle mx-1 float3"><i class="bi bi-search"></i>
        <span class="tooltiptext3">Tìm kiếm</span>
    </button>
    
        </div>
    </div>
    <div class="nav-systems d-flex gap-3 py-3">
        <a href="" class="badge bg-blue">Tất cả</a>
        <a href="" class="badge bg-whiteblue">Việc quan trọng</a>
        <a href="" class="badge bg-whiteblue">Việc thường</a>
    </div>
   
    <div id="userLists" class="userLists"></div>
    
</div>

<div id="content" class="content_container container_space">
    <div class="d-flex flex-col-auto justify-content-center">
        <img src="../Views/assets/image_views/5.svg" width="30%">
    </div>
    <h4 class="d-flex flex-col-auto justify-content-center mt-5">Hãy chọn thư mục</h4>
</div>
<div id="modal"></div>
<div id="modal1"></div>

<div id="sideBarRight" class="sidenav">
    
</div>
<div id="sideBarRight1" class="sidenav">
    
</div>
</div>
<!-- <script src="../Views/javascript/chervon.js"></script> -->
<!-- <script src="../Views/javascript/tasksView/fetchTasksUnfinish.js"></script>
<script src="../Views/javascript/tasksView/fetchTasksFinished.js"></script> -->
<script src="../Views/javascript/tasksView/fetchLists.js"></script>
<!-- <script src="../Views/javascript/tasksView/fetchAll.js"></script> -->
<style>
.side-navbar {
    width: 330px;
    height: 100%;
    position: fixed;
    margin-left: -300px;

    transition: 0.5s;
}

.nav-link:active,
.nav-link:focus,
.nav-link:hover {
    background-color: #ffffff26;
}

.my-container {
    transition: 0.4s;
    min-height: 100vh;
}

/* .active-nav {
    margin-left: 0;
} */

/* for main section */
</style>