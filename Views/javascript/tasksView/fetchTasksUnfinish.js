
// async function getTasksUnfinish(id) {
//     let url = `http://localhost:4000/alltasks/1/${id}/0`;
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// async function renderTasksUnfinish() {
//     let tasks = await getTasksUnfinish();
//     if(tasks == null) {
//         let formLabelUnFinish = document.querySelector('.numLengthUnfinish')
//         formLabelUnFinish.innerHTML = 0
//         let html = '';
        
//         let htmlSegment = `
//        <div class="d-flex flex-col-auto justify-content-center">
//        <img src="../Views/assets/image_views/everyone.png">
//        </div>
//        <div class="d-flex flex-col-auto justify-content-center">
//        <h6>Hãy thêm nhiệm vụ</h6>
//        </div>
//         `;

//         html += htmlSegment;

//     let actionUnFinish = document.querySelector('.unfinish');
//     actionUnFinish.innerHTML = html;
//     }else {
//     let formLabelUnFinish = document.querySelector('.numLengthUnfinish')
//     var numUnFinish = tasks.length
//     formLabelUnFinish.innerHTML = numUnFinish
//     let html = '';
//     tasks.forEach(task => {
//         let htmlSegment = `
//         <div class="text_tasks form-control-lg form-control-style form-control-style1 mt-2 mb-2 me-5 mx-5">
//                         <div class="tasks_bar  d-flex align-items-center justify-content-between">
//                             <button type="submit" class="btn icon" data-bs-toggle="tooltip" title="Hoàn thành">
//                                 <i class="bi bi-circle blue_background icon-unlock"></i>
//                                 <i class="bi bi-check-circle-fill blue_background icon-lock"></i>
//                             </button>
//                             <span class="me-auto">${task.content}</span>

//                             <button class="btn icon">
//                                 <i class="bi bi-trash blue_background icon-unlock"></i>
//                                 <i class="bi bi-trash-fill blue_background icon-lock"></i>
//                             </button>
//                             <button class="btn icon">
//                                 <i class="bi bi-star blue_background icon-unlock"></i>
//                                 <i class="bi bi-star-fill blue_background icon-lock"></i>
//                             </button>
//                             <button class="btn" type="button" data-bs-toggle="collapse"
//                                 data-bs-target="#collapseExample${task.id}" aria-expanded="false" aria-controls="collapseExample">
//                                 <i onclick="myFunction(this)" class="bi bi-chevron-down"></i>
//                             </button>
//                         </div>
//                         <div class="collapse" id="collapseExample${task.id}">
//                             Some placeholder content for the collapse component. This panel is hidden by default but
//                             revealed when the user activates the relevant trigger.

//                         </div>
//                     </div>`;

//         html += htmlSegment;
//     });

//     let actionUnFinish = document.querySelector('.unfinish');
//     actionUnFinish.innerHTML = html;
    
//     }
// }

// const intervalUnfinish = setInterval(() => {
   
//     renderTasksUnfinish();
//   }, 10000);

  