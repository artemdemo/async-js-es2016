function* getUserResume(userId) {
  let user = yield fetchUserData(userId);
  let resume = yield fetchResume(user.resumeId);

  return resume;
}

function spawn (generator) {
	return new Promise((resolve, reject) => {
		let onResult = lastPromiseResult => {
			let {value, done} = generator.next(lastPromiseResult);
			if (!done) {
				value.then(onResult, reject);
			}
			else resolve(value);
		}
		onResult();
	})
}

spawn(getUserResume('msxMqjP2bzBSdi5sg8zhFNxduK7FZvteEG'))
            .then(
                (resume) => console.log(resume),
                (error) => console.error(error));

/* Helper functions */

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

// Babel:
// https://babeljs.io/repl/#?experimental=false&evaluate=true&loose=false&spec=false&code=function*%20getUserResume(userId)%20%7B%0A%20%20let%20user%20%3D%20yield%20fetchUserData(userId)%3B%0A%20%20let%20resume%20%3D%20yield%20fetchResume(user.resumeId)%3B%0A%0A%20%20return%20resume%3B%0A%7D%0A%0Afunction%20spawn%20(generator)%20%7B%0A%09return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%09%09let%20onResult%20%3D%20lastPromiseResult%20%3D%3E%20%7B%0A%09%09%09let%20%7Bvalue%2C%20done%7D%20%3D%20generator.next(lastPromiseResult)%3B%0A%09%09%09if%20(!done)%20%7B%0A%09%09%09%09value.then(onResult%2C%20reject)%3B%0A%09%09%09%7D%0A%09%09%09else%20resolve(value)%3B%0A%09%09%7D%0A%09%09onResult()%3B%0A%09%7D)%0A%7D%0A%0Aspawn(getUserResume('msxMqjP2bzBSdi5sg8zhFNxduK7FZvteEG'))%0A%20%20%20%20%20%20%20%20%20%20%20%20.then(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20(resume)%20%3D%3E%20console.log(resume)%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20(error)%20%3D%3E%20console.error(error))%3B%0A%0A%2F*%20Helper%20functions%20*%2F%0A%0Afunction%20fetchUserData(userId)%20%7B%0A%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20resolve(%7B%20resumeId%3A%20'123'%7D)%2C%20200)%3B%0A%20%20%7D)%3B%0A%7D%0A%0Afunction%20fetchResume(resumeId)%20%7B%0A%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20resolve(%7B%20resume%3A%20'resume%20title'%2C%20id%3A%20'123'%7D)%2C%20200)%3B%0A%20%20%7D)%3B%0A%7D
