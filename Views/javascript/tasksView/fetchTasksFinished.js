// async function getTasksFinished(id) {
//     let url = `http://localhost:4000/alltasks/1/${id}/1`;
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function renderTasksFinished() {
//     let tasks = await getTasksFinished();
//     if(tasks == null) {
//         let formLabelFinished = document.querySelector('.numLengthFinished')
//         formLabelFinished.innerHTML = 0
//     }else {
//     let formLabelFinished = document.querySelector('.numLengthFinished')
//     var numFinished = tasks.length
//     formLabelFinished.innerHTML = numFinished
//     let html = '';
//     tasks.forEach(task => {
//         let htmlSegment = `
//         <div class="text_tasks form-control-lg form-control-style form-control-style1 mt-2 mb-2 me-5 mx-5">
//         <div class="tasks_bar  d-flex align-items-center justify-content-between">
//             <button type="submit" class="btn icon" data-bs-toggle="tooltip" title="Hoàn thành">
//                 <i class="bi bi-circle blue_background icon-unlock"></i>
//                 <i class="bi bi-check-circle-fill blue_background icon-lock"></i>
//             </button>
//             <span class="me-auto text-decoration-line-through">${task.content}</span>

//             <button class="btn icon">
//                 <i class="bi bi-trash blue_background icon-unlock"></i>
//                 <i class="bi bi-trash-fill blue_background icon-lock"></i>
//             </button>
//             <button class="btn icon">
//                 <i class="bi bi-star blue_background icon-unlock"></i>
//                 <i class="bi bi-star-fill blue_background icon-lock"></i>
//             </button>
//             <button class="btn" type="button" data-bs-toggle="collapse"
//                 data-bs-target="#collapseExample${task.id}" aria-expanded="false" aria-controls="collapseExample">
//                 <i onclick="myFunction(this)" class="bi bi-chevron-down"></i>
//             </button>

//         </div>
//         <div class="collapse" id="collapseExample${task.id}">

//             Some placeholder content for the collapse component. This panel is hidden by default but
//             revealed when the user activates the relevant trigger.

//         </div>
//     </div>`;

//         html += htmlSegment;
//     });

//     let actionFinished = document.querySelector('.finished');
//     actionFinished.innerHTML = html;
//     }
    
  
// }
// renderTasksFinished()
// const intervalFinished = setInterval(() => {
//     renderTasksFinished();
//   }, 10000);

  