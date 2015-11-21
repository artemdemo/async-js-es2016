async function getUserResume(userId) {
  let user = await fetchUserData(userId);         // Promise
  let resume = await fetchResume(user.resumeId);  // Promise

  return resume;
}

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ resumeId: '123'}), 200);
  });
}

function fetchResume(resumeId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ resume: 'resume title', id: '123'}), 200);
  });
}

getUserResume('')
  .then(
    (resume) => console.log(resume),
    (error) => console.error(error));

// Babel
// https://babeljs.io/repl/#?experimental=false&evaluate=true&loose=false&spec=false&code=async%20function%20getUserResume(userId)%20%7B%0A%20%20let%20user%20%3D%20await%20fetchUserData(userId)%3B%20%20%20%20%20%20%20%20%20%2F%2F%20Promise%0A%20%20let%20resume%20%3D%20await%20fetchResume(user.resumeId)%3B%20%20%2F%2F%20Promise%0A%0A%20%20return%20resume%3B%0A%7D%0A%0Afunction%20fetchUserData(userId)%20%7B%0A%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20resolve(%7B%20resumeId%3A%20'123'%7D)%2C%20200)%3B%0A%20%20%7D)%3B%0A%7D%0A%0Afunction%20fetchResume(resumeId)%20%7B%0A%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20resolve(%7B%20resume%3A%20'resume%20title'%2C%20id%3A%20'123'%7D)%2C%20200)%3B%0A%20%20%7D)%3B%0A%7D%0A%0AgetUserResume('')%0A%20%20.then(%0A%20%20%20%20(resume)%20%3D%3E%20console.log(resume)%2C%0A%20%20%20%20(error)%20%3D%3E%20console.error(error))%3B
