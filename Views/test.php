<!-- Side-Nav -->
<div class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
    <div class="title_header">
                    <span class="title_header_item">Công việc</span>
    </div>
    <div class="nav-systems d-flex gap-3 py-3">
                    <a href="" class="badge bg-blue">Tất cả</a>
                    <a href="" class="badge bg-whiteblue">Việc quan trọng</a>
                    <a href="" class="badge bg-whiteblue">Việc thường</a>
    </div>
                
    <div class="userLists"></div>
</div>
<div class="p-1 my-container active-cont">
      <!-- Top Nav -->
      <nav class="navbar top-navbar navbar-light bg-light px-5 pt-4 pb-4">
        <a class="btn border-0" id="menu-btn"><i class="bx bx-menu"></i></a>
      </nav>
      <!--End Top Nav -->
            <!--nav-title-->
        <div class="d-flex flex-row">
            <span class="form-label fs-6 fw-bolder text-dark pt-5 pb-5 px-3">Nhiệm vụ - <span class="numLength"></span></span>
         </div>
        <!---unfinish-->
        <div class="all_task px-5 pe-5">
            <form class="action" action="">
                 <div class="d-flex justify-content-center">
                    <div class="spinner-grow text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </form>
        </div>
            <!---finished-->
        <div class="d-flex flex-row">
            <span class="form-label fs-6 fw-bolder text-dark pt-5 pb-5 px-3">Đã hoàn thành - 8</span>
        </div>
        <div class="all_task px-5 pe-5">
            <form action="">
                <div class="text_tasks form-control form-control-style">
                    <div class="tasks_bar d-flex align-items-center justify-content-between">
                        <i class="bi bi-check-circle-fill blue_background pe-2 px-2"></i>
                            <span class="me-auto text-decoration-line-through">Some placeholder content in a paragraph.</span>
                            <button class="btn icon">
                                <i class="bi bi-trash blue_background icon-unlock"></i>
                                <i class="bi bi-trash-fill blue_background icon-lock"></i>
                            </button>
                            <button class="btn icon">
                                <i class="bi bi-star blue_background icon-unlock"></i>
                                <i class="bi bi-star-fill blue_background icon-lock"></i>
                            </button>
                            <button class="btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <i onclick="myFunction(this)" class="bi bi-chevron-down"></i>
                            </button>

                    </div>
                    <div class="collapse" id="collapseExample">

                            Some placeholder content for the collapse component. This panel is hidden by default but
                            revealed when the user activates the relevant trigger.

                    </div>
                </div>
            </form>
        </div>
</div>