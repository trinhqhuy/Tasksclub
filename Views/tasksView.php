<div class="container-fuild container_space">
    <div class="row">
        <!---Title Navbar-->
        <div class="col-4">
            <div class="title_header">
                <span class="title_header_item">Công việc</span>
            </div>
        </div>
        <div class="col-5">
            <input class="form-control form-control-lg form-control-style mt-3 mb-2" type="text"
                placeholder="Tìm thành viên">
        </div>
        <div class="col-4"></div>
    </div>
    <div class="row tasks_background space_max_height">
        <!---list group-->
        <div class="col-3 list-group d-flex flex-column flex-column-fluid">
            <div class="nav-systems d-flex gap-3 py-3">
                <a href="" class="badge bg-blue">Tất cả</a>
                <a href="" class="badge bg-whiteblue">Việc quan trọng</a>
                <a href="" class="badge bg-whiteblue">Việc thường</a>
            </div>
            
            
            <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32"
                    class="rounded-circle flex-shrink-0">
                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">Third heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                    </div>
                    <small class="opacity-50 text-nowrap">1w</small>
                </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32"
                    class="rounded-circle flex-shrink-0">
                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">Third heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                    </div>
                    <small class="opacity-50 text-nowrap">1w</small>
                </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32"
                    class="rounded-circle flex-shrink-0">
                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">Third heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                    </div>
                    <small class="opacity-50 text-nowrap">1w</small>
                </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32"
                    class="rounded-circle flex-shrink-0">
                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">Third heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                    </div>
                    <small class="opacity-50 text-nowrap">1w</small>
                </div>
            </a>
        </div>
        <!---tasks-->
        <div class="col-9 white_blue_background">
            <!--nav-title-->
            <div class="d-flex flex-row">
                <span class="form-label fs-6 fw-bolder text-dark mt-5 mb-5 mx-3">Nhiệm vụ - 8</span>
            </div>
            <!---unfinish-->
            <div class="all_task mx-5 me-5">
                <form action="">
                    <div class="text_tasks form-control-lg form-control-style">
                        <div class="tasks_bar  d-flex align-items-center justify-content-between">
                            <button type="submit" class="btn icon" data-bs-toggle="tooltip" title="Hoàn thành">
                                <i class="bi bi-circle blue_background icon-unlock"></i>
                                <i class="bi bi-check-circle-fill blue_background icon-lock"></i>
                            </button>
                            <span class="me-auto">Some placeholder content in a paragraph.</span>

                            <button class="btn icon">
                                <i class="bi bi-trash blue_background icon-unlock"></i>
                                <i class="bi bi-trash-fill blue_background icon-lock"></i>
                            </button>
                            <button class="btn icon">
                                <i class="bi bi-star blue_background icon-unlock"></i>
                                <i class="bi bi-star-fill blue_background icon-lock"></i>
                            </button>
                            <button class="btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                <i onclick="myFunction(this)" class="bi bi-chevron-down"></i>
                            </button>

                        </div>
                        <div class="collapse" id="collapseExample1">

                            Some placeholder content for the collapse component. This panel is hidden by default but
                            revealed when the user activates the relevant trigger.

                        </div>
                    </div>

                </form>
            </div>
            <!---finished-->
            <div class="d-flex flex-row">
                <span class="form-label fs-6 fw-bolder text-dark mt-5 mb-5 mx-3">Đã hoàn thành - 8</span>
            </div>
            <div class="all_task mx-5 me-5">
                <form action="">
                    <div class="text_tasks form-control-lg form-control-style">
                        <div class="tasks_bar  d-flex align-items-center justify-content-between">
                        <i class="bi bi-check-circle-fill blue_background me-2 mx-2"></i>

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

    </div>
</div>
<script src="../Views/javascript/chervon.js"></script>